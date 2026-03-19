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
  title: 'Dan Robson — Brand Systems / UX Designer',
  description: 'I build digital brands that feel intentional. Brand systems, interaction architecture, and agentic governance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${cooperBlackItalic.variable}`}>
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
