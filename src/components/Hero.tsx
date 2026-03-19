'use client';

import { motion } from 'framer-motion';
import { CyclingWord } from './CyclingWord';
import { useWord } from '@/lib/WordContext';
import { wordStyles } from '@/lib/wordStyles';

export function Hero() {
  const { activeWord } = useWord();
  const style = wordStyles[activeWord];

  return (
    <section className="relative" style={{ padding: '12.25rem 1.5rem 4rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ maxWidth: '42.5rem' }}
        >
          {/* Hero headline */}
          <h1
            className="leading-[1.1] text-[clamp(3rem,8vw,4rem)]"
            style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 400, minHeight: '9.75rem', letterSpacing: '-0.08rem' }}
          >
            I build digital<br className="md:hidden" /> brands<br className="hidden md:inline" /> that feel{' '}
            <CyclingWord />
            <span style={{ visibility: 'hidden' }}>.</span>
          </h1>

          {/* Second sentence */}
          <p
            className="leading-[1.4]"
            style={{ fontFamily: 'var(--font-hero-serif)', color: '#241013', maxWidth: '30rem', fontSize: '1.5rem', marginTop: '2rem' }}
          >
            If your team is outgrowing its design system and needs clarity on what to ship,{' '}
            <a
              href="#contact"
              className="transition-colors duration-300"
              style={{
                color: style.color,
                textDecoration: 'underline',
                textUnderlineOffset: '0.1875rem',
                textDecorationThickness: '0.0625rem',
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              let&apos;s talk
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
