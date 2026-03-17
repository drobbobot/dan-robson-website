'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ProfileCard() {
  const [expanded, setExpanded] = useState(false);

  const close = useCallback(() => setExpanded(false), []);

  useEffect(() => {
    if (!expanded) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [expanded, close]);

  return (
    <>
      {/* Inline card — sits within text flow */}
      <button
        onClick={() => setExpanded(true)}
        className="inline-flex items-center gap-2 align-baseline mx-1 px-2 py-0.5 cursor-pointer transition-transform"
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--muted-foreground)',
          verticalAlign: 'baseline',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `translateY(var(--hover-lift)) scale(var(--hover-scale))`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
        }}
      >
        {/* TODO: Replace with actual profile photo */}
        <span
          className="inline-block w-5 h-5 rounded-full shrink-0"
          style={{ backgroundColor: 'var(--muted)', border: '1px solid var(--border)' }}
        />
        <span className="whitespace-nowrap">Brand Systems / UX Designer</span>
        <span className="hidden sm:inline" style={{ color: 'var(--muted-foreground)' }}>·</span>
        <span className="hidden sm:inline whitespace-nowrap">Newcastle, AU</span>
      </button>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={close}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'color-mix(in oklch, var(--foreground) 40%, transparent)' }}
            />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full max-w-sm p-8 flex flex-col items-center gap-4 text-center"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
                style={{
                  color: 'var(--muted-foreground)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'none',
                  border: 'none',
                }}
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>

              {/* TODO: Replace with actual profile photo */}
              <div
                className="w-28 h-28 rounded-full"
                style={{ backgroundColor: 'var(--muted)', border: '2px solid var(--border)' }}
              />

              <div>
                <h3
                  className="text-lg font-medium"
                  style={{
                    color: 'var(--card-foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--heading-weight)',
                  }}
                >
                  Dan Robson
                </h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                  Brand Systems / UX Designer
                </p>
                <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                  Newcastle, Australia
                </p>
              </div>

              {/* TODO: Add LinkedIn URL */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm"
                style={{
                  color: 'var(--muted-foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
