"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  Brain, 
  Workflow, 
  Github as GitIcon,
  Search,
  Zap,
  Box
} from "lucide-react";
import SectionReveal from "../SectionReveal";

const tech = [
  { name: "PYTHON", icon: Code2, color: "#8B5CF6", duration: 4, delay: 0 },
  { name: "ML / AI", icon: Brain, color: "#06B6D4", duration: 5, delay: 1.2 },
  { name: "PYTORCH", icon: Cpu, color: "#F1F0FB", duration: 6, delay: 0.5 },
  { name: "TYPESCRIPT", icon: Zap, color: "#06B6D4", duration: 4.5, delay: 2 },
  { name: "NODE.JS", icon: Server, color: "#8B5CF6", duration: 5.5, delay: 0.8 },
  { name: "POSTGRESQL", icon: Database, color: "#555560", duration: 6.5, delay: 1.5 },
  { name: "PANDAS", icon: Layers, color: "#F1F0FB", duration: 4.2, delay: 0.3 },
  { name: "STREAMLIT", icon: Workflow, color: "#F59E0B", duration: 5.2, delay: 1.7 },
  { name: "SCIKIT-LEARN", icon: Terminal, color: "#06B6D4", duration: 6.2, delay: 0.9 },
  { name: "REST APIS", icon: Search, color: "#8B5CF6", duration: 4.8, delay: 2.1 },
  { name: "GIT", icon: GitIcon, color: "#555560", duration: 5.8, delay: 0.4 },
  { name: "MYSQL", icon: Box, color: "#F1F0FB", duration: 6.8, delay: 1.3 },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-40 px-6 lg:px-20 bg-[#060608] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <div className="mb-32 text-center">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 003 — ARSENAL
            </span>
            <h2 className="font-display text-8xl lg:text-[180px] text-[#F1F0FB] leading-[0.7] tracking-tighter">
              MY TECH<br />
              <span className="text-outline">STACK</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative min-h-[600px] mt-20">
           {/* Background Decoration */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#1E1E24] to-transparent opacity-50" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#1E1E24] to-transparent opacity-50" />

           <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-24 gap-y-24">
             {tech.map((item, i) => (
                <TechBubble key={i} item={item} index={i} />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function TechBubble({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        whileHover={{ 
          scale: 1.15,
          boxShadow: `0 0 40px rgba(139, 92, 246, 0.4)`
        }}
        className="relative cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: item.duration, 
            ease: "easeInOut", 
            delay: item.delay 
          }}
          style={{
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12), rgba(0,0,0,0.1))`,
            border: `1px solid rgba(255,255,255,0.08)`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
          className="w-28 h-28 lg:w-36 lg:h-36 rounded-full backdrop-blur-md flex items-center justify-center relative overflow-hidden transition-all duration-500"
        >
          {/* Inner Glow on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${item.color}, transparent)` }}
          />
          
          {/* Icon - 35% of bubble diameter */}
          <div className="text-[#F1F0FB] group-hover:text-[#8B5CF6] transition-colors duration-500 transform group-hover:scale-110">
            <Icon size={42} strokeWidth={1.5} />
          </div>

          {/* Glass Gloss effect */}
          <div className="absolute top-[12%] left-[12%] w-[25%] h-[25%] bg-white/10 rounded-full blur-[2px]" />
        </motion.div>
      </motion.div>

      {/* Label BELOW the bubble */}
      <span className="font-mono text-[9px] tracking-[3px] text-[#555560] uppercase group-hover:text-[#F1F0FB] transition-colors duration-500">
        {item.name}
      </span>
    </div>
  );
}
