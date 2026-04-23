import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar Jha | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Ayush Kumar Jha, an IIT Madras Data Science student. Specializing in Multi-agent systems and modern web architectures.",
  metadataBase: new URL('https://portfoilo-lovat-psi.vercel.app/'),
  openGraph: {
    title: "Ayush Kumar Jha | AI Agent Developer",
    description: "Engineering autonomous intelligence and scalable data ecosystems.",
    url: "https://portfoilo-lovat-psi.vercel.app/",
    siteName: "Ayush Kumar Jha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayush Kumar Jha Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha | AI & Engineering",
    description: "AI Agent Developer & Full-Stack Enthusiast Portfolio",
    creator: "@ayushjhaa1187",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
