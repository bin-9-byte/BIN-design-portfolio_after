import React from 'react';
import { motion } from 'framer-motion';

interface HeroTextProps {
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

interface WordProps {
  text: string;
  trans: string;
  className?: string;
  onHover: (text: string) => void;
}

// Extract helper components outside to prevent re-creation on every render
const Word: React.FC<WordProps> = ({ text, trans, onHover, className = "" }) => (
  <span 
    className={`inline-block cursor-none transition-opacity duration-300 hover:opacity-20 ${className}`}
    onMouseEnter={() => onHover(trans)}
    onMouseLeave={() => onHover("")}
  >
    {text}
  </span>
);

const Spacer = () => <span className="inline-block w-[0.2em]">&nbsp;</span>;

export const HeroText: React.FC<HeroTextProps> = ({ onHover, onHoverBlock }) => {
  return (
    <div 
      className="relative text-center z-20 mix-blend-normal cursor-none"
      onMouseEnter={() => onHoverBlock(true)}
      onMouseLeave={() => onHoverBlock(false)}
    >
      <motion.h1 
        className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[1.05] md:leading-[1.05]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="block">
          <Word text="We" trans="我们" onHover={onHover} />
          <Spacer />
          <Word text="are" trans="" onHover={onHover} />
          <Spacer />
          <Word text="a" trans="" onHover={onHover} />
          <Spacer />
          <Word text="brand" trans="品牌" onHover={onHover} />
        </div>
        
        <div className="block">
          <Word text="of" trans="" onHover={onHover} />
          <Spacer />
          <Word text="collective" trans="集体" onHover={onHover} />
        </div>
        
        <div className="block">
          <Word text="creativity" trans="创意" onHover={onHover} />
        </div>
      </motion.h1>
      
      {/* Decorative circle element */}
      <motion.div 
        className="hidden md:block absolute -right-4 -top-12 w-24 h-24 rounded-full border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, delay: 0.8, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
      />
    </div>
  );
};