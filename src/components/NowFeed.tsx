'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import nowData from '../../public/now/now.json';
import { humanise, type NowPayload, type NowItem } from '@/lib/now';

const data = nowData as NowPayload;

const FONT = "'Helvetica Neue', sans-serif";
const FG = '#241013';
const MUTED = 'rgba(36, 16, 19, 0.55)';
const BORDER = 'var(--card-border)';
const EASE = [0.4, 0, 0.2, 1] as const;
const GAP_PX = 12; // matches the 0.75rem track gap

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: 'block' }}>
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="rgba(36,16,19,0.7)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavButton({ dir, disabled, onClick }: { dir: 'left' | 'right'; disabled: boolean; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Previous activity' : 'More activity'}
      initial={false}
      whileHover={disabled ? undefined : { borderColor: 'rgba(36,16,19,0.22)', backgroundColor: 'rgba(36,16,19,0.035)' }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      transition={{ duration: 0.2, ease: EASE }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2rem',
        height: '2rem',
        borderRadius: '100px',
        border: `1px solid ${BORDER}`,
        background: 'transparent',
        cursor: disabled ? 'default' : 'pointer',
        padding: 0,
        opacity: disabled ? 0.35 : 1,
        transition: 'opacity 0.2s ease',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <Arrow dir={dir} />
    </motion.button>
  );
}

function Card({ item }: { item: NowItem }) {
  return (
    <li
      className="now-card"
      style={{
        flex: '0 0 auto',
        width: 'clamp(14rem, 60vw, 17rem)',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--card)',
        border: `1px solid ${BORDER}`,
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-card)',
        padding: '1.125rem 1.125rem 1.25rem',
      }}
    >
      <h3 style={{ fontFamily: FONT, fontSize: '1rem', fontWeight: 500, color: 'rgba(36,16,19,0.9)', lineHeight: 1.35, margin: 0 }}>
        {item.title}
      </h3>

      <div className="flex items-center flex-wrap" style={{ gap: '0.4rem', margin: '0.5rem 0 0.75rem' }}>
        <span style={{ fontFamily: FONT, fontSize: '0.8125rem', color: MUTED }}>{item.display_date}</span>
        {item.category ? (
          <>
            <span aria-hidden style={{ color: MUTED, fontSize: '0.8125rem' }}>·</span>
            <span style={{ fontFamily: FONT, fontSize: '0.8125rem', color: 'rgba(36,16,19,0.7)' }}>{item.category}</span>
          </>
        ) : null}
      </div>

      <p
        style={{
          fontFamily: FONT,
          fontSize: '0.875rem',
          lineHeight: 1.5,
          color: 'rgba(36,16,19,0.8)',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.body}
      </p>

      {item.tools && item.tools.length ? (
        <div className="flex items-center flex-wrap" style={{ gap: '0.375rem', marginTop: 'auto', paddingTop: '0.875rem' }}>
          {item.tools.map((tool) => (
            <span
              key={tool}
              style={{
                fontFamily: FONT,
                fontSize: '0.6875rem',
                color: MUTED,
                border: `1px solid ${BORDER}`,
                borderRadius: '100px',
                padding: '0.1rem 0.5rem',
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      ) : null}
    </li>
  );
}

export function NowFeed() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const count = data.items?.length ?? 0;

  const updateBounds = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setActive(Math.round(progress * (count - 1)));
  }, [count]);

  useEffect(() => {
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [updateBounds]);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = viewportRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('li');
    const step = card ? card.getBoundingClientRect().width + GAP_PX : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  const scrollToDot = useCallback((p: number) => {
    const el = viewportRef.current;
    if (!el || count <= 1) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (p / (count - 1)) * max, behavior: 'smooth' });
  }, [count]);

  if (!data.items || data.items.length === 0) return null;

  // Only fade the RIGHT edge, where a partial card genuinely peeks. The left edge always sits
  // flush against a snapped card, so fading it just clips a fully-visible card — leave it crisp.
  const FADE_RIGHT = '2.5rem';
  const edgeMask = atEnd
    ? 'none'
    : `linear-gradient(to right, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - ${FADE_RIGHT}), rgba(0,0,0,0) 100%)`;

  return (
    <section className="relative" style={{ padding: '6rem 1.5rem' }}>
      <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ maxWidth: '48rem' }}
        >
          {/* Eyebrow */}
          <p
            className="flex items-center"
            style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '1.0625rem', color: FG, margin: 0 }}
          >
            <motion.span
              aria-hidden
              className="shrink-0"
              style={{ width: '7px', height: '7px', borderRadius: '100px', background: 'var(--primary)', marginRight: '8px' }}
              animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Recent activity
          </p>

          {/* Meta */}
          <p style={{ fontFamily: FONT, fontSize: '0.8125rem', color: MUTED, marginTop: '0.5rem', marginBottom: 0 }}>
            Updated {humanise(data.updated)} · {data.cadence}
          </p>

          {/* Explainer */}
          {data.how ? (
            <p style={{ fontFamily: FONT, fontSize: '0.875rem', lineHeight: 1.5, color: 'rgba(36,16,19,0.65)', margin: '0.75rem 0 0', maxWidth: '32rem' }}>
              {data.how}
            </p>
          ) : null}

          {/* Horizontal carousel */}
          <div
            ref={viewportRef}
            className="now-carousel"
            onScroll={updateBounds}
            style={{
              marginTop: '1.75rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '0.25rem 0 0.75rem',
              maskImage: edgeMask,
              WebkitMaskImage: edgeMask,
            }}
          >
            <ul className="list-none flex" style={{ margin: 0, padding: 0, gap: '0.75rem', width: 'max-content' }}>
              {data.items.map((item, i) => (
                <Card key={`${item.date}-${i}`} item={item} />
              ))}
            </ul>
          </div>

          {/* Arrows + position dots */}
          {count > 1 ? (
            <div className="flex items-center" style={{ gap: '1rem', marginTop: '1.25rem' }}>
              <div className="flex items-center" style={{ gap: '0.5rem' }}>
                <NavButton dir="left" disabled={atStart} onClick={() => scrollByCards(-1)} />
                <NavButton dir="right" disabled={atEnd} onClick={() => scrollByCards(1)} />
              </div>
              <div className="flex items-center" style={{ gap: '0.4rem' }}>
                {data.items.map((_, p) => (
                  <motion.button
                    key={p}
                    type="button"
                    onClick={() => scrollToDot(p)}
                    aria-label={`Go to activity ${p + 1}`}
                    aria-current={p === active}
                    animate={{
                      width: p === active ? '18px' : '6px',
                      backgroundColor: p === active ? '#FF3C1A' : 'rgba(36,16,19,0.2)',
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ height: '6px', borderRadius: '100px', border: 'none', padding: 0, cursor: 'pointer', display: 'block' }}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {/* Closer */}
          {data.closer ? (
            <p style={{ fontFamily: FONT, fontStyle: 'italic', fontSize: '0.8125rem', color: MUTED, marginTop: '1.75rem' }}>
              {data.closer}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
