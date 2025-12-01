import React from 'react';
import { Project } from '../../types';

export interface ProjectContentProps {
  project: Project;
}

export interface ProjectContentComponent extends React.FC<ProjectContentProps> {
  id: string;
}

export interface ProjectSection {
  id: string;
  label: string;
}

export interface ProjectContent {
  id: string;
  component: ProjectContentComponent;
  sections: ProjectSection[];
}