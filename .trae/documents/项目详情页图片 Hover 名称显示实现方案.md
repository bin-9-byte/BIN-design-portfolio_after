## 背景与现状
- 技术栈：React + Vite，Tailwind 通过 CDN 注入（`index.html`）；动效用 `framer-motion`。
- 项目详情页为模态层（`components/ProjectDetail.tsx:18-30`），内容按项目 id 派发到各详情组件（`components/projectContents/index.ts`）。
- 图片数据源在 `constants.ts:10-118`，`Project.images` 目前为 `string[]`（`types.ts:9`）。各详情组件中以 `map(project.images)` 渲染原生 `img`（如 `components/projectContents/DefaultProjectContent.tsx:68-89`、`components/projectContents/p2.tsx:219-241`）。

## 目标与效果
- 为详情页中的所有图片添加 hover 效果：悬浮时在图片下沿淡入一条半透明信息带，显示“图片名称”。
- 风格与审美：遵循现有配色与排版，使用 `stone` 色系、细腻渐变与轻微玻璃模糊；文本采用小号 `font-sans`、适度字距，整体克制、优雅。

## 技术方案
- 统一包装图片容器：为每张图片外层添加 `group relative rounded-2xl overflow-hidden` 容器；`img` 轻微放大 `group-hover:scale-[1.02]`。
- 叠加信息带：在容器底部加入绝对定位的渐变遮罩 `bg-gradient-to-t from-stone-900/70 to-transparent`，并在 hover 时淡入（`opacity-0 group-hover:opacity-100 transition-opacity`）。文本样式：`font-sans text-[13px] tracking-widest text-stone-100`。
- 名称来源策略：
  1) 扩展 `Project.images` 支持对象：`{ src: string; name?: string }`；
  2) 向下兼容 `string`；若未提供 `name`，回退为：`项目标题 + 图序号`（如“Find & Spot – 图 1”），或由文件名去扩展名的人性化格式（`p2-0.jpg` → `图 1`）。
- 辅助方法：新增 `getImageMeta(img, project, idx)`，统一返回 `{ src, name }`，封装兼容与回退逻辑。

## 具体改动文件
- `types.ts:3-14`：将 `images: string[]` 改为 `images: (string | { src: string; name?: string })[]`，并导出 `ImageItem` 类型。
- `constants.ts:10-118`：保持现有字符串数据不变；允许后续逐步为关键图片补充 `name`（可选）。
- 新增 `components/utils/imageMeta.ts`：实现 `getImageMeta(img, project, idx)` 与文件名转友好名的工具函数。
- 更新所有使用 `project.images.map(...)` 的详情组件：
  - `components/projectContents/DefaultProjectContent.tsx:68-89`
  - `components/projectContents/p1.tsx` ～ `p9.tsx` 中的 gallery 段落（如 `p2.tsx:219-241`）
  替换为统一的包装结构：
  - 外层 `motion.div` 保持原动效；内部改为 `div.group.relative` 容器，包含 `img` 与信息带。

## 交互与样式细节
- 动效：信息带淡入时间 `duration-300`，`ease` 使用项目默认（`constants/animations.ts` 中的 `EASE_DEFAULT` 不强绑定，仅用 CSS 过渡）；与现有入场动效互不冲突。
- 文本内容：优先使用 `name`；无 `name` 时显示“`{project.title} – 图 {idx+1}`”。
- 可访问性：
  - `img.alt` 同步为名称或回退文案；
  - 信息带文本使用 `aria-hidden="true"` 避免重复读屏；
  - 保持现有 `decoding="async"`、`loading="lazy"`。

## 兼容与回退
- 对现有 `string[]` 数据零破坏：所有页面立即获得 hover 与名称的回退显示。
- 逐步增强：未来若为某些图片提供更精确的 `name`，无需改组件，仅改数据。

## 验证与测试
- 启动开发服务，进入任一项目详情页，逐一 hover 画廊图片，检查：
  - 渐变信息带是否与边角圆角契合；
  - 文本是否清晰、对比度足够；
  - 动效是否流畅，未与现有 `framer-motion` 入场冲突；
  - 移动端（触控）无需 hover；信息带默认隐藏。
- 代码自测：确保所有 `pN.tsx` 与 `DefaultProjectContent.tsx` 中的 map 更新一致。

## 备选方案
- 若不修改类型：仅基于文件名/序号生成名称，不支持自定义；实现更快，但语义性较弱。

请确认以上方案；确认后我将按上述文件逐步实现并在本地预览中验证效果。