import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  group: 'spatial' | 'product' | 'identity';
  thumbnailUrl: string;
  images: string[];
  description: string;
  year: string;
  client?: string;
  role?: string;
}

export type ViewState = 'HOME' | 'PROJECT_DETAIL';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
