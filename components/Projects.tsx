import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

// Filter Categories
const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'aigc', label: 'AIGC' },
  { id: 'product', label: 'Product' },
  { id: 'creative', label: 'Creative' },
];

const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
  reduce?: boolean | null;
}> = ({ project, onClick, onHover, onHoverBlock, reduce }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group/card cursor-pointer relative break-inside-avoid mb-8"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onMouseEnter={() => {
        onHover("view");
        onHoverBlock(true);
      }}
      onMouseLeave={() => {
        onHover("");
        onHoverBlock(false);
      }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-stone-200 w-full">
        {/* Masonry Layout: We use w-full and let height be natural (auto) to respect image aspect ratio */}
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover/card:scale-105"
          loading="lazy"
          decoding="async"
        />
        
        <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/10 transition-colors duration-500" />
      </div>

      <div className="flex justify-between items-baseline pt-4 px-1">
        <div>
          <h4 className="font-serif text-xl text-stone-800 group-hover/card:text-wabi-clay transition-colors">
            {project.title}
          </h4>
          <span className="font-sans text-xs text-stone-500 uppercase tracking-widest mt-1 block">
            {project.category}
          </span>
        </div>
        <span className="font-serif text-stone-400 italic text-sm">{project.year}</span>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onHover, onHoverBlock }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const reduce = useReducedMotion();

  // Filter projects (excluding p9 as it is Vibe Coding Studio shown separately)
  const filteredProjects = useMemo(() => {
    let result = PROJECTS.filter(p => p.id !== 'p9');
    
    if (activeCategory !== 'all') {
      result = result.filter(p => p.group === activeCategory);
    }
    
    return result;
  }, [activeCategory]);

  return (
    <div id="projects" className="py-20 md:py-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Selected Works</h2>
            <p className="font-sans text-stone-500 max-w-md">近期对AI、质感与空间的尝试与探索</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-sans transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg transform -translate-y-0.5'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
                onHover={onHover}
                onHoverBlock={onHoverBlock}
                reduce={reduce}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-stone-400 font-serif italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};
