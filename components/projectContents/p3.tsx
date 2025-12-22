import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';

const FADE_IN_UP = createFadeInUp();

// 自适应图片组件，保持原始宽高比
const ResponsiveImage: React.FC<{ src: string; alt: string; name: string; className?: string }> = ({ 
  src, 
  alt, 
  name, 
  className = '' 
}) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        decoding="async" 
        loading="lazy" 
        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
        style={{ 
          display: 'block',
          aspectRatio: isLoaded ? `${imageDimensions.width} / ${imageDimensions.height}` : 'auto'
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
        <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">{name}</span>
      </div>
    </div>
  );
};

const P3Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'gallery', label: 'Gallery' },
  ];

  // 只使用这五张图片，不使用project.images
  const galleryImages = [
    { src: '/images/projects/p3-0.webp', name: 'Photograph 1' },
    { src: '/images/projects/p3-1.webp', name: 'Photograph 2' },
    { src: '/images/projects/p3-2.webp', name: 'Photograph 3' },
    { src: '/images/projects/p3-3.webp', name: 'Photograph 4' },
    { src: '/images/projects/p3-4.webp', name: 'Photograph 5' },
    { src: '/images/projects/p3-5.webp', name: 'Photograph 6' },
    { src: '/images/projects/p3-6.webp', name: 'Photograph 7' },
    { src: '/images/projects/p3-7.webp', name: 'Photograph 8' },
    { src: '/images/projects/p3-8.webp', name: 'Photograph 9' },
    { src: '/images/projects/p3-9.webp', name: 'Photograph 10' },
    { src: '/images/projects/p3-10.webp', name: 'Photograph 11' },
    { src: '/images/projects/p3-11.webp', name: 'Photograph 12' },
    { src: '/images/projects/p3-12.webp', name: 'Photograph 13' },
    { src: '/images/projects/p3-13.webp', name: 'Photograph 14' },
    { src: '/images/projects/p3-14.webp', name: 'Photograph 15' },
  ];

  return (
    <>
      {/* Hero Image - Overview Section */}
      <motion.div
        id="overview"
        variants={FADE_IN_UP}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="w-full aspect-video bg-stone-200 mb-16 overflow-hidden rounded-3xl scroll-mt-20"
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

      {/* Project Title and Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-1 space-y-8">
          <div className="space-y-4 border-t border-stone-300 pt-4">
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Client</h3>
              <p className="font-serif text-lg">{project.client || 'Personal Project'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || 'Designer & Photographer'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Year</h3>
              <p className="font-serif text-lg">{project.year}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Category</h3>
              <p className="font-serif text-lg">{project.category}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="font-sans text-stone-600 text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>

      {/* Gallery Section - Waterfall Layout */}
      <div id="gallery" className="scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Photography Gallery</h2>
        
        {/* 瀑布流布局 - 保持最大三列 */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: DURATIONS.medium, 
                ease: EASE_DEFAULT,
                delay: idx * 0.1 
              }}
            >
              <ResponsiveImage 
                src={img.src} 
                alt={img.name} 
                name={img.name} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

// Assign id to the component for identification
(P3Content as any).id = 'p3';
(P3Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'gallery', label: 'Gallery' },
];

export default P3Content;
