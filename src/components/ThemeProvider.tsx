'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { themes, type Theme } from '@/lib/themes';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'human',
  setTheme: () => {},
  cycleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('human');

  const setTheme = useCallback((t: Theme) => {
    const html = document.documentElement;
    html.setAttribute('data-transitioning', '');

    if (t === 'human') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', t);
    }

    setThemeState(t);

    setTimeout(() => {
      html.removeAttribute('data-transitioning');
    }, 600);
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const currentIndex = themes.indexOf(current);
      const nextIndex = (currentIndex + 1) % themes.length;
      const next = themes[nextIndex];

      const html = document.documentElement;
      html.setAttribute('data-transitioning', '');

      if (next === 'human') {
        html.removeAttribute('data-theme');
      } else {
        html.setAttribute('data-theme', next);
      }

      setTimeout(() => {
        html.removeAttribute('data-transitioning');
      }, 600);

      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
