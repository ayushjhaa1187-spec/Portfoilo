import type { Metadata } from "next";
import { Inter, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushjha.dev"),
  title: {
    default: "Ayush Kumar Jha | Data Scientist & ML/AI Researcher",
    template: "%s | Ayush Kumar Jha",
  },
  description:
    "IIT Madras Data Science Scholar building AI solutions at the intersection of science & business. ML/AI Researcher | Entrepreneurial Innovator.",
  keywords: [
    "Ayush Kumar Jha",
    "IIT Madras",
    "Data Scientist",
    "Machine Learning",
    "AI Researcher",
    "Satellite Data",
    "Remote Sensing",
    "Entrepreneur",
    "Data Science Portfolio",
  ],
  authors: [{ name: "Ayush Kumar Jha" }],
  creator: "Ayush Kumar Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushjha.dev",
    siteName: "Ayush Kumar Jha Portfolio",
    title: "Ayush Kumar Jha | Data Scientist & ML/AI Researcher",
    description:
      "IIT Madras Data Science Scholar building AI solutions at the intersection of science & business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar Jha - Data Scientist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Jha | Data Scientist & ML/AI Researcher",
    description:
      "IIT Madras Scholar | ML/AI Researcher | Entrepreneurial Innovator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Ayush Kumar Jha",
        url: "https://ayushjha.dev",
        jobTitle: "Data Scientist & ML/AI Researcher",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "IIT Madras",
        },
        sameAs: [
          "https://github.com/ayushjhaa1187-spec",
          "https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://ayushjha.dev",
        name: "Ayush Kumar Jha Portfolio",
        description:
          "IIT Madras Data Science Scholar building AI solutions at the intersection of science & business.",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('portfolio-theme');
                  var sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = storedTheme || sysTheme;
                  document.documentElement.setAttribute('data-theme', initialTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} ${poppins.variable}`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
