import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FluidBackground: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 更柔和的弹簧配置，创造更流畅的动画
    const springConfig = { damping: 120, stiffness: 60 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // 主要渐变元素的运动路径
    const x1 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-80, 80]);
    const y1 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-120, 120]);

    const x2 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [100, -100]);
    const y2 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [60, -60]);

    const x3 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-120, 120]);
    const y3 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-80, 80]);

    const x4 = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [60, -60]);
    const y4 = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [100, -100]);

    const followerX = useTransform(springX, (x) => x - 400);
    const followerY = useTransform(springY, (y) => y - 400);

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
            {/* 增强模糊效果，创造更柔和的渐变 */}
            <div className="absolute inset-0 filter blur-[180px]">
                {/* 陶土色大光斑 - 左上角 */}
                <motion.div
                    className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] rounded-full"
                    style={{
                        x: x1,
                        y: y1,
                        background: 'radial-gradient(circle, rgba(160, 120, 85, 0.4) 0%, rgba(160, 120, 85, 0.15) 50%, transparent 70%)'
                    }}
                />

                {/* 苔绿色光斑 - 右侧 */}
                <motion.div
                    className="absolute top-[10%] right-[-25%] w-[65vw] h-[65vw] rounded-full"
                    style={{
                        x: x2,
                        y: y2,
                        background: 'radial-gradient(circle, rgba(138, 154, 91, 0.35) 0%, rgba(138, 154, 91, 0.12) 50%, transparent 70%)'
                    }}
                />

                {/* 温暖米色光斑 - 底部 */}
                <motion.div
                    className="absolute bottom-[-20%] left-[5%] w-[60vw] h-[60vw] rounded-full"
                    style={{
                        x: x3,
                        y: y3,
                        background: 'radial-gradient(circle, rgba(245, 242, 235, 0.5) 0%, rgba(228, 218, 200, 0.25) 50%, transparent 70%)'
                    }}
                />

                {/* 柔和琥珀色光斑 - 右下角 */}
                <motion.div
                    className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] rounded-full"
                    style={{
                        x: x4,
                        y: y4,
                        background: 'radial-gradient(circle, rgba(217, 172, 118, 0.3) 0%, rgba(217, 172, 118, 0.1) 50%, transparent 70%)'
                    }}
                />

                {/* 跟随鼠标的深陶土色光斑 */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
                    style={{
                        x: followerX,
                        y: followerY,
                        background: 'radial-gradient(circle, rgba(160, 120, 85, 0.25) 0%, rgba(160, 120, 85, 0.08) 60%, transparent 80%)'
                    }}
                />

                {/* 额外的柔和石色光斑 - 中央偏左 */}
                <motion.div
                    className="absolute top-[40%] left-[-5%] w-[55vw] h-[55vw] rounded-full"
                    style={{
                        x: useTransform(springX, (x) => x * 0.03),
                        y: useTransform(springY, (y) => y * 0.03),
                        background: 'radial-gradient(circle, rgba(214, 211, 209, 0.3) 0%, rgba(214, 211, 209, 0.1) 50%, transparent 70%)'
                    }}
                />
            </div>
        </div>
    );
};