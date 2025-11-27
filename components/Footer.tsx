import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-12 px-6 md:px-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between items-end">
        <div className="flex gap-6">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} className="flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
              {link.name} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
        <p className="font-sans text-xs text-stone-400">© 2024 Komorebi Design. All rights reserved.</p>
      </div>
    </footer>
  );
};