import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { FADE_IN_SCALE, FADE_IN_OFFSET, FADE_IN_UP, FADE_IN, createTransition } from '../constants/animations';

export const Profile: React.FC = () => {
  return (
    <Section id="profile" className="bg-stone-50 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Image Area - Asymmetric placement */}
        <div className="md:col-span-5 relative">
          <motion.div
            {...FADE_IN_SCALE}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] overflow-hidden rounded-sm relative z-10"
          >
            <img
              src="https://picsum.photos/600/800?random=profile"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          {/* Decorative frame */}
          <motion.div
            {...FADE_IN_OFFSET}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-0 w-full h-full border border-stone-400 -z-0 translate-x-4 translate-y-4"
          />
        </div>

        {/* Text Area */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
          <motion.h2
            {...FADE_IN_UP}
            className="font-serif text-4xl md:text-5xl text-stone-800"
          >
            The Essence of <br /><span className="italic text-wabi-clay">Impermanence</span>
          </motion.h2>

          <motion.div
            {...FADE_IN}
            transition={createTransition(0.2)}
            className="font-sans text-stone-600 leading-loose space-y-6"
          >
            <p>
              I am Akihiro, a multidisciplinary designer based in Kyoto. My work is deeply rooted in the philosophy of Wabi-Sabi—appreciating the beauty that is imperfect, impermanent, and incomplete.
            </p>
            <p>
              In a digital world often obsessed with pixel-perfect sterility, I strive to introduce warmth, texture, and organic flow. I believe that good design should breathe, evolving with its content and its user.
            </p>
          </motion.div>

          <motion.div
            {...FADE_IN}
            transition={createTransition(0.4)}
            className="grid grid-cols-2 gap-6 mt-4 font-serif text-lg text-stone-700"
          >
            <div>
              <h3 className="uppercase text-xs tracking-widest text-stone-400 mb-2 font-sans">Focus</h3>
              <ul>
                <li>Art Direction</li>
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