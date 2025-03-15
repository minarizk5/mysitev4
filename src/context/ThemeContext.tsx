'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeMode = 'night-sky';

interface ThemeContextType {
  theme: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<ThemeMode>('night-sky');

  // Initialize theme to night-sky
  useEffect(() => {
    // Check if it's a mobile device for CSS optimizations only
    const isMobile = window.innerWidth < 768;
    
    // Always use night-sky theme
    const defaultTheme = 'night-sky';
    document.documentElement.setAttribute('data-theme', defaultTheme);
    localStorage.setItem('theme', defaultTheme);
    
    // Add a class to the body for mobile-specific optimizations
    // This allows CSS to optimize performance without changing the theme
    if (isMobile) {
      document.body.classList.add('is-mobile');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
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