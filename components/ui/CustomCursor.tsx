import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { zIndex } from "../../constants/zIndex";

interface CustomCursorProps {
  text: string;
  isHoveringBlock: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ text, isHoveringBlock }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouseX, springConfig),
    y: useSpring(mouseY, springConfig),
  };

  const pointerScale = useSpring(1, springConfig);
  const textScale = useSpring(1, springConfig);
  const textOpacity = useSpring(1, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 64);
      mouseY.set(e.clientY - 64);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    pointerScale.set(isHoveringBlock ? 0 : 1);
    textScale.set(text ? 1 : 0);
    textOpacity.set(text ? 1 : 0);
  }, [isHoveringBlock, text, pointerScale, textScale, textOpacity]);

  return (
    <motion.div
      style={{ x: smoothMouse.x, y: smoothMouse.y, zIndex: zIndex.CUSTOM_CURSOR }}
      className={`fixed top-0 left-0 w-32 h-32 pointer-events-none flex items-center justify-center`}
    >
      {/* Center pointer dot */}
      <motion.div
        style={{ scale: pointerScale, zIndex: zIndex.PROJECTS_SCROLL_BUTTONS }}
        className={`absolute w-1 h-1 bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)]`}
      />

      {/* Lens / Circle effect */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-[4px] backdrop-brightness-125 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        animate={{
          scale: isHoveringBlock ? 1 : 0.3,
          opacity: isHoveringBlock ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Floating translation text */}
      <motion.div
        style={{ scale: textScale, opacity: textOpacity, zIndex: zIndex.PROJECT_CARD_HOVER }}
        className={`relative text-stone-800 mix-blend-normal font-serif text-4xl font-normal`}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};