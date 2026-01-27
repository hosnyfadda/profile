
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Data' | 'Engineering'>('All');

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') return project.techStack.some(t => ['Python', 'ML', 'NLP', 'LLMs', 'Deep Learning', 'Scikit-Learn'].includes(t) || project.title.toLowerCase().includes('ai'));
    if (filter === 'Data') return project.techStack.some(t => ['Power BI', 'Excel', 'Data Analysis', 'DAX'].includes(t));
    if (filter === 'Engineering') return project.techStack.some(t => ['Arduino', 'C/C++', 'Embedded', 'Robotics', 'Space'].includes(t) || project.id === 'cubesat' || project.id === 'robotic-arm' || project.id === 'sumo-robot');
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Missions & <span className="text-blue-500">Deployments</span></h2>
            <p className="text-slate-400 max-w-xl">A portfolio spanning from deep space instrumentation to earth-bound intelligent analytics.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {(['All', 'AI/ML', 'Data', 'Engineering'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  filter === f 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'glass border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-lg">
                     {project.date}
                   </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-xs text-blue-500 font-bold uppercase tracking-widest mb-3">{project.role}</p>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[9px] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-xl border border-blue-500/30 text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                  Analyze Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
