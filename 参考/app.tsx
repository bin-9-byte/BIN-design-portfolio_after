
import React, { useState, useEffect } from 'react';
import { FluidBackground } from './components/FluidBackground';
import { Navigation } from './components/Navigation';
import { HeroBottom } from './components/HeroBottom';
import { CustomCursor } from './components/CustomCursor';
import { HeroText } from './components/HeroText';
import { ProjectList } from './components/ProjectList';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  // We track time for the header display
  const [time, setTime] = useState(new Date());
  // State for the text displayed inside the cursor (Translation)
  const [cursorText, setCursorText] = useState("");
  // State to track if we are hovering the main HeroText block
  const [isHoveringBlock, setIsHoveringBlock] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handler for project hover effects
  const handleProjectHover = (isHovering: boolean) => {
    // Can be used to change cursor state if needed
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-white selection:bg-orange-500 selection:text-white cursor-none">
      {/* Fixed Background Layers */}
      <FluidBackground />
      
      {/* Fixed Noise Texture Overlay */}
      <svg className="bg-noise">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Fixed Navigation */}
      <Navigation time={time} />

      {/* Scrollable Content */}
      <div className="relative w-full flex flex-col">
        
        {/* HERO SECTION (100vh) - Transparent to show Fluid Background */}
        <section className="relative z-10 w-full h-screen flex flex-col justify-center items-center p-8 md:p-12 lg:p-16">
          <HeroText 
            onHover={setCursorText} 
            onHoverBlock={setIsHoveringBlock}
          />
          <HeroBottom />
        </section>

        {/* PROJECTS SECTION - Sticky Scrolling, White Background */}
        {/* We use z-20 to sit above Hero if needed, but z-10 is fine for flow */}
        <div className="relative z-10 bg-[#f0f0f0]">
           <ProjectList onHover={handleProjectHover} />
        </div>

        {/* CONTACT / FOOTER SECTION - Black Background */}
        {/* Placed normally in flow, but with z-20 to cover if anything overlaps */}
        <div className="relative z-20">
          <ContactFooter />
        </div>
      </div>

      {/* Interactive Cursor receiving the current text and block hover state */}
      <CustomCursor 
        text={cursorText} 
        isHoveringBlock={isHoveringBlock} 
      />
    </div>
  );
}
