'use client';

import { motion } from 'framer-motion';
import { ProfileCard } from './ProfileCard';

const clients = ['King Living', 'Sweat', 'Money.com.au', 'Grays.com.au', 'NIB', 'Compassion', 'Aurizon'];

export function MidSection() {
  return (
    <section className="relative z-10 px-6 md:px-10" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
      <div style={{ maxWidth: 'var(--max-width-narrow)', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)' }}>
            Hi, I&apos;m Dan
            <ProfileCard />
            . I specialise in the gap between brand, product and agentic workflows. The structural work that makes your digital product feel intentional, unique and effortless to maintain. Design systems, interaction architecture, brand integration at the component level, and the agentic governance layer that maintains consistency beyond launch.
          </p>

          <p
            className="mt-8"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
              lineHeight: 'var(--leading-normal)',
            }}
          >
            {clients.join(', ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
