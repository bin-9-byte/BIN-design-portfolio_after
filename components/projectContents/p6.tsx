import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';
import { getImageMeta } from '../utils/imageMeta';
import { ExternalLink } from 'lucide-react';

const FADE_IN_UP = createFadeInUp();

const P6Content: React.FC<ProjectContentProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'concept', label: 'Concept' },
    { id: 'design', label: 'Design Sketch' },
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
          <p className="font-sans text-stone-600 text-lg leading-relaxed whitespace-pre-line mb-6">
            {project.description}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-sans text-sm group"
            >
              <span>了解更多</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
            </a>
          )}
        </div>
      </div>

      {/* Concept Section */}
      <div id="concept" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Concept</h2>
        <div className="bg-stone-50 border border-stone-200 rounded-lg overflow-hidden">
          <div className="bg-stone-100 p-4 border-b border-stone-200">
            <div className="font-bold text-base text-stone-700">《残碑》游戏设计方案</div>
          </div>
          <div className={`font-mono text-sm text-stone-700 overflow-x-auto transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[32rem]' : 'max-h-72'} overflow-y-auto`}>
            <div className="p-6">

              <div className="mb-3 text-stone-700 font-semibold">一、游戏核心信息</div>
              <div className="mb-2 ml-4 text-stone-600">项目内容</div>
              <div className="mb-3 ml-8 text-stone-700">• 游戏名称：《残碑》</div>
              <div className="mb-3 ml-8 text-stone-700">• 核心题材：唐代中后期西域坚守与收复史（聚焦河西走廊沙州、凉州、瓜州等核心区域）</div>
              <div className="mb-3 ml-8 text-stone-700">• 游戏类型：历史向策略战棋</div>
              <div className="mb-3 ml-8 text-stone-700">• 核心关键词：唐代历史、河西走廊、义军收复、策略博弈、历史还原、家国情怀</div>
              <div className="mb-3 ml-8 text-stone-700">• 核心目标：打造兼具策略深度、历史沉浸感与情感共鸣的唐风策略游戏</div>

              <div className="mb-3 text-stone-700 font-semibold">二、核心背景设定</div>
              <div className="mb-3 ml-4 text-stone-700">时间线锚定756年后安史之乱余波：大唐国力衰退，西域诸州（沙州、凉州、瓜州等）相继沦陷，朝廷联络中断。沙州军民在孤立无援的绝境中坚守多年，仍心怀故国，不忘唐服、坚守唐制。</div>
              <div className="mb-3 ml-4 text-stone-700">9世纪后，大唐国力渐复，以张议潮为核心的义军崛起，联合各地坚守军民，开启收复河西走廊的壮阔征程。游戏围绕"孤城坚守""义军集结""失地收复"三大核心阶段展开，还原"虽隔绝万里，仍心向大唐"的历史情怀。</div>

              <div className="mb-3 text-stone-700 font-semibold">三、核心玩法设计</div>
              <div className="mb-2 ml-4 text-stone-600">1. 策略战棋核心</div>
              <div className="mb-3 ml-8 text-stone-700">基于河西走廊地形（戈壁、城池、廊道）设计关卡，玩家需搭配唐军兵种（步兵、弓兵、重甲兵、陌刀兵等），利用地形优势对抗异族势力。兵种克制、援军机制贴合西域战场实际，强化策略博弈体验。</div>

              <div className="mb-2 ml-4 text-stone-600">2. 历史事件驱动</div>
              <div className="mb-3 ml-8 text-stone-700">关卡紧扣关键史实，如"沙州孤城坚守""凉州收复战""瓜州驰援""凉州决战"等，玩家决策直接影响战役走向与军民命运，同步解锁对应剧情与人物羁绊。</div>

              <div className="mb-2 ml-4 text-stone-600">3. 人物养成与团队构建</div>
              <div className="mb-3 ml-8 text-stone-700">解锁历史相关人物（坚守将领、义军领袖、民间义士等），人物技能贴合其身份与历史背景（如郭昕的"孤城坚守"、张议潮的"义军感召"），通过战役积累解锁人物进阶技能，构建个性化作战团队。</div>

              <div className="mb-2 ml-4 text-stone-600">4. 资源与民心系统</div>
              <div className="mb-3 ml-8 text-stone-700">结合历史背景设计粮草、军械、民心等核心资源，民心值影响部队士气与招募效率（如董氏触发"民心补给"剧情），资源获取与战场决策深度绑定，还原乱世生存逻辑。</div>

              <div className="mb-3 text-stone-700 font-semibold">四、美术风格设定</div>
              <div className="mb-2 ml-4 text-stone-600">1. 视觉基调</div>
              <div className="mb-3 ml-8 text-stone-700">厚重历史感与西域苍凉感结合，以土黄、赭石为基础色调，点缀唐代官服的绯红、铠甲的银灰，凸显河西走廊的戈壁风貌与唐军威仪。</div>

              <div className="mb-2 ml-4 text-stone-600">2. 元素还原</div>
              <div className="mb-3 ml-8 text-stone-700">借助AI工具精准还原唐代核心元素：建筑、服饰、道具等，考据级还原细节。</div>

              <div className="mb-2 ml-4 text-stone-600">3. 场景设计</div>
              <div className="mb-3 ml-8 text-stone-700">涵盖沙州孤城、凉州战场、河西廊道、异族营地、朝廷迎宾道等核心场景，融入戈壁落日、风沙弥漫、烽火狼烟等环境元素，强化历史沉浸感。</div>

              <div className="mb-3 text-stone-700 font-semibold">五、核心特色</div>
              <div className="mb-2 ml-8 text-stone-700">• 史实依托：以唐代西域沦陷、坚守、收复史实为核心，弱化虚构，核心人物与重大战役均有历史依据</div>
              <div className="mb-2 ml-8 text-stone-700">• 情感内核：聚焦"孤臣孽子守故国"的家国情怀，通过剧情对话、人物互动，传递唐代军民的忠诚与坚守</div>
              <div className="mb-2 ml-8 text-stone-700">• 策略深度：平衡历史还原与游戏性，地形、兵种、技能搭配形成多元战术，兼顾硬核策略与新手友好</div>
              <div className="mb-2 ml-8 text-stone-700">• 视觉沉浸：写实风格+历史考据级细节，通过服饰、场景、道具还原唐风西域风貌</div>

              <div className="mb-3 text-stone-700 font-semibold">六、人物关系与设定</div>
              <div className="mb-2 ml-4 text-stone-600">（一）核心人物设定</div>
              <div className="mb-2 ml-8 text-stone-700">1. 郭昕 - 孤城坚守的唐军老将</div>
              <div className="mb-2 ml-8 text-stone-700">2. 张议潮 - 义军领袖与收复核心</div>
              <div className="mb-2 ml-8 text-stone-700">3. 李明远 - 民间义士与传承者</div>
              <div className="mb-2 ml-8 text-stone-700">4. 吐迷度 - 异族势力首领（反派）</div>
              <div className="mb-2 ml-8 text-stone-700">5. 韦载 - 朝廷使者</div>

              <div className="mb-2 ml-4 text-stone-600">（二）次要人物设定</div>
              <div className="mb-2 ml-8 text-stone-700">• 赵安：郭昕麾下副将，擅长防御工事搭建</div>
              <div className="mb-2 ml-8 text-stone-700">• 董氏：沙州民间妇人，带领妇女筹集粮草、救治伤员</div>
              <div className="mb-2 ml-8 text-stone-700">• 张怀深：张议潮之侄，义军年轻将领</div>

              <div className="mb-2 ml-4 text-stone-600">（三）剧情推动逻辑</div>
              <div className="mb-2 ml-8 text-stone-700">1. 第一阶段：孤城坚守（前期）</div>
              <div className="mb-2 ml-8 text-stone-700">2. 第二阶段：义军崛起（中期）</div>
              <div className="mb-2 ml-8 text-stone-700">3. 第三阶段：收复失地（后期）</div>
              <div className="mb-2 ml-8 text-stone-700">4. 情感线串联：通过人物互动强化"虽隔绝万里，仍心向大唐"的核心情感</div>
            </div>
          </div>
          <div className="flex justify-center p-3 border-t border-stone-200 bg-stone-50">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-stone-600 hover:text-stone-900 text-sm font-medium py-2 px-6 rounded-full hover:bg-stone-100 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {isExpanded ? '收起内容' : '展开更多'}
            </button>
          </div>
        </div>
      </div>

      {/* Design Sketch Section */}
      <div id="design" className="mb-20 scroll-mt-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Design Sketch</h2>
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
                  src="/images/projects/p6-sketch-1.png"
                  alt="Light and shadow strategy"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">战乱篇</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                1. 放大主体建筑，压缩空间，强化战乱紧迫感；<br />
                2. 火光以亮色与红光聚焦；<br />
                3. 在1、2区增设游戏道具，丰富构图。
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
                  src="/images/projects/p6-sketch-2.png"
                  alt="Composition strategy"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-800">归唐篇</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                1. 主体与建筑分层，三层台基显等级；<br />
                2. 镜头略高，强化凝视；<br />
                3. 左侧筑影，明暗分界，由暗至明。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section - Commented out */}
      {/*
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
      */}

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
  { id: 'design', label: 'Design Sketch' },
  { id: 'gallery', label: 'Gallery' },
];

export default P6Content;
