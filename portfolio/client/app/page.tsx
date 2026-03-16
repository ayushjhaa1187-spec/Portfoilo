import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      {/* ⚡ Bolt: Removed duplicate Navbar/Footer components to prevent double rendering in Next.js App Router.
          Impact: Reduces React hydration time and DOM size. Navbar and Footer are already handled globally by layout.tsx. */}
      <Hero />
    </>
  );
}
