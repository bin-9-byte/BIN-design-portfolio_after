import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export const FluidBackground: React.FC = () => {
    const reduce = useReducedMotion();
    const isCoarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const enabled = !reduce && !isCoarse;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 更柔和的弹簧配置，创造更流畅的动画
    const springConfig = { damping: 120, stiffness: 60 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // 主要渐变元素的运动路径
    const W = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const H = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const amp = enabled ? 1 : 0.45;

    const x1 = useTransform(springX, [0, W], [-80 * amp, 80 * amp]);
    const y1 = useTransform(springY, [0, H], [-120 * amp, 120 * amp]);

    const x2 = useTransform(springX, [0, W], [100 * amp, -100 * amp]);
    const y2 = useTransform(springY, [0, H], [60 * amp, -60 * amp]);

    const x3 = useTransform(springX, [0, W], [-120 * amp, 120 * amp]);
    const y3 = useTransform(springY, [0, H], [-80 * amp, 80 * amp]);

    const x4 = useTransform(springX, [0, W], [60 * amp, -60 * amp]);
    const y4 = useTransform(springY, [0, H], [100 * amp, -100 * amp]);

    const followerX = useTransform(springX, (x) => x - 400 * amp);
    const followerY = useTransform(springY, (y) => y - 400 * amp);

    useEffect(() => {
        if (!enabled) return;
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY, enabled]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
            {/* 增强模糊效果，创造更柔和的渐变 */}
            <div className="absolute inset-0 filter blur-[160px]">
                {/* 陶土色大光斑 - 左上角 */}
                <motion.div
                    className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] rounded-full"
                    style={{
                        x: x1,
                        y: y1,
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(160, 120, 85, 0.32) 0%, rgba(160, 120, 85, 0.12) 50%, transparent 70%)'
                    }}
                />

                {/* 苔绿色光斑 - 右侧 */}
                <motion.div
                    className="absolute top-[10%] right-[-25%] w-[65vw] h-[65vw] rounded-full"
                    style={{
                        x: x2,
                        y: y2,
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(138, 154, 91, 0.28) 0%, rgba(138, 154, 91, 0.1) 50%, transparent 70%)'
                    }}
                />

                {/* 温暖米色光斑 - 底部 */}
                <motion.div
                    className="absolute bottom-[-20%] left-[5%] w-[60vw] h-[60vw] rounded-full"
                    style={{
                        x: x3,
                        y: y3,
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(245, 242, 235, 0.4) 0%, rgba(228, 218, 200, 0.2) 50%, transparent 70%)'
                    }}
                />

                {/* 柔和琥珀色光斑 - 右下角 */}
                <motion.div
                    className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] rounded-full"
                    style={{
                        x: x4,
                        y: y4,
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(217, 172, 118, 0.24) 0%, rgba(217, 172, 118, 0.08) 50%, transparent 70%)'
                    }}
                />

                {/* 跟随鼠标的深陶土色光斑 */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
                    style={{
                        x: followerX,
                        y: followerY,
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(160, 120, 85, 0.22) 0%, rgba(160, 120, 85, 0.07) 60%, transparent 80%)'
                    }}
                />

                {/* 额外的柔和石色光斑 - 中央偏左 */}
                <motion.div
                    className="absolute top-[40%] left-[-5%] w-[55vw] h-[55vw] rounded-full"
                    style={{
                        x: useTransform(springX, (x) => x * 0.03),
                        y: useTransform(springY, (y) => y * 0.03),
                        willChange: 'transform',
                        background: 'radial-gradient(circle, rgba(214, 211, 209, 0.3) 0%, rgba(214, 211, 209, 0.1) 50%, transparent 70%)'
                    }}
                />
            </div>
        </div>
    );
};
