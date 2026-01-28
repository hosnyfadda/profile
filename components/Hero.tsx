
import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const [coords, setCoords] = useState({ lat: "30.0444", lng: "31.2357" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords({
        lat: (30 + Math.random() * 0.1).toFixed(4),
        lng: (31 + Math.random() * 0.1).toFixed(4)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background HUD Elements */}
      <div className="absolute top-20 left-10 font-mono text-[10px] text-blue-500/40 uppercase tracking-widest hidden lg:block">
        SYS_STATUS: NOMINAL<br/>
        UPLINK_STRENGTH: 98.4%<br/>
        LAT: {coords.lat} N<br/>
        LNG: {coords.lng} E
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Signal Established</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
            Charting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Intelligent</span> Frontier.
          </h1>
          <p className="text-lg text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            I'm <span className="text-white font-semibold">{RESUME_DATA.name}</span>. {RESUME_DATA.title}. Building the systems that navigate tomorrow's data and space environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center space-x-3 uppercase text-xs tracking-widest">
              <span>Access Missions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#ai-assistant" className="px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center space-x-3 uppercase text-xs tracking-widest border border-white/10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span>AI Comms</span>
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 glass">
               <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000" alt="Satellite Technology" className="w-full h-full object-cover opacity-70 mix-blend-screen" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
               
               {/* Telemetry UI Overlay */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 border-t border-l border-blue-500/50"></div>
                    <div className="w-12 h-12 border-t border-r border-blue-500/50"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
                        <div className="w-1 h-20 bg-blue-500/20 animate-[spin_4s_linear_infinite]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="w-12 h-12 border-b border-l border-blue-500/50"></div>
                    <div className="w-12 h-12 border-b border-r border-blue-500/50"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
