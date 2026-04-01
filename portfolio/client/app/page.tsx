import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AchievementsBanner } from '@/components/AchievementsBanner';
import { TimelinePreview } from '@/components/TimelinePreview';
import { CollaborationCTA } from '@/components/CollaborationCTA';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden pt-10">
      <Hero />
      <Marquee />
      <div className="space-y-[var(--section-gap)]">
         <FeaturedProjects />
         <AboutSection />
         <SkillsSection />
         <AchievementsBanner />
         <TimelinePreview />
         <CollaborationCTA />
      </div>
    </div>
  );
}
