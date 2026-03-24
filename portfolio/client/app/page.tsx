import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ⚡ Bolt: Removed Navbar and Footer as they are already rendered in layout.tsx */}
      <Hero />
    </main>
  );
}
