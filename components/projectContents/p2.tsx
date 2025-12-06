import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P2Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'IP Details' },
    { id: 'features', label: 'Activity Pop-up' },
    { id: 'process', label: 'UI Design' },
    { id: 'gallery', label: 'Gallery' },
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

      {/* IP Details Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">IP Details</h2>
        <div className="space-y-8">
          <div>
            <p className="font-sans text-stone-600 leading-relaxed">
              Find & Spot 是一个创新的UI设计与AIGC结合的项目，旨在通过人工智能技术提升用户体验设计的效率和质量。我们探索了如何利用AI生成内容来辅助设计决策，创造出更加个性化和适应性强的用户界面。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目的核心理念是将设计师的创意思维与AI的计算能力相结合，通过智能工具来扩展设计边界，同时保持人类设计师在创意决策中的主导地位。
            </p>
          </div>
          <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p2-concept.png"
              alt="Concept visualization"
              width={600}
              height={400}
              decoding="async"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Activity Pop-up</h2>
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/images/projects/p2-features.png"
            alt="Activity Pop-up visualization"
            decoding="async"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">UI Design</h2>
        <div className="space-y-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. Button Design</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                搭配主题图标设计BUTTON，在BUTTON安全区内绘制，适当增加元素，保证风格统一、元素协调。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p2-button.png"
                alt="Research process"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. Icon Design</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                使用PS板绘，内容区的图标设计采用简洁欧美卡通风，保留立体感与辨识度，根据节日活动主题构思元素，帮助用户快速get活动主题。
              </p>
            </div>
            <div className="w-full rounded-2xl overflow-hidden p-4">
              <div className="grid grid-cols-4 gap-4">
                {/* 16张不同的图片，分四行显示 */}
                {[...Array(16)].map((_, index) => {
                  // 使用p2-icon-1到p2-icon-16的图片
                  const getImageSrc = (idx: number) => {
                    // 索引从0开始，所以需要+1
                    return `/images/projects/p2-icon-${idx + 1}.png`;
                  };
                  
                  return (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer">
                      <img
                        src={getImageSrc(index)}
                        alt={`Design process ${index + 1}`}
                        width={128}
                        height={128}
                        decoding="async"
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="space-y-12 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Gallery</h2>
        {project.images.map((img, idx) => {
          const meta = getImageMeta(img as any, project as any, idx);
          return (
            <motion.div
              key={idx}
              className="group relative w-full overflow-hidden rounded-2xl"
              initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: DURATIONS.slow, ease: EASE_DEFAULT }}
            >
              {meta.isVideo ? (
                <video
                  src={meta.src}
                  poster={meta.poster}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={meta.name}
                  className="w-full h-auto object-contain"
                />
              ) : (
                <img 
                  src={meta.src} 
                  alt={meta.name} 
                  width={1200} 
                  height={900} 
                  decoding="async" 
                  loading="lazy" 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">{meta.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

// Assign id to the component for identification
(P2Content as any).id = 'p2';
(P2Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'IP Details' },
  { id: 'features', label: 'Activity Pop-up' },
  { id: 'process', label: 'UI Design' },
  { id: 'gallery', label: 'Gallery' },
];

export default P2Content;
