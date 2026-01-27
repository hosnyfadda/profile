
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">HF</div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:inline-block">Hosny Fadda</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
          <button className="px-5 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
