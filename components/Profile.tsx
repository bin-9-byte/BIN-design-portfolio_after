import React from 'react';
import { Section } from './ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE_DEFAULT, DURATIONS } from '../constants/animations';
import { FADE_IN_SCALE, FADE_IN_OFFSET, FADE_IN_UP, FADE_IN, createTransition } from '../constants/animations';
import { zIndex } from "../constants/zIndex";

export const Profile: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgX = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const frameX = useTransform(scrollYProgress, [0, 1], [4, 8]);
  const frameY = useTransform(scrollYProgress, [0, 1], [4, 8]);
  return (
    <Section id="profile" className="bg-transparent min-h-[80vh] flex items-center">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Image Area - Asymmetric placement */}
        <div className="md:col-span-5 relative">
          <motion.div
            {...FADE_IN_SCALE}
            transition={{ duration: DURATIONS.slow, ease: EASE_DEFAULT }}
            className="aspect-[3/4] overflow-hidden rounded-2xl relative"
            style={{ zIndex: zIndex.BASE_CONTENT, willChange: 'transform', x: imgX, y: imgY }}
          >
            <img
              src='/images/Profile.jpg'
              alt="Profile"
              width={900}
              height={1200}
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          {/* Decorative frame */}
          <motion.div
            {...FADE_IN_OFFSET}
            transition={{ duration: DURATIONS.slow, delay: 0.2, ease: EASE_DEFAULT }}
            className="absolute top-0 right-0 w-full h-full border border-stone-400 translate-x-4 translate-y-4 rounded-2xl"
            style={{ zIndex: zIndex.BACKGROUND_ELEMENTS, willChange: 'transform', x: frameX, y: frameY }}
          />
        </div>

        {/* Text Area */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
          <motion.h2
            {...FADE_IN_UP}
            className="font-serif text-4xl md:text-5xl text-stone-800"
            style={{ willChange: 'transform, opacity' }}
          >
            Structured Aesthetics in <br /><span className="italic text-wabi-clay">Generative World</span>
          </motion.h2>

          <motion.div
            {...FADE_IN}
            transition={createTransition(0.2)}
            className="font-sans text-stone-600 leading-loose space-y-6"
            style={{ willChange: 'opacity' }}
          >
            <p>
              Hello! 我是马斌，一名设计师。
            </p>
            <p>
              求学时，我潜心钻研物理空间的规律；如今，我在数字空间中突破边界。设计不止关乎“how things look”，更关乎“how things work”。
            </p>
            <p>
              我不只是“指令生成”图像，而是“构建”设计概念。AI对我而言是原材料，通过严谨的设计哲学进行筛选与提炼，最终创造出的作品，绝非“生成”那么简单——而是真正的“设计”。
            </p>
          </motion.div>

          <motion.div
            {...FADE_IN}
            transition={createTransition(0.4)}
            className="grid grid-cols-2 gap-6 mt-4 font-serif text-lg text-stone-700"
            style={{ willChange: 'opacity, transform' }}
          >
            <div>
              <h3 className="uppercase text-xs tracking-widest text-stone-400 mb-2 font-sans">Focus</h3>
              <ul>
                <li>AI Design</li>
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase text-xs tracking-widest text-stone-400 mb-2 font-sans">Tools</h3>
              <ul>
                <li>Figma</li>
                <li>React</li>
                <li>WebGL</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
