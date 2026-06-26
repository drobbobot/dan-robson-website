import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET() {
  const profileImage = await readFile(join(process.cwd(), 'public/images/profile.jpg'));
  const profileBase64 = `data:image/jpeg;base64,${profileImage.toString('base64')}`;

  const fontData = await readFile(join(process.cwd(), 'node_modules/@vercel/og/vendor/noto-sans-v27-latin-regular.ttf')).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F2F0EB',
          padding: '32px',
        }}
      >
        {/* Card */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FBFAF5',
            borderRadius: '22px',
            border: '1px solid #E7E5DF',
            boxShadow: '0px 8px 40px rgba(26,23,20,0.1)',
            padding: '56px',
            position: 'relative',
          }}
        >
          {/* Available indicator */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '22px', color: '#1A1714', opacity: 0.6 }}>
              Independent practice
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: '88px',
              color: '#1A1714',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              maxWidth: '900px',
            }}
          >
            I build digital brands that feel intentional.
          </h1>

          {/* Profile row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <div
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid #E7E5DF',
                display: 'flex',
                flexShrink: 0,
              }}
            >
              <img
                src={profileBase64}
                alt=""
                width={96}
                height={96}
                style={{ width: '96px', height: '96px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '36px', color: '#1A1714', margin: 0, letterSpacing: '-0.5px' }}>
                Dan Robson
              </p>
              <p style={{ fontSize: '24px', color: 'rgba(26,23,20,0.7)', margin: 0 }}>
                Brand Systems / Lead UX Designer · Newcastle, Australia
              </p>
              <p style={{ fontSize: '20px', color: 'rgba(26,23,20,0.45)', margin: 0, marginTop: '2px' }}>
                robson.studio
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
