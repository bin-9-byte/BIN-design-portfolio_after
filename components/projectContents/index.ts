import P1Content from './p1';
import DefaultProjectContent from './DefaultProjectContent';
import { ProjectContentComponent } from './ProjectContent';

// Map of project IDs to their content components
export const projectContentComponents: Record<string, ProjectContentComponent> = {
  'p1': P1Content as ProjectContentComponent,
  // Add other project content components as they are created
  // 'p2': P2Content,
  // 'p3': P3Content,
  // etc.
};

// Function to get content component for a project
export const getProjectContent = (projectId: string): ProjectContentComponent => {
  return projectContentComponents[projectId] || DefaultProjectContent as ProjectContentComponent;
};

// Export all content components for direct import if needed
export { P1Content, DefaultProjectContent };