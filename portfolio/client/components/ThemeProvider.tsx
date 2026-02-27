'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        // Initialize theme on mount
        const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialTheme = savedTheme || (mediaQuery.matches ? 'dark' : 'light');

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Add a listener for system theme changes if not overridden
        const listener = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('portfolio-theme')) {
                const sysTheme = e.matches ? 'dark' : 'light';
                setTheme(sysTheme);
                document.documentElement.setAttribute('data-theme', sysTheme);
            }
        };
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Return naked children directly; we already suppressed hydration warnings
    // on <html> tag, avoiding layout jank or missing content for bots
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
