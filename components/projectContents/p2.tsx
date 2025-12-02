import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P2Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'features', label: 'Features' },
    { id: 'process', label: 'Process' },
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

      {/* Concept Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Concept</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-sans text-stone-600 leading-relaxed">
              Find & Spot 是一个创新的UI设计与AIGC结合的项目，旨在通过人工智能技术提升用户体验设计的效率和质量。我们探索了如何利用AI生成内容来辅助设计决策，创造出更加个性化和适应性强的用户界面。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目的核心理念是将设计师的创意思维与AI的计算能力相结合，通过智能工具来扩展设计边界，同时保持人类设计师在创意决策中的主导地位。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p2-concept.jpg"
              alt="Concept visualization"
              width={600}
              height={400}
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="p-8 border border-stone-200 rounded-2xl"
          >
            <h3 className="font-serif text-xl text-stone-800 mb-4">智能设计建议</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              基于用户行为和设计原则，AI系统能够实时提供设计建议，帮助设计师快速迭代和优化界面元素。
            </p>
          </motion.div>
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="p-8 border border-stone-200 rounded-2xl"
          >
            <h3 className="font-serif text-xl text-stone-800 mb-4">自适应界面生成</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              系统能够根据不同设备和用户偏好自动调整界面布局和样式，提供一致且个性化的用户体验。
            </p>
          </motion.div>
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="p-8 border border-stone-200 rounded-2xl"
          >
            <h3 className="font-serif text-xl text-stone-800 mb-4">实时协作与反馈</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              设计师和AI系统之间实现无缝协作，AI能够理解设计意图并提供有针对性的反馈和改进建议。
            </p>
          </motion.div>
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="p-8 border border-stone-200 rounded-2xl"
          >
            <h3 className="font-serif text-xl text-stone-800 mb-4">设计模式学习</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              系统能够从大量优秀设计案例中学习，识别有效的设计模式，并将其应用到新的设计项目中。
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Design Process</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 用户研究与需求分析</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们深入研究了用户在使用UI设计工具时的痛点和需求，通过访谈和观察，确定了AI辅助设计的关键场景和价值点。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p2-research.jpg"
                alt="Research process"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p2-design.jpg"
                alt="Design process"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. AI模型训练与优化</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们收集和标注了大量设计案例，训练了专门针对UI设计的AI模型，不断优化其生成建议的质量和相关性。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">3. 原型开发与测试</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们开发了多个原型版本，通过用户测试和反馈迭代，确保AI辅助设计功能能够真正提升设计效率和质量。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p2-prototype.jpg"
                alt="Prototype testing"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
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
              <img 
                src={meta.src} 
                alt={meta.name} 
                width={1200} 
                height={900} 
                decoding="async" 
                loading="lazy" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              />
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
  { id: 'concept', label: 'Concept' },
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P2Content;
