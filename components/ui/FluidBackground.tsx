import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FluidBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 100, stiffness: 80 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const x1 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-100, 100]);
  const y1 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-100, 100]);

  const x2 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [50, -50]);
  const y2 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [80, -80]);

  const x3 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-150, 150]);
  const y3 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-50, 50]);

  const followerX = useTransform(springX, (x) => x - 250);
  const followerY = useTransform(springY, (y) => y - 250);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      <div className="absolute inset-0 filter blur-[120px]">
        <motion.div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-200/40"
          style={{ x: followerX, y: followerY }}
        />
        <motion.div 
          className="absolute top-[-30%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-rose-200/30"
          style={{ x: x1, y: y1 }}
        />
        <motion.div 
          className="absolute top-[20%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-sky-200/30"
          style={{ x: x2, y: y2 }}
        />
        <motion.div 
          className="absolute bottom-[-20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-lime-200/30"
          style={{ x: x3, y: y3 }}
        />
      </div>
    </div>
  );
};