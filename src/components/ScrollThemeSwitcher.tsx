'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { themes } from '@/lib/themes';

export function ScrollThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const lastThemeRef = useRef(theme);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep ref in sync with manual clicks
  useEffect(() => {
    lastThemeRef.current = theme;
  }, [theme]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    // Map scroll progress to theme index
    const index = Math.min(Math.floor(value * themes.length), themes.length - 1);
    const newTheme = themes[index];

    if (newTheme !== lastThemeRef.current) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        lastThemeRef.current = newTheme;
        setTheme(newTheme);
      }, 150);
    }
  });

  return null;
}
