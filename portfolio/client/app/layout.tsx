import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Kumar Jha — Data Scientist & AI/ML Researcher | IIT Madras",
  description:
    "IIT Madras Data Science scholar. AI engineer, ML researcher, and full-stack builder. Open to AI/ML roles and research collaborations.",
  openGraph: {
    title: "Ayush Kumar Jha — Data Scientist & AI/ML Researcher | IIT Madras",
    description:
      "IIT Madras Data Science scholar. AI engineer, ML researcher, and full-stack builder. Open to AI/ML roles and research collaborations.",
    type: "website",
    locale: "en_US",
    url: "https://ayushjha.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha — Data Scientist & AI/ML Researcher",
    description:
      "IIT Madras Data Science scholar building AI systems at the intersection of science & business.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
