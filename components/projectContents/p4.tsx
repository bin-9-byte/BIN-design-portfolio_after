import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P4Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'pre-training', label: 'Pre-training' },
    { id: 'model-effect', label: 'Model Effect' },
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
              <p className="font-serif text-lg">{project.role || 'Character Designer & 3D Artist'}</p>
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
      <div id="pre-training" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Pre-training Preparation</h2>
        <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
          <img
            src="/images/projects/p4-concept.png"
            alt="Concept visualization"
            decoding="async"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Character Design Section */}
      <div id="model-effect" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Model Effect Comparison</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/p4-character-1.png"
                  alt="Character design - face"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">动漫1.3.1</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                精心设计的大眼睛和柔和面部轮廓，采用细腻的皮肤材质和渐变色彩，体现乙女风格特有的纯真与梦幻感。
              </p>
            </motion.div>
            
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-full bg-stone-200 rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/p4-character-2.png"
                  alt="Character design - costume"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">动漫1.3.1 + Lora模型</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                相同的提示词，更厚重的笔触，更强烈的光影，更柔和的线条，更张扬的气质，更细腻的细节，氛围暧昧、神秘且有张力。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Version Iterating</h2>
        <div className="space-y-12">
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.1 
                }}
              >
                <img
                  src="/images/projects/p4-process-1-1.png"
                  alt="Concept sketches"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V2版本</span>
                </div>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.15 
                }}
              >
                <img
                  src="/images/projects/p4-process-1-2.png"
                  alt="Concept sketches"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V3版本</span>
                </div>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.2 
                }}
              >
                <img
                  src="/images/projects/p4-process-1-3.png"
                  alt="Concept sketches"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V4版本</span>
                </div>
              </motion.div>
            </div>
            <h3 className="font-serif text-xl text-stone-800">Model V2 — V4</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              摸索风格与调试参数阶段，快速训练得到效果，根据效果优化训练集、打标文件，构建优质且风格准确的训练训练集，迭代记录最优参数，摸索出符合乙女风格的参数配置。
            </p>
          </motion.div>
          
          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.2 
                }}
              >
                <img
                  src="/images/projects/p4-process-2-1.png"
                  alt="3D modeling process"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V5版本</span>
                </div>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.25 
                }}
              >
                <img
                  src="/images/projects/p4-process-2-2.png"
                  alt="3D modeling process"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V5版本</span>
                </div>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.3 
                }}
              >
                <img
                  src="/images/projects/p4-process-2-3.png"
                  alt="3D modeling process"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V5版本</span>
                </div>
              </motion.div>
            </div>
            <h3 className="font-serif text-xl text-stone-800">Model V5</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              根据前期得到的效果以及客户反馈，进一步提升风格泛化性、稳定性，增加厚涂风格。使用同一个Lora模型，可以通过不同触发词触发不同风格。客户确认效果，进入上线交付阶段。
            </p>
          </motion.div>

          <motion.div
            variants={FADE_IN_UP}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.3 
                }}
              >
                <img
                  src="/images/projects/p4-process-3-1.png"
                  alt="Texture and material work"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V6版本 - 眼部细节提升</span>
                </div>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-stone-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: DURATIONS.medium, 
                  ease: EASE_DEFAULT,
                  delay: 0.35 
                }}
              >
                <img
                  src="/images/projects/p4-process-3-2.png"
                  alt="Texture and material work"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-stone-900/70 to-transparent">
                  <span aria-hidden="true" className="font-sans text-[13px] tracking-widest text-stone-100">V7版本 - 大模型训练</span>
                </div>
              </motion.div>
            </div>
            <h3 className="font-serif text-xl text-stone-800">Model V6 & 大模型</h3>
            <p className="font-sans text-stone-600 leading-relaxed">
              上线后收集用户反馈继续迭代至V6版本-当前线上版本，提升眼部细节，增加pale_skin苍白皮肤控制力。<br />
              为增加更多乙女风格、元素和玩法，收集更多训练集着手训练大模型，迭代至V7版本，内部自驱训练，暂未上线。
            </p>
          </motion.div>


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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
(P4Content as any).id = 'p4';
(P4Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'pre-training', label: 'Pre-training' },
  { id: 'model-effect', label: 'Model Effect' },
  { id: 'process', label: 'Version Iterating' },
  { id: 'gallery', label: 'Gallery' },
];

export default P4Content;
