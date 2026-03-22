import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar and Footer are globally rendered in layout.tsx to avoid duplicate React rendering and DOM nodes */}
      <Hero />
    </main>
  );
}
