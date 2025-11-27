import React from 'react';
import { motion } from 'framer-motion';

export const HeroBottom: React.FC = () => {
  return (
    <motion.div 
      className="absolute bottom-8 md:bottom-12 left-0 w-full px-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-end md:items-end text-[10px] md:text-xs tracking-wider font-medium uppercase leading-relaxed opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="mb-4 md:mb-0">
        <p>Based in London</p>
        <p className="text-gray-400">Born in Tokyo</p>
      </div>

      <div className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2 bottom-0 md:bottom-0">
        <p>Design-driven</p>
        <p className="text-gray-400">Creative agency</p>
      </div>

      <div className="text-right">
        <p>Branding, digital</p>
        <p className="text-gray-400">and communications</p>
      </div>
    </motion.div>
  );
};