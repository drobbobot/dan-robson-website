'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StyledButton } from './StyledButton';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,background-color] duration-300"
      style={{
        height: '6.25rem',
        backgroundColor: scrolled ? 'color-mix(in oklch, var(--background) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="flex items-center justify-between h-full" style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem' }}>
      <a href="/" className="flex items-center">
        <Image
          src="/images/robson-studio-logo.png"
          alt="Robson Studio"
          width={336}
          height={161}
          style={{ height: '3.75rem', width: 'auto', marginLeft: '-0.5rem' }}
          priority
        />
      </a>
      <StyledButton href="mailto:dan@robson.studio" wave>
        Say hi
      </StyledButton>
      </div>
    </nav>
  );
}
