"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import SectionReveal from "../SectionReveal";

interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  location: string;
  detail: string;
  side: "left" | "right";
  icon: any;
  subPoints?: string[];
}

const entries: TimelineEntry[] = [
  {
    year: "SEP – DEC 2025",
    role: "Healthcare Data Analyst & Hiring Manager",
    company: "Spacelance / Spaceborn",
    location: "Delhi, India",
    detail:
      "Analyzed healthcare datasets to identify trends. Led talent acquisition as Hiring Manager. Campus Ambassador across IIT Bombay, Kharagpur, Delhi, Madras, and Roorkee. Jury Member at IIT Kharagpur.",
    side: "left",
    icon: Briefcase,
  },
  {
    year: "SEP 2025 – JAN 2026",
    role: "Data Science Apprentice & Junior Data Analyst",
    company: "YuvaIntern",
    location: "Remote",
    detail: "Built end-to-end ML pipelines (collection → preprocessing → model building → evaluation). Performed EDA on agribusiness & apparel datasets.",
    subPoints: [
      "IBM Certified: Data Analysis with Python",
      "IBM Certified: Data Visualization with Python",
      "IBM Certified: Python for Data Science"
    ],
    side: "right",
    icon: Award,
  },
  {
    year: "2025 – PRESENT",
    role: "IIT Competition Finalist",
    company: "IITK · IITM · IITB · IITD · IITR + more",
    location: "National",
    detail: "Finalist across multiple premier IIT hackathons. Jury Member at IIT Kharagpur. Campus Ambassador across all premier IITs. Built Circles for ELITE HACK 1.0.",
    side: "left",
    icon: Award,
  },
  {
    year: "NOW",
    role: "BS Data Science Scholar",
    company: "Indian Institute of Technology Madras",
    location: "2025 – 2029",
    detail: "Coursework: Python, Statistical Methods, Data Analysis, Database Management. Focusing on building the next generation of AI systems.",
    side: "right",
    icon: GraduationCap,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-40 px-6 lg:px-20 bg-[#060608] overflow-hidden">
      {/* Background Ghost Text */}
      <div className="absolute top-20 right-[-5%] text-[20vw] font-display text-outline opacity-[0.03] select-none pointer-events-none uppercase">
        Journey
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <SectionReveal>
          <div className="mb-32">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 004 — JOURNEY
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight mb-4">
              CAREER &<br />
              <span className="text-outline">EXPERIENCE</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Timeline Desktop Container */}
        <div className="relative mt-20">
          {/* Main Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#1E1E24] lg:-translate-x-1/2 opacity-50" />
          
          <div className="flex flex-col relative z-10 pl-10 lg:pl-0">
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

  const cardVariants: any = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const markerVariants: any = {
    hidden: { scale: 0 },
    visible: { scale: 1, rotate: 45, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <div ref={ref} className="relative w-full mb-24 lg:mb-32 last:mb-0">
      {/* Center Marker - Desktop Only */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1, rotate: 45 } : {}}
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
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

              <h3 className="font-display text-3xl lg:text-4xl text-[#F1F0FB] mb-2 tracking-wide leading-none">
                {entry.role}
              </h3>
              <p className="font-mono text-xs text-[#8B5CF6] mb-6 tracking-widest uppercase">
                {entry.company}
              </p>
              <p className="text-[#888] text-sm lg:text-base leading-relaxed mb-6 font-body">
                {entry.detail}
              </p>

              {entry.subPoints && (
                <div className="space-y-2 pt-4 border-t border-[#1E1E24]">
                  {entry.subPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#8B5CF6] translate-y-2 flex-shrink-0" />
                      <span className="text-xs font-mono text-[#F1F0FB] tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Empty Space for Desktop */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* Mobile Indicator */}
      <div className="lg:hidden absolute left-[-4px] top-4 w-2 h-2 bg-[#8B5CF6] z-10" />
    </div>
  );
}
