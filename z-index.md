# Z-Index Hierarchy

This document outlines the z-index stacking order for the entire application, managed in `constants/zIndex.ts`.

| Layer Name                | Z-Index Value | Component(s)                                       | Description                                                                 |
|---------------------------|---------------|----------------------------------------------------|-----------------------------------------------------------------------------|
| `BACKGROUND_ELEMENTS`     | -1            | `Hero.tsx`, `Profile.tsx`                          | Decorative shapes and elements that sit behind all other content.           |
| `BASE_CONTENT`            | 1             | `Hero.tsx`, `Profile.tsx`                          | Default stacking level for standard page content.                           |
| `PROJECT_CARD_HOVER`      | 10            | `CustomCursor.tsx`, `ProjectDetail.tsx`            | Elements that appear on hover, like the project card's "View" text.         |
| `PROJECTS_SCROLL_BUTTONS` | 20            | `Projects.tsx`, `CustomCursor.tsx`                 | Scroll buttons for project carousels.                                       |
| `NAVIGATION_MOBILE_MENU`  | 40            | `Navigation.tsx`                                   | The full-screen menu overlay on mobile devices.                             |
| `NAVIGATION`              | 50            | `Navigation.tsx`                                   | The main site navigation bar, always visible at the top.                    |
| `CUSTOM_CURSOR`           | 50            | `CustomCursor.tsx`                                 | The custom cursor, which needs to be above most elements.                   |
| `PROJECT_DETAIL`          | 60            | `ProjectDetail.tsx`                                | The modal/overlay for displaying detailed project information.              |
