'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWord } from '@/lib/WordContext';
import { wordStyles } from '@/lib/wordStyles';
import { StyledButton } from './StyledButton';

export function Contact() {
  const { activeWord } = useWord();
  const style = wordStyles[activeWord];
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
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-start"
          style={{ gap: '1.5rem' }}
        >
          <h2
            className="leading-[1.1] transition-all duration-300 text-[clamp(3rem,8vw,4rem)]"
            style={{
              fontFamily: style.contactStyle.fontFamily,
              color: style.contactStyle.color,
              fontWeight: style.contactStyle.fontWeight,
              fontStyle: style.contactStyle.fontStyle,
              letterSpacing: style.contactStyle.letterSpacing,
              maxWidth: '36.75rem',
            }}
          >
            {style.letsTalkText}
          </h2>

          <div className="flex items-center relative" style={{ gap: '0.75rem' }}>
            <StyledButton href="mailto:dan@robson.studio">
              dan@robson.studio
            </StyledButton>
            <button
              onClick={handleCopy}
              className="transition-all duration-200 active:scale-95"
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #E9E5DD',
                background: 'transparent',
                cursor: 'pointer',
                color: '#241013',
                opacity: 0.6,
              }}
              title="Copy email"
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
                className="absolute left-full ml-3 whitespace-nowrap animate-fade-in"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(36,16,19,0.6)',
                  fontFamily: "'Helvetica Neue', sans-serif",
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
