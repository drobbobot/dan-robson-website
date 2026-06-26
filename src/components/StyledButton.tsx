'use client';

import { HandWaveIcon } from './HandWaveIcon';

interface StyledButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Show a waving-hand icon before the label (the "Say hi" CTAs). */
  wave?: boolean;
}

/**
 * The single, consistent CTA for the whole site: a Lia-blue pill in the Söhne
 * interface voice. No per-state restyling — one treatment everywhere.
 */
export function StyledButton({ href, children, className = '', wave = false }: StyledButtonProps) {
  return (
    <a
      href={href}
      className={`${wave ? 'say-hi ' : ''}pill inline-flex items-center justify-center whitespace-nowrap transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-px ${className}`}
      style={{
        gap: '0.5rem',
        padding: '0.8125rem 1.5rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9375rem',
        fontWeight: 500,
        letterSpacing: '0.005em',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {wave && (
        <HandWaveIcon className="wave-hand" style={{ fontSize: '1.15em' }} />
      )}
      {children}
    </a>
  );
}
