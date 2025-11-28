import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { zIndex } from '../constants/zIndex';

interface NavigationProps {
  onLogoClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLogoClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-wabi-paper/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
        style={{ zIndex: zIndex.NAVIGATION }}
      >
        <div
          className="text-xl md:text-2xl font-serif font-medium tracking-wide cursor-pointer"
          onClick={onLogoClick}
        >
          BIN'S.<span className="text-stone-400"> Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase hover:text-wabi-clay transition-colors duration-300 relative group cursor-pointer"
              onClick={(e) => handleMenuClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-stone-800"
          style={{ zIndex: zIndex.NAVIGATION }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-wabi-paper flex flex-col items-center justify-center space-y-8 md:hidden"
            style={{ zIndex: zIndex.NAVIGATION_MOBILE_MENU }}
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-serif text-stone-800"
                onClick={(e) => handleMenuClick(e, link.href)}
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