import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { zIndex } from "../constants/zIndex";
import { createFadeInUp, createFadeIn } from '../constants/animations';

const FADE_IN_UP = createFadeInUp();

interface HeroProps {
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

const Word: React.FC<{ text: string; trans: string; onHover: (text: string) => void; }> = ({ text, trans, onHover }) => (
  <span
    className="inline-block cursor-none transition-opacity duration-300 hover:opacity-20"
    onMouseEnter={() => onHover(trans)}
    onMouseLeave={() => onHover("")}
  >
    {text}
  </span>
);

const Spacer = () => <span className="inline-block w-[0.2em]">&nbsp;</span>;

export const Hero: React.FC<HeroProps> = ({ onHover, onHoverBlock }) => {
  return (
    <Section id="home" className="min-h-screen flex flex-col justify-center relative">
      <div
        className="max-w-4xl"
      >
        <motion.p
          variants={createFadeInUp(0.2)}
          initial="hidden"
          animate="visible"
          className="font-sans text-stone-500 tracking-[0.2em] text-sm md:text-base mb-6 uppercase"
        >
          AI Designer & Artist
        </motion.p>

        <div
          className="font-serif text-5xl md:text-7xl lg:text-9xl leading-tight text-stone-900 mb-12"
          onMouseEnter={() => onHoverBlock(true)}
          onMouseLeave={() => onHoverBlock(false)}
        >
          <div className="block">
            <Word text="Welcome" trans="欢迎" onHover={onHover} /><Spacer />
            <Word text="to" trans="来到" onHover={onHover} /><Spacer />
          </div>
          <div className="block">
            <Word text="my" trans="我的" onHover={onHover} /><Spacer />
            <Word text="&" trans="^_^" onHover={onHover} />
          </div>
          <div className="block">
            <Word text="portfolio." trans="世界" onHover={onHover} />
          </div>
        </div>

        <motion.div
          variants={createFadeIn(1.5)}
          initial="hidden"
          animate="visible"
          className="max-w-md"
        >
          <p className="font-sans text-stone-600 leading-relaxed text-lg">
            Embracing the transient nature of digital experiences.
            Crafting interfaces that feel organic, grounded, and human.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={createFadeIn(2.5)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest text-stone-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-stone-400 w-5 h-5" />
        </motion.div>
      </motion.div>
    </Section>
  );
};
