import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FADE_IN_RIGHT, EASE_DEFAULT, DURATIONS } from '../constants/animations';
import { zIndex } from "../constants/zIndex";

const SPATIAL_PROJECTS = PROJECTS.filter(p =>
  ['Architecture', 'Interior Design', 'Landscape'].includes(p.category)
);

const PRODUCT_PROJECTS = PROJECTS.filter(p =>
  p.category === 'Product Design'
);

const IDENTITY_PROJECTS = PROJECTS.filter(p =>
  p.category === 'Brand Identity'
);

const SCROLL_BUTTON_BASE = "hidden md:flex absolute z-20 p-2 rounded-full shadow-sm transition-all duration-500 opacity-0 group-hover:opacity-100 active:scale-95";
const SCROLL_BUTTON_THEME = "bg-wabi-paper/90 backdrop-blur-sm border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-wabi-paper hover:border-stone-300";

const SCROLL_BUTTON_VERTICAL_POSITION = "top-[225px] -translate-y-1/2";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, subtitle, projects, onProjectClick, onHover, onHoverBlock }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current } = containerRef;
      const base = current.clientWidth || 600;
      const step = Math.max(320, Math.min(900, Math.floor(base * 0.7)));
      const scrollAmount = direction === 'left' ? -step : step;
      current.scrollBy({ left: scrollAmount });
    }
  };

  return (
    <div className="mb-24 last:mb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-2">{title}</h3>
          <p className="font-sans text-stone-500 text-sm tracking-wide uppercase">{subtitle}</p>
        </div>
        <div className="hidden md:flex gap-2 items-center text-stone-400 text-xs uppercase tracking-widest" style={{ willChange: 'opacity, transform' }}>
          <span>Scroll</span> <ArrowRight size={14} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group">
        <button
          onClick={() => scroll('left')}
          className={`${SCROLL_BUTTON_BASE} ${SCROLL_BUTTON_THEME} left-8 ${SCROLL_BUTTON_VERTICAL_POSITION} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2`}
          style={{ willChange: 'opacity, transform' }}
          aria-label="Scroll left"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={() => scroll('right')}
          className={`${SCROLL_BUTTON_BASE} ${SCROLL_BUTTON_THEME} right-8 ${SCROLL_BUTTON_VERTICAL_POSITION} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2`}
          style={{ willChange: 'opacity, transform' }}
          aria-label="Scroll right"
        >
          <ArrowRight size={24} />
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto pb-12 hide-scrollbar momentum-scroll flex gap-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', willChange: 'transform', overscrollBehaviorX: 'contain' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center cursor-none group/card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2"
              {...FADE_IN_RIGHT}
              transition={{ duration: DURATIONS.medium, delay: index * 0.1, ease: EASE_DEFAULT }}
              onClick={() => onProjectClick(project)}
              role="button"
              tabIndex={0}
              aria-label={`Open project ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onProjectClick(project);
                }
              }}
              onMouseEnter={() => {
                onHover("view");
                onHoverBlock(true);
              }}
              onMouseLeave={() => {
                onHover("");
                onHoverBlock(false);
              }}
              style={{ willChange: 'transform, opacity' }}
              whileHover={reduce ? undefined : { rotate: -0.5, y: -2, transition: { type: 'spring', stiffness: 250, damping: 20 } }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-stone-300">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  width={1200}
                  height={900}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0" style={{ willChange: 'transform, opacity' }}>
                  <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/10 transition-colors duration-500" />
                  <div className="absolute -inset-[15%] bg-gradient-to-br from-stone-900/0 to-stone-900/10 opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform group-hover/card:translate-x-0 group-hover/card:translate-y-0 -translate-x-4 -translate-y-4" />
                </div>
              </div>

              <div className="flex justify-between items-baseline border-b border-stone-300 pb-4">
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl text-stone-800 group-hover/card:text-wabi-clay transition-colors transition-transform group-hover/card:translate-x-1">
                    {project.title}
                  </h4>
                  <span className="font-sans text-sm text-stone-500 uppercase tracking-widest mt-1 block">
                    {project.category}
                  </span>
                </div>
                <span className="font-serif text-stone-400 italic">{project.year}</span>
              </div>
            </motion.div>
          ))}

          <div className="w-12 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onHover, onHoverBlock }) => {
  return (
    <div id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Selected Works</h2>
        <p className="font-sans text-stone-500 max-w-md">A curation of recent endeavors exploring space, texture, and silence.</p>
      </div>

      <ProjectSection
        title="Spatial Narratives"
        subtitle="Architecture / Interior / Landscape"
        projects={SPATIAL_PROJECTS}
        onProjectClick={onProjectClick}
        onHover={onHover}
        onHoverBlock={onHoverBlock}
      />

      <ProjectSection
        title="Tangible Objects"
        subtitle="Product Design / Furniture"
        projects={PRODUCT_PROJECTS}
        onProjectClick={onProjectClick}
        onHover={onHover}
        onHoverBlock={onHoverBlock}
      />

      <ProjectSection
        title="Visual Systems"
        subtitle="Brand Identity / Typography"
        projects={IDENTITY_PROJECTS}
        onProjectClick={onProjectClick}
        onHover={onHover}
        onHoverBlock={onHoverBlock}
      />
    </div>
  );
};

