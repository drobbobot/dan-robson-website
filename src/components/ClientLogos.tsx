'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { src: '/images/logo-prezzee.png', alt: 'Prezzee', width: 412, height: 344 },
  { src: '/images/logo-nobleoak.png', alt: 'NobleOak', width: 736, height: 344 },
  { src: '/images/logo-grays.png', alt: 'Grays', width: 352, height: 344 },
  { src: '/images/logo-king.png', alt: 'King Living', width: 512, height: 344 },
  { src: '/images/logo-scenic.png', alt: 'Scenic', width: 500, height: 344 },
  { src: '/images/logo-money.png', alt: 'money.com.au', width: 692, height: 344 },
  { src: '/images/logo-compassion.png', alt: 'Compassion', width: 480, height: 344 },
  { src: '/images/logo-aurizon.png', alt: 'Aurizon', width: 572, height: 344 },
];

function LogoStrip() {
  return (
    <div className="flex items-center shrink-0" style={{ gap: '3.75rem' }}>
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain shrink-0"
          style={{ height: '3.5rem', width: 'auto' }}
        />
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
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
  );
}
