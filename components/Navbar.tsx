
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'projects', 'skills', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl border-b border-blue-500/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform">HF</div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">Hosny Fadda</span>
              <div className="flex items-center space-x-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">COMMS: NOMINAL</span>
              </div>
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {[
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Missions' },
            { id: 'skills', label: 'Payload' },
            { id: 'education', label: 'Credentials' }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`transition-all relative group ${activeSection === item.id ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </div>

        <button className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95 uppercase tracking-[0.2em] border border-blue-400/30">
          Uplink CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
