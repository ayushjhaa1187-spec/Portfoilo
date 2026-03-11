"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import SectionReveal from "../SectionReveal";

interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  detail: string;
  side: "left" | "right";
  icon: any;
}

const entries: TimelineEntry[] = [
  {
    year: "2024",
    role: "Data Analyst",
    company: "Industry Experience",
    detail:
      "Built production-ready dashboards and automated data pipelines. Analyzed complex datasets to drive business decisions. Certified in Python and Data Visualization by IBM during this tenure.",
    side: "left",
    icon: Briefcase,
  },
  {
    year: "2025",
    role: "Hackathon Builder",
    company: "ELITE HACK 1.0 & National Hackathons",
    detail:
      "Top 10 at IIT Ideathon 2025 (Out of 500+ teams). Developed 'AgriVision', an AI platform for satellite-based crop monitoring and yield prediction using Computer Vision.",
    side: "right",
    icon: Award,
  },
  {
    year: "NOW",
    role: "BS Data Science Scholar",
    company: "IIT Madras · 2025 – 2029",
    detail:
      "Deep diving into Machine Learning, Neural Networks, and AI Systems at India's premier engineering institute. Working on research projects at the intersection of AI and commerce.",
    side: "left",
    icon: GraduationCap,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-40 px-6 lg:px-12 bg-[#060608] overflow-hidden">
      {/* Background Ghost Text */}
      <div className="absolute top-20 right-[-5%] text-[20vw] font-display text-outline opacity-[0.03] select-none pointer-events-none">
        EXPERIENCE
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <SectionReveal>
          <div className="mb-32">
            <span className="section-label text-[#8B5CF6] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 004 — JOURNEY
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight">
              CAREER &<br />
              <span className="text-outline">EXPERIENCE</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Timeline Desktop Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E1E24] via-[#8B5CF6] to-[#1E1E24] lg:-translate-x-1/2 opacity-30" />

          <div className="space-y-24 lg:space-y-32">
            {entries.map((entry, i) => (
              <TimelineItem key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = entry.side === "left";
  const Icon = entry.icon;

  return (
    <div ref={ref} className="relative w-full">
      {/* Center Marker Diamond - Desktop Only */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={isInView ? { scale: 1, rotate: 45 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-4 h-4 bg-[#8B5CF6] border-4 border-[#060608] shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        />
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.4 }}
           className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-widest text-[#555560]"
        >
          {entry.year}
        </motion.div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Left Side Column */}
        <div className={`${isLeft ? "block" : "hidden lg:block invisible opacity-0"}`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full flex justify-center lg:justify-end lg:pr-16"
          >
            <CardContent entry={entry} Icon={Icon} />
          </motion.div>
        </div>

        {/* Right Side Column */}
        <div className={`${!isLeft ? "block" : "hidden lg:block invisible opacity-0"} lg:mt-32`}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full flex justify-center lg:justify-start lg:pl-16"
          >
            <CardContent entry={entry} Icon={Icon} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Dot */}
      <div className="lg:hidden absolute left-[-4px] top-6 w-2 h-2 bg-[#8B5CF6] rounded-full z-10" />
    </div>
  );
}

function CardContent({ entry, Icon }: { entry: TimelineEntry; Icon: any }) {
  return (
    <div className="relative group w-full max-w-[540px]">
      {/* Animated Border Header */}
      <div className="absolute top-0 left-0 w-20 h-px bg-[#8B5CF6] group-hover:w-full transition-all duration-700" />
      
      <div className="bg-[#0E0E12] border border-[#1E1E24] p-8 lg:p-10 hover:border-[#8B5CF6]/30 transition-all duration-500">
        <div className="flex items-start justify-between mb-8">
          <div className="p-3 bg-[#16161D] border border-[#1E1E24] text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-500">
            <Icon size={20} />
          </div>
          <span className="font-mono text-[11px] tracking-[5px] text-[#555560] uppercase">
            {entry.year}
          </span>
        </div>

        <h3 className="font-display text-3xl lg:text-4xl text-[#F1F0FB] mb-2 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
          {entry.role}
        </h3>
        <p className="font-mono text-xs text-[#06B6D4] mb-6 tracking-widest uppercase">
          {entry.company}
        </p>
        <p className="text-[#888] text-sm lg:text-base leading-relaxed group-hover:text-[#AAA] transition-colors">
          {entry.detail}
        </p>

        {/* Bottom Ghost Number/ID */}
        <div className="mt-8 flex items-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
           <div className="w-8 h-px bg-[#555560]" />
           <span className="font-mono text-[10px]">0{Math.floor(Math.random() * 90) + 10}</span>
        </div>
      </div>
    </div>
  );
}
