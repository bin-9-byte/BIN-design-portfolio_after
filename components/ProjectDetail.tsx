import React, { useEffect } from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { zIndex } from '../constants/zIndex';
import { createFadeInUp } from '../constants/animations';

const FADE_IN_UP = createFadeInUp();
const FADE_IN_UP_LARGE = createFadeInUp(0.5, 50);

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 bg-[#F5F2EB] overflow-y-auto"
      style={{ zIndex: zIndex.PROJECT_DETAIL }}
    >
      <div 
        className="sticky top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-center bg-[#F5F2EB]/90 backdrop-blur-md"
        style={{ zIndex: zIndex.PROJECT_CARD_HOVER }}
      >
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-stone-800">{project.title}</h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
        {/* Hero Image */}
        <motion.div
          variants={FADE_IN_UP}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-stone-200 mb-16 overflow-hidden"
        >
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1 space-y-8">
            <div className="space-y-4 border-t border-stone-300 pt-4">
              <div>
                <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Client</h3>
                <p className="font-serif text-lg">{project.client || 'Confidential'}</p>
              </div>
              <div>
                <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
                <p className="font-serif text-lg">{project.role || 'Designer'}</p>
              </div>
              <div>
                <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Year</h3>
                <p className="font-serif text-lg">{project.year}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="font-sans text-stone-600 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
              {'\n\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Additional Images */}
        <div className="space-y-12">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={FADE_IN_UP_LARGE}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <img src={img} alt={`${project.title} detail ${idx}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Next Project Teaser (Mock) */}
        <div className="mt-32 pt-12 border-t border-stone-300 flex justify-between items-center cursor-pointer group" onClick={onClose}>
          <span className="font-serif text-2xl md:text-4xl text-stone-400 group-hover:text-stone-800 transition-colors">Next Project</span>
          <ArrowRight className="text-stone-400 group-hover:translate-x-4 transition-transform duration-300" size={32} />
        </div>
      </div>
    </motion.div>
  );
};