'use client';

import Image from 'next/image';

export function ProfileCard() {
  return (
    <div
      className="squircle relative flex flex-col md:shrink-0 md:max-w-[21.5625rem]"
      style={{
        gap: '1.5rem',
        padding: '2rem',
        width: '100%',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Profile photo */}
      <div
        className="rounded-full overflow-hidden shrink-0"
        style={{ width: '6.25rem', height: '6.25rem', border: '1px solid var(--border)' }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Dan Robson"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col" style={{ gap: '1.0625rem' }}>
        <div className="flex flex-col" style={{ gap: '0.125rem', fontFamily: 'var(--font-sans)' }}>
          <p style={{ color: 'var(--foreground)', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
            Dan Robson
          </p>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', letterSpacing: '-0.01em' }}>
            Brand Systems / Lead UX Designer
          </p>
        </div>

        <div className="flex items-center" style={{ gap: '0.5rem' }}>
          <Image
            src="/images/icon-location.svg"
            alt=""
            width={24}
            height={24}
            style={{ width: '1.25rem', height: '1.25rem', opacity: 0.7 }}
          />
          <p
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--muted-foreground)', fontSize: '1rem', letterSpacing: '-0.01em' }}
          >
            Newcastle, NSW Australia
          </p>
        </div>
      </div>
    </div>
  );
}
