import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_DEFAULT, DURATIONS } from '../constants/animations';
import { zIndex } from '../constants/zIndex';

interface NavigationProps {
  onLogoClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLogoClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Active section detection
      const sections = NAVIGATION_LINKS.map(l => l.href.substring(1));
      let current: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = `#${id}`;
          break;
        }
      }
      setActiveHref(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView();
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-6 ${scrolled ? 'backdrop-blur-sm' : ''}`}
        style={{ zIndex: zIndex.NAVIGATION, willChange: 'opacity, transform' }}
        animate={scrolled ? {
          backgroundColor: 'rgba(250,250,250,0.9)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
        } : {
          backgroundColor: 'rgba(250,250,250,0)',
          boxShadow: '0 0 0 rgba(0,0,0,0)'
        }}
        transition={{ duration: DURATIONS.fast, ease: EASE_DEFAULT }}
      >
        <div
          className="text-xl md:text-2xl font-serif font-medium tracking-wide cursor-pointer"
          onClick={onLogoClick}
        >
          BIN'S.<span className="text-stone-400"> Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8" role="navigation" aria-label="Primary">
          {NAVIGATION_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 relative group cursor-pointer ${activeHref === link.href ? 'text-wabi-clay' : 'hover:text-wabi-clay'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2 focus-visible:ring-offset-wabi-paper`}
              onClick={(e) => handleMenuClick(e, link.href)}
              whileHover={{ x: 2, y: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ willChange: 'transform' }}
              aria-current={activeHref === link.href ? 'page' : undefined}
            >
              {link.name}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-wabi-clay transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          style={{ zIndex: zIndex.NAVIGATION }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setMenuOpen(!isMenuOpen); } }}
          className="md:hidden p-2 text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wabi-clay focus-visible:ring-offset-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATIONS.fast, ease: EASE_DEFAULT }}
            className="fixed inset-0 bg-wabi-paper flex flex-col items-center justify-center space-y-8 md:hidden"
            id="mobile-menu"
            style={{ zIndex: zIndex.NAVIGATION_MOBILE_MENU, willChange: 'opacity' }}
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-3xl font-serif ${activeHref === link.href ? 'text-wabi-clay' : 'text-stone-800'}`}
                onClick={(e) => handleMenuClick(e, link.href)}
                aria-current={activeHref === link.href ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
