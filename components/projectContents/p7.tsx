import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P7Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'installation', label: 'Installation' },
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
              <p className="font-serif text-lg">{project.client || 'Art Gallery'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || 'Installation Artist & Designer'}</p>
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
              Woven Light是一个探索光与空间关系的互动装置艺术项目。通过编织光线和创造光影交织的空间体验，我们试图打破观众与艺术作品之间的界限，让观者成为作品的一部分。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目灵感来源于传统编织工艺和现代光影艺术的结合，我们使用光纤、LED和互动传感器，创造出一个能够响应观众动作和情绪的光影环境，探索光作为媒介的表达可能性。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p7-concept.jpg"
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

      {/* Installation Section */}
      <div id="installation" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Installation Design</h2>
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
                  src="/images/projects/p7-installation-1.jpg"
                  alt="Light weaving technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">光线编织</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                使用光纤和LED灯带，通过特殊的编织技术，创造出立体的光线结构，形成既柔软又坚固的光影网格。
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
                  src="/images/projects/p7-installation-2.jpg"
                  alt="Interactive sensors"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">互动感应</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                集成多种传感器，包括距离传感器、声音传感器和动作捕捉器，使装置能够感知观众的存在和动作，并做出相应的光影变化。
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
                  src="/images/projects/p7-installation-3.jpg"
                  alt="Spatial design"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">空间设计</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                精心设计的空间布局和观众流线，创造沉浸式的体验环境，引导观众在光影空间中探索和互动。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Creation Process</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 概念发展</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                项目始于对光作为艺术媒介的深入研究，我们探索了光线的物理特性和心理效应，确定了"编织光线"的核心概念。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过大量草图和模型制作，我们完善了装置的基本形态和互动方式，为技术实现奠定了基础。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p7-process-1.jpg"
                alt="Concept development"
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
                src="/images/projects/p7-process-2.jpg"
                alt="Material testing"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. 材料测试</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                我们测试了多种光纤材料和LED光源，评估它们的亮度、色温、柔韧性和耐久性，选择最适合实现艺术效果的材料。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                同时，我们实验了不同的编织技术和结构支撑方式，确保装置既美观又稳定，能够承受长时间的展览和互动。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">3. 技术开发</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                我们开发了专门的控制系统，整合了传感器数据处理和灯光控制算法，实现了装置对观众动作的实时响应。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过多次迭代和测试，我们优化了互动逻辑和光影效果，确保观众能够获得流畅、自然和富有意义的互动体验。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p7-process-3.jpg"
                alt="Technical development"
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
                src="/images/projects/p7-process-4.jpg"
                alt="Installation and exhibition"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">4. 安装与展览</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                在展览空间中，我们精心布置了装置的各个组件，调整光线强度和互动敏感度，确保作品与空间环境和谐融合。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                展览期间，我们收集了观众的反馈和互动数据，不断优化装置的表现，使作品能够更好地传达艺术理念。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="space-y-12 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Gallery</h2>
        <div className="space-y-8">
          {project.images.map((img, idx) => {
            const meta = getImageMeta(img as any, project as any, idx);
            return (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: idx * 0.1 
                }}
              >
                <img 
                  src={meta.src} 
                  alt={meta.name} 
                  width={800} 
                  height={600} 
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
      </div>
    </>
  );
};

// Assign id to the component for identification
(P7Content as any).id = 'p7';
(P7Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Concept' },
  { id: 'installation', label: 'Installation' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P7Content;
