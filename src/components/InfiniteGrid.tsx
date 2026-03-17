'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

export function InfiniteGrid() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animate grid scroll for human theme
  useAnimationFrame((_, delta) => {
    if (theme === 'human') {
      offsetY.set(offsetY.get() + delta * 0.01);
    }
  });

  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 70%)`;

  // No grid for bold or intentional themes
  if (theme === 'bold') return null;
  if (theme === 'intentional') return null;

  const gridSize = theme === 'technical' ? 24 : 40;
  const gridColor = theme === 'technical'
    ? 'oklch(0.30 0.005 210)'
    : 'oklch(0.85 0 0)';

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base grid layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPositionY: theme === 'human' ? offsetY : undefined,
          opacity: theme === 'technical' ? 0.4 : 0.3,
        }}
      />

      {/* Brighter layer revealed by cursor (human theme only) */}
      {theme === 'human' && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.75 0.01 80) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.75 0.01 80) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            backgroundPositionY: offsetY,
            maskImage,
            WebkitMaskImage: maskImage,
          }}
        />
      )}
    </div>
  );
}
