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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-[backdrop-filter,background-color] duration-300"
      style={{
        padding: '0 1.5rem',
        height: '6.25rem',
        backgroundColor: scrolled ? 'rgba(250, 247, 239, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <a href="#" className="flex items-center">
        <Image
          src="/images/robson-studio-logo.png"
          alt="Robson Studio"
          width={180}
          height={60}
          style={{ height: '3.75rem', width: 'auto', marginLeft: '-0.5rem' }}
          priority
        />
      </a>
      <StyledButton href="mailto:dan@robson.studio">
        Get in touch
      </StyledButton>
    </nav>
  );
}
