
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Protocol <span className="text-blue-500">Validation</span> & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="group glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <span className="text-blue-400 text-sm">📜</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                  {cert.name}
                </h3>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-4">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="p-8 rounded-3xl glass border border-white/5 flex items-center space-x-6 hover:border-blue-500/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-4xl shadow-inner">🇪🇬</div>
              <div>
                <h4 className="text-xl font-bold text-white">Arabic</h4>
                <p className="text-xs text-blue-500 uppercase tracking-widest font-bold">Native Command</p>
              </div>
           </div>
           <div className="p-8 rounded-3xl glass border border-white/5 flex items-center space-x-6 hover:border-blue-500/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-4xl shadow-inner">🇬🇧</div>
              <div>
                <h4 className="text-xl font-bold text-white">English</h4>
                <p className="text-xs text-blue-500 uppercase tracking-widest font-bold">Fluent / IELTS Mastery</p>
              </div>
           </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm italic">Verification tokens and detailed curriculum transcripts available upon downlink request.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
