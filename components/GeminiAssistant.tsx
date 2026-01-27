
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { chatWithGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

// Helper functions for audio processing - implementing manual encode/decode as per guidelines
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Comms established. I'm Hosny's AI assistant. Ask me anything about his space tech or AI research." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<any>(null);
  const audioContextsRef = useRef<{ input: AudioContext; output: AudioContext } | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const stopLiveSession = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (audioContextsRef.current) {
      audioContextsRef.current.input.close();
      audioContextsRef.current.output.close();
      audioContextsRef.current = null;
    }
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
    setIsLiveMode(false);
  }, []);

  const startLiveSession = async () => {
    try {
      // Creating a new GoogleGenAI instance right before making an API call ensures it uses the correct key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) int16[i] = inputData[i] * 32768;
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              // Using sessionPromise.then to ensure data is sent to the resolved session instance
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
            setIsLiveMode(true);
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              const outputCtx = audioContextsRef.current?.output;
              if (!outputCtx) return;
              
              // Scheduling audio for seamless gapless playback
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), outputCtx, 24000, 1);
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              source.onended = () => sourcesRef.current.delete(source);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
            }
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: () => stopLiveSession(),
          onclose: () => stopLiveSession(),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: 'You are Hosny Fadda\'s voice assistant. Be helpful, concise, and professional. You are talking via satellite link.'
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error("Failed to start live session", err);
      setIsLiveMode(false);
    }
  };

  const toggleLive = () => {
    if (isLiveMode) stopLiveSession();
    else startLiveSession();
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
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
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-600/40 z-[60] flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        {isOpen ? '✕' : (
          <div className="relative">
            <span className="block animate-pulse">🛰️</span>
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping group-hover:hidden"></div>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-4 md:right-8 w-[calc(100%-2rem)] md:w-96 h-[550px] glass rounded-3xl border border-blue-500/30 z-[60] flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-b border-blue-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-inner ${isLiveMode ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}>
                {isLiveMode ? 'REC' : 'AI'}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mission Control</h4>
                <p className="text-[10px] text-blue-400 font-bold uppercase">{isLiveMode ? 'Live Audio Link Active' : 'Ready for Uplink'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleLive}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isLiveMode ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                title={isLiveMode ? 'Stop Voice Link' : 'Start Voice Link'}
              >
                🎙️
              </button>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors text-lg">✕</button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/40 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5 backdrop-blur-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none border border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-slate-900/60">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Hosny's Assistant..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20 active:scale-95"
              >
                Send
              </button>
            </div>
            <p className="text-[9px] text-slate-500 mt-3 text-center uppercase tracking-widest font-medium">Secure Satellite Communication Protocol v2.5</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
