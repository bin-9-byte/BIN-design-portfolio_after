import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FADE_IN_RIGHT } from '../constants/animations';

// ============================================================================
// 性能优化：预先计算分类项目（避免每次渲染重复过滤）
// ============================================================================
const SPATIAL_PROJECTS = PROJECTS.filter(p =>
  ['Architecture', 'Interior Design', 'Landscape'].includes(p.category)
);

const PRODUCT_PROJECTS = PROJECTS.filter(p =>
  p.category === 'Product Design'
);

const IDENTITY_PROJECTS = PROJECTS.filter(p =>
  p.category === 'Brand Identity'
);

// ============================================================================
// 样式常量：消除超长 className 和 Magic Number
// ============================================================================
const SCROLL_BUTTON_BASE = "hidden md:flex absolute z-20 p-4 rounded-full shadow-sm transition-all duration-500 opacity-0 group-hover:opacity-100";
const SCROLL_BUTTON_THEME = "bg-wabi-paper/90 backdrop-blur-sm border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-white hover:border-stone-300";

// 项目卡片高度为 600px * 3/4 = 450px，中心点在 225px
const SCROLL_BUTTON_VERTICAL_POSITION = "top-[225px] -translate-y-1/2";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, subtitle, projects, onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current } = containerRef;
      // 每次滚动约一个卡片宽度 + 间距
      const scrollAmount = direction === 'left' ? -600 : 600;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-24 last:mb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-2">{title}</h3>
          <p className="font-sans text-stone-500 text-sm tracking-wide uppercase">{subtitle}</p>
        </div>
        <div className="hidden md:flex gap-2 items-center text-stone-400 text-xs uppercase tracking-widest">
          <span>Scroll</span> <ArrowRight size={14} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group">
        {/* Navigation Buttons - 垂直居中于项目卡片图片 */}
        <button
          onClick={() => scroll('left')}
          className={`${SCROLL_BUTTON_BASE} ${SCROLL_BUTTON_THEME} left-8 ${SCROLL_BUTTON_VERTICAL_POSITION}`}
          aria-label="Scroll left"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={() => scroll('right')}
          className={`${SCROLL_BUTTON_BASE} ${SCROLL_BUTTON_THEME} right-8 ${SCROLL_BUTTON_VERTICAL_POSITION}`}
          aria-label="Scroll right"
        >
          <ArrowRight size={20} />
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto pb-12 hide-scrollbar flex gap-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center cursor-pointer group/card"
              {...FADE_IN_RIGHT}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onProjectClick(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-stone-300">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/10 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-baseline border-b border-stone-300 pb-4">
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl text-stone-800 group-hover/card:text-wabi-clay transition-colors">
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

          {/* 滚动末尾的填充空间 */}
          <div className="w-12 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <div id="projects" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Selected Works</h2>
        <p className="font-sans text-stone-500 max-w-md">A curation of recent endeavors exploring space, texture, and silence.</p>
      </div>

      <ProjectSection
        title="Spatial Narratives"
        subtitle="Architecture / Interior / Landscape"
        projects={SPATIAL_PROJECTS}
        onProjectClick={onProjectClick}
      />

      <ProjectSection
        title="Tangible Objects"
        subtitle="Product Design / Furniture"
        projects={PRODUCT_PROJECTS}
        onProjectClick={onProjectClick}
      />

      <ProjectSection
        title="Visual Systems"
        subtitle="Brand Identity / Typography"
        projects={IDENTITY_PROJECTS}
        onProjectClick={onProjectClick}
      />
    </div>
  );
};