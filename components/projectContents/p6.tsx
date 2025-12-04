import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P6Content: React.FC<ProjectContentProps> = ({ project }) => {
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
              <p className="font-serif text-lg">{project.role || 'Photographer & Digital Artist'}</p>
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
              残碑是一个探索时间、记忆与消逝之美的摄影艺术项目。通过记录古代石碑的残缺状态和自然侵蚀痕迹，我们试图捕捉时间流逝留下的诗意痕迹，探讨永恒与短暂之间的哲学思考。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目灵感来源于对中国古代碑刻艺术的深入研究，我们走访了多个历史遗址，记录了这些承载着历史记忆的石碑在自然侵蚀下的现状，通过摄影语言诠释"残缺美"的哲学概念。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p6-concept.jpg"
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
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Photographic Technique</h2>
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
                  src="/images/projects/p6-technique-1.jpg"
                  alt="Light and shadow technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">光影处理</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                运用侧光和逆光技术，突出石碑表面的纹理和残缺细节，通过强烈的光影对比强化时间的痕迹和历史的厚重感。
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
                  src="/images/projects/p6-technique-2.jpg"
                  alt="Composition technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">构图策略</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                采用极简构图方式，通过留白和对比，突出石碑的孤独感和庄严感，引导观者思考时间与存在的意义。
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
                  src="/images/projects/p6-technique-3.jpg"
                  alt="Post-processing technique"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">后期处理</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过黑白处理和局部调色，强化石碑的历史感和沧桑感，同时保留细节，展现材质的质感和时间的痕迹。
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
              <h3 className="font-serif text-xl text-stone-800 mb-4">1. 历史研究</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                项目开始前，我们深入研究了中国古代碑刻艺术的历史背景和文化意义，了解了不同朝代的碑刻风格和特点。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                通过文献研究和专家访谈，我们确定了拍摄的重点和方向，选择了具有代表性和历史价值的碑刻作为拍摄对象。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p6-process-1.jpg"
                alt="Historical research"
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
                src="/images/projects/p6-process-2.jpg"
                alt="Site exploration"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">2. 实地考察</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                我们走访了多个历史遗址和博物馆，实地考察了不同保存状态的石碑，记录它们的环境、光照条件和细节特征。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                在考察过程中，我们特别关注石碑与周围环境的关系，以及自然侵蚀留下的痕迹，为拍摄做好充分准备。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">3. 拍摄执行</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                拍摄过程中，我们根据不同石碑的特点和环境条件，灵活调整拍摄角度和光线设置，捕捉最能体现其历史感和艺术性的瞬间。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们特别注重细节的呈现，通过微距拍摄和长曝光技术，记录石碑表面的纹理、刻痕和侵蚀痕迹，展现时间的力量。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p6-process-3.jpg"
                alt="Photography execution"
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
                src="/images/projects/p6-process-4.jpg"
                alt="Image selection and editing"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-xl text-stone-800 mb-4">4. 选片与编辑</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                在后期处理中，我们从大量照片中精心挑选最能表达项目理念的作品，通过精细的调色和修图，强化作品的视觉效果。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们特别注重黑白处理的效果，通过对比度和局部调整，突出石碑的质感和细节，同时保持整体画面的和谐与平衡。
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
(P6Content as any).id = 'p6';
(P6Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Concept' },
  { id: 'technique', label: 'Technique' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P6Content;
