"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import CommandPalette from "@/components/CommandPalette";
import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import DeveloperDashboard from "@/components/sections/DeveloperDashboard";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ThoughtProcess from "@/components/sections/ThoughtProcess";
import AboutSection from "@/components/sections/AboutSection";
import RecruiterSection from "@/components/sections/RecruiterSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import SectionDivider from "@/components/SectionDivider";
import AIAssistant from "@/components/AIAssistant";

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
        <div className="relative w-full overflow-x-hidden">
          <Navigation />
          <CommandPalette />
          
          <HeroSection />
          
          <TickerSection />
          
          <CurrentlyBuilding />
          <SectionDivider />

          <DeveloperDashboard />
          <SectionDivider />
          
          <ExperienceSection />
          <SectionDivider />
          
          <ProjectsSection />
          <SectionDivider />

          <ThoughtProcess />
          <SectionDivider />
          
          <AboutSection />
          <SectionDivider />
          
          <RecruiterSection />
          <SectionDivider />
          
          <ContactSection />
          
          <AIAssistant />
          <FooterSection />
        </div>
      )}
    </main>
  );
}
