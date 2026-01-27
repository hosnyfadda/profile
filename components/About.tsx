
import React from 'react';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Engineering Precision meets <span className="text-blue-500">AI Creativity</span></h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            <p className="text-lg text-slate-400 leading-relaxed">
              I specialize in bridging the gap between hardware engineering and intelligent software. My background in Space Navigation allows me to approach problems with extreme precision, while my expertise in Machine Learning enables me to solve those problems with modern efficiency.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether it's developing real-time dashboards for weather monitoring or building NLP-driven automation tools, I focus on creating interactive, real-world solutions that provide measurable value.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl glass border border-white/5">
                <h4 className="font-bold text-white mb-1">Location</h4>
                <p className="text-sm text-slate-400">Egypt / Global</p>
              </div>
              <div className="p-4 rounded-xl glass border border-white/5">
                <h4 className="font-bold text-white mb-1">Focus</h4>
                <p className="text-sm text-slate-400">AI/ML & Space Tech</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/20">
                <span className="text-blue-400 font-space text-4xl">🛰️</span>
              </div>
              <div className="h-64 rounded-2xl bg-slate-800 border border-white/5 overflow-hidden">
                <img src="https://picsum.photos/seed/space1/400/600" className="w-full h-full object-cover opacity-50" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-2xl bg-slate-800 border border-white/5 overflow-hidden">
                <img src="https://picsum.photos/seed/space2/400/600" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="h-48 rounded-2xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/20">
                <span className="text-indigo-400 font-space text-4xl">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
