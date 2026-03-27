import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ⚡ Bolt: Navbar and Footer are rendered in layout.tsx. Do not duplicate them here to avoid double rendering and hydration issues. */}
      <Hero />
    </main>
  );
}
