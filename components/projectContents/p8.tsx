import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';

const FADE_IN_UP = createFadeInUp();

const P8Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'curatorial', label: 'Curatorial Approach' },
    { id: 'highlights', label: 'Highlights' },
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
              <p className="font-serif text-lg">{project.client || '阿尔山市政府'}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-1">Role</h3>
              <p className="font-serif text-lg">{project.role || '策展人 & 艺术总监'}</p>
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
              阿尔山乡村艺术季是一个将当代艺术与乡村文化相结合的大型艺术活动。通过邀请国内外艺术家深入阿尔山地区，创作与当地自然环境、文化传统和社区生活相结合的艺术作品，我们旨在探索艺术如何促进乡村文化振兴和可持续发展。
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              项目以"自然与人文的对话"为主题，通过装置艺术、公共艺术、社区参与和艺术教育等多种形式，让艺术成为连接城市与乡村、传统与现代的桥梁，为当地社区带来新的活力和可能性。
            </p>
          </div>
          <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
            <img
              src="/images/projects/p8-concept.jpg"
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

      {/* Curatorial Approach Section */}
      <div id="curatorial" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Curatorial Approach</h2>
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
                  src="/images/projects/p8-curatorial-1.jpg"
                  alt="Community engagement"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">社区参与</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们邀请当地居民参与艺术创作过程，通过工作坊、故事收集和共同创作，使艺术作品真正反映当地文化和社区声音。
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
                  src="/images/projects/p8-curatorial-2.jpg"
                  alt="Site-specific installations"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">特定场域创作</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                艺术家们根据阿尔山的自然景观、气候条件和人文环境，创作与特定场域紧密结合的作品，使艺术与自然环境和谐共存。
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
                  src="/images/projects/p8-curatorial-3.jpg"
                  alt="Sustainable practices"
                  width={400}
                  height={400}
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">可持续实践</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                我们强调使用当地材料和可持续的创作方法，最小化对环境的影响，同时探索艺术如何促进生态保护和可持续发展。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div id="highlights" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Exhibition Highlights</h2>
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">《森林回响》</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                艺术家利用阿尔山原始森林中的自然材料，创作了一系列声音装置，通过风、水和生物活动产生的自然声音，创造出与森林环境共鸣的音乐体验。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                作品邀请观众在森林中漫步，聆听自然的声音和艺术家的回应，思考人与自然的关系。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p8-highlights-1.jpg"
                alt="Forest Echoes installation"
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
                src="/images/projects/p8-highlights-2.jpg"
                alt="Memory Weaving workshop"
                width={600}
                height={400}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-2xl text-stone-800 mb-4">《记忆编织》工作坊</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                我们组织了一系列社区工作坊，邀请当地长者分享他们的生活故事和传统技艺，并与年轻一代和艺术家共同创作编织作品。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                这些作品不仅保存了珍贵的社区记忆，也创造了代际交流的机会，成为艺术季最受欢迎的活动之一。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">《流动的风景》</h3>
              <p className="font-sans text-stone-600 leading-relaxed mb-4">
                艺术家在阿尔山河流中创作了一系列漂浮装置，利用当地材料和水流动力，创造出随自然力量不断变化的动态景观。
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                作品探讨了自然与人造、永恒与瞬间之间的张力，邀请观众思考变化与恒定的哲学命题。
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-2xl overflow-hidden">
              <img
                src="/images/projects/p8-highlights-3.jpg"
                alt="Flowing Landscape installation"
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
(P8Content as any).id = 'p8';
(P8Content as any).sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'concept', label: 'Concept' },
  { id: 'curatorial', label: 'Curatorial Approach' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'gallery', label: 'Gallery' },
];

export default P8Content;
