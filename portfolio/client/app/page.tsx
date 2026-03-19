import Hero from '@/components/Hero';

export default function Home() {
  // Bolt Optimization: Returning only the Hero component.
  // Navbar and Footer are already rendered in layout.tsx.
  // This reduces React hydration time and unnecessary DOM nodes.
  return <Hero />;
}
