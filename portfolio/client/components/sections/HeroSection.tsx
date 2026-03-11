"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Sparkle, Trophy } from "lucide-react";
import MagneticButton from "../MagneticButton";

const stats = [
  { label: "Experience", value: "6+ Months" },
  { label: "Certifications", value: "3x IBM" },
  { label: "Hackathons", value: "IIT Finalist" },
  { label: "Projects", value: "35+ Repos" },
];

export default function HeroSection() {
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
            {["AYUSH", "KUMAR", "JHA"].map((name, i) => (
              <div key={name} className="overflow-hidden h-[100px] lg:h-[130px] mb-[-10px] lg:mb-[-20px]">
                <motion.h1
                  custom={i}
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                  className={`font-display text-8xl lg:text-[160px] leading-none tracking-tight ${
                    i === 2 ? "text-[#8B5CF6]" : "text-[#F1F0FB]"
                  }`}
                >
                  {name}
                </motion.h1>
              </div>
            ))}
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
                <span className="font-display text-3xl text-[#F1F0FB]">{stat.value}</span>
                <span className="font-mono text-[9px] tracking-[3px] text-[#555560] uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - 3D/Character Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative hidden lg:flex items-center justify-center min-h-[600px]"
        >
          {/* Circular Rings Decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[450px] h-[450px] border border-[#1E1E24] rounded-full animate-ring-1" />
            <div className="w-[350px] h-[350px] border border-[#1E1E24] rounded-full absolute animate-ring-2" />
          </div>

          {/* Character Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-b from-[#0E0E12] to-[#060608] border border-[#1E1E24] p-4 relative animate-float">
               <div className="w-full h-full bg-[#16161D] flex items-center justify-center text-[#8B5CF6]">
                 {/* Placeholder for Character/Avatar */}
                  <div className="flex flex-col items-center gap-4 text-center">
                    <Sparkle size={48} className="animate-pulse" />
                    <span className="font-mono text-[10px] tracking-widest leading-relaxed">
                      {"<AyushJha />"}<br />
                      <span className="text-[#555560]">IIT-M Scholar</span>
                    </span>
                  </div>
               </div>

               {/* Floating Badges around Character */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -top-6 -right-12 bg-[#0E0E12] border border-[#1E1E24] p-3 flex items-center gap-3 z-20"
               >
                 <Code size={14} className="text-[#06B6D4]" />
                 <span className="font-mono text-[9px] tracking-widest text-[#F1F0FB]">ML / AI</span>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-12 -left-16 bg-[#0E0E12] border border-[#1E1E24] p-3 flex items-center gap-3 z-20"
               >
                 <Database size={14} className="text-[#8B5CF6]" />
                 <span className="font-mono text-[9px] tracking-widest text-[#F1F0FB]">FULL STACK</span>
               </motion.div>

               <motion.div 
                 animate={{ x: [0, 8, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="absolute top-1/2 -right-20 bg-[#0E0E12] border border-[#1E1E24] p-3 flex items-center gap-3 z-20"
               >
                 <Trophy size={14} className="text-[#F59E0B]" />
                 <span className="font-mono text-[9px] tracking-widest text-[#F1F0FB]">IIT FINALIST</span>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="font-mono text-[9px] tracking-[4px] text-[#555560] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8B5CF6] to-transparent" />
      </div>
    </section>
  );
}
