import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppChrome from '@/components/AppChrome';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://portfoilo-lovat-psi.vercel.app'),
  title: {
    default: 'Ayush Kumar Jha | AI & Full-Stack Engineer',
    template: '%s | Ayush Kumar Jha',
  },
  description:
    'Portfolio of Ayush Kumar Jha, an IIT Madras Data Science Scholar building AI-powered applications, multi-agent systems, RAG tools, and full-stack web projects.',
  keywords: [
    'Ayush Kumar Jha',
    'IIT Madras',
    'AI Engineer',
    'Full Stack Developer',
    'Data Science',
    'RAG',
    'Multi-Agent Systems',
    'Next.js',
    'FastAPI',
    'LangChain',
    'Hackathon India',
  ],
  authors: [{ name: 'Ayush Kumar Jha', url: 'https://github.com/ayushjhaa1187-spec' }],
  creator: 'Ayush Kumar Jha',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://portfoilo-lovat-psi.vercel.app',
    siteName: 'Ayush Kumar Jha — Portfolio',
    title: 'Ayush Kumar Jha | AI & Full-Stack Engineer',
    description:
      'IIT Madras Data Science Scholar building AI-powered applications, multi-agent systems, RAG tools, and full-stack products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayush Kumar Jha — AI & Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Kumar Jha | AI & Full-Stack Engineer',
    description:
      'IIT Madras Data Science Scholar building AI-powered applications, multi-agent systems, and RAG tools.',
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
};

// ── JSON-LD Structured Data ───────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ayush Kumar Jha',
  url: 'https://portfoilo-lovat-psi.vercel.app',
  sameAs: [
    'https://github.com/ayushjhaa1187-spec',
    'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
  ],
  jobTitle: 'AI & Full-Stack Engineer',
  description: 'IIT Madras Data Science Scholar building AI-powered applications, multi-agent systems, and RAG tools.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Indian Institute of Technology Madras',
    sameAs: 'https://www.iitm.ac.in',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Full-Stack Development',
    'Data Science',
    'Retrieval-Augmented Generation',
    'Multi-Agent Systems',
    'LangChain',
    'Next.js',
    'Python',
    'FastAPI',
  ],
  nationality: {
    '@type': 'Country',
    name: 'India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
