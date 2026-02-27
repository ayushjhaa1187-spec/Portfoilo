'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark'); // default matches server, client corrects instantly without hydration mismatch since DOM matches

    useEffect(() => {
        // Read the theme already set by layout.tsx inline script
        const currentTheme = document.documentElement.getAttribute('data-theme') as Theme;
        if (currentTheme) {
            setTimeout(() => setTheme(currentTheme), 0);
        }

        // Add a listener for system theme changes if not overridden
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
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
