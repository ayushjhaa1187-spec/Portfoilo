import Hero from '@/components/Hero';

export default function Home() {
  return (
    // ⚡ Bolt: Removed duplicate Navbar and Footer to prevent duplicate React lifecycle executions and DOM rendering bottlenecks.
    <main className="flex min-h-screen flex-col">
      <Hero />
    </main>
  );
}
