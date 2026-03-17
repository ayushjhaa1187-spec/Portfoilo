"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Download, Calendar, ArrowRight } from "lucide-react";
import MagneticButton from "../MagneticButton";
import dynamic from "next/dynamic";
import ErrorBoundary from "../ErrorBoundary";
import { personalInfo, recruiterInfo, githubStats } from "../../data/portfolio";

// Dynamically import Lottie for client-side only rendering
// Dynamically import Lottie removed for robustness - replacing with custom SVG/Framer Motion visual
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const roles = [
  "AI/ML Researcher",
  "Full Stack Architect",
  "Product Designer",
  "Data Scientist",
  "Foundational Engineer"
];

const floatingBadges = [
  { text: "ML / AI", position: "top-[15%] -right-[5%]", delay: 0 },
  { text: "Data Science", position: "top-[50%] -left-[10%]", delay: 1.5 },
  { text: "IIT Madras", position: "bottom-[15%] right-[0%]", delay: 3 },
  { text: "Full Stack", position: "bottom-[30%] -left-[5%]", delay: 0.8 },
];

export default function HeroSection() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Lottie fetch removed to fix 'rotating circle' loading issue
  // useEffect(() => {
  //   fetch("https://lottie.host/020928ff-3c40-41da-a78b-37ca72d4b8f5/9Yj1j59J1M.json")
  //     .then(res => res.json())
  //     .then(data => setAnimationData(data))
  //     .catch(err => console.error("Lottie fetch failed:", err));
  // }, []);

  // Simple Typewriter Effect
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < role.length) {
        setTypedText(role.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(role.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === role.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  const nameVariants: any = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.1,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100vh] flex flex-col justify-center px-6 overflow-hidden py-16 md:py-24 lg:py-32 bg-[#0A0A0B]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F1F0FB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#06B6D4]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <div className="relative">
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-3 bg-[#111113] border border-[#1E1E24] px-5 py-2.5 w-fit mb-12 rounded-full cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="font-mono text-[10px] tracking-[2px] text-[#F1F0FB]/80 uppercase group-hover:text-[#F1F0FB] transition-colors">
              {recruiterInfo.status}
            </span>
            <ArrowRight size={12} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </motion.div>

          {/* Headline Section */}
          <div className="mb-8">
            <motion.div className="flex flex-col gap-0">
               <div className="overflow-hidden">
                <motion.h1 custom={0} variants={nameVariants} initial="hidden" animate="visible" className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-tighter text-[#F1F0FB]">
                  {personalInfo.firstName.toUpperCase()}
                </motion.h1>
               </div>
               <div className="overflow-hidden">
                <motion.h1 custom={1} variants={nameVariants} initial="hidden" animate="visible" className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1F0FB] to-[#D4AF37] animate-gradient-x">
                  {personalInfo.lastName.toUpperCase()}
                </motion.h1>
               </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px w-12 bg-[#D4AF37]/40" />
            <div className="font-mono text-xl lg:text-3xl text-[#06B6D4] font-medium min-h-[1.5em] flex items-center">
              {typedText}<span className="w-1 h-8 bg-[#D4AF37] ml-2 animate-pulse" />
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl text-lg lg:text-xl text-[#F1F0FB]/60 leading-relaxed mb-12 font-light"
          >
            Architecting <span className="text-[#F1F0FB] font-medium italic">future-ready autonomous systems</span> at the intersection of AI, Economics, and High-Impact Software Engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12"
          >
            <img 
               src="/signature-gold.png" 
               alt="Signature" 
               style={{ height: '60px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5 mb-24"
          >
            <MagneticButton>
              <a 
                href="#projects" 
                className="group relative bg-[#D4AF37] text-[#0A0A0B] px-10 py-5 font-mono text-xs font-bold tracking-[3px] flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">EXPLORE WORK</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </MagneticButton>
            
            <div className="flex gap-3">
              <MagneticButton>
                <a 
                  href={recruiterInfo.resumeUrl}
                  className="bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-6 py-5 font-mono text-xs tracking-widest hover:border-[#D4AF37]/50 hover:bg-[#111113] transition-all flex items-center gap-2"
                >
                  <Download size={16} className="text-[#D4AF37]" /> RESUME
                </a>
              </MagneticButton>
              <MagneticButton>
                <a 
                  href={recruiterInfo.calendly}
                  className="bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-6 py-5 font-mono text-xs tracking-widest hover:border-[#06B6D4]/50 hover:bg-[#111113] transition-all flex items-center gap-2"
                >
                  <Calendar size={16} className="text-[#06B6D4]" /> BOOK CALL
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-[#1E1E24]/50"
          >
            <div>
              <span className="block font-display text-4xl text-[#F1F0FB]">{githubStats.contributions}</span>
              <span className="block font-mono text-[9px] tracking-[3px] text-[#555560] uppercase mt-2">Commits</span>
            </div>
            <div>
              <span className="block font-display text-4xl text-[#D4AF37]">IIT</span>
              <span className="block font-mono text-[9px] tracking-[3px] text-[#555560] uppercase mt-2">Scholar</span>
            </div>
            <div>
              <span className="block font-display text-4xl text-[#F1F0FB]">{githubStats.repositories}</span>
              <span className="block font-mono text-[9px] tracking-[3px] text-[#555560] uppercase mt-2">Product OS</span>
            </div>
            <div>
              <span className="block font-display text-4xl text-[#06B6D4]">3x</span>
              <span className="block font-mono text-[9px] tracking-[3px] text-[#555560] uppercase mt-2">Certified</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Interactive Visual */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px] w-full">
           <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/10 via-transparent to-transparent opacity-50" />
           
           {/* Abstract Floating UI Elements */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             className="absolute w-[600px] h-[600px] border border-[#1E1E24] rounded-full opacity-20"
           />
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute w-[450px] h-[450px] border border-dashed border-[#D4AF37]/20 rounded-full opacity-20"
           />

           {/* Custom Digital Core Visual - Replacing flaky Lottie */}
           <div className="relative z-10 w-[550px] h-[550px] flex items-center justify-center animate-vertical-float">
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Hub Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[400px] h-[400px] border border-[#D4AF37]/20 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[500px] h-[500px] border border-dashed border-[#06B6D4]/10 rounded-full"
                />
                
                {/* Central Brain/Core node */}
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="relative w-72 h-72 bg-[#111113] border border-[#1E1E24] rounded-full flex flex-col items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.15)] group overflow-hidden pointer-events-auto cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/5 to-transparent group-hover:opacity-100 transition-opacity" />
                    
                    {/* SVG Brain/Node Visual */}
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <motion.circle 
                          cx="60" cy="60" r="40" 
                          stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="4 4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path 
                          d="M60 20V40M60 80V100M20 60H40M80 60H100" 
                          stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" 
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="60" cy="60" r="15" 
                          fill="#D4AF37" 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                    
                    <span className="font-mono text-[9px] tracking-[6px] text-[#D4AF37] mt-6 opacity-0 group-hover:opacity-100 transition-opacity">AUTONOMOUS</span>
                    
                    {/* Pulsing Aura */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 2], opacity: [0.2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i, ease: "easeOut" }}
                        className="absolute inset-0 border border-[#D4AF37]/20 rounded-full"
                      />
                    ))}
                </motion.div>
                
                {/* Floating Tech Orbits */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full"
                  >
                    <motion.div 
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#06B6D4] rounded-full shadow-[0_0_10px_#06B6D4]"
                      style={{ marginTop: `${150 + i * 25}px` }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i }}
                    />
                  </motion.div>
                ))}
             </div>

             {/* Dynamic Data Points */}
             {floatingBadges.map((badge, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2 + i * 0.2 }}
                 className={`absolute ${badge.position} z-20 group`}
               >
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ 
                     repeat: Infinity, 
                     duration: 6, 
                     ease: "easeInOut", 
                     delay: badge.delay 
                   }}
                   className="bg-[#111113]/80 backdrop-blur-md border border-[#1E1E24] px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#D4AF37]/40 transition-colors"
                 >
                   <span className="font-mono text-[10px] tracking-[3px] text-[#F1F0FB] uppercase">
                     {badge.text}
                   </span>
                 </motion.div>
               </motion.div>
             ))}
           </div>

           {/* Terminal Snippet Feature */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 2.5 }}
             className="absolute bottom-10 -left-10 z-30 bg-[#0E0E10]/90 backdrop-blur-xl border border-[#1E1E24] p-5 rounded-xl shadow-2xl max-w-[280px] font-mono text-[10px]"
           >
             <div className="flex gap-1.5 mb-3">
               <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
             </div>
             <div className="space-y-1.5">
               <p className="text-[#F1F0FB]/40"># Ayush Portfolio 2026</p>
               <p className="text-[#06B6D4]">const <span className="text-[#F1F0FB]">engineer</span> = {"{"}</p>
               <p className="pl-4 text-[#F1F0FB]"><span className="text-[#D4AF37]">vision:</span> <span className="text-green-400">"Autonomous"</span>,</p>
               <p className="pl-4 text-[#F1F0FB]"><span className="text-[#D4AF37]">impact:</span> <span className="text-green-400">"Global"</span>,</p>
               <p className="pl-4 text-[#F1F0FB]"><span className="text-[#D4AF37]">status:</span> <span className="text-green-400">"Hirable"</span></p>
               <p className="text-[#06B6D4]">{"}"};</p>
             </div>
           </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
      >
        <span className="font-mono text-[9px] tracking-[6px] text-[#555560] uppercase group-hover:text-[#F1F0FB] transition-colors">Scroll To Deep Dive</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent group-hover:h-20 transition-all duration-500" />
      </motion.div>
    </section>
  );
}
