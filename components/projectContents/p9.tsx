import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';
import { Code, Palette, Sparkles, Lightbulb, Layers, Zap, Github, ExternalLink, Heart } from 'lucide-react';

const FADE_IN_UP = createFadeInUp();

// 个人创作项目数据
const CREATIVE_PROJECTS = [
  {
    id: 'data-viz',
    name: '交互式数据可视化',
    icon: 'layers',
    type: 'experiment',
    description: '探索数据叙事的可能性，用代码绘制信息之美',
    details: '使用D3.js和React创建动态交互式图表，让复杂数据变得直观易懂。从简单的折线图到复杂的网络图，每一个可视化都是一次设计挑战。',
    tags: ['D3.js', 'React', '数据可视化', '交互设计'],
    color: 'from-blue-50 to-cyan-50',
    year: '2024',
    status: 'ongoing'
  },
  {
    id: 'generative-art',
    name: '生成艺术实验',
    icon: 'palette',
    type: 'art',
    description: '用代码创造艺术，探索算法与美学的边界',
    details: '通过Processing和p5.js创建生成艺术作品。每次运行都是独一无二的创作，探索随机性、噪声和数学美感的结合。',
    tags: ['p5.js', 'Processing', '生成艺术', '算法艺术'],
    color: 'from-purple-50 to-pink-50',
    year: '2023 - 2024',
    status: 'collection'
  },
  {
    id: 'mini-tools',
    name: '创意小工具',
    icon: 'zap',
    type: 'tool',
    description: '解决日常痛点的轻量级工具合集',
    details: '从颜色选择器到代码片段管理器，这些小工具诞生于实际需求。简单、实用、有趣，是编程的初心。',
    tags: ['实用工具', 'Chrome Extension', 'Web App'],
    color: 'from-green-50 to-emerald-50',
    year: '2024',
    status: 'active'
  },
  {
    id: 'design-system',
    name: '设计系统探索',
    icon: 'code',
    type: 'experiment',
    description: '构建可复用的设计语言和组件库',
    details: '从原子设计理论出发，创建一套完整的设计系统。包括颜色系统、字体规范、间距逻辑和组件库，让设计与开发无缝协作。',
    tags: ['设计系统', 'Storybook', 'Component Library'],
    color: 'from-orange-50 to-amber-50',
    year: '2023',
    status: 'archived'
  },
  {
    id: 'interaction-proto',
    name: '交互原型实验',
    icon: 'sparkles',
    type: 'prototype',
    description: '突破传统的交互范式，创造新的用户体验',
    details: '实验性的交互设计原型，包括手势控制、物理模拟、粒子效果等。用代码探索交互设计的无限可能。',
    tags: ['Framer Motion', '交互设计', 'UX Prototype'],
    color: 'from-red-50 to-rose-50',
    year: '2024',
    status: 'ongoing'
  },
  {
    id: 'fun-projects',
    name: '趣味小项目',
    icon: 'lightbulb',
    type: 'fun',
    description: '纯粹为了好玩而创作的奇思妙想',
    details: '没有deadline，没有KPI，只有纯粹的创作乐趣。可能是一个像素画编辑器，也可能是一个音乐可视化器。',
    tags: ['Just for Fun', 'Creative Coding', 'Side Project'],
    color: 'from-violet-50 to-purple-50',
    year: '2023 - Now',
    status: 'collection'
  }
];

const TYPES = [
  { id: 'all', label: '全部', icon: 'sparkles' },
  { id: 'experiment', label: '实验', icon: 'code' },
  { id: 'tool', label: '工具', icon: 'zap' },
  { id: 'art', label: '艺术', icon: 'palette' },
  { id: 'prototype', label: '原型', icon: 'layers' },
  { id: 'fun', label: '趣味', icon: 'lightbulb' }
];

const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: any } = {
    code: Code,
    palette: Palette,
    sparkles: Sparkles,
    lightbulb: Lightbulb,
    layers: Layers,
    zap: Zap
  };
  return icons[iconName] || Sparkles;
};

const P9Content: React.FC<ProjectContentProps> = ({ project }) => {
  const [selectedType, setSelectedType] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedType === 'all'
    ? CREATIVE_PROJECTS
    : CREATIVE_PROJECTS.filter(proj => proj.type === selectedType);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'philosophy', label: 'Philosophy' },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        id="overview"
        variants={FADE_IN_UP}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="w-full aspect-video bg-gradient-to-br from-stone-100 via-stone-50 to-white mb-16 overflow-hidden rounded-3xl scroll-mt-20 relative flex items-center justify-center"
      >
        <div className="text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Code className="w-16 h-16 mx-auto mb-4 text-stone-400" strokeWidth={1.5} />
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2">Vibe Coding</h2>
            <p className="font-sans text-stone-500">创意 · 实验 · 探索</p>
          </motion.div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #d6d3d1 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </motion.div>

      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-1 space-y-8">
          <div className="space-y-4 border-t border-stone-300 pt-4">
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Type</h3>
              <p className="font-serif text-lg">{project.client || 'Personal Playground'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || 'Creator & Explorer'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Timeline</h3>
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
          <div className="space-y-4">
            <p className="font-sans text-stone-600 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-stone-500 font-sans text-sm">
              <Heart className="w-4 h-4" />
              <span>用代码表达创意，用设计传递情感</span>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Projects Section */}
      <div id="projects" className="mb-20 scroll-mt-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">创作项目</h2>
            <p className="font-sans text-stone-500 text-sm">那些灵光一现的想法和深夜的代码</p>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {TYPES.map((type) => {
            const IconComponent = getIconComponent(type.icon);
            return (
              <motion.button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-sm
                  transition-all duration-300
                  ${selectedType === type.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }
                `}
              >
                <IconComponent size={14} strokeWidth={2} />
                <span>{type.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((proj, idx) => {
              const IconComponent = getIconComponent(proj.icon);
              const isHovered = hoveredProject === proj.id;

              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  onMouseEnter={() => setHoveredProject(proj.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className={`
                    relative bg-gradient-to-br ${proj.color} rounded-2xl border border-stone-200 
                    hover:border-stone-300 hover:shadow-lg transition-all duration-500 overflow-hidden
                  `}>
                    {/* Card Content */}
                    <div className="p-8 relative z-10">
                      {/* Icon and Status */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <IconComponent className="w-7 h-7 text-stone-700" strokeWidth={1.5} />
                        </div>
                        <div className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-sans text-stone-600">{proj.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl text-stone-900 mb-2">
                        {proj.name}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-stone-600 text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      {/* Details - Show on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? 'auto' : 0
                        }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-stone-500 text-sm leading-relaxed mb-4 border-t border-stone-200/50 pt-4">
                          {proj.details}
                        </p>
                      </motion.div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/60 backdrop-blur-sm text-stone-600 rounded text-xs font-sans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* More works coming - Divider */}
        <div className="border-t border-stone-200 pt-8 mt-12">
          <div className="text-center text-stone-400">
            <Sparkles className="w-12 h-12 mx-auto mb-4" strokeWidth={1} />
            <p className="font-sans text-sm">更多精彩作品持续更新中...</p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div id="philosophy" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">创作哲学</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-stone-900">保持好奇</h3>
            <p className="font-sans text-stone-600 text-sm leading-relaxed">
              每一个想法都值得尝试，每一次实验都是学习的机会。不设限，不怕错，享受探索的过程。
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center">
              <Code className="w-6 h-6 text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-stone-900">代码是工具</h3>
            <p className="font-sans text-stone-600 text-sm leading-relaxed">
              代码不仅是实现功能的手段，更是表达创意的媒介。用代码绘画，用算法创作，让技术服务于艺术。
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center">
              <Heart className="w-6 h-6 text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-stone-900">热爱驱动</h3>
            <p className="font-sans text-stone-600 text-sm leading-relaxed">
              最好的作品来自内心的热爱。不为KPI，不追热点，只做自己真正想做的项目。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Assign id to the component for identification
(P9Content as any).id = 'p9';
(P9Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
];

export default P9Content;
