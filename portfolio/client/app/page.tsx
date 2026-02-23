import Hero from '@/components/Hero';

export default function Home() {
  // Optimization: Navbar and Footer are provided by RootLayout (app/layout.tsx),
  // preventing double rendering and unnecessary DOM nodes.
  return (
    <Hero />
  );
}
