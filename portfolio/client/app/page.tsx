"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechBubblesSection from "@/components/sections/TechBubblesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial load time for the monogram animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-[#060608] min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor />
      <div className="noise-overlay" />
      
      {!isLoading && (
        <div className="flex flex-col relative w-full overflow-x-hidden">
          <Navigation />
          
          <HeroSection />
          
          <TickerSection />
          
          <ServicesSection />
          <SectionDivider />
          
          <TechBubblesSection />
          <SectionDivider />
          
          <ExperienceSection />
          <SectionDivider />
          
          <ProjectsSection />
          <SectionDivider />
          
          <AboutSection />
          
          <ContactSection />
          
          <FooterSection />
        </div>
      )}
    </main>
  );
}
