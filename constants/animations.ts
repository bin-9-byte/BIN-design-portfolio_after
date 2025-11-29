// ============================================================================
// 动画配置常量
// ============================================================================
// 统一管理 Framer Motion 动画预设，消除重复代码
// 所有动画配置遵循 Wabi-Sabi 设计理念：缓慢、自然、优雅
// ============================================================================

import { Variants } from 'framer-motion';

// ----------------------------------------------------------------------------
// 通用动画参数
// ----------------------------------------------------------------------------

/** 统一的缓动曲线，保持全站动画一致性 */
export const EASE_DEFAULT = 'easeInOut' as const;

/** 标准时长集合，避免魔法数字 */
export const DURATIONS = {
    quick: 0.25,
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
    breath: 2
} as const;

/** 标准视口配置：动画只触发一次，提前 10% 触发 */
export const VIEWPORT_ONCE = {
    once: true,
    margin: '-10%'
} as const;

/** 简单视口配置：动画只触发一次 */
export const VIEWPORT_ONCE_SIMPLE = {
    once: true
} as const;

// ----------------------------------------------------------------------------
// 淡入动画系列
// ----------------------------------------------------------------------------

/** 基础淡入 */
export const FADE_IN = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    whileInView: { opacity: 1 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

/** 淡入 + 向上滑动 */
export const FADE_IN_UP = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

/** 淡入 + 向上滑动（大距离） */
export const FADE_IN_UP_LARGE = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_ONCE
} as const;

/** 淡入 + 向右滑动 */
export const FADE_IN_RIGHT = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

/** 淡入 + 向左滑动 */
export const FADE_IN_LEFT = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

// ----------------------------------------------------------------------------
// 缩放动画系列
// ----------------------------------------------------------------------------

/** 淡入 + 轻微缩放 */
export const FADE_IN_SCALE = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

/** 淡入 + 位移（装饰性边框效果） */
export const FADE_IN_OFFSET = {
    initial: { opacity: 0, x: 20, y: 20 },
    whileInView: { opacity: 1, x: 10, y: 10 },
    viewport: VIEWPORT_ONCE_SIMPLE
} as const;

// ----------------------------------------------------------------------------
// 复杂动画变体（用于容器和子元素交错动画）
// ----------------------------------------------------------------------------

/**
 * 交错容器动画变体
 * @param delayChildren 子元素延迟时间
 */
export const createStaggerContainer = (delayChildren = 0): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: delayChildren + 0.04
        }
    }
});

/**
 * 交错子元素动画变体（弹簧效果）
 */
export const STAGGER_CHILD: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100
        }
    }
};

// ----------------------------------------------------------------------------
// 时间配置工具函数
// ----------------------------------------------------------------------------

/**
 * 创建带延迟的过渡配置
 * @param delay 延迟时间（秒）
 * @param duration 动画时长（秒）
 */
export const createTransition = (delay = 0, duration = DURATIONS.slow) => ({
    duration,
    delay,
    ease: EASE_DEFAULT
} as const);

/**
 * 创建带延迟的淡入效果
 * @param delay 延迟时间（秒）
 */
export const createFadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: createTransition(delay, 1)
});

/**
 * 创建带延迟的淡入上滑效果
 * @param delay 延迟时间（秒）
 */
export const createFadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: createTransition(delay)
});
