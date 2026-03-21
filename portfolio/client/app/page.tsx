import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ⚡ Bolt: Removed duplicate Navbar and Footer rendering since they are already in layout.tsx to reduce React hydration time and DOM bloat */}
      <Hero />
    </main>
  );
}
