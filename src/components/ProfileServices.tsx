'use client';

import { motion } from 'framer-motion';
import { ProfileCard } from './ProfileCard';
import { ClientLogos } from './ClientLogos';

// A2 — reframed as practice areas (dropped the items that read as a service
// offering: UX strategy & research, Product definition, Agentic governance;
// "AI-ready design systems" softened to "Practical AI tooling").
const practiceAreas = [
  'Design systems',
  'Interface craft',
  'Brand-to-product',
  'Prototyping',
  'Design-to-code',
  'Practical AI tooling',
];

export function ProfileServices() {
  return (
    <section className="relative" style={{ padding: '6rem 1.5rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        {/* Profile card + practice areas side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-start"
          style={{ gap: '2rem' }}
        >
          <ProfileCard />

          {/* Practice areas */}
          <div className="md:p-[2rem]">
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted-foreground)',
                marginBottom: '1.25rem',
              }}
            >
              Areas of practice
            </p>
            <ul
              className="list-none"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--foreground)', fontSize: '1.125rem', lineHeight: '2.25rem' }}
            >
              {practiceAreas.map((item, i) => (
                <motion.li
                  key={item}
                  className="group flex items-center cursor-default"
                  style={{ gap: '0.625rem' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    aria-hidden
                    className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    style={{ color: 'var(--primary)', display: 'inline-flex' }}
                  >
                    <svg width="20" height="14" viewBox="0 0 40 24" fill="none" style={{ display: 'block' }}>
                      <path d="M32.175 13H3.79883V11H32.175L26.575 5.4L28 4L36 12L28 20L26.575 18.6L32.175 13Z" fill="currentColor" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Credibility strip — logos (own ventures) + anonymised descriptor cards */}
      <div style={{ marginTop: '6rem' }}>
        <ClientLogos />
      </div>
    </section>
  );
}
