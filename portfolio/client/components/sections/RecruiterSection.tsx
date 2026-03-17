"use client";

import { motion } from "framer-motion";
import { Mail, Download, Calendar, Linkedin, Twitter, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { recruiterInfo, personalInfo } from "../../data/portfolio";
import MagneticButton from "../MagneticButton";
import { fadeUp, staggerContainer, hoverScale } from "../../lib/animations";

export default function RecruiterSection() {
  return (
    <section id="hiring" className="bg-[#0A0A0B] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <div className="bg-[#111113] border border-[#1E1E24] rounded-[40px] p-10 lg:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
             <Briefcase size={300} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#D4AF37]" />
                <span className="font-mono text-[10px] tracking-[6px] text-[#D4AF37] uppercase">FOR RECRUITERS</span>
              </div>

              <h2 className="font-display text-5xl lg:text-7xl text-[#F1F0FB] tracking-tighter leading-[0.9] mb-8">
                READY TO <span className="italic text-[#D4AF37]">SCALE</span> YOUR<br /> ENGINEERING TEAM?
              </h2>

              <p className="text-xl text-[#F1F0FB]/40 font-light leading-relaxed mb-8 max-w-xl">
                I'm currently looking for <span className="text-[#F1F0FB] font-medium border-b border-[#D4AF37]/30 pb-1">AI/ML Engineering roles</span> and internship opportunities where I can apply my expertise in autonomous agents and full-stack development.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                 <div className="flex items-center gap-3 bg-[#0A0A0B] px-5 py-3 rounded-full border border-[#1E1E24] shadow-inner">
                    <MapPin size={16} className="text-[#06B6D4]" />
                    <span className="font-mono text-[10px] text-[#F1F0FB]/60 uppercase tracking-widest">{recruiterInfo.location}</span>
                 </div>
                 <div className="flex items-center gap-3 bg-[#0A0A0B] px-5 py-3 rounded-full border border-[#1E1E24] shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="font-mono text-[10px] text-[#F1F0FB]/60 uppercase tracking-widest">{recruiterInfo.status}</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <MagneticButton>
                  <a 
                    href={recruiterInfo.resumeUrl}
                    className="flex items-center gap-4 bg-[#D4AF37] text-[#0A0A0B] px-10 py-5 rounded-2xl font-mono text-xs font-bold tracking-[3px] hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/20"
                  >
                    <Download size={18} /> DOWNLOAD DOSSIER
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a 
                    href={recruiterInfo.calendly}
                    target="_blank"
                    className="flex items-center gap-4 bg-transparent border border-[#1E1E24] text-[#F1F0FB] px-10 py-5 rounded-2xl font-mono text-xs tracking-widest hover:border-[#D4AF37]/50 hover:bg-[#111113] transition-all"
                  >
                    <Calendar size={18} className="text-[#06B6D4]" /> SCHEDULE SYNC
                  </a>
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="bg-[#0A0A0B] border border-[#1E1E24] p-10 lg:p-14 rounded-[30px] flex flex-col items-center text-center relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[30px]" />
               
               <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#1E1E24] to-[#0A0A0B] border border-[#1E1E24] flex items-center justify-center text-6xl shadow-2xl mb-10 group-hover:rotate-6 transition-transform relative z-10">
                  👨‍💻
               </div>
               
               <h4 className="font-display text-4xl text-[#F1F0FB] mb-2 relative z-10">{personalInfo.name}</h4>
               <p className="font-mono text-[10px] tracking-[4px] text-[#555560] uppercase mb-10 relative z-10">Founder / Engineer</p>

               <div className="w-full flex flex-col gap-3 relative z-10">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center justify-between bg-[#111113] border border-[#1E1E24] p-5 rounded-2xl group/link hover:border-[#06B6D4]/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-[#06B6D4]" />
                      <span className="font-mono text-[10px] text-[#F1F0FB]/40 uppercase tracking-widest">Email Signal</span>
                    </div>
                    <ExternalLink size={14} className="text-[#1E1E24] group-hover/link:text-[#06B6D4] transition-colors" />
                  </a>
                  
                  {recruiterInfo.quickContact.map((contact, i) => (
                    <a 
                      key={i}
                      href={contact.link} 
                      target="_blank"
                      className="flex items-center justify-between bg-[#111113] border border-[#1E1E24] p-5 rounded-2xl group/link hover:border-[#D4AF37]/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        {contact.platform === 'LinkedIn' ? <Linkedin size={18} className="text-[#D4AF37]" /> : <Twitter size={18} className="text-[#D4AF37]" />}
                        <span className="font-mono text-[10px] text-[#F1F0FB]/40 uppercase tracking-widest">{contact.platform}</span>
                      </div>
                      <ExternalLink size={14} className="text-[#1E1E24] group-hover/link:text-[#D4AF37] transition-colors" />
                    </a>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
