import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});

const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono"
});

export const metadata: Metadata = {
  title: "Ayush Kumar Jha | Data Scientist & AI/ML Researcher",
  description: "Personal portfolio of Ayush Kumar Jha, a Data Scientist and IIT Madras scholar specializing in AI/ML, autonomous agents, and predictive analytics.",
  keywords: ["Ayush Kumar Jha", "Data Scientist", "IIT Madras", "AI Researcher", "Machine Learning", "Portfolio"],
  openGraph: {
    title: "Ayush Kumar Jha | Data Scientist",
    description: "Building the future with AI and Data Science.",
    url: "https://portfoilo-lovat-psi.vercel.app/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar Jha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha | Portfolio",
    description: "Data Scientist & AI Researcher Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${bebas.variable} ${outfit.variable} ${spaceMono.variable} font-body bg-[#060608]`}>
        {children}
      </body>
    </html>
  );
}
