import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppChrome from '@/components/AppChrome';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoilo-lovat-psi.vercel.app'),
  title: {
    default: 'Ayush Kumar Jha — AI Builder & Full-Stack Developer | IIT Madras',
    template: '%s · Ayush Kumar Jha'
  },
  description:
    'BS Data Science @ IIT Madras. Jury at GES IIT KGP. Finalist at 8 IITs. Building autonomous AI, accessible fintech, and B2B SaaS.',
  keywords: ['Ayush Kumar Jha', 'IIT Madras', 'AI Engineer', 'Full Stack', 'Next.js', 'FastAPI', 'Hackathon India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://portfoilo-lovat-psi.vercel.app',
    title: 'Ayush Kumar Jha — AI Builder | IIT Madras',
    description: '2nd semester. 8 IITs. 46+ repos. Building the future.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
