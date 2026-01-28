
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { chatWithGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
  }
  return buffer;
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Awaiting instructions. I am the HF-1 Command Assistant. Ready for data uplink or voice synthesis." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<any>(null);
  const audioContextsRef = useRef<{ input: AudioContext; output: AudioContext } | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef(0);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  const stopLiveSession = useCallback(() => {
    if (sessionRef.current) { sessionRef.current.close(); sessionRef.current = null; }
    if (audioContextsRef.current) { 
        audioContextsRef.current.input.close().catch(() => {}); 
        audioContextsRef.current.output.close().catch(() => {}); 
        audioContextsRef.current = null; 
    }
    sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
    sourcesRef.current.clear();
    setIsLiveMode(false);
  }, []);

  const startLiveSession = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY || "";
      if (!apiKey) {
        setMessages(prev => [...prev, { role: 'model', text: 'Live mode requires API key configuration. Please set VITE_API_KEY environment variable.' }]);
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextsRef.current = { input: inputCtx, output: outputCtx };
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
              const pcmBlob = { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
            setIsLiveMode(true);
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              const outCtx = audioContextsRef.current?.output;
              if (!outCtx) return;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outCtx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), outCtx, 24000, 1);
              const source = outCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outCtx.destination);
              source.onended = () => sourcesRef.current.delete(source);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
            }
          },
          onerror: (e) => { console.error(e); stopLiveSession(); },
          onclose: () => stopLiveSession(),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: 'You are the mission control AI for Hosny Fadda. Keep responses technical yet helpful.'
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err) { 
        console.error(err);
        setIsLiveMode(false); 
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setIsLoading(true);
    const responseText = await chatWithGemini(input);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-600/40 z-[100] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden border border-blue-400/50"
      >
        <div className="relative z-10 text-2xl">{isOpen ? '✕' : '🛰️'}</div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        {!isOpen && <div className="absolute -inset-2 bg-blue-400/20 rounded-full animate-ping"></div>}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-4 md:right-8 w-[calc(100%-2rem)] md:w-[420px] h-[600px] glass rounded-3xl border border-white/10 z-[100] flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-blue-600/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-bold">HF</div>
                <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">Command Assistant</h4>
                    <span className="text-[8px] text-blue-400 font-mono">STATUS: CONNECTED // ENCRYPTED</span>
                </div>
            </div>
            <button 
                onClick={isLiveMode ? stopLiveSession : startLiveSession}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isLiveMode ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-white/5 text-slate-400 hover:text-white'}`}
            >
                🎙️
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg border border-blue-400/30' 
                    : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5 backdrop-blur-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLiveMode && (
              <div className="flex justify-center py-4">
                <div className="flex items-center space-x-1 h-12">
                  {[...Array(12)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-1 bg-blue-400 rounded-full animate-pulse" 
                        style={{ 
                            height: `${20 + Math.random() * 80}%`,
                            animationDuration: `${0.5 + Math.random() * 1}s`,
                            animationDelay: `${i * 0.05}s`
                        }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-3 rounded-xl flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-slate-900/50">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type command..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600 font-mono"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors"
              >
                🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
