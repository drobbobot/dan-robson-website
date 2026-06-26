'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Credibility strip — interim treatment (2026-06-26).
 *
 * The client logos are shown but heavily BLURRED so the strip keeps its
 * visual rhythm without the marks being legible. `alt` is intentionally blank
 * and the strip is aria-hidden so the client names are not in the DOM / SEO.
 *
 * NOTE (compliance): this is a visual obscure, not a removal — the image
 * filenames (e.g. logo-prezzee.png) still identify the clients in page source,
 * and a blur is only a visual screen. Stronger option on the bench: the
 * descriptor-card version (no logo, no name) from the earlier pass.
 */

// Filenames are deliberately type-descriptive, not company names, so the
// client identities aren't exposed in page source. The marks are blurred and
// the strip is aria-hidden on top of that.
const logos = [
  { src: '/images/logo-giftcard.png', width: 412, height: 344 },
  { src: '/images/logo-insurance.png', width: 736, height: 344 },
  { src: '/images/logo-marketplace.png', width: 352, height: 344 },
  { src: '/images/logo-furniture.png', width: 512, height: 344 },
  { src: '/images/logo-travel.png', width: 500, height: 344 },
  { src: '/images/logo-finance.png', width: 692, height: 344 },
  { src: '/images/logo-nonprofit.png', width: 480, height: 344 },
  { src: '/images/logo-logistics.png', width: 572, height: 344 },
  { src: '/images/logo-fitness.png', width: 412, height: 344 },
];

const BLUR = 'blur(11px)';

function LogoStrip() {
  return (
    <div className="flex items-center shrink-0" style={{ gap: '3.75rem' }} aria-hidden>
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          className="object-contain shrink-0 select-none pointer-events-none"
          style={{ height: '3.5rem', width: 'auto', filter: BLUR, opacity: 0.85 }}
        />
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2">
      {/* Blurred marquee — decorative, hidden from assistive tech */}
      <div
        className="overflow-hidden"
        aria-hidden
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center w-max"
            style={{ gap: '3.75rem' }}
            animate={{ x: ['0%', '-25%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 50,
                ease: 'linear',
              },
            }}
          >
            <LogoStrip />
            <LogoStrip />
            <LogoStrip />
            <LogoStrip />
          </motion.div>
        </motion.div>
      </div>

      {/* Statement overlay — left-aligned to the same margin as the card above,
          no card chrome, sitting on a soft blurred block of the page colour so
          the logos behind don't fight the words. (Outer holds the 1.5rem gutter,
          inner holds the 25% indent — kept on separate elements so the inline
          gutter doesn't override the indent class.) */}
      <div className="absolute inset-0 flex items-center" style={{ pointerEvents: 'none' }}>
        <div className="w-full" style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="md:pl-[calc(25%-5rem)]">
            <a
              href="#contact"
              className="relative inline-block hover:underline"
              style={{
                pointerEvents: 'auto',
                fontFamily: 'var(--font-sans)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '1.0625rem',
                letterSpacing: '0.005em',
                color: 'var(--foreground)',
                textUnderlineOffset: '0.2rem',
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Blurred block of page colour behind the words */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: '-0.55em -1.4em',
                  background: 'var(--background)',
                  borderRadius: '1.25rem',
                  filter: 'blur(11px)',
                  zIndex: 0,
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>Reach out for a past client list.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
