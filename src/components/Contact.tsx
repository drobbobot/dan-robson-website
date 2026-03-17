'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section
      className="relative z-10 px-6 md:px-10 text-center"
      style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
    >
      <div style={{ maxWidth: 'var(--max-width-narrow)', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <h2 style={{ fontSize: 'var(--text-5xl)' }}>
            Let&apos;s talk.
          </h2>

          <a
            href="mailto:dan@robson.studio"
            className="inline-flex items-center px-8 py-3 text-lg font-medium transition-transform"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translateY(var(--hover-lift)) translateX(var(--hover-x-shift)) scale(var(--hover-scale))`;
              e.currentTarget.style.opacity = `var(--hover-opacity-shift)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.opacity = '1';
            }}
          >
            dan@robson.studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
