import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { Project } from './types';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components/ui/CustomCursor';
import { FluidBackground } from './components/ui/FluidBackground';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHoveringBlock, setIsHoveringBlock] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden selection:bg-wabi-clay selection:text-white">
      <FluidBackground />
      <CustomCursor text={cursorText} isHoveringBlock={isHoveringBlock} />
      <Navigation onLogoClick={handleLogoClick} />
      
      <main className="w-full">
        <Hero onHover={setCursorText} onHoverBlock={setIsHoveringBlock} />
        <Profile />
        <Projects 
          onProjectClick={handleProjectClick} 
          onHover={setCursorText} 
          onHoverBlock={setIsHoveringBlock} 
        />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleCloseProject} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;