"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Mail, Award, Quote, Search, Cpu, Globe } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { personalInfo } from "../../data/portfolio";

export default function AboutSection() {
  const beliefs = [
    { title: "First Principles", desc: "Dismantling problems to their core before assuming any solutions.", icon: Search },
    { title: "Autonomous Engineering", desc: "Building systems that think, adapt, and execute with minimal friction.", icon: Cpu },
    { title: "Global Impact", desc: "Engineering for the macro-scale, solving bottlenecks for millions.", icon: Globe },
  ];

  return (
    <section id="about" className="bg-[#0A0A0B] py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 items-center">
          <SectionReveal>
            <div>
              <span className="section-label text-[#D4AF37] font-mono text-[10px] tracking-[8px] uppercase block mb-6">
                // IDENTITY_MANIFESTO
              </span>
              <h2 className="font-display text-6xl lg:text-8xl text-[#F1F0FB] leading-[0.85] tracking-tighter mb-12">
                ENGINEERING<br />
                <span className="text-outline">PURPOSE</span><br />
                FROM COMPLEX DATA
              </h2>
              
              <div className="relative mb-12 group">
                <Quote className="absolute -left-8 -top-8 text-[#1E1E24] group-hover:text-[#D4AF37]/20 transition-colors" size={60} />
                <p className="font-body text-[#F1F0FB]/60 text-xl lg:text-2xl leading-relaxed italic relative z-10 border-l-2 border-[#D4AF37]/30 pl-8">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="bg-[#111113] border border-[#1E1E24] p-10 rounded-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                    <Award size={100} />
                 </div>
                 <span className="font-mono text-[9px] tracking-[4px] text-[#D4AF37] uppercase block mb-4 italic">Core Philosophy</span>
                 <p className="font-display text-2xl lg:text-3xl text-[#F1F0FB] leading-snug tracking-wide">
                   "{personalInfo.philosophy}"
                 </p>
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
               {beliefs.map((belief, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: i * 0.1 }}
                   className="bg-[#111113] border border-[#1E1E24] p-8 rounded-2xl flex gap-6 hover:border-[#D4AF37]/30 transition-all group"
                 >
                   <div className="w-14 h-14 rounded-xl bg-[#0A0A0B] border border-[#1E1E24] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <belief.icon size={24} />
                   </div>
                   <div>
                      <h4 className="font-display text-xl text-[#F1F0FB] mb-2">{belief.title}</h4>
                      <p className="text-[#F1F0FB]/40 text-sm font-light leading-relaxed">{belief.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0A0A0B] border border-[#1E1E24] border-dashed p-10 rounded-3xl overflow-hidden relative group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                   <div className="flex -space-x-4">
                      {['IITM', 'IIITB'].map((inst, i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-[#111113] border-4 border-[#0A0A0B] flex items-center justify-center text-[10px] font-mono text-[#555560]">{inst}</div>
                      ))}
                   </div>
                   <div className="h-px w-10 bg-[#1E1E24]" />
                   <span className="font-mono text-[9px] tracking-[4px] text-[#555560] uppercase">Academic Excellence</span>
                </div>
                <h4 className="font-display text-3xl text-[#F1F0FB] leading-[1.1]">
                   A Scholar at <span className="text-[#D4AF37]">IIT Madras</span> studying Data Science Applications.
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
