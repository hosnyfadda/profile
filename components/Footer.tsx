
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-900/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">HF</div>
            <span className="text-lg font-bold text-white tracking-tight">Hosny Fadda</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Space Navigation Engineer. Built with React & Gemini.</p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="px-6 py-3 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-700 transition-all">Download CV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
