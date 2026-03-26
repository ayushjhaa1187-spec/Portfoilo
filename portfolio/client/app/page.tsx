// ⚡ Bolt: Removed duplicated Navbar and Footer components.
// These are already rendered globally in app/layout.tsx.
// Removing them here eliminates duplicate DOM nodes, reduces React
// hydration overhead, and prevents unnecessary re-renders.

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
    </main>
  );
}
