'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWord } from '@/lib/WordContext';
import { wordStyles } from '@/lib/wordStyles';
import { HandDrawnSmiley } from './HandDrawnSmiley';
import { ShieldBadge } from './ShieldBadge';
import { CursorArrow } from './CursorArrow';

export function CyclingWord() {
  const { activeWord, advanceIndex } = useWord();
  const style = wordStyles[activeWord];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      advanceIndex();
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advanceIndex, activeWord]);

  const handleClick = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    advanceIndex();
  };

  return (
    <span onClick={handleClick} className="cursor-pointer inline">
      <AnimatePresence mode="wait">
        <motion.span
          key={activeWord}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative inline-block pr-[0.05em]"
          style={{
            fontFamily: style.fontFamily,
            color: style.gradient ? 'transparent' : style.color,
            fontWeight: style.fontWeight,
            letterSpacing: style.letterSpacing,
            fontStyle: style.fontStyle,
            textDecoration: style.decoration,
            textDecorationColor: style.decorationColor,
            textDecorationSkipInk: 'none',
            textUnderlineOffset: '0.25rem',
            textDecorationThickness: '0.125rem',
            lineHeight: '1.1',
            fontSize: 'inherit',
            verticalAlign: 'baseline',
            ...(style.gradient ? {
              backgroundImage: style.gradient,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            } : {}),
          }}
        >
          {style.word}
          {style.showHandDrawn && <HandDrawnSmiley />}
          {style.showBadge && <ShieldBadge />}
          {style.showArrow && <CursorArrow color={style.color} />}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
