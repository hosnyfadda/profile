
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-indigo-600/5 rounded-full blur-[200px] -z-10 animate-pulse delay-1000"></div>
      
      {/* Decorative Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full -z-10 pointer-events-none rotate-45"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>B.Sc. Space Navigation Engineer</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1]">
            Mapping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Intelligent</span> Constellations.
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            {RESUME_DATA.title}. Solving terrestrial challenges with celestial-grade engineering and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="group px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all text-center flex items-center justify-center space-x-2">
              <span>View Missions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#ai-assistant" className="px-10 py-5 glass text-white rounded-2xl font-bold hover:bg-white/5 transition-all text-center border border-white/10 flex items-center justify-center space-x-2">
              <span>Comm Link</span>
              <span className="text-blue-400">⚡</span>
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Holographic frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 glow-blue">
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="Space Visualization" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
               
               {/* Telemetry Overlay */}
               <div className="absolute top-6 left-6 font-mono text-[10px] text-blue-400/60 uppercase tracking-widest space-y-1">
                  <div>LAT: 30.0444</div>
                  <div>LNG: 31.2357</div>
                  <div>ALT: 408.2 KM</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
