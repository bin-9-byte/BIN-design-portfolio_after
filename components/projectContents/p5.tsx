import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P5Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'approach', label: 'Approach' },
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

      {/* Concept Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Concept</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-sans text-stone-600 leading-relaxed">
              SAMSUNG 儿童Portrait项目是一个专注于捕捉儿童纯真与活力的商业摄影项目。我们通过精心设计的场景和自然互动，创造出既专业又富有情感的儿童肖像作品，展现每个孩子独特的个性和魅力。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目核心理念是将商业摄影的专业性与儿童摄影的自然感相结合，通过柔和的光线、舒适的场景设计和耐心的引导，让孩子们在放松的状态下展现最真实的一面。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p5-concept.jpg"
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

      {/* Approach Section */}
      <div id="approach" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Photography Approach</h2>
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
                  src="/images/projects/p5-approach-1.jpg"
                  alt="Lighting setup"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">光线设计</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                采用柔和的自然光和辅助光源相结合的方式，创造出既明亮又柔和的光线效果，突出儿童肌肤的细腻质感和表情的自然变化。
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
                  src="/images/projects/p5-approach-2.jpg"
                  alt="Scene design"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">场景设计</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                精心布置的拍摄场景既简洁又富有童趣，使用色彩协调的道具和背景，营造舒适自然的氛围，让孩子们能够放松自如地表现自己。
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
                  src="/images/projects/p5-approach-3.jpg"
                  alt="Interaction techniques"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">互动技巧</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过游戏、故事和轻松的对话引导，与孩子们建立信任关系，捕捉他们最自然的表情和动作，展现真实的情感和个性。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Shooting Process</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 前期准备</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                拍摄前我们与家长充分沟通，了解孩子的性格特点、兴趣爱好和偏好，制定个性化的拍摄方案。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们准备了多种拍摄场景和道具，确保拍摄过程中能够根据孩子的状态灵活调整，捕捉最佳瞬间。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-1.jpg"
                alt="Preparation phase"
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
                src="/images/projects/p5-process-2.jpg"
                alt="Shooting session"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. 拍摄执行</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                拍摄过程中，我们采用"跟随孩子"的策略，不强制摆拍，而是通过互动引导，让孩子自然地展现自己。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们使用连拍模式捕捉表情和动作的微妙变化，确保不错过任何一个精彩瞬间，同时保持拍摄氛围的轻松愉快。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">3. 后期处理</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                在后期处理中，我们注重保持照片的自然感，通过精细的调色和修饰，增强照片的表现力而不失真实。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们特别关注肤色还原和细节保留，确保每张照片都能展现孩子最美好的一面，同时保持商业摄影的专业水准。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p5-process-3.jpg"
                alt="Post-processing"
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
(P5Content as any).id = 'p5';
(P5Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Concept' },
  { id: 'approach', label: 'Approach' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P5Content;
