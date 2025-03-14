'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeMode = 'night-sky' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('night-sky');

  // Initialize theme from localStorage or default to night-sky
  useEffect(() => {
    // Check if it's a mobile device for CSS optimizations only
    const isMobile = window.innerWidth < 768;
    
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme && (savedTheme === 'night-sky' || savedTheme === 'light')) {
      // Always respect user's saved theme preference regardless of device
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to night-sky theme for all devices
      const defaultTheme = 'night-sky';
      setTheme(defaultTheme);
      document.documentElement.setAttribute('data-theme', defaultTheme);
      localStorage.setItem('theme', defaultTheme);
    }
    
    // Add a class to the body for mobile-specific optimizations
    // This allows CSS to optimize performance without changing the theme
    if (isMobile) {
      document.body.classList.add('is-mobile');
    }
  }, []);

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = theme === 'night-sky' ? 'light' : 'night-sky';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}