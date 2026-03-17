"use client";

import { motion } from "framer-motion";
import { Zap, Construction, Code2, ArrowUpRight } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { currentlyBuilding } from "../../data/portfolio";

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="bg-[#0A0A0B] py-32 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative z-10">
        <SectionReveal>
          <div className="mb-20">
            <span className="section-label text-[#06B6D4] font-mono text-[10px] tracking-[8px] uppercase block mb-6">
              // ACTIVE_DEVELOPMENT
            </span>
            <h2 className="font-display text-5xl lg:text-7xl text-[#F1F0FB] tracking-tighter leading-none">
              CURRENTLY <span className="text-outline">DEVELOPING</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentlyBuilding.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-[#111113] border border-[#1E1E24] p-10 rounded-3xl hover:border-[#06B6D4]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-[#0A0A0B] border border-[#1E1E24] text-[#06B6D4] group-hover:scale-110 transition-transform duration-500">
                  <Construction size={24} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[40px] text-[#1E1E24] group-hover:text-[#06B6D4]/10 transition-colors leading-none">0{i + 1}</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                    <span className="font-mono text-[9px] text-[#555560] tracking-widest uppercase">In Lab</span>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-3xl text-[#F1F0FB] mb-4 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-[#F1F0FB]/40 text-sm leading-relaxed mb-10 min-h-[3em]">
                {item.desc}
              </p>

              <div className="space-y-6">
                <div>
                   <div className="flex justify-between items-end mb-3 font-mono text-[10px] tracking-widest text-[#555560]">
                      <span className="uppercase uppercase">Product Readiness</span>
                      <span className="text-[#F1F0FB]">{item.progress}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-[#1E1E24] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-[#06B6D4] to-[#D4AF37] rounded-full"
                      />
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E1E24]">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="font-mono text-[9px] text-[#555560] flex items-center gap-2">
                      <Code2 size={12} className="text-[#06B6D4]" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-[#111113] border border-[#1E1E24] border-dashed rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Zap size={28} />
            </div>
            <div>
              <h4 className="font-display text-2xl text-[#F1F0FB] mb-1">Building something for you?</h4>
              <p className="text-[#F1F0FB]/40 text-sm font-light">I'm always open to discussing new high-impact projects or research collaborations.</p>
            </div>
          </div>
          <a 
            href="mailto:ayushjhaa1187@gmail.com" 
            className="group flex items-center gap-4 bg-[#D4AF37] text-[#0A0A0B] px-8 py-4 rounded-xl font-mono text-xs font-bold tracking-widest hover:scale-105 transition-all"
          >
            GET IN TOUCH <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
