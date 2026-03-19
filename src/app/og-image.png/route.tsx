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
          backgroundColor: '#EDE9E1',
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
            backgroundColor: '#FAF7EF',
            borderRadius: '16px',
            border: '2px solid #E9E5DD',
            boxShadow: '0px 8px 40px rgba(0,0,0,0.1)',
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
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                boxShadow: '0 0 10px rgba(34,197,94,0.6)',
              }}
            />
            <span style={{ fontSize: '22px', color: '#241013', opacity: 0.6 }}>
              Available
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: '88px',
              color: '#241013',
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
                border: '2px solid #E9E5DD',
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
              <p style={{ fontSize: '36px', color: '#241013', margin: 0, letterSpacing: '-0.5px' }}>
                Dan Robson
              </p>
              <p style={{ fontSize: '24px', color: 'rgba(36,16,19,0.7)', margin: 0 }}>
                Brand Systems / Lead UX Designer · Newcastle, Australia
              </p>
              <p style={{ fontSize: '20px', color: 'rgba(36,16,19,0.45)', margin: 0, marginTop: '2px' }}>
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
