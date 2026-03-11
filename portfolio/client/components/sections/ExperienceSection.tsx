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
    year: "SEP – DEC 2025",
    role: "HEALTHCARE DATA ANALYST & HIRING MANAGER",
    company: "SPACELANCE / SPACEBORN",
    location: "DELHI, INDIA",
    detail: "Analyzed healthcare datasets to identify trends. Led talent acquisition as Hiring Manager. Campus Ambassador across IIT Bombay, Kharagpur, Delhi, Madras, and Roorkee. Jury Member at IIT Kharagpur.",
    side: "left",
    icon: Briefcase
  },
  {
    year: "SEP 2025 – JAN 2026",
    role: "DATA SCIENCE APPRENTICE & JUNIOR DATA ANALYST",
    company: "YUVAINTERN",
    location: "REMOTE",
    detail: "Built end-to-end ML pipelines from data collection to model evaluation. EDA on agribusiness and apparel datasets using Pandas and NumPy. Earned IBM Certifications in Data Analysis, Data Visualization, and Python for Data Science.",
    side: "right",
    icon: Briefcase
  },
  {
    year: "2025 – PRESENT",
    role: "IIT COMPETITION FINALIST",
    company: "IITK · IITM · IITB · IITD · IITR",
    location: "MULTIPLE IITs",
    detail: "Finalist across premier IIT hackathons and competitions. Jury Member at IIT Kharagpur. Campus Ambassador across all premier IITs. Built Circles platform for ELITE HACK 1.0.",
    side: "left",
    icon: Award
  },
  {
    year: "2025 – 2029",
    role: "BS DATA SCIENCE SCHOLAR",
    company: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS",
    location: "CHENNAI, INDIA",
    detail: "Pursuing BS in Data Science and Applications. Coursework: Python, Statistical Methods, Data Analysis, Database Management.",
    side: "right",
    icon: GraduationCap
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#060608] relative overflow-hidden">
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
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#1E1E24] to-transparent -translate-x-1/2" />

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
          className="w-3 h-3 bg-[#D4AF37] border border-[#060608]"
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
            <div className="bg-[#0E0E12] p-8 lg:p-10 border-l-2 border-[#D4AF37]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#16161D] text-[#D4AF37]">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                   <span className="font-mono text-[10px] tracking-[4px] text-[#555560] block mb-1 uppercase">
                    {entry.year}
                  </span>
                  <div className="flex items-center gap-2 text-[#06B6D4] font-mono text-[10px] uppercase tracking-wider">
                    <MapPin size={10} />
                    {entry.location}
                  </div>
                </div>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl text-[#F1F0FB] mb-4 leading-tight tracking-wide">
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
