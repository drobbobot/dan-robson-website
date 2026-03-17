'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import type { Theme } from '@/lib/themes';

const imageConfig: Record<Theme, { src: string; className: string; style: React.CSSProperties }> = {
  human: {
    src: '/images/hero-human.png',
    className: '',
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      transform: 'rotate(2deg)',
    },
  },
  bold: {
    src: '/images/hero-bold.png',
    className: '',
    style: {
      borderRadius: '0',
      boxShadow: 'none',
      objectFit: 'cover',
      transform: 'translateX(20px)',
    },
  },
  technical: {
    src: '/images/hero-technical.png',
    className: '',
    style: {
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      boxShadow: 'none',
    },
  },
  intentional: {
    src: '/images/hero-intentional.png',
    className: '',
    style: {
      borderRadius: '0',
      border: 'none',
      boxShadow: 'none',
      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
    },
  },
};

export function HeroImage() {
  const { theme } = useTheme();
  const config = imageConfig[theme];

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* TODO: Replace with actual portfolio screenshots */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              ...config.style,
              backgroundColor: 'var(--card)',
              border: config.style.border || '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div
              className="text-center p-8 w-full h-full flex flex-col items-center justify-center gap-4"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                {theme} theme preview
              </span>
            </div>
          </div>

          {/* Scan-line overlay for technical theme */}
          {theme === 'technical' && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.03) 2px, oklch(0 0 0 / 0.03) 4px)',
                borderRadius: 'var(--radius)',
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
