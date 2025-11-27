import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CustomCursorProps {
  text: string;
  isHoveringBlock: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ text, isHoveringBlock }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 64); // Center the 128px cursor (w-32)
      cursorY.set(e.clientY - 64);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-50 flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      {/* Central Pointer Dot - Visible when outside the text block */}
      <motion.div 
        className="absolute w-1 h-1 bg-white rounded-full z-20 shadow-[0_0_2px_rgba(255,255,255,0.8)]"
        animate={{
          scale: isHoveringBlock ? 0 : 1, // Hide dot when in Lens mode (on text)
          opacity: isHoveringBlock ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 
        Lens/Circle Effect:
        - On Text (isHoveringBlock=true): Large glass lens (Scale 1)
        - Outside Text: Medium circle ring (Scale 0.3) - Increased size
      */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[2px] backdrop-brightness-125 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        animate={{
          scale: isHoveringBlock ? 1 : 0.3, // Increased size when outside
          opacity: isHoveringBlock ? 1 : 0.8, // Slightly more transparent when small
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Floating Translation Text - Only visible when text is present */}
      <AnimatePresence mode="wait">
        {text && (
          <motion.div 
            key={text}
            className="relative z-10 text-white mix-blend-overlay font-serif text-5xl font-light"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};