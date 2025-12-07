import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P7Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Problem Mining' },
    { id: 'installation', label: 'Process Comparison' },
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

      {/* Problem Mining Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12">Problem Mining</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-xl text-stone-800 mb-6">时间成本高</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              从拍摄到修图平均要2-3天，上新速度严重受限，大促期间更是难以应对。
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <span className="font-medium">平均耗时:</span>
              <span className="font-bold text-stone-700">2-3天</span>
            </div>
          </div>
          
          <div className="border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-xl text-stone-800 mb-6">费用昂贵</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              专业摄影+后期修图费用高昂，中小商家难以承担，尤其对于多SKU的店铺。
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <span className="font-medium">单张成本:</span>
              <span className="font-bold text-stone-700">¥50-200</span>
            </div>
          </div>
          
          <div className="border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-xl text-stone-800 mb-6">专业度不足</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              非专业人士较难处理光影、构图和后期，自制图片质量难以保证，影响商品转化率。
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <span className="font-medium">转化率影响:</span>
              <span className="font-bold text-stone-700">70%商家自评不满意</span>
            </div>
          </div>
          
          <div className="border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-xl text-stone-800 mb-6">迭代缓慢</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-4">
              商品图更新迭代缓慢，无法及时响应市场变化和促销需求。
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <span className="font-medium">响应周期:</span>
              <span className="font-bold text-stone-700">7-14天</span>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div id="installation" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12">Process Comparison</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border border-stone-200 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-stone-700">1</span>
            </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">传统流程</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              专业拍摄、后期修图、多轮审核，流程繁琐且耗时
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">时间成本</span>
                <span className="font-bold text-stone-700">2-3天</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">单张成本</span>
                <span className="font-bold text-stone-700">¥50-200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">迭代速度</span>
                <span className="font-bold text-stone-700">7-14天</span>
              </div>
            </div>
          </div>
          
          <div className="border border-stone-600 rounded-3xl p-8 text-center relative shadow-md">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-stone-600 text-white px-4 py-1 rounded-full text-sm">
              推荐方案
            </div>
            <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-white">2</span>
            </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">AI辅助流程</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              智能生成、快速迭代、一键应用，大幅提升效率
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">时间成本</span>
                <span className="font-bold text-stone-700">&lt;10分钟</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">单张成本</span>
                <span className="font-bold text-stone-700">¥1-5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">迭代速度</span>
                <span className="font-bold text-stone-700">实时</span>
              </div>
            </div>
          </div>
          
          <div className="border border-stone-200 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-stone-700">3</span>
            </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">混合流程</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              关键场景专业拍摄，常规内容AI生成，平衡质量与效率
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">时间成本</span>
                <span className="font-bold text-stone-700">0.5-1天</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">单张成本</span>
                <span className="font-bold text-stone-700">¥10-50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">迭代速度</span>
                <span className="font-bold text-stone-700">1-2天</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-stone-50 rounded-3xl p-8">
          <h3 className="font-serif text-xl text-stone-800 mb-6 text-center">流程对比分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-2 bg-stone-200 rounded-full mb-4">
                <div className="h-2 bg-stone-400 rounded-full" style={{width: '25%'}}></div>
              </div>
              <p className="font-sans text-sm text-stone-600">效率评分</p>
            </div>
            <div className="text-center">
              <div className="h-2 bg-stone-200 rounded-full mb-4">
                <div className="h-2 bg-stone-600 rounded-full" style={{width: '95%'}}></div>
              </div>
              <p className="font-sans text-sm text-stone-600">效率评分</p>
            </div>
            <div className="text-center">
              <div className="h-2 bg-stone-200 rounded-full mb-4">
                <div className="h-2 bg-stone-500 rounded-full" style={{width: '70%'}}></div>
              </div>
              <p className="font-sans text-sm text-stone-600">效率评分</p>
            </div>
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
(P7Content as any).id = 'p7';
(P7Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Problem Mining' },
  { id: 'installation', label: 'Process Comparison' },
  { id: 'process', label: 'Process' },
  { id: 'gallery', label: 'Gallery' },
];

export default P7Content;
