"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Mail, Award } from "lucide-react";
import SectionReveal from "../SectionReveal";

export default function AboutSection() {
  const stats = [
    { label: "Location", value: "Delhi, India", icon: MapPin },
    { label: "Education", value: "IIT Madras", icon: GraduationCap },
    { label: "Role", value: "Data Scientist", icon: Mail },
  ];

  return (
    <section id="about" className="py-40 px-6 lg:px-20 bg-[#0E0E12]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <SectionReveal>
          <div>
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 006 — ABOUT ME
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight mb-12">
              BUILDING<br />
              <span className="text-outline">SYSTEMS</span><br />
              WITH DATA
            </h2>
            
            <p className="font-body text-[#888] text-lg lg:text-xl leading-relaxed max-w-[540px]">
              I'm Ayush — a Data Scientist and IIT Madras scholar who spent time in industry as a Data Analyst before diving into the academic rigors of AI systems. I build autonomous agents and predictive models that solve real-world complexities.
            </p>
          </div>
        </SectionReveal>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-[#060608] border border-[#1E1E24] p-8 flex items-center justify-between group hover:border-[#8B5CF6]/40 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="text-[#8B5CF6]">
                    <stat.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-[3px] text-[#555560] uppercase block mb-1">
                      {stat.label}
                    </span>
                    <span className="font-mono text-sm text-[#F1F0FB]">
                      {stat.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-[#141418] border border-[#1E1E24] p-10 mt-6 relative overflow-hidden"
            >
              <Award className="absolute -right-4 -bottom-4 text-[#F59E0B] opacity-10" size={120} />
              <div className="relative z-10">
                <span className="font-mono text-[10px] tracking-[4px] text-[#F59E0B] uppercase block mb-4 italic">
                  IIT Competition Finalist
                </span>
                <p className="font-display text-4xl text-[#F1F0FB] leading-none tracking-wide">
                  TOP 10 AT<br />IIT IDEATHON 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
