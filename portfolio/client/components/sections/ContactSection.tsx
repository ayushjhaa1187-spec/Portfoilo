"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import MagneticButton from "../MagneticButton";
import SectionReveal from "../SectionReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-40 px-6 lg:px-20 bg-[#060608] overflow-hidden min-h-[80vh] flex items-center">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-[#8B5CF6] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Ghost Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display text-[20vw] text-outline opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        AVAILABLE
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 text-center">
        <SectionReveal>
          <div className="mb-10">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 007 — CONTACT
            </span>
            <h2 className="font-display text-8xl lg:text-[180px] text-[#F1F0FB] leading-[0.8] tracking-tight">
              LET'S BUILD<br />
              <span className="text-[#8B5CF6]">THE FUTURE</span>
            </h2>
          </div>
        </SectionReveal>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="mb-20"
        >
          <a 
            href="mailto:ayushjhaa1187@gmail.com" 
            className="font-mono text-lg lg:text-3xl text-[#06B6D4] hover:text-[#8B5CF6] transition-colors tracking-widest border-b border-[#06B6D4]/30 pb-4"
          >
            ayushjhaa1187@gmail.com
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-32"
        >
          <MagneticButton>
             <a 
              href="mailto:ayushjhaa1187@gmail.com" 
              className="bg-[#8B5CF6] text-white px-12 py-5 font-mono text-xs tracking-widest flex items-center gap-3 hover:bg-[#7c3aed] transition-all group"
             >
              SAY HELLO <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </MagneticButton>

          <MagneticButton>
             <a 
              href="https://github.com/ayushjhaa1187-spec" 
              target="_blank"
              className="bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-12 py-5 font-mono text-xs tracking-widest hover:border-[#8B5CF6] transition-all"
             >
              VIEW GITHUB
             </a>
          </MagneticButton>
        </motion.div>

        {/* Social Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-12 pt-20 border-t border-[#1E1E24]/50"
        >
          <SocialLink href="https://github.com/ayushjhaa1187-spec" icon={Github} label="GITHUB" />
          <SocialLink href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" icon={Linkedin} label="LINKEDIN" />
          <SocialLink href="mailto:ayushjhaa1187@gmail.com" icon={Mail} label="EMAIL" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="group flex flex-col items-center gap-4 text-[#555560] hover:text-[#8B5CF6] transition-colors"
    >
      <div className="p-4 bg-[#0E0E12] border border-[#1E1E24] group-hover:border-[#8B5CF6]/50 transition-all duration-300">
        <Icon size={18} strokeWidth={1} />
      </div>
      <span className="font-mono text-[9px] tracking-[4px] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        {label}
      </span>
    </a>
  );
}
