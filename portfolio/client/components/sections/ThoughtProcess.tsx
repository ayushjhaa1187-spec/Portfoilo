"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { thoughtProcess } from "../../data/portfolio";

const iconMap: { [key: string]: any } = {
  Search,
  PenTool,
  Lightbulb,
  CheckCircle2,
};

export default function ThoughtProcess() {
  return (
    <section id="process" className="bg-[#0A0A0B] py-24 md:py-32 lg:py-48 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-20 text-center">
          <span className="section-label text-[#D4AF37] font-mono text-[10px] tracking-[8px] uppercase block mb-4">
            // METHODOLOGY
          </span>
          <h2 className="font-display text-5xl lg:text-8xl text-[#F1F0FB] tracking-tighter leading-none mb-6">
            HOW I <span className="text-outline">BUILD</span> PRODUCTS
          </h2>
          <p className="max-w-2xl mx-auto text-[#F1F0FB]/50 font-light text-xl leading-relaxed mt-8">
            Engineering is more than just writing code. It's about translating complex business problems into scalable, high-performance digital ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {thoughtProcess.map((step, i) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="group relative"
              >
                <div className="bg-[#111113] border border-[#1E1E24] p-12 lg:p-14 rounded-3xl h-full flex flex-col items-start hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-[#D4AF37] mb-8 p-4 bg-[#0A0A0B] rounded-2xl group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="font-display text-2xl text-[#F1F0FB] mb-4">{step.phase}</h3>
                  <p className="text-[#F1F0FB]/40 text-sm leading-relaxed mb-8 flex-grow">
                    {step.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {step.keyPoints.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-[9px] text-[#555560] uppercase tracking-widest">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-8 right-8 font-mono text-[40px] text-[#1E1E24] group-hover:text-[#D4AF37]/5 transition-colors leading-none select-none">
                    0{i + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          variants={fadeUp}
          className="mt-20 flex flex-col items-center justify-center"
        >
          <div className="h-px w-20 bg-[#D4AF37] mb-12" />
          <p className="font-mono text-[10px] tracking-[4px] text-[#555560] uppercase text-center max-w-lg">
            "Software engineering is the art of managing complexity through abstraction and rigorous architecture."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
