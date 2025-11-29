import React, { useEffect } from 'react';
import { Project } from '../types';
import { motion, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { zIndex } from '../constants/zIndex';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../constants/animations';

const FADE_IN_UP = createFadeInUp();
const FADE_IN_UP_LARGE = createFadeInUp(0.5);

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const reduce = useReducedMotion();

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
      transition={{ duration: DURATIONS.medium, ease: EASE_DEFAULT }}
      className="fixed inset-0 bg-wabi-paper overflow-y-auto hide-scrollbar"
      style={{ zIndex: zIndex.PROJECT_DETAIL, willChange: 'opacity' }}
    >
      <div
        className="sticky top-0 left-0 right-0 px-6 md:px-12 py-4 flex justify-between items-center bg-wabi-paper/70 backdrop-blur-md"
        style={{ zIndex: zIndex.PROJECT_CARD_HOVER, willChange: 'transform, opacity' }}
      >
        <motion.button
          onClick={onClose}
          aria-label="Close project detail"
          whileHover={{
            scale: 1.03,
            rotate: 90,
            transition: { duration: DURATIONS.fast, ease: EASE_DEFAULT }
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{ willChange: 'transform' }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClose(); } }}
          className="relative p-2 rounded-full overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
        >
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl" style={{ willChange: 'opacity' }} />

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)',
              transform: 'translateX(-100%)',
              willChange: 'opacity'
            }}
          />

          {/* Animated shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{
              x: "100%",
              transition: { duration: DURATIONS.medium, ease: EASE_DEFAULT }
            }}
            style={{ willChange: 'transform' }}
          />

          {/* Icon */}
          <motion.div
            whileHover={{
              color: "#1c1917",
              transition: { duration: DURATIONS.fast, ease: EASE_DEFAULT }
            }}
          >
            <X size={24} className="relative text-stone-700 z-10" />
          </motion.div>
        </motion.button>
        <div className="flex-1 text-right">
          <h2 className="text-xl md:text-2xl font-serif font-medium text-stone-500">{project.title}</h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
        transition={{ duration: DURATIONS.medium, ease: EASE_DEFAULT }}
        style={{ willChange: 'transform, opacity' }}
        className="max-w-5xl mx-auto px-6 md:px-12 pb-24"
      >
        {/* Hero Image */}
        <motion.div
          variants={FADE_IN_UP}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-stone-200 mb-16 overflow-hidden rounded-3xl"
        >
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            width={1280}
            height={720}
            decoding="async"
            loading="lazy"
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

        {/* Additional Images (Reveal) */}
        <div className="space-y-12">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative w-full overflow-hidden rounded-2xl"
              initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: DURATIONS.slow, ease: EASE_DEFAULT }}
              style={{ willChange: 'clip-path, opacity' }}
            >
              <img src={img} alt={`${project.title} detail ${idx}`} width={1200} height={900} decoding="async" loading="lazy" className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Next Project Teaser (Mock) */}
        {/* Back to All Projects */}
        <motion.div
          className="mt-32 pt-12 border-t border-stone-300 flex justify-center items-center cursor-pointer group"
          onClick={onClose}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: DURATIONS.quick, ease: EASE_DEFAULT }}
          style={{ willChange: 'transform' }}
        >
          <ArrowLeft
            className="text-stone-400 group-hover:-translate-x-2 group-hover:text-stone-800 transition-all duration-300 mr-3"
            size={24}
          />
          <span className="font-serif text-xl md:text-2xl text-stone-400 group-hover:text-stone-800 transition-colors">
            Back to All Projects
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
