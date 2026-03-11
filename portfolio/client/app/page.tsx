"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import Navigation from "../components/Navigation";
import SectionDivider from "../components/SectionDivider";
import HeroSection from "../components/sections/HeroSection";
import TickerSection from "../components/sections/TickerSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechBubblesSection from "../components/sections/TechBubblesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navigation />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <main>
        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Section 2 — Ticker */}
        <TickerSection />

        <SectionDivider />

        {/* Section 3 — What I Do */}
        <ServicesSection />

        <SectionDivider />

        {/* Section 4 — Tech Stack */}
        <TechBubblesSection />

        <SectionDivider />

        {/* Section 5 — Experience */}
        <ExperienceSection />

        <SectionDivider />

        {/* Section 6 — Projects */}
        <ProjectsSection />

        <SectionDivider />

        {/* Section 7 — About */}
        <AboutSection />

        <SectionDivider />

        {/* Section 8 — Contact */}
        <ContactSection />

        {/* Section 9 — Footer */}
        <FooterSection />
      </main>
    </>
  );
}
