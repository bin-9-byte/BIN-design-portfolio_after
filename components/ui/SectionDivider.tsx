import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'line' | 'fade' | 'symbol';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'fade',
  className = ''
}) => {
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const symbolVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 flex items-center justify-center ${className}`}>
      {variant === 'line' && (
        <motion.div 
          className="w-full h-px bg-stone-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={lineVariants}
        />
      )}

      {variant === 'fade' && (
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={lineVariants}
        />
      )}

      {variant === 'symbol' && (
        <div className="relative w-full flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineVariants}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
          </motion.div>
          <motion.div 
            className="relative bg-wabi-paper px-4 text-stone-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={symbolVariants}
          >
            ✦
          </motion.div>
        </div>
      )}
    </div>
  );
};
