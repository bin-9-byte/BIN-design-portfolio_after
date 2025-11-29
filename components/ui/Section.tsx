import React from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-24 md:scroll-mt-32 ${className}`}>
      {children}
    </section>
  );
};
