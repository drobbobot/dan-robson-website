'use client';

import { useWord } from '@/lib/WordContext';
import { wordStyles } from '@/lib/wordStyles';

interface StyledButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function StyledButton({ href, children, className = '' }: StyledButtonProps) {
  const { activeWord } = useWord();
  const { buttonStyle } = wordStyles[activeWord];

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 ease-in-out ${className}`}
      style={{
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        backgroundColor: buttonStyle.bg,
        color: buttonStyle.text,
        border: buttonStyle.border,
        borderRadius: buttonStyle.radius,
        boxShadow: buttonStyle.shadow,
        fontFamily: buttonStyle.fontFamily,
        fontWeight: buttonStyle.fontWeight,
      }}
    >
      {children}
    </a>
  );
}
