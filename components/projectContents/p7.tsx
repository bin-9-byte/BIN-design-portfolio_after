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
    { id: 'audience', label: 'Target Audience' },
    { id: 'installation', label: 'Process Comparison' },
    { id: 'process', label: 'Process' },
    { id: 'design-system', label: 'Visual Identity' },
    { id: 'impact', label: 'Impact' },
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
      <div id="concept" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Problem Mining</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "时间成本高",
              desc: "传统商业摄影从拍摄到后期修图通常需要数天时间。",
              metric: "2-3 天",
              label: "平均耗时",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "费用高昂",
              desc: "专业摄影团队和后期修图费用昂贵，中小商家难以负担。",
              metric: "¥50-200",
              label: "单张成本",
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "质量参差",
              desc: "不同来源的素材质量不一，严重影响品牌视觉的一致性。",
              metric: "70%",
              label: "商家困扰",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            {
              title: "迭代缓慢",
              desc: "难以快速响应市场热点或促销需求，错失营销良机。",
              metric: "7-14 天",
              label: "响应周期",
              icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-3xl p-8 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 border border-transparent hover:border-stone-200"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-stone-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">{item.title}</h3>
              <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                {item.desc}
              </p>
              <div className="pt-6 border-t border-stone-100">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-serif text-2xl text-stone-900">{item.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Target Audience Section */}
      <div id="audience" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persona 1: Content Creator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-stone-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-stone-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Creator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-900">独立创作者</h3>
                <p className="font-sans text-sm text-stone-500">个人电商店主 / 博主</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">痛点</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-red-400 mt-1">×</span>
                    缺乏专业摄影预算
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-red-400 mt-1">×</span>
                    不懂布光，出图效果差
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">需求</h4>
                <p className="text-stone-700 font-serif leading-relaxed">
                  "我需要一款能把手机照片瞬间变成专业棚拍图的工具，让我能保持日更频率。"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Persona 2: Brand Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-stone-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-stone-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Brand Manager" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-900">品牌营销团队</h3>
                <p className="font-sans text-sm text-stone-500">DTC 品牌 / 电商运营</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">痛点</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-red-400 mt-1">×</span>
                    多渠道视觉风格难以统一
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-red-400 mt-1">×</span>
                    外包制作周期长，反应滞后
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <h4 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">需求</h4>
                <p className="text-stone-700 font-serif leading-relaxed">
                  "我们需要一个可扩展的解决方案，既能批量生成数千个SKU变体，又能严格遵守品牌视觉规范。"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Comparison Section */}
      <div id="installation" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Process Evolution</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-stone-100"
          >
            <div className="h-12 flex items-center mb-6">
              <span className="font-serif text-2xl text-stone-300">01</span>
            </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">传统流程</h3>
            <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8">
              高度依赖物理搭建和人工后期的线性工作流。
            </p>
            <div className="space-y-4">
              {[
                { label: "成本", val: "高" },
                { label: "耗时", val: "数天" },
                { label: "扩展性", val: "低" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-stone-50 pb-2">
                  <span className="text-stone-400">{stat.label}</span>
                  <span className="text-stone-600 font-medium">{stat.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Solution - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden md:-mt-8 md:mb-8"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">Recommended</span>
            </div>

            <div className="h-12 flex items-center mb-6">
              <span className="font-serif text-3xl text-white/20">02</span>
            </div>

            <h3 className="font-serif text-2xl text-white mb-4">AI 驱动</h3>
            <p className="font-sans text-stone-400 text-sm leading-relaxed mb-8">
              基于场景合成与光影计算的自动化生成流水线。
            </p>

            {/* Animated Progress Bars */}
            <div className="space-y-6">
              {[
                { label: "效率提升", val: 95 },
                { label: "成本节约", val: 90 },
                { label: "可扩展性", val: 98 }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs text-stone-400">
                    <span>{stat.label}</span>
                    <span>{stat.val}%</span>
                  </div>
                  <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.val}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hybrid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-stone-100"
          >
            <div className="h-12 flex items-center mb-6">
              <span className="font-serif text-2xl text-stone-300">03</span>
            </div>
            <h3 className="font-serif text-xl text-stone-800 mb-4">混合模式</h3>
            <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8">
              核心视觉由实拍把控，海量变体由AI生成的平衡策略。
            </p>
            <div className="space-y-4">
              {[
                { label: "成本", val: "适中" },
                { label: "耗时", val: "数小时" },
                { label: "扩展性", val: "良" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-stone-50 pb-2">
                  <span className="text-stone-400">{stat.label}</span>
                  <span className="text-stone-600 font-medium">{stat.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process Section - Sticky User Perspective */}
      <div id="process" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Creating with AI</h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24 md:space-y-40">

            {/* Step 1: Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="aspect-square bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200 flex items-center justify-center relative overflow-hidden group hover:border-stone-400 transition-colors"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4 text-stone-400"
                  >
                    <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span className="font-sans text-sm tracking-widest uppercase">上传素材</span>
                  </motion.div>
                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-stone-300"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: i * 0.5,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-white font-serif text-sm">1</span>
                  <h3 className="font-serif text-2xl text-stone-900">上传素材</h3>
                </div>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  仅需上传一张原始商品照片。系统会自动分析主体特征，识别材质属性、尺寸比例及原始光照条件，为重构做好准备。
                </p>
              </div>
            </div>

            {/* Step 2: Configure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12">
                <div className="flex items-center justify-end gap-4 mb-6 flex-row-reverse md:flex-row">
                  <h3 className="font-serif text-2xl text-stone-900">定义氛围</h3>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-white font-serif text-sm">2</span>
                </div>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  选择预设的美学模版或用自然语言描述你的构想。"北欧暖阳"、"赛博霓虹"还是"极简摄影棚"——氛围风格即刻配置。
                </p>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="aspect-square bg-stone-50 rounded-3xl border border-stone-200 p-8 flex flex-col justify-center gap-4"
                >
                  {['温暖日光', '极简灰调', '深邃森林'].map((style, idx) => (
                    <motion.div
                      key={style}
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.2 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between group cursor-pointer hover:border-stone-300 transition-colors"
                    >
                      <span className="font-serif text-stone-700">{style}</span>
                      <div className={`w-4 h-4 rounded-full border border-stone-300 ${idx === 0 ? 'bg-stone-800 border-stone-800' : ''}`} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Step 3: Analyze & Generate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <motion.div
                  className="aspect-square bg-stone-900 rounded-3xl overflow-hidden relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {/* Scanning Grid Effect */}
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  />

                  {/* Scan Line */}
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-stone-400 text-sm tracking-widest animate-pulse">PROCESSING...</span>
                  </div>
                </motion.div>
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-white font-serif text-sm">3</span>
                  <h3 className="font-serif text-2xl text-stone-900">智能合成</h3>
                </div>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  引擎对场景进行三维重构，精确计算反射、阴影和光线折射。将产品自然地融入生成的环境中，达到照片级真实感。
                </p>
              </div>
            </div>

            {/* Step 4: Result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12">
                <div className="flex items-center justify-end gap-4 mb-6 flex-row-reverse md:flex-row">
                  <h3 className="font-serif text-2xl text-stone-900">商业交付</h3>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-white font-serif text-sm">4</span>
                </div>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  即刻导出高分辨率、商业级图像。过去需要数天勘景和搭建影棚才能完成的工作，现在仅需数秒。
                </p>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-stone-100 rounded-3xl overflow-hidden relative shadow-lg"
                >
                  <img
                    src={project.thumbnailUrl}
                    alt="Result"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute inset-0 bg-stone-900/10 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                  {/* Floating 'Done' Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 1 }}
                    className="absolute bottom-6 right-6 bg-white text-stone-900 px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Ready
                  </motion.div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Visual Identity Section */}
      <div id="design-system" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Visual Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-3xl p-12 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl leading-none select-none">Aa</div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-stone-400 mb-8">字体系统</h3>

            <div className="space-y-8 relative z-10">
              <div className="border-b border-stone-800 pb-8">
                <p className="font-serif text-5xl mb-2">Playfair Display</p>
                <p className="font-sans text-stone-500">标题与展示</p>
              </div>
              <div>
                <p className="font-sans text-5xl mb-2 font-light">Inter</p>
                <p className="font-sans text-stone-500">界面与正文</p>
              </div>
            </div>
          </motion.div>

          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-12 border border-stone-200"
          >
            <h3 className="font-sans text-sm tracking-widest uppercase text-stone-400 mb-8">色彩规范</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-stone-900 shadow-lg"></div>
                <div className="flex justify-between text-xs text-stone-500 font-mono">
                  <span>Jet Black</span>
                  <span>#1C1917</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-stone-200"></div>
                <div className="flex justify-between text-xs text-stone-500 font-mono">
                  <span>Stone Mid</span>
                  <span>#E7E5E4</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-stone-400"></div>
                <div className="flex justify-between text-xs text-stone-500 font-mono">
                  <span>Stone Dark</span>
                  <span>#A8A29E</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-stone-50 border border-stone-100"></div>
                <div className="flex justify-between text-xs text-stone-500 font-mono">
                  <span>Paper White</span>
                  <span>#FAFAF9</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact Section */}
      <div id="impact" className="mb-32 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-16">Impact Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "成本降低", val: "95%", desc: "每个 SKU 的平均摄影预算节省幅度。" },
            { label: "效率提升", val: "20x", desc: "季度新品上新周期显著缩短。" },
            { label: "转化提升", val: "+32%", desc: "优化后的商品图带来的点击率增长。" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 rounded-3xl p-8 hover:bg-stone-900 hover:text-white transition-colors duration-500 group"
            >
              <h3 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-4">{item.label}</h3>
              <p className="font-serif text-6xl md:text-7xl mb-6 text-stone-900 group-hover:text-white transition-colors">{item.val}</p>
              <p className="font-sans text-stone-600 group-hover:text-stone-300 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
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
  { id: 'audience', label: 'Target Audience' },
  { id: 'installation', label: 'Process Comparison' },
  { id: 'process', label: 'Process' },
  { id: 'design-system', label: 'Visual Identity' },
  { id: 'impact', label: 'Impact' },
  { id: 'gallery', label: 'Gallery' },
];

export default P7Content;
