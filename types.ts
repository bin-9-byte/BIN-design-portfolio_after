import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  group: 'aigc' | 'product' | 'creative';
  thumbnailUrl: string;
  images: (string | ImageItem)[];
  description: string;
  year: string;
  client?: string;
  role?: string;
  link?: string;
}

export type ImageItem = {
  src: string;
  name?: string;
  poster?: string;
};

export type ViewState = 'HOME' | 'PROJECT_DETAIL';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
