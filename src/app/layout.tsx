import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import { GridBackground } from '@/components/GridBackground';
import './globals.css';

// EB Garamond is loaded as the serif fallback for Martina Plantijn (the v4
// display voice). When the licensed Martina woff2 lands it takes precedence;
// until then headings render in this close serif rather than a gated font.
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robson.studio'),
  title: 'Dan Robson — Brand Systems & UX Designer | Newcastle, Australia',
  description:
    'Robson Studio is the personal design practice of Dan Robson, a UX and design-systems designer in Newcastle, Australia.',
  keywords: ['design', 'design systems', 'UX', 'product design', 'Newcastle', 'Australia', 'Dan Robson', 'Robson Studio'],
  authors: [{ name: 'Dan Robson', url: 'https://robson.studio' }],
  creator: 'Dan Robson',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://robson.studio',
    siteName: 'Robson Studio',
    title: 'Dan Robson — Brand Systems & UX Designer',
    description:
      'Robson Studio is the personal design practice of Dan Robson, a UX and design-systems designer in Newcastle, Australia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Robson Studio — the personal design practice of Dan Robson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan Robson — Brand Systems & UX Designer',
    description:
      'Robson Studio is the personal design practice of Dan Robson, a UX and design-systems designer in Newcastle, Australia.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://robson.studio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dan Robson',
              url: 'https://robson.studio',
              jobTitle: 'UX & Design Systems Designer',
              description:
                'Robson Studio is the personal design practice of Dan Robson, a UX and design-systems designer in Newcastle, Australia.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Newcastle',
                addressRegion: 'NSW',
                addressCountry: 'AU',
              },
              email: 'dan@robson.studio',
              knowsAbout: ['Design', 'Design Systems', 'User Experience', 'Product Design'],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <GridBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
