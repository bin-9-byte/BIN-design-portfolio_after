import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollHintProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const ScrollHint: React.FC<ScrollHintProps> = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  // 检测Projects部分是否在视口中
  useEffect(() => {
    const checkIfInView = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isInViewport);
      }
    };

    // 初始检查
    checkIfInView();
    
    // 滚动时检查
    window.addEventListener('scroll', checkIfInView, { passive: true });
    return () => window.removeEventListener('scroll', checkIfInView);
  }, []);

  // 检测Contact部分是否在视口中
  useEffect(() => {
    const checkIfContactInView = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsContactInView(isInViewport);
      }
    };

    // 初始检查
    checkIfContactInView();
    
    // 滚动时检查
    window.addEventListener('scroll', checkIfContactInView, { passive: true });
    return () => window.removeEventListener('scroll', checkIfContactInView);
  }, []);

  // 当Contact部分进入视口时，逐渐隐藏提示
  useEffect(() => {
    if (isContactInView && isVisible) {
      // 延迟一点时间，让用户看到过渡效果
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
  }, [isContactInView, isVisible]);

  // 当Projects部分进入视口后，延迟显示提示
  useEffect(() => {
    if (isInView && !isVisible && !isContactInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // 延迟1.5秒显示
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isVisible, isContactInView]);

  // 监听容器滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        // 延迟隐藏提示，让用户看到提示后再消失
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [containerRef, hasScrolled]);

  // 离开Projects部分时重置状态
  useEffect(() => {
    if (!isInView) {
      setIsVisible(false);
      setHasScrolled(false);
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1], // 自定义贝塞尔曲线，更丝滑
            staggerChildren: 0.1
          }}
          className="md:hidden fixed z-[60] flex justify-center items-center"
          style={{ 
            zIndex: 60,
            bottom: '24px',
            left: '0',
            right: '0',
            margin: '0 auto'
          }}
        >
          {/* 磨砂玻璃背景效果 */}
          <motion.div 
            className="bg-white/10 backdrop-blur-2xl rounded-full shadow-2xl border border-white/20 px-6 py-3 flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop", 
                ease: [0.4, 0, 0.2, 1] // 更自然的缓动函数
              }}
            >
              <ChevronLeft size={18} className="text-stone-700" />
            </motion.div>
            <motion.span 
              className="text-sm text-stone-700 font-medium whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              左右滑动查看更多
            </motion.span>
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop", 
                ease: [0.4, 0, 0.2, 1] // 更自然的缓动函数
              }}
            >
              <ChevronRight size={18} className="text-stone-700" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};