'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { themes } from '@/lib/themes';

export function CyclingWord() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      onClick={cycleTheme}
      className="relative cursor-pointer inline-flex items-baseline"
      aria-label={`Current theme: ${theme}. Click to switch theme.`}
      style={{
        color: 'var(--primary)',
        borderBottom: '2px solid var(--primary)',
        paddingBottom: '2px',
        background: 'none',
        border: 'none',
        borderBottomStyle: 'solid',
        borderBottomWidth: '2px',
        borderBottomColor: 'var(--primary)',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        textTransform: 'inherit',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block"
        >
          {themes[themes.indexOf(theme)]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
