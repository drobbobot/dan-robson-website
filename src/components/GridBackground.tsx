'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export function GridBackground() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Faint static grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <GridPattern />
      </div>
      {/* Brighter grid revealed by cursor */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <GridPattern />
      </motion.div>
    </div>
  );
}

function GridPattern() {
  return (
    <svg className="w-full h-full">
      <defs>
        <pattern
          id="bg-grid"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[#241013]"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-grid)" />
    </svg>
  );
}
