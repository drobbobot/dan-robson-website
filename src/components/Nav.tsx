'use client';

import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-[backdrop-filter,background-color] duration-300 md:px-10"
      style={{
        backgroundColor: scrolled ? 'color-mix(in oklch, var(--background) 80%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <a
        href="#"
        className="text-sm font-medium tracking-wide"
        style={{
          color: 'var(--foreground)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--heading-weight)',
        }}
      >
        Dan Robson
      </a>
      <a
        href="mailto:dan@robson.studio"
        className="inline-flex items-center px-5 py-2 text-sm font-medium transition-transform"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-body)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `translateY(var(--hover-lift)) translateX(var(--hover-x-shift)) scale(var(--hover-scale))`;
          e.currentTarget.style.opacity = `var(--hover-opacity-shift)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.opacity = '1';
        }}
      >
        Get in touch
      </a>
    </nav>
  );
}
