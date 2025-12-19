import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';

interface VibeCodingProps {
  onProjectClick: (project: Project) => void;
}

export const VibeCoding: React.FC<VibeCodingProps> = ({ onProjectClick }) => {
  const project = PROJECTS.find(p => p.id === 'p9');

  if (!project) return null;

  return (
    <section className="w-full py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side - Text Content (Figure 2 Style) */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-stone-500 font-sans text-sm tracking-widest uppercase mb-4">
                <span className="text-stone-400">&gt;_</span>
                <span>CREATIVE LAB</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.9]">
                Vibe Coding
              </h2>
              <h2 className="font-serif italic text-5xl md:text-7xl text-stone-300 leading-[0.9]">
                Studio
              </h2>
              
              <p className="font-sans text-stone-600 text-lg leading-relaxed max-w-lg mt-8">
                这里是我的数字创作实验室。记录那些灵光一现的想法和深夜的代码实验，从交互设计到生成艺术，探索技术与美学的边界。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-stone-100 rounded-full text-stone-600 text-sm font-sans hover:bg-stone-200 transition-colors cursor-default">
                <Code size={16} />
                <span>Creative Coding</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-stone-100 rounded-full text-stone-600 text-sm font-sans hover:bg-stone-200 transition-colors cursor-default">
                <Sparkles size={16} />
                <span>Generative Art</span>
              </div>
            </div>

            <button
              onClick={() => onProjectClick(project)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4"
            >
              <span className="font-serif text-lg">Enter Studio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Visual Content (Figure 3 Style - Laptop/Screen Mockup) */}
          <div 
            className="order-1 lg:order-1 relative group cursor-pointer"
            onClick={() => onProjectClick(project)}
          >
             {/* Simple Card Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-stone-200">
               <img
                 src={project.thumbnailUrl}
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
            </div>

            {/* Floating Code Bubble (Refined) */}
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl pl-5 pr-6 py-4 rounded-2xl shadow-xl border border-white/50 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 z-30 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="h-4 w-[1px] bg-stone-200 mx-1" />
              <span className="font-mono text-xs text-stone-500">
                System.out.println(<span className="text-emerald-600">"Hello World"</span>);
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
