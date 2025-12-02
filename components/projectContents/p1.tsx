import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P1Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'concept', label: 'Prompt optimization' },
    { id: 'style-evolution', label: 'Style Evolution' },
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

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Process</h2>
        <div className="space-y-12">
          <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p1-research.png"
              alt="Research process"
              width={1200}
              height={900}
              decoding="async"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Prompt optimization</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">Structured Prompt</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                CHAGEE和萌友们的项目旨在创造一个充满活力和互动性的空间，将传统茶文化与现代元素相结合。我们通过色彩、材质和空间的巧妙运用，打造出一个既温馨又富有创意的环境。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                设计灵感来源于茶文化的深厚底蕴和现代都市生活的快节奏。我们希望在这个空间中，人们可以放慢脚步，享受茶香，同时也能感受到现代设计的魅力。
              </p>
            </div>
            <div className="bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p1-concept.png"
                alt="Concept visualization"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p1-design.png"
              alt="Design process"
              width={1200}
              height={800}
              decoding="async"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Style Evolution Section */}
      <div id="style-evolution" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Style Evolution</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p1-style-1.png"
                alt="Initial style concept"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">指令编辑模型</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                还原元素比较准，但风格笔触细腻，没有刮刀的感觉。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p1-style-2.png"
                alt="Refined style concept"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">LLM + 文生图模型</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                对图片进行反推来保证对画面元素保持，通过调整系统提示词选择保留的画面元素，生图使用风格效果更优的3.0模型。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p1-style-3.png"
                alt="Final style implementation"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">深入优化风格</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                提供新风格参考，希望继续优化，油画笔触明显，刮刀笔触，凌乱一点的线条。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="space-y-12 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
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
                <img 
                  src={meta.src} 
                  alt={meta.name} 
                  width={1200} 
                  height={900} 
                  decoding="async" 
                  loading="lazy" 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">{meta.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Assign id to the component for identification
(P1Content as any).id = 'p1';
(P1Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'Process' },
  { id: 'concept', label: 'Prompt optimization' },
  { id: 'style-evolution', label: 'Style Evolution' },
  { id: 'gallery', label: 'Gallery' },
];

export default P1Content;
