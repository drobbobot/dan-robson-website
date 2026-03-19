'use client';

import Image from 'next/image';

export function ProfileCard() {
  return (
    <div
      className="relative flex flex-col md:shrink-0 md:max-w-[21.5625rem]"
      style={{
        gap: '1.5rem',
        padding: '2rem',
        width: '100%',
        backgroundColor: '#FAF7EF',
        border: '2px solid #E9E5DD',
        borderRadius: '0.5rem',
        boxShadow: '0 0.25rem 1rem rgba(0,0,0,0.08)',
      }}
    >
      {/* Available indicator */}
      <div
        className="absolute flex items-center"
        style={{
          top: '1rem',
          right: '1rem',
          gap: '0.375rem',
        }}
      >
        <span className="relative flex" style={{ height: '0.5rem', width: '0.5rem' }}>
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ backgroundColor: '#22C55E' }}
          />
          <span
            className="relative inline-flex rounded-full"
            style={{ height: '0.5rem', width: '0.5rem', backgroundColor: '#22C55E', boxShadow: '0 0 0.375rem rgba(34,197,94,0.6)' }}
          />
        </span>
        <span
          style={{ fontFamily: "'Helvetica Neue', sans-serif", color: '#241013', opacity: 0.6, fontSize: '0.8125rem', letterSpacing: '-0.01625rem' }}
        >
          Available
        </span>
      </div>

      {/* Profile photo */}
      <div
        className="rounded-full overflow-hidden shrink-0"
        style={{ width: '6.25rem', height: '6.25rem', border: '2px solid #E9E5DD' }}
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
        <div className="flex flex-col" style={{ gap: '0.125rem', fontFamily: "'Helvetica Neue', sans-serif" }}>
          <p style={{ color: '#241013', fontSize: '1.5rem', letterSpacing: '-0.03rem' }}>
            Dan Robson
          </p>
          <p style={{ color: 'rgba(36,16,19,0.8)', fontSize: '1rem', letterSpacing: '-0.02rem' }}>
            Brand Systems / Lead UX Designer
          </p>
        </div>

        <div className="flex items-center" style={{ gap: '0.5rem' }}>
          <Image
            src="/images/icon-location.svg"
            alt=""
            width={24}
            height={24}
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
          <p
            style={{ fontFamily: "'Helvetica Neue', sans-serif", color: 'rgba(36,16,19,0.8)', fontSize: '1rem', letterSpacing: '-0.02rem' }}
          >
            Newcastle, NSW Australia
          </p>
        </div>
      </div>
    </div>
  );
}
