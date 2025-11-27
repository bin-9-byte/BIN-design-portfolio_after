import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FluidBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms
  // When mouse moves right, blobs move slightly left or right depending on "depth"
  const x1 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-50, 50]);
  const y1 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-50, 50]);

  const x2 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [50, -50]);
  const y2 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [50, -50]);

  const x3 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 100]);
  const y3 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-20, 100]);

  // Mouse Follower Blob transforms
  // Centering a roughly 600px blob (offset by 300px)
  const followerX = useTransform(springX, (x) => x - 300);
  const followerY = useTransform(springY, (y) => y - 300);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Container for the blobs with a heavy blur to merge them */}
      <div className="absolute inset-0 filter blur-[100px] opacity-100">
        
        {/* Mouse Follower Highlight - Dynamic light source */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/30 to-rose-500/30 mix-blend-screen opacity-50"
          style={{ x: followerX, y: followerY }}
        />

        {/* Blob 1: Intense Orange/Red - Primary visual anchor */}
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 mix-blend-screen opacity-80"
          style={{ x: x1, y: y1 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Blob 2: Deep Blue/Cyan - Contrast */}
        <motion.div 
          className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-bl from-blue-700 via-indigo-800 to-cyan-700 mix-blend-screen opacity-90"
          style={{ x: x2, y: y2 }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Blob 3: Bright Highlight - Moves more dynamically with mouse */}
        <motion.div 
          className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-orange-400 via-pink-500 to-purple-500 mix-blend-screen opacity-60"
          style={{ x: x3, y: y3 }}
          animate={{
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Blob 4: Bottom right anchor - Darker */}
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900 mix-blend-screen opacity-50"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Overlay gradient to darken edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};