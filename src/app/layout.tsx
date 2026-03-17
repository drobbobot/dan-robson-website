import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const generalSans = localFont({
  src: [
    { path: '../../public/fonts/GeneralSans-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/GeneralSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

const switzer = localFont({
  src: [
    { path: '../../public/fonts/Switzer-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Switzer-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-switzer',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dan Robson — Brand Systems / UX Designer',
  description: 'I make digital brands feel human. Brand systems, interaction architecture, and agentic governance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable} ${switzer.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
