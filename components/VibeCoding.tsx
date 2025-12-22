import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PROJECTS, VIBE_ITEMS, VibeItem } from '../constants';
import { Project } from '../types';
import { ArrowRight, Code, Sparkles, ExternalLink, FileText } from 'lucide-react';

interface VibeCodingProps {
  onProjectClick: (project: Project) => void;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
}

// Filter Categories for Vibe Coding
const VIBE_CATEGORIES = [
  { id: 'all', label: 'All Vibe' },
  { id: 'coding', label: 'Coding' },
  { id: 'art', label: 'Art' },
  { id: 'tools', label: 'Tools' },
  { id: 'experiments', label: 'Experiments' },
];

const VibeCard: React.FC<{
  item: VibeItem;
  onHover: (text: string) => void;
  onHoverBlock: (isHovering: boolean) => void;
  reduce?: boolean | null;
}> = ({ item, onHover, onHoverBlock, reduce }) => {
  const handleClick = () => {
    if (item.link && item.link !== '#') {
      window.open(item.link, '_blank');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group/card cursor-pointer relative break-inside-avoid mb-8"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onMouseEnter={() => {
        onHover(item.type === 'link' ? "open" : "read");
        onHoverBlock(true);
      }}
      onMouseLeave={() => {
        onHover("");
        onHoverBlock(false);
      }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-stone-200 w-full">
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover/card:scale-105"
          loading="lazy"
        />
        
        {/* Overlay with Icon */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover/card:bg-stone-900/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover/card:opacity-100">
           <div className="bg-white/90 p-3 rounded-full shadow-sm backdrop-blur-sm transform scale-90 group-hover/card:scale-100 transition-transform duration-300">
             {item.type === 'link' ? <ExternalLink size={20} className="text-stone-800" /> : <FileText size={20} className="text-stone-800" />}
           </div>
        </div>
      </div>

      <div className="flex justify-between items-baseline pt-4 px-1">
        <div>
          <h4 className="font-serif text-xl text-stone-800 group-hover/card:text-wabi-clay transition-colors">
            {item.title}
          </h4>
          <span className="font-sans text-xs text-stone-500 uppercase tracking-widest mt-1 block">
            {item.category}
          </span>
        </div>
        <span className="font-serif text-stone-400 italic text-sm">{item.year}</span>
      </div>
    </motion.div>
  );
};

export const VibeCoding: React.FC<VibeCodingProps> = ({ onProjectClick, onHover, onHoverBlock }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const reduce = useReducedMotion();
  const project = PROJECTS.find(p => p.id === 'p9');

  if (!project) return null;

  // Filter Vibe Items
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return VIBE_ITEMS;
    return VIBE_ITEMS.filter(item => item.group === activeCategory);
  }, [activeCategory]);

  return (
    <section id="vibecoding" className="w-full py-20 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section: Aligned with Projects Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          
          {/* Left Side: Title & Description */}
          <div>
             <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">
              Vibe Coding Studio
             </h2>
             <p className="font-sans text-stone-500 max-w-md">
                这里是我的数字创作实验室。记录那些灵光一现的想法和深夜的代码实验，探索技术与美学的边界。
             </p>
          </div>

          {/* Right Side: Category Filters */}
          <div className="flex flex-wrap gap-2">
            {VIBE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-sans transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg transform -translate-y-0.5'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Visual Content: Masonry Layout */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <VibeCard
                key={item.id}
                item={item}
                onHover={onHover}
                onHoverBlock={onHoverBlock}
                reduce={reduce}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-stone-400 font-serif italic">
            No items found in this category.
          </div>
        )}
        
      </div>
    </section>
  );
};
