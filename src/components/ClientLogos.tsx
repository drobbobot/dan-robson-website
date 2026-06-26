'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Credibility strip (2026-06-26).
 *
 * The blur is BAKED INTO THE PIXELS: the PNG files in /public/images are the
 * pre-blurred images (heavy Gaussian, done with Pillow), so the sharp original
 * is never served and removing CSS can't recover it. On top of that the marks
 * carry no CSS blur dependency, the filenames are type-descriptive (not company
 * names), `alt` is blank, and the strip is aria-hidden — so nothing in the page
 * source identifies the clients. Residual that remains by nature: dominant
 * colour and rough silhouette. (Zero-residual option on the bench: abstract
 * blobs or the descriptor-card version.)
 */
// Dimensions include the transparent padding baked around each blurred mark so
// the blur feathers to nothing (no hard bounding-box edge).
const logos = [
  { src: '/images/logo-giftcard.png', width: 580, height: 512 },
  { src: '/images/logo-insurance.png', width: 904, height: 512 },
  { src: '/images/logo-marketplace.png', width: 520, height: 512 },
  { src: '/images/logo-furniture.png', width: 680, height: 512 },
  { src: '/images/logo-travel.png', width: 668, height: 512 },
  { src: '/images/logo-finance.png', width: 860, height: 512 },
  { src: '/images/logo-nonprofit.png', width: 648, height: 512 },
  { src: '/images/logo-logistics.png', width: 740, height: 512 },
  { src: '/images/logo-fitness.png', width: 580, height: 512 },
];

// The blur is baked into the source PNGs (that's what makes it unrecoverable).
// This CSS blur is an extra visual layer on top — removing it in devtools only
// reveals the already-blurred baked pixels, never the real logo.
const BLUR = 'blur(5px)';

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
          style={{ height: '5.2rem', width: 'auto', filter: BLUR, opacity: 0.85 }}
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
