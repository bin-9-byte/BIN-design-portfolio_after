import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DURATIONS, EASE_DEFAULT } from '../constants/animations';

export interface SidebarSection {
    id: string;
    label: string;
}

interface ProjectSidebarProps {
    sections: SidebarSection[];
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

    useEffect(() => {
        // Intersection Observer to track which section is currently visible
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the upper portion of viewport
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Use scrollIntoView to work with the modal's scroll container
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
            setActiveSection(id);
        }
    };

    return (
        <nav
            className="hidden lg:block fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-40"
            aria-label="Project sections navigation"
        >
            <ul className="flex flex-col items-end space-y-8">
                {sections.map(({ id, label }) => {
                    const isActive = activeSection === id;

                    return (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className="group flex items-center justify-end gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded-full px-2 py-1 transition-all duration-300"
                                aria-label={`Navigate to ${label}`}
                                aria-current={isActive ? 'location' : undefined}
                            >
                                {/* Label - Always visible with varying opacity */}
                                <motion.span
                                    className="font-sans whitespace-nowrap pointer-events-none select-none text-right"
                                    initial={false}
                                    animate={{
                                        opacity: isActive ? 1 : 0.35,
                                        color: isActive ? '#1c1917' : '#78716c',
                                        fontWeight: isActive ? 500 : 400,
                                        fontSize: isActive ? '0.9375rem' : '0.875rem',
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        color: '#1c1917',
                                    }}
                                    transition={{ duration: DURATIONS.medium, ease: EASE_DEFAULT }}
                                >
                                    {label}
                                </motion.span>

                                {/* Dot indicator */}
                                <motion.div
                                    className="relative flex items-center justify-center flex-shrink-0"
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1 : 1,
                                    }}
                                    transition={{ duration: DURATIONS.fast, ease: EASE_DEFAULT }}
                                >
                                    {/* Outer ring for active state */}
                                    <motion.div
                                        className="absolute rounded-full border-2"
                                        initial={false}
                                        animate={{
                                            width: isActive ? 20 : 0,
                                            height: isActive ? 20 : 0,
                                            borderColor: isActive ? '#78716c' : 'transparent',
                                            opacity: isActive ? 0.5 : 0,
                                        }}
                                        transition={{ duration: DURATIONS.medium, ease: EASE_DEFAULT }}
                                    />

                                    {/* Center dot */}
                                    <motion.div
                                        className="rounded-full"
                                        initial={false}
                                        animate={{
                                            width: isActive ? 10 : 6,
                                            height: isActive ? 10 : 6,
                                            backgroundColor: isActive ? '#44403c' : '#d6d3d1',
                                        }}
                                        whileHover={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: '#57534e',
                                        }}
                                        transition={{ duration: DURATIONS.fast, ease: EASE_DEFAULT }}
                                    />
                                </motion.div>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
