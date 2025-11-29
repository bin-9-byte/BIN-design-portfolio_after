```
/* =============================================================================
   开发规范（动画 / 层级 / 滚动） — Komorebi Portfolio
   -----------------------------------------------------------------------------
   动画
   - 统一缓动：在 `constants/animations.ts` 使用 `EASE_DEFAULT = easeInOut`
   - 尊重偏好：高频动效使用 `useReducedMotion()` 做降级
   - 性能提示：仅用 transform/opacity 驱动，并按需添加 `will-change`

   层级
   - 只使用 `constants/zIndex.ts` 的语义层级，不写魔法数
   - 叠层关系：移动菜单(70) > 导航(50) ≥ 光标(50) > 内容(1) > 背景(-1)
   - 避免类 `-z-0` 与内联 z-index 冲突

   滚动
   - 全局平滑：`body { scroll-behavior: smooth; scrollbar-gutter: stable both-edges }`
   - 程序化滚动不设 `behavior`，容器用 `scroll-smooth`
   - 横向列表：`overscroll-behavior-x: contain` + `.momentum-scroll`(iOS)

   可访问
   - 触控设备禁用或降级自定义光标
   - 保持键盘可达性与语义标签

   风格
   - 函数短小、数据驱动、消除特例；抽象集中在常量/工具
   ============================================================================= */
```

# Z-Index Hierarchy

This document outlines the z-index stacking order for the entire application, managed in `constants/zIndex.ts`.

| Layer Name                | Z-Index Value | Component(s)                                       | Description                                                                 |
|---------------------------|---------------|----------------------------------------------------|-----------------------------------------------------------------------------|
| `BACKGROUND_ELEMENTS`     | -1            | `Hero.tsx`, `Profile.tsx`                          | Decorative shapes and elements that sit behind all other content.           |
| `BASE_CONTENT`            | 1             | `Hero.tsx`, `Profile.tsx`                          | Default stacking level for standard page content.                           |
| `PROJECT_CARD_HOVER`      | 10            | `CustomCursor.tsx`, `ProjectDetail.tsx`            | Elements that appear on hover, like the project card's "View" text.         |
| `PROJECTS_SCROLL_BUTTONS` | 20            | `Projects.tsx`, `CustomCursor.tsx`                 | Scroll buttons for project carousels.                                       |
| `NAVIGATION_MOBILE_MENU`  | 40            | `Navigation.tsx`                                   | The full-screen menu overlay on mobile devices.                             |
| `NAVIGATION`              | 50            | `Navigation.tsx`                                   | The main site navigation bar, always visible at the top.                    |
| `CUSTOM_CURSOR`           | 50            | `CustomCursor.tsx`                                 | The custom cursor, which needs to be above most elements.                   |
| `PROJECT_DETAIL`          | 60            | `ProjectDetail.tsx`                                | The modal/overlay for displaying detailed project information.              |
