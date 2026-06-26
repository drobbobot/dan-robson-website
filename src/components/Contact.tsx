'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StyledButton } from './StyledButton';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dan@robson.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative" style={{ padding: '6rem 1.5rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
          style={{ gap: '1.5rem' }}
        >
          <h2
            className="text-[clamp(2.5rem,7vw,4rem)]"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--foreground)',
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              maxWidth: '36.75rem',
            }}
          >
            Say hi.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--muted-foreground)',
              fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
              lineHeight: 1.55,
              maxWidth: '34rem',
            }}
          >
            I&rsquo;d love to connect with people doing interesting work.
          </p>

          <div className="flex items-center relative" style={{ gap: '0.75rem', marginTop: '0.25rem' }}>
            <StyledButton href="mailto:dan@robson.studio">
              dan@robson.studio
            </StyledButton>
            <button
              onClick={handleCopy}
              className="squircle transition-all duration-200 active:scale-95"
              style={{
                padding: '0.75rem',
                borderRadius: 'var(--radius-control)',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                cursor: 'pointer',
                color: 'var(--muted-foreground)',
              }}
              title="Copy email"
              aria-label="Copy email address"
            >
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
            {copied && (
              <span
                className="absolute left-full ml-3 whitespace-nowrap"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-foreground)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Copied to clipboard
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
