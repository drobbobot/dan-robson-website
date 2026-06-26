'use client';

import { motion } from 'framer-motion';
import { StyledButton } from './StyledButton';

export function Hero() {
  return (
    <section className="relative" style={{ padding: '12.25rem 1.5rem 4rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '46rem' }}
        >
          {/* Hero headline — static, Martina Plantijn voice */}
          <h1
            className="text-[clamp(2.75rem,7vw,4.5rem)]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              color: 'var(--foreground)',
            }}
          >
            I build digital brands that feel{' '}
            <em style={{ fontStyle: 'italic' }}>intentional.</em>
          </h1>

          {/* Subhead — Söhne interface voice */}
          <p
            className="leading-[1.5]"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--muted-foreground)',
              maxWidth: '34rem',
              fontSize: 'clamp(1.0625rem, 1.4vw, 1.1875rem)',
              marginTop: '1.75rem',
            }}
          >
            Robson Studio is my personal design practice. A place to write, prototype and
            explore agentic design systems and product craft.
          </p>

          <div style={{ marginTop: '2.25rem' }}>
            <StyledButton href="#contact" wave>Say hi</StyledButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
