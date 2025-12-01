import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';

const FADE_IN_UP = createFadeInUp();

const P9Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'typography', label: 'Typography' },
    { id: 'application', label: 'Application' },
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
              <p className="font-serif text-lg">{project.client || 'Design Studio'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || 'Type Designer & Brand Consultant'}</p>
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
              Mono是一个极简主义字体设计项目，探索单一线条如何构成完整的字符系统。通过减少视觉元素到最基本的线条，我们创造了一种既现代又永恒的字体，适用于各种设计场景。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目灵感来源于包豪斯设计原则和日本极简主义美学，强调形式与功能的统一。Mono字体以其简洁的线条和几何结构，提供了高度的视觉清晰度和可读性，同时保持了独特的艺术表现力。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p9-concept.jpg"
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

      {/* Typography Section */}
      <div id="typography" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Typography Design</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-light mb-4">Aa</div>
                  <div className="text-sm text-stone-600">大写与小写字母</div>
                </div>
              </div>
              <h3 className="font-serif text-xl text-stone-800">字母设计</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                Mono的字母设计基于几何原理，每个字符都由单一线条构成，保持一致的视觉重量和节奏感，确保在不同尺寸下的可读性。
              </p>
            </motion.div>
            
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-light mb-4">123</div>
                  <div className="text-sm text-stone-600">数字系统</div>
                </div>
              </div>
              <h3 className="font-serif text-xl text-stone-800">数字系统</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                数字设计遵循与字母相同的极简原则，通过精确的角度和线条长度，创造出既易于识别又具有美感的数字系统。
              </p>
            </motion.div>
            
            <motion.div
              variants={FADE_IN_UP}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-light mb-4">@!?</div>
                  <div className="text-sm text-stone-600">标点符号</div>
                </div>
              </div>
              <h3 className="font-serif text-xl text-stone-800">标点符号</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                标点符号设计保持了整体的简洁风格，同时确保功能性，每个符号都经过精心调整，以适应不同的排版需求。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div id="application" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Application</h2>
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">品牌识别</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                Mono字体非常适合用于品牌识别系统，其简洁的线条和现代感能够传达清晰、专业的品牌形象。我们为多家初创公司设计了基于Mono的完整品牌视觉系统。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                字体的灵活性使其能够适应从高端时尚到科技产品的各种品牌定位，同时保持一致的品牌识别度。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p9-application-1.jpg"
                alt="Brand identity applications"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p9-application-2.jpg"
                alt="Editorial design"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-2xl text-stone-800 mb-4">编辑设计</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                在编辑设计中，Mono字体提供了出色的可读性和视觉层次，特别适用于艺术书籍、杂志和展览目录。其简洁的线条不会干扰图像内容，同时保持文本的清晰度。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们开发了多种字重和样式，以适应不同的编辑需求，从标题到正文，从注释到引用，都有相应的字体变体。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">数字界面</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                Mono字体在数字界面设计中表现出色，其清晰的线条和几何结构确保了在各种屏幕尺寸和分辨率下的可读性。我们将其应用于多个移动应用和网站设计项目。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                字体的简洁风格特别适合现代UI设计趋势，能够与各种界面元素和谐共存，提供一致的用户体验。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p9-application-3.jpg"
                alt="Digital interface design"
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
(P9Content as any).id = 'p9';
(P9Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Concept' },
  { id: 'typography', label: 'Typography' },
  { id: 'application', label: 'Application' },
  { id: 'gallery', label: 'Gallery' },
];

export default P9Content;