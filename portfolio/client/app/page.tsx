import Hero from '@/components/Hero';

// Optimization: Navbar and Footer are provided by the root layout.
// Removed duplicate imports and rendering here to prevent re-renders and hydration mismatches.
export default function Home() {
  return (
    <Hero />
  );
}
