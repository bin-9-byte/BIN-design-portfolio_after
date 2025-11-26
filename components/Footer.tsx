import React from 'react';

// Note: In this specific design, the main footer info is integrated into the bottom of the Contact section 
// for a cleaner visual flow. This component acts as a final spacer or simple closure if needed.
// For now, we will return null or a very minimal graphic element.

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-2 bg-stone-800"></footer>
  );
};