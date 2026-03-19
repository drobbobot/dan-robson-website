'use client';

import { motion } from 'framer-motion';
import { ProfileCard } from './ProfileCard';
import { ClientLogos } from './ClientLogos';

const services = [
  'UX strategy & research',
  'Brand-to-product integration',
  'Product definition',
  'AI-ready design systems',
  'Design-to-code production',
  'Agentic governance',
];

export function ProfileServices() {
  return (
    <section className="relative" style={{ padding: '6rem 1.5rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        {/* Profile card + Services side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row items-start"
          style={{ gap: '2rem' }}
        >
          <ProfileCard />

          {/* Services list */}
          <div className="md:p-[2rem]">
            <p
              className="leading-normal"
              style={{ fontFamily: "'Helvetica Neue', sans-serif", fontStyle: 'italic', color: '#241013', fontSize: '1.125rem', marginBottom: '1rem' }}
            >
              I can help you with:
            </p>
            <ul
              className="list-none"
              style={{ fontFamily: "'Helvetica Neue', sans-serif", color: 'rgba(36,16,19,0.8)', fontSize: '1.125rem', lineHeight: '2rem' }}
            >
              {services.map((item, i) => (
                <motion.li
                  key={item}
                  className="group flex items-center cursor-default"
                  style={{ gap: '0.5rem' }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span
                    className="shrink-0 overflow-hidden w-[1rem] h-[1rem] transition-[width] duration-200 ease-out group-hover:w-[1.6875rem]"
                    style={{ direction: 'rtl' }}
                  >
                    <svg
                      width="27" height="16" viewBox="0 0 40 24" fill="none"
                      style={{ opacity: 0.5, display: 'block' }}
                    >
                      <path d="M32.175 13H3.79883V11H32.175L26.575 5.4L28 4L36 12L28 20L26.575 18.6L32.175 13Z" fill="#1C1B1F"/>
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Client logos — full width, outside padded container */}
      <div style={{ marginTop: '6rem' }}>
        <ClientLogos />
      </div>
    </section>
  );
}
