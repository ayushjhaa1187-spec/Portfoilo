"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { thoughtProcess } from "../../data/portfolio";

export default function ThoughtProcess() {
  return (
    <section id="process" className="bg-[#0A0A0B] py-32 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative z-10">
        <SectionReveal>
          <div className="mb-24 text-center">
            <span className="section-label text-[#D4AF37] font-mono text-[10px] tracking-[8px] uppercase block mb-6">
              // METHODOLOGY
            </span>
            <h2 className="font-display text-5xl lg:text-8xl text-[#F1F0FB] tracking-tighter leading-none mb-8">
              HOW I <span className="text-outline">BUILD</span> PRODUCTS
            </h2>
            <p className="max-w-2xl mx-auto text-[#F1F0FB]/50 font-light text-lg">
              Engineering is more than just writing code. It's about translating complex business problems into scalable, high-performance digital ecosystems.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {thoughtProcess.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="bg-[#111113] border border-[#1E1E24] p-10 rounded-3xl h-full flex flex-col items-start hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2">
                <div className="mb-12 flex justify-between w-full items-start">
                   <div className="w-16 h-16 rounded-2xl bg-[#0A0A0B] border border-[#1E1E24] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
                     {step.icon}
                   </div>
                   <span className="font-display text-5xl text-[#1E1E24] group-hover:text-[#D4AF37]/10 transition-colors leading-none">{step.step}</span>
                </div>
                
                <h3 className="font-display text-2xl text-[#F1F0FB] mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-[#F1F0FB]/40 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>

                {i < thoughtProcess.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 z-20 hidden lg:block text-[#1E1E24] group-hover:text-[#D4AF37]/40 transition-colors">
                    <ArrowRight size={40} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 1 }}
           className="mt-24 border-t border-[#1E1E24]/50 pt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-10">
             <div className="flex items-center gap-3">
               <CheckCircle2 size={18} className="text-[#D4AF37]" />
               <span className="font-mono text-[10px] tracking-[4px] text-[#F1F0FB] uppercase">Business Alignment</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 size={18} className="text-[#06B6D4]" />
               <span className="font-mono text-[10px] tracking-[4px] text-[#F1F0FB] uppercase">Scalable Architectures</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle2 size={18} className="text-[#D4AF37]" />
               <span className="font-mono text-[10px] tracking-[4px] text-[#F1F0FB] uppercase">User-Centric UX</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
