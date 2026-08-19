import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { AboutSection } from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import { TimelinePreview } from '@/components/TimelinePreview';
import { HackathonsSection } from '@/components/HackathonsSection';
import CollaborationCTA from '@/components/CollaborationCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush Kumar Jha | AI & Full-Stack Engineer',
  description:
    'Portfolio of Ayush Kumar Jha — IIT Madras Data Science Scholar building AI-powered applications, multi-agent systems, RAG tools, and full-stack web projects.',
};

export default function Home() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Tech stack strip */}
      <Marquee />

      {/* 3. Featured Projects */}
      <FeaturedProjects />

      {/* 4. About / Education Snapshot */}
      <AboutSection />

      {/* 5. Journey Timeline */}
      <TimelinePreview />

      {/* 6. Hackathons & Competitions */}
      <HackathonsSection />

      {/* 7. Skills */}
      <SkillsSection />

      {/* 8. Contact CTA */}
      <CollaborationCTA />
    </main>
  );
}
