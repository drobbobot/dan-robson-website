'use client';

import { motion } from 'framer-motion';
import { CyclingWord } from './CyclingWord';
import { HeroImage } from './HeroImage';

const words = ['I', 'make', 'digital', 'brands', 'feel'];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 pt-24 pb-16">
      <div className="w-full" style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-8 md:gap-12 items-center">
          {/* Left column — hero sentence */}
          <div>
            <h1 style={{ fontSize: 'var(--text-5xl)' }}>
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: words.length * 0.1,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="inline-block"
              >
                <CyclingWord />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: words.length * 0.1 + 0.3, duration: 0.4 }}
                className="inline-block"
              >
                .
              </motion.span>
            </h1>
          </div>

          {/* Right column — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
