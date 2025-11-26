import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';
import { createFadeInUp, createFadeIn } from '../constants/animations';

export const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-4xl">
        <motion.p
          {...createFadeInUp(0.2)}
          className="font-sans text-stone-500 tracking-[0.2em] text-sm md:text-base mb-6 uppercase"
        >
          AI Designer &amp; Artist
        </motion.p>

        <div className="font-serif text-5xl md:text-7xl lg:text-9xl leading-tight text-stone-900 mb-12">
          <AnimatedText text="Finding beauty in" delay={0.2} />
          <AnimatedText text="imperfection &amp;" delay={0.6} />
          <AnimatedText text="simplicity." delay={1.0} />
        </div>

        <motion.div
          {...createFadeIn(1.5)}
          className="max-w-md"
        >
          <p className="font-sans text-stone-600 leading-relaxed text-lg">
            Embracing the transient nature of digital experiences.
            Crafting interfaces that feel organic, grounded, and human.
          </p>
        </motion.div>
      </div>

      <motion.div
        {...createFadeIn(2.5)}
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

      {/* Decorative Background Element */}
      <motion.div
        className="absolute right-0 top-1/4 w-64 h-64 bg-wabi-clay/10 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </Section>
  );
};