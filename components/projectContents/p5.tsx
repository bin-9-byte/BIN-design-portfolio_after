import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P5Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'children', label: '儿童portrait' },
    { id: 'scribble', label: '涂鸦生图' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const styleItems = [
    { src: '/images/projects/p5-style-1.png', name: 'ID photo' },
    { src: '/images/projects/p5-style-2.png', name: '3D cartoon' },
    { src: '/images/projects/p5-style-3.png', name: 'cyberpunk' },
  ];

  const scribbleItems = [
    { src: '/images/projects/p5-approach-1.png', name: '水墨风格' },
    { src: '/images/projects/p5-approach-2.png', name: '波普风格' },
    { src: '/images/projects/p5-approach-3.png', name: '3D卡通' },
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
              <p className="font-serif text-lg">{project.client || 'SAMSUNG'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || 'Photographer & Retoucher'}</p>
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

      {/* 儿童portrait Section */}
      <div id="children" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">儿童portrait</h2>
        <div className="space-y-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 项目背景</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                三星智绘人像风格化仅支持成年人，项目上线后数据显示"智绘人像成功率72%，失败中76%的输入图是未成年人(占整体请求的21%)"，于是期望引入儿童智绘人像风格化流程，在新机型上支持生成儿童case。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. 风格选择</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {styleItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={FADE_IN_UP}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 * (idx + 1) }}
                  className="space-y-4"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-stone-200">
                    <img
                      src={item.src}
                      alt={item.name}
                      width={600}
                      height={400}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                      <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">{item.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">3. 功能拆解</h3>
            <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-0.png"
                alt="功能拆解示意"
                width={1200}
                height={800}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-serif text-xl text-stone-800">人脸前置检测</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们使用连拍模式捕捉表情和动作的微妙变化，确保不错过任何一个精彩瞬间，同时保持拍摄氛围的轻松愉快。
              </p>
            </div>
            <div className="md:col-span-7 w-full bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-1.png"
                alt="Shooting session"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 w-full bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-2.png"
                alt="Post-processing"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-serif text-xl text-stone-800">自动构图</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们特别关注肤色还原和细节保留，确保每张照片都能展现孩子最美好的一面，同时保持商业摄影的专业水准。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-serif text-xl text-stone-800">一键切换风格</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们特别关注肤色还原和细节保留，确保每张照片都能展现孩子最美好的一面，同时保持商业摄影的专业水准。
              </p>
            </div>
            <div className="md:col-span-7 w-full bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-3.png"
                alt="Post-processing"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 涂鸦生图 Section */}
      <div id="scribble" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">涂鸦生图</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scribbleItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={FADE_IN_UP}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * (idx + 1) }}
                className="space-y-4"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-stone-200">
                  <img
                    src={item.src}
                    alt={item.name}
                    width={400}
                    height={400}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                    <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">{item.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
                {meta.isVideo ? (
                  <video
                    src={meta.src}
                    poster={meta.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={meta.name}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <img 
                    src={meta.src} 
                    alt={meta.name} 
                    width={800} 
                    height={600} 
                    decoding="async" 
                    loading="lazy" 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                  />
                )}
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
(P5Content as any).id = 'p5';
(P5Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'children', label: '儿童portrait' },
  { id: 'scribble', label: '涂鸦生图' },
  { id: 'gallery', label: 'Gallery' },
];

export default P5Content;
