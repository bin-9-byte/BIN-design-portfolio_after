import P1Content from './p1';
import P2Content from './p2';
import P3Content from './p3';
import P4Content from './p4';
import P5Content from './p5';
import P6Content from './p6';
import P7Content from './p7';
import P8Content from './p8';
import P9Content from './p9';
import DefaultProjectContent from './DefaultProjectContent';
import { ProjectContentComponent } from './ProjectContent';

// Map of project IDs to their content components
export const projectContentComponents: Record<string, ProjectContentComponent> = {
  'p1': P1Content as ProjectContentComponent,
  'p2': P2Content as ProjectContentComponent,
  'p3': P3Content as ProjectContentComponent,
  'p4': P4Content as ProjectContentComponent,
  'p5': P5Content as ProjectContentComponent,
  'p6': P6Content as ProjectContentComponent,
  'p7': P7Content as ProjectContentComponent,
  'p8': P8Content as ProjectContentComponent,
  'p9': P9Content as ProjectContentComponent,
};

// Function to get content component for a project
export const getProjectContent = (projectId: string): ProjectContentComponent => {
  return projectContentComponents[projectId] || DefaultProjectContent as ProjectContentComponent;
};

// Export all content components for direct import if needed
export { 
  P1Content, 
  P2Content, 
  P3Content, 
  P4Content, 
  P5Content, 
  P6Content, 
  P7Content, 
  P8Content, 
  P9Content, 
  DefaultProjectContent 
};