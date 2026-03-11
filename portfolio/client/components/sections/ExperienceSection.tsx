"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import SectionReveal from "../SectionReveal";

interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  detail: string;
  location: string;
  side: "left" | "right";
  icon: any;
}

const timeline: TimelineEntry[] = [
  {
    year: "APR 2025 - PRESENT",
    role: "JUNIOR DATA ANALYST",
    company: "SPACELANCE",
    location: "New Delhi, India",
    detail: "Leading data processing workflows and predictive modeling for internal analytics platforms. Focused on retail automation and client performance metrics.",
    side: "left",
    icon: Briefcase
  },
  {
    year: "FEB 2025 - APR 2025",
    role: "DATA ANALYST INTERN",
    company: "YUVAINTERN",
    location: "New Delhi, India",
    detail: "Developed data visualization dashboards and conducted statistical analysis on large-scale consumer datasets to drive marketing efficiency.",
    side: "right",
    icon: Briefcase
  },
  {
    year: "MAY 2024 - PRESENT",
    role: "BS IN DATA SCIENCE",
    company: "IIT MADRAS",
    location: "Chennai (Remote)",
    detail: "Acquiring core competencies in Machine Learning, Statistical Inference, and Advanced Programming. Consistently maintaining top-tier academic performance.",
    side: "left",
    icon: GraduationCap
  },
  {
    year: "2025",
    role: "IDEATHON FINALIST",
    company: "IIT GUWAHATI / ROORKEE",
    location: "India",
    detail: "Recognized among Top 10 innovators for StockSense AI — an autonomous logistics agent solving pharmacy inventory decay.",
    side: "right",
    icon: Award
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-40 px-6 lg:px-20 bg-[#060608] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <SectionReveal>
          <div className="mb-32">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 004 — JOURNEY
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight">
              CAREER &<br />
              <span className="text-outline">ACADEMICS</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Vertical Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B5CF6] via-[#1E1E24] to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-10 lg:gap-0">
            {timeline.map((entry, i) => (
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
    <div ref={ref} className="relative w-full mb-24 lg:mb-32 last:mb-0">
      {/* Center Marker - Desktop Only */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1, rotate: 45 } : {}}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="w-3 h-3 bg-[#8B5CF6] border border-[#060608]"
        />
      </div>

      {/* Content Container */}
      <div className={`flex flex-col w-full ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-start`}>
        {/* Card Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className={`w-full max-w-[560px] ${isLeft ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"}`}
          >
            <div className="bg-[#0E0E12] p-8 lg:p-10 border-l-2 border-[#8B5CF6]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#16161D] text-[#8B5CF6]">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                   <span className="font-mono text-[10px] tracking-[4px] text-[#555560] block mb-1">
                    {entry.year}
                  </span>
                  <div className="flex items-center gap-2 text-[#06B6D4] font-mono text-[10px] uppercase tracking-wider">
                    <MapPin size={10} />
                    {entry.location}
                  </div>
                </div>
              </div>

              <h3 className="font-display text-3xl text-[#F1F0FB] mb-4 leading-tight tracking-wide">
                {entry.role}
              </h3>
              
              <p className="font-mono text-xs tracking-wider text-[#06B6D4] mt-2 mb-6 uppercase">
                {entry.company}
              </p>

              <p className="font-body text-[#888] text-sm leading-relaxed">
                {entry.detail}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Empty Side (Desktop Only) */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </div>
  );
}
