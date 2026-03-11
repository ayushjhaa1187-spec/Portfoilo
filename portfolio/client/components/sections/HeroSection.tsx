"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "../MagneticButton";
import dynamic from "next/dynamic";
import ErrorBoundary from "../ErrorBoundary";

// Dynamically import Lottie for client-side only rendering
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const stats = [
  { label: "Industry Experience", value: "6+ Months" },
  { label: "IBM Certified", value: "3x" },
  { label: "Multiple IITs", value: "IIT Finalist" },
  { label: "GitHub Repos", value: "35+" },
];

const floatingBadges = [
  { text: "ML / AI", position: "top-0 -right-4", delay: 0 },
  { text: "Data Science", position: "top-1/2 -left-32", delay: 1.5 },
  { text: "IIT Madras", position: "bottom-0 -right-4", delay: 3 },
  { text: "Full Stack", position: "bottom-1/2 -left-32", delay: 0.8 },
];

export default function HeroSection() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch the Lottie JSON via the stable URL provided by the user
    fetch("https://lottie.host/020928ff-3c40-41da-a78b-37ca72d4b8f5/9Yj1j59J1M.json")
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Lottie fetch failed or CORS issue:", err));
  }, []);

  const nameVariants: any = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-center px-6 lg:px-20 overflow-hidden pt-32 lg:pt-0">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#8B5CF6] opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-[#0E0E12] border border-[#1E1E24] px-4 py-2 w-fit mb-12"
          >
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse-dot" />
            <span className="font-mono text-[10px] tracking-[4px] text-[#F1F0FB] uppercase">
              OPEN TO AI/ML ROLES
            </span>
          </motion.div>

          {/* Stacking Name */}
          <div className="mb-10">
            <div className="overflow-hidden h-[100px] lg:h-[130px] mb-[-10px] lg:mb-[-20px]">
              <motion.h1
                custom={0}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-8xl lg:text-[140px] leading-none tracking-tight text-[#F1F0FB]"
              >
                AYUSH
              </motion.h1>
            </div>
            <div className="overflow-hidden h-[100px] lg:h-[130px] mb-[-10px] lg:mb-[-20px]">
              <motion.h1
                custom={1}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-8xl lg:text-[140px] leading-none tracking-tight text-outline"
              >
                KUMAR
              </motion.h1>
            </div>
            <div className="overflow-hidden h-[100px] lg:h-[130px]">
              <motion.h1
                custom={2}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-8xl lg:text-[140px] leading-none tracking-tight text-[#8B5CF6]"
              >
                JHA
              </motion.h1>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-xs lg:text-sm tracking-[5px] text-[#06B6D4] uppercase mb-12"
          >
            Data Scientist · IIT Madras · AI/ML Researcher
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 mb-20"
          >
            <MagneticButton>
              <a 
                href="#projects" 
                className="bg-[#8B5CF6] text-white px-10 py-5 font-mono text-xs tracking-widest flex items-center gap-2 hover:bg-[#7c3aed] transition-colors"
              >
                VIEW PROJECTS <ArrowDown size={14} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a 
                href="/resume.pdf" 
                className="bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-10 py-5 font-mono text-xs tracking-widest hover:border-[#8B5CF6] transition-colors"
              >
                DOWNLOAD CV
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#1E1E24]"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-4xl text-[#F1F0FB]">{stat.value}</span>
                <span className="font-mono text-[9px] tracking-[3px] text-[#555560] uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Lottie Character Area */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
           {/* Soft violet radial glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B5CF6]/20 rounded-full blur-[80px]" />

           {/* Rotating Concentric Rings */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[500px] h-[500px] border border-[#1E1E24] rounded-full animate-ring-1 opacity-20" />
             <div className="w-[380px] h-[380px] border border-[#1E1E24] rounded-full absolute animate-ring-2 opacity-30" />
           </div>

           {/* Character Container */}
           <div className="relative z-10 w-full h-full flex items-center justify-center animate-vertical-float">
             <div className="w-[380px] h-[380px]">
               <ErrorBoundary>
                 {animationData ? (
                   <Lottie 
                    animationData={animationData} 
                    loop={true} 
                    style={{ width: '100%', height: '100%' }}
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center">
                     <div className="w-4 h-4 border-2 border-[#8B5CF6] border-t-transparent rounded-full animate-spin" />
                   </div>
                 )}
               </ErrorBoundary>
             </div>

             {/* Floating Badges */}
             {floatingBadges.map((badge, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.5 + i * 0.2 }}
                 className={`absolute ${badge.position} z-20`}
               >
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ 
                     repeat: Infinity, 
                     duration: 5, 
                     ease: "easeInOut", 
                     delay: badge.delay 
                   }}
                   className="bg-[#141418] border border-[#1E1E24] px-4 py-3 shadow-2xl"
                 >
                   <span className="font-mono text-[10px] tracking-widest text-[#F1F0FB] whitespace-nowrap">
                     {badge.text}
                   </span>
                 </motion.div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="font-mono text-[9px] tracking-[4px] text-[#555560] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8B5CF6] to-transparent" />
      </div>
    </section>
  );
}
