'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorTheme = 'blue' | 'pink';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  colorTheme: ColorTheme;
  mode: Mode;
  setColorTheme: (theme: ColorTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 로컬 스토리지에서 테마 설정 불러오기
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    // 로컬 스토리지에서 설정 불러오기
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme;
    const savedMode = localStorage.getItem('mode') as Mode;

    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
    }
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const handleSetColorTheme = (newTheme: ColorTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem('colorTheme', newTheme);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        colorTheme, 
        mode, 
        setColorTheme: handleSetColorTheme, 
        toggleMode 
      }}
    >
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