
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Data' | 'Engineering'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') return project.techStack.some(t => ['Python', 'ML', 'NLP', 'LLMs', 'Deep Learning'].includes(t));
    if (filter === 'Data') return project.techStack.some(t => ['Power BI', 'Excel', 'Data Analysis', 'DAX'].includes(t));
    if (filter === 'Engineering') return project.techStack.some(t => ['Arduino', 'C/C++', 'Embedded', 'Space', 'Robotics'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Active <span className="text-blue-500">Missions</span></h2>
            <p className="text-slate-400 max-w-xl">A log of technological deployments across space instrumentation and intelligent software.</p>
          </div>
          <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-right-5 duration-700">
            {(['All', 'AI/ML', 'Data', 'Engineering'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-lg border transition-all duration-300 text-[10px] font-bold uppercase tracking-widest ${
                  filter === f 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' 
                    : 'glass border-white/5 text-slate-500 hover:text-white hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-52 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                
                {/* Diagnostic Scan Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 border-y-[0.5px] border-blue-500/30 animate-[scan_2s_linear_infinite]"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                   <span className="px-2 py-1 bg-blue-600/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded">
                     {project.date}
                   </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">{project.title}</h3>
                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{project.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] text-slate-400 uppercase font-bold tracking-tighter">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && <span className="text-[9px] text-slate-600">+{project.techStack.length - 4}</span>}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-blue-600/10"
                >
                  Analyze Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Modal remains largely the same but with enhanced UI */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-4xl glass border border-blue-500/30 rounded-3xl overflow-hidden animate-in zoom-in duration-300 flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-blue-600/5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">🛰️</div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm">Deployment Log: {selectedProject.title}</h3>
                  <p className="text-[10px] text-blue-400 font-bold font-mono">HASH_ID: {selectedProject.id.toUpperCase()}-09X</p>
                </div>
              </div>
              <button onClick={() => setSelectedProject(null)} className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all text-xl">✕</button>
            </div>
            
            <div className="p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-10 custom-scrollbar">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center">
                    <span className="w-4 h-[1px] bg-blue-500 mr-2"></span> System Specifications
                  </h4>
                  <ul className="space-y-4">
                    {selectedProject.detailedSpecs?.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                        <span className="text-blue-500 font-bold mt-1">0{i+1}</span>
                        <span className="leading-relaxed">{spec}</span>
                      </li>
                    )) || <li className="text-slate-500 italic text-sm">Detailed telemetry records encrypted.</li>}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center">
                    <span className="w-4 h-[1px] bg-blue-500 mr-2"></span> Hardware & Software Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group bg-slate-900">
                  <img src={selectedProject.image} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-blue-600/5"></div>
                  <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                  {/* Visual UI elements */}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.metrics?.map((metric, i) => (
                    <div key={i} className="p-5 rounded-2xl glass border border-white/5 bg-white/[0.02]">
                      <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">{metric.label}</p>
                      <p className="text-2xl font-bold text-white tracking-tight">{metric.value}</p>
                    </div>
                  )) || (
                    <>
                      <div className="p-5 rounded-2xl glass border border-white/5 bg-white/[0.02]">
                        <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">Operational Status</p>
                        <p className="text-2xl font-bold text-green-400 uppercase tracking-tighter">Active</p>
                      </div>
                      <div className="p-5 rounded-2xl glass border border-white/5 bg-white/[0.02]">
                        <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">Mission Tier</p>
                        <p className="text-2xl font-bold text-white">Critical</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 border-t border-white/5 text-center">
              <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-[0.3em] border border-blue-400/50">
                Initiate Mission Uplink
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
