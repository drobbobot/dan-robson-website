import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import { WordProvider } from '@/lib/WordContext';
import { GridBackground } from '@/components/GridBackground';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const cooperBlackItalic = localFont({
  src: '../../public/fonts/CooperBlack-Italic.otf',
  weight: '900',
  style: 'italic',
  variable: '--font-cooper-black',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robson.studio'),
  title: 'Dan Robson — Brand Systems & UX Designer | Newcastle, Australia',
  description: 'I build digital brands that feel intentional. Specialising in brand-to-product design systems, UX strategy, AI-ready design systems, and agentic governance for growing teams.',
  keywords: ['UX designer', 'brand systems', 'design systems', 'UX strategy', 'product design', 'Newcastle', 'Australia', 'Dan Robson', 'agentic governance', 'AI design systems'],
  authors: [{ name: 'Dan Robson', url: 'https://robson.studio' }],
  creator: 'Dan Robson',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://robson.studio',
    siteName: 'Robson Studio',
    title: 'Dan Robson — Brand Systems & UX Designer',
    description: 'I build digital brands that feel intentional. Brand systems, UX strategy, and AI-ready design systems for growing teams.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dan Robson — Brand Systems & UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan Robson — Brand Systems & UX Designer',
    description: 'I build digital brands that feel intentional. Brand systems, UX strategy, and AI-ready design systems for growing teams.',
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
    <html lang="en" className={`${ebGaramond.variable} ${cooperBlackItalic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dan Robson',
              url: 'https://robson.studio',
              jobTitle: 'Brand Systems / Lead UX Designer',
              description: 'I build digital brands that feel intentional. Specialising in brand-to-product design systems, UX strategy, AI-ready design systems, and agentic governance.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Newcastle',
                addressRegion: 'NSW',
                addressCountry: 'AU',
              },
              email: 'dan@robson.studio',
              knowsAbout: [
                'UX Strategy',
                'Brand Systems',
                'Design Systems',
                'Product Design',
                'AI-ready Design Systems',
                'Agentic Governance',
                'Design-to-Code Production',
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <WordProvider>
          <GridBackground />
          <div className="relative z-10">
            {children}
          </div>
        </WordProvider>
      </body>
    </html>
  );
}
