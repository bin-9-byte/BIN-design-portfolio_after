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

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden selection:bg-wabi-clay selection:text-white">
      <Navigation />
      
      <main className="w-full">
        <Hero />
        <Profile />
        <Projects onProjectClick={handleProjectClick} />
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