import { Project } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Portfolio', href: '#home' },
  { name: 'Profile', href: '#profile' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#vibecoding' },
  { name: 'Contact', href: '#contact' },
];

export interface VibeItem {
  id: string;
  title: string;
  category: string;
  group: 'coding' | 'art' | 'tools' | 'experiments';
  thumbnailUrl: string;
  year: string;
  link?: string;
  type: 'link' | 'doc';
  description?: string;
}

export const VIBE_ITEMS: VibeItem[] = [
  {
    id: 'v1',
    title: '交互式数据可视化',
    category: 'Creative Coding',
    group: 'coding',
    thumbnailUrl: '/images/projects/p9-project-1.png',
    year: '2023',
    type: 'link',
    link: 'https://codepen.io',
    description: 'Processing / p5.js experiments'
  },
  {
    id: 'v2',
    title: '生成艺术实验',
    category: 'Generative Art',
    group: 'art',
    thumbnailUrl: '/images/projects/p9-project-2.png',
    year: '2023',
    type: 'doc',
    link: '#',
    description: 'Algorithms and aesthetics'
  },
  {
    id: 'v3',
    title: '创意小工具',
    category: 'Tools',
    group: 'tools',
    thumbnailUrl: '/images/projects/p9-project-3.png',
    year: '2024',
    type: 'link',
    link: '#',
    description: 'Efficiency boosters'
  },
  {
    id: 'v4',
    title: '设计系统探索',
    category: 'System Design',
    group: 'experiments',
    thumbnailUrl: '/images/projects/p9-project-4.png',
    year: '2024',
    type: 'doc',
    link: '#',
    description: 'Atomic design principles'
  },
  {
    id: 'v5',
    title: '交互原型',
    category: 'Prototyping',
    group: 'experiments',
    thumbnailUrl: '/images/projects/p9-project-5.png',
    year: '2023',
    type: 'link',
    link: '#',
    description: 'Framer / Principle demos'
  },
  {
    id: 'v6',
    title: '趣味项目',
    category: 'Experiments',
    group: 'coding',
    thumbnailUrl: '/images/projects/p9-project-6.png',
    year: '2024',
    type: 'link',
    link: '#',
    description: 'Just for fun'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'CHAGEE和萌友们',
    category: 'AI风格化设计',
    group: 'aigc',
    thumbnailUrl: '/images/projects/p1-thumbnail.png',
    images: [
      { src: '/images/projects/p1-0.png', name: '萌友-66' },
      { src: '/images/projects/p1-1.png', name: '萌友-kuku' },
      { src: '/images/projects/p1-2.png', name: '萌友-33 一娃 小5 腊八' },
      { src: '/images/projects/p1-3.png', name: '萌友-nini' },
      { src: '/images/projects/p1-4.png', name: '萌友-lucky' },
      { src: '/images/projects/p1-5.png', name: '萌友-肉桂' },
      { src: '/images/projects/p1-6.png', name: '萌友-urus' },
      { src: '/images/projects/p1-7.png', name: '萌友-coconut' }
    ],
    description: '在小程序上线宠物季DIY专属宠物杯的活动，需要AIGC实现宠物风格化，提供了目标风格图片。主要负责整个流程搭建，风格调试，批量验证。',
    year: '2025',
    role: 'AI Designer',
    client: 'CHAGEE'
  },
  {
    id: 'p2',
    title: 'Find & Spot',
    category: 'UI设计',
    group: 'product',
    thumbnailUrl: '/images/projects/p2-thumbnail.png',
    images: [
      { src: '/images/projects/p2-1.png', name: 'play with nimo - 小丑鱼' },
      { src: '/images/projects/p2-2.png', name: 'sakura running - 樱花' },
      { src: '/images/projects/p2-3.png', name: 'Christmas - 圣诞' },
      { src: '/images/projects/p2-4.png', name: 'bathtub Soak - 浴缸泡澡' }
    ],
    description: 'A collection of ceramic tableware celebrating the imperfections of hand-molding. Each piece is unique, reflecting the wabi-sabi philosophy.',
    year: '2024',
    role: 'UI Designer',
    client: 'Amber Moblie'
  },
  {
    id: 'p3',
    title: 'Photographs',
    category: '摄影作品',
    group: 'creative',
    thumbnailUrl: '/images/projects/p3-thumbnail.jpg',
    images: ['/images/projects/p3-0.jpg', '/images/projects/p3-1.jpg'],
    description: 'Rebranding for a heritage tea shop in Kyoto. We utilized textured paper stocks and embossing to create a tactile brand experience.',
    year: 'Every year',
    role: 'Life Observer',
    client: 'Myself'
  },
  {
    id: 'p4',
    title: '筑梦岛-乙女风格模型',
    category: 'AI模型训练',
    group: 'aigc',
    thumbnailUrl: '/images/projects/p4-thumbnail.png',
    images: [
      { src: '/images/projects/p4-0.png', name: '线上应用效果' },
      { src: '/images/projects/p4-1.png', name: '更多风格' },
      { src: '/images/projects/p4-2.png', name: '更多风格' },
    ],
    description: '筑梦岛APP希望在AI虚拟角色设定的玩法内上线乙女（女性向）人像风格，现有动漫1.3.1模型文生图的乙女风格效果较单一，无法满足客户对乙女风格的需求，因此选择定制训练乙女风格Lora模型，以增强动漫1.3.1模型的乙女风格化效果。',
    year: '2024',
    role: 'AI Designer',
    client: '筑梦岛'
  },
  {
    id: 'p5',
    title: 'SAMSUNG 绘图助手',
    category: 'AI工作流',
    group: 'aigc',
    thumbnailUrl: '/images/projects/p5-thumbnail.png',
    images: [
      { src: '/images/projects/p5-0.mp4', name: '发布会展示视频', poster: '/images/projects/p5-0-poster.png' }
    ],
    description: '三星打造AI绘图助手功能，选择文生图、图生图、涂鸦生图以及儿童portrait功能在新机型上线，在这个项目周期内负责调试风格效果，为不同场景选择合适的模型，并调试优化prompt。',
    year: '2024',
    role: 'AI Designer',
    client: 'SAMSUNG'
  },
  {
    id: 'p6',
    title: '残碑',
    category: '游戏设计',
    group: 'product',
    thumbnailUrl: '/images/projects/p6-thumbnail.png',
    images: [
      { src: '/images/projects/p6-1.png', name: '游戏道具' },
      { src: '/images/projects/p6-0.png', name: '人物立绘' },
      { src: '/images/projects/p6-2.png', name: '游戏场景' },
      { src: '/images/projects/p6-3.png', name: '游戏界面' },
    ],
    description: '《残碑》是一款深度融合唐代历史底蕴的策略战棋游戏，以唐代乱世纷争为叙事基底。创新性引入 AI 设计工具赋能美术创作，从恢弘的长安宫阙、苍凉的边关战场等场景搭建，到契合唐代规制的服饰道具、神态鲜明的人物群像等视觉元素，均通过 AI 实现精细化呈现与风格统一。为玩家构建出兼具审美价值与叙事张力的唐代乱世图景。',
    year: '2023',
    role: 'Game Designer',
    client: 'CAFA & ZLong GAME',
    link: 'https://mp.weixin.qq.com/s/pgP0cDW3ozJ-V9j1ddHaXQ'
  },
  {
    id: 'p7',
    title: '电商创作工具',
    category: '产品设计',
    group: 'product',
    thumbnailUrl: '/images/projects/p7-thumbnail.png',
    images: [
      { src: '/images/projects/p7-0.png', name: '主要生成页面展示' },
      { src: '/images/projects/p7-1.png', name: '更多智能创作云项目' },
    ],
    description: '在智能创作云中选择商品图生成，只需上传实拍图或白底图，即可快速生成光影融合自然的专业级商品图。解决传统拍摄中棚拍成本高、修图周期长、素材同质化等痛点。',
    year: '2024',
    role: 'Designer',
    client: 'Intelligent creative cloud'
  },
  {
    id: 'p8',
    title: '阿尔山乡村艺术季',
    category: '建筑策展',
    group: 'creative',
    thumbnailUrl: '/images/projects/p8-thumbnail.png',
    images: [
      { src: '/images/projects/p8-0.png', name: '空间灵感' },
      { src: '/images/projects/p8-1.png', name: '创作意向' },
      { src: '/images/projects/p8-2.jpg', name: '搭建过程' },
      { src: '/images/projects/p8-3.jpg', name: '现场图片' },
      { src: '/images/projects/p8-5.jpg', name: '展览一角' },
    ],
    description: '阿尔山乡村艺术季是2023阿尔山旅游大会的重点活动之一。邀请来自中央美术学院等10所艺术院校，25个艺术家团队，300余名师生，通过35天的创作带来18件艺术作品和7个院落艺术化改造，创作与当地自然环境、文化传统和社区生活相结合的艺术作品。',
    year: '2023',
    role: 'Architect',
    client: 'CAFA & Hinggan League',
    link: 'https://mp.weixin.qq.com/s/nVWdnsePRD3MYqUJ-HTtbA'
  },
  {
    id: 'p9',
    title: 'Vibe Coding Studio',
    category: '创意实验室',
    group: 'creative',
    thumbnailUrl: '/images/projects/p9-thumbnail.jpg',
    images: [
      { src: '/images/projects/p9-project-1.jpg', name: '交互式数据可视化' },
      { src: '/images/projects/p9-project-2.jpg', name: '生成艺术实验' },
      { src: '/images/projects/p9-project-3.jpg', name: '创意小工具' },
      { src: '/images/projects/p9-project-4.jpg', name: '设计系统探索' },
      { src: '/images/projects/p9-project-5.jpg', name: '交互原型' },
      { src: '/images/projects/p9-project-6.jpg', name: '趣味项目' }
    ],
    description: '记录那些灵光一现的想法和深夜的代码实验。从交互设计到生成艺术，从实用小工具到纯粹的创意探索，这里是我的数字创作实验室。',
    year: '2023 - Now',
    role: 'Creator & Explorer',
    client: 'Personal Playground'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#' },
  { name: 'Behance', url: '#' },
  { name: 'LinkedIn', url: '#' },
];
