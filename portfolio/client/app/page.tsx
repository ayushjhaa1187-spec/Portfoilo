import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ⚡ Bolt: Removed duplicate Navbar and Footer components. These are already rendered in layout.tsx. Duplicate rendering causes unnecessary DOM nodes and increased React hydration time. */}
      <Hero />
    </main>
  );
}
