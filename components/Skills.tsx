
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical <span className="text-indigo-400">Payload</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(cat => (
            <div key={cat} className="space-y-6">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] border-b border-slate-800 pb-2">{cat}</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-slate-300 text-sm hover:border-blue-500/40 hover:text-blue-400 transition-all cursor-default">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-3xl border border-blue-500/20 text-center">
           <p className="text-xl italic text-slate-300 mb-4">"Transforming raw data into actionable insights through engineering precision."</p>
           <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
