import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { SkillCloud } from '@/components/SkillCloud';
import { AboutSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <SkillCloud />
      <AboutSection />
    </main>
  );
}
