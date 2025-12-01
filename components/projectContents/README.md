# 项目详情页内容管理系统

这个系统允许为每个项目创建独立的内容组件，实现个性化的项目详情页面排版和内容展示。

## 文件结构

```
components/
├── ProjectDetail.tsx (主组件，负责布局和导航)
├── projectContents/ (项目内容组件目录)
│   ├── index.ts (导出所有项目内容组件)
│   ├── ProjectContent.tsx (基础内容组件接口)
│   ├── p1.tsx (CHAGEE和萌友们项目的内容组件)
│   ├── DefaultProjectContent.tsx (默认项目内容组件)
│   └── ... (其他项目的内容组件)
```

## 如何创建新的项目内容组件

1. 在 `components/projectContents/` 目录下创建一个新的文件，例如 `p2.tsx`
2. 从 `./ProjectContent` 导入 `ProjectContentProps` 接口
3. 创建一个接收 `project` 参数的React组件
4. 在组件中定义项目的sections和内容布局
5. 为组件添加id和sections属性

示例代码：

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectContentProps } from './ProjectContent';
import { createFadeInUp, EASE_DEFAULT, DURATIONS } from '../../constants/animations';

const P2Content: React.FC<ProjectContentProps> = ({ project }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <>
      {/* 项目内容 */}
      <motion.div
        id="overview"
        variants={FADE_IN_UP}
        initial="hidden"
        animate="visible"
        className="w-full aspect-video bg-stone-200 mb-16 overflow-hidden rounded-3xl scroll-mt-20"
      >
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          width={1280}
          height={720}
          decoding="async"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* 更多内容... */}
    </>
  );
};

// 为组件添加id和sections属性
(P2Content as any).id = 'p2';
(P2Content as any).sections = sections;

export default P2Content;
```

## 如何注册新的项目内容组件

在 `components/projectContents/index.ts` 文件中：

1. 导入新创建的组件
2. 在 `projectContentComponents` 对象中添加映射关系

```tsx
import P2Content from './p2';

export const projectContentComponents: Record<string, ProjectContentComponent> = {
  'p1': P1Content as ProjectContentComponent,
  'p2': P2Content as ProjectContentComponent, // 新增
  // 其他项目...
};
```

## 自定义项目内容

每个项目内容组件可以完全自定义：

- 不同的sections（侧边栏导航项）
- 不同的布局结构
- 不同的内容展示方式
- 不同的动画效果
- 不同的交互元素

## 默认内容组件

如果没有为特定项目创建自定义内容组件，系统将使用 `DefaultProjectContent` 组件作为默认选项。

## 注意事项

1. 每个内容组件必须实现 `ProjectContentProps` 接口
2. 确保为每个组件添加 `id` 和 `sections` 属性
3. 所有section的id必须在组件内唯一，并与侧边栏导航匹配
4. 使用 `scroll-mt-20` 类确保滚动到section时正确偏移（考虑固定导航栏）