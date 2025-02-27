'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';

type ThemeMode = 'night-sky';

interface ThemeContextType {
  theme: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme: ThemeMode = 'night-sky';

  // Set night-sky theme on component mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'night-sky');
    localStorage.setItem('theme', 'night-sky');
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