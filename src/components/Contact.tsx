'use client';

import { motion } from 'framer-motion';
import { useWord } from '@/lib/WordContext';
import { wordStyles } from '@/lib/wordStyles';
import { StyledButton } from './StyledButton';

export function Contact() {
  const { activeWord } = useWord();
  const style = wordStyles[activeWord];

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
            className="leading-[1.1] transition-all duration-300"
            style={{
              fontFamily: style.contactStyle.fontFamily,
              color: style.contactStyle.color,
              fontWeight: style.contactStyle.fontWeight,
              fontStyle: style.contactStyle.fontStyle,
              letterSpacing: style.contactStyle.letterSpacing,
              maxWidth: '36.75rem',
              fontSize: '4rem',
            }}
          >
            {style.letsTalkText}
          </h2>

          <StyledButton href="mailto:dan@robson.studio">
            dan@robson.studio
          </StyledButton>
        </motion.div>
      </div>
    </section>
  );
}
