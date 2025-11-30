import React from 'react';
import { motion } from 'framer-motion';
import { EASE_DEFAULT, DURATIONS } from '../constants/animations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] text-stone-900 border-t border-stone-200 font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10">
        {/* Top Info Section - 4 Columns */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32"> */}
          {/* Column 1: Contact */}
          {/* <div className="space-y-8"> */}
            {/* <h3 className="font-bold text-sm tracking-wide">Contact</h3> */}
            {/* <div className="space-y-1 text-sm leading-relaxed text-stone-600"> */}
              {/* <p>MaBin</p> */}
              {/* <p>Beijing, China</p> */}
            {/* </div> */}
            {/* <div className="space-y-1 text-sm leading-relaxed pt-4 text-stone-600"> */}
              {/* <p>hello@mabin.design</p> */}
            {/* </div> */}
          {/* </div> */}

          {/* Column 2: Services */}
          {/* <div className="space-y-8"> */}
            {/* <h3 className="font-bold text-sm tracking-wide">Services</h3> */}
            {/* <div className="space-y-4 text-sm leading-relaxed text-stone-600"> */}
              {/* <p>AI Design</p> */}
              {/* <p>UI/UX Design</p> */}
              {/* <p>Brand Identity</p> */}
              {/* <p>WebGL Development</p> */}
            {/* </div> */}
          {/* </div> */}

          {/* Column 3: Philosophy */}
          {/* <div className="space-y-8"> */}
            {/* <h3 className="font-bold text-sm tracking-wide">Philosophy</h3> */}
            {/* <div className="space-y-4 text-sm leading-relaxed text-stone-600"> */}
              {/* <p> */}
                {/* Appreciating the beauty that is imperfect, impermanent, and incomplete. */}
              {/* </p> */}
            {/* </div> */}
          {/* </div> */}

          {/* Column 4: Connect */}
          {/* <div className="space-y-8"> */}
            {/* <h3 className="font-bold text-sm tracking-wide">Connect</h3> */}
            {/* <p className="text-sm leading-relaxed text-stone-600"> */}
              {/* Always open to discussing new projects and creative collaborations. */}
            {/* </p> */}
          {/* </div> */}
        {/* </div> */}

        {/* Middle Links Section */}
        <div className="flex justify-between items-center text-xs font-bold mb-20">
          <div className="text-stone-500 font-normal">
            <span>©All Rights Reserved</span>
          </div>
          <div className="flex gap-6 text-stone-500 font-normal">
            <a href="#" className="hover:text-stone-900 transition-colors">Accessibility</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Bottom Logo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Circle */}
          <div className="aspect-square w-full flex items-center justify-center overflow-hidden group">
            <motion.div
              className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              whileHover={{ rotate: 90 }}
              transition={{ duration: DURATIONS.medium, ease: EASE_DEFAULT }}
              style={{ willChange: 'transform', contain: 'layout paint', transformOrigin: '50% 50%', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            >
              {/* 微弱光晕 */}
              <div className="pointer-events-none absolute inset-0 rounded-full blur-[14px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: 'radial-gradient(closest-side, rgba(160,120,85,0.25), transparent 70%)' }} />
              <span className="text-[#FAFAFA] font-serif text-6xl md:text-8xl italic tracking-tight">ma·binary</span>
            </motion.div>
          </div>

          {/* Right: Box with cllv. */}
          <div className="aspect-square w-full border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl italic text-stone-900">bin.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
