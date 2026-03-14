import Hero from '@/components/Hero';

export default function Home() {
  // ⚡ Bolt: Removed duplicate Navbar and Footer components here.
  // The Next.js App Router already wraps this page with layout.tsx,
  // so including them here caused double rendering and increased hydration time.
  return <Hero />;
}
