import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';

const FADE_IN_UP = createFadeInUp();

const P3Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'technique', label: 'Technique' },
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

      {/* Concept Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Concept</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-sans text-stone-600 leading-relaxed">
              Paper & Shadow 是一个探索纸质媒介与光影关系的艺术摄影项目。通过精心设计的纸张折叠、剪裁和排列，创造出独特的光影效果，探索二维平面与三维空间之间的视觉张力。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目灵感来源于传统折纸艺术和现代光影装置，将日常的纸张转化为充满诗意的视觉语言，通过光影的变化展现时间的流逝和空间的转换。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p3-concept.jpg"
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

      {/* Technique Section */}
      <div id="technique" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Technique</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/p3-technique-1.jpg"
                  alt="Paper folding technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">折纸工艺</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                运用传统折纸技术，通过精确的折叠角度和层次，创造出能够产生丰富阴影的立体结构。
              </p>
            </motion.div>
            
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/p3-technique-2.jpg"
                  alt="Light control technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">光线控制</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                精心设计光源位置和强度，通过不同角度的光线照射，突出纸张的质感和层次感。
              </p>
            </motion.div>
            
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/p3-technique-3.jpg"
                  alt="Photography technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">摄影构图</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                运用长曝光和精确对焦技术，捕捉光影的微妙变化，强调纸张与阴影之间的对比关系。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Creative Process</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 概念探索</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                项目始于对纸张特性的深入研究，我们测试了不同类型纸张的透光性、柔韧性和质感，探索它们在光影下的表现潜力。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过大量实验，我们确定了最适合表现光影效果的纸张类型和折叠方式，为后续创作奠定了基础。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p3-process-1.jpg"
                alt="Concept exploration"
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
                src="/images/projects/p3-process-2.jpg"
                alt="Paper manipulation"
                width={600}
                  height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. 纸张处理</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                我们采用多种纸张处理技术，包括折叠、剪裁、揉捏和层叠，创造出能够产生丰富光影效果的立体结构。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                每一件作品都需要反复试验和调整，确保纸张的形状和角度能够产生预期的光影效果。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">3. 光影实验</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                在暗室环境中，我们尝试了多种光源位置和角度，记录不同光线条件下纸张与阴影的变化关系。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过精确控制光线强度和方向，我们创造出富有层次感和戏剧性的光影效果，赋予纸张以生命和情感。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p3-process-3.jpg"
                alt="Light and shadow experiments"
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
                src="/images/projects/p3-process-4.jpg"
                alt="Final photography"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">4. 最终拍摄</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                使用高分辨率相机和专业灯光设备，我们捕捉了纸张与光影互动的瞬间，强调质感和细节。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过后期处理，我们进一步强化了光影对比，使每一张照片都成为独立的艺术作品。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="space-y-12 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Gallery</h2>
        <div className="space-y-8">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: DURATIONS.medium, 
                ease: EASE_DEFAULT,
                delay: idx * 0.1 
              }}
            >
              <img 
                src={img} 
                alt={`${project.title} detail ${idx}`} 
                width={800} 
                height={600} 
                decoding="async" 
                loading="lazy" 
                className="w-full h-auto object-cover" 
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
  { id: 'concept', label: 'Concept' },
  { id: 'technique', label: 'Technique' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P3Content;