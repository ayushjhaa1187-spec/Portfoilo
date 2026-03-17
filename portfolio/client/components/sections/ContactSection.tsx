"use client";

import { motion } from "framer-motion";
import { Mail, Github, Send, MessageSquare, ArrowRight, Calendar } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { recruiterInfo } from "../../data/portfolio";
import { fadeUp, staggerContainer } from "../../lib/animations";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#060608] relative overflow-hidden">
      {/* Abstract Background Visual */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-20">
          <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-4">
            // TERMINAL_EXIT
          </span>
          <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight mb-4">
            SAY <span className="text-outline">HELLO</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div variants={fadeUp}>
            <p className="text-[#F1F0FB]/40 text-xl font-light leading-relaxed mb-12 max-w-md italic">
              "Let's architect the future together. Whether it's a deep-tech collaboration or an engineering opportunity, I'm just a signal away."
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:ayushjhaa1187@gmail.com" 
                className="group flex items-center gap-6 text-[#F1F0FB] hover:text-[#D4AF37] transition-all duration-500"
              >
                <div className="p-4 bg-[#111113] border border-[#1E1E24] rounded-2xl group-hover:border-[#D4AF37]/40 transition-all">
                  <Mail className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-[4px] text-[#555560] uppercase mb-1">Direct Signal</span>
                  <span className="font-display text-2xl lg:text-3xl tracking-wide uppercase">ayushjhaa@lab</span>
                </div>
              </a>

              <a 
                href="https://github.com/ayushjhaa1187-spec" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 text-[#F1F0FB] hover:text-[#06B6D4] transition-all duration-500"
              >
                <div className="p-4 bg-[#111113] border border-[#1E1E24] rounded-2xl group-hover:border-[#06B6D4]/40 transition-all">
                  <Github className="text-[#06B6D4]" size={24} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-[4px] text-[#555560] uppercase mb-1">Source Control</span>
                  <span className="font-display text-2xl lg:text-3xl tracking-wide uppercase">Engine Repository</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111113] border border-[#1E1E24] p-10 lg:p-14 rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <MessageSquare size={150} />
            </div>
            
            <h4 className="font-display text-4xl text-[#F1F0FB] mb-6">QUICK PROTOCOL</h4>
            <p className="text-[#F1F0FB]/40 text-sm leading-relaxed mb-12 font-light">
              Interested in a sync? Use the primary protocol below to schedule a direct call or drop a transmission.
            </p>

            <div className="flex flex-col gap-4">
              <a 
                href="mailto:ayushjhaa1187@gmail.com"
                className="flex items-center justify-between bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] px-10 py-5 rounded-2xl font-mono text-xs font-bold tracking-[3px] hover:bg-[#06B6D4] hover:text-[#0A0A0B] transition-all group/btn shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
              >
                SAY HELLO <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
              <a 
                href={recruiterInfo.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-10 py-5 rounded-2xl font-mono text-xs tracking-widest hover:border-[#D4AF37]/50 hover:bg-[#111113] transition-all group/btn"
              >
                BOOK CALL <Calendar size={18} className="text-[#D4AF37] group-hover/btn:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
