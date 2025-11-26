import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-wabi-paper/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
          }`}
      >
        <a
          href="#home"
          className="text-xl md:text-2xl font-serif font-medium tracking-wide z-50 cursor-pointer"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          BIN'S.<span className="text-stone-400"> Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase hover:text-wabi-clay transition-colors duration-300 relative group cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wabi-clay transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-wabi-paper flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-3xl text-stone-800 cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
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