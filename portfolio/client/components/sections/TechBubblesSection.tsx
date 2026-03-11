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
  { name: "PYTHON", icon: Code2, color: "#8B5CF6", x: "10%", y: "15%", duration: 4, delay: 0 },
  { name: "ML / AI", icon: Brain, color: "#06B6D4", x: "25%", y: "45%", duration: 5, delay: 1.2 },
  { name: "PYTORCH", icon: Cpu, color: "#F1F0FB", x: "40%", y: "10%", duration: 6, delay: 0.5 },
  { name: "TYPESCRIPT", icon: Zap, color: "#06B6D4", x: "60%", y: "35%", duration: 4.5, delay: 2 },
  { name: "NODE.JS", icon: Server, color: "#8B5CF6", x: "80%", y: "15%", duration: 5.5, delay: 0.8 },
  { name: "POSTGRESQL", icon: Database, color: "#555560", x: "75%", y: "60%", duration: 6.5, delay: 1.5 },
  { name: "PANDAS", icon: Layers, color: "#F1F0FB", x: "20%", y: "75%", duration: 4.2, delay: 0.3 },
  { name: "STREAMLIT", icon: Workflow, color: "#F59E0B", x: "45%", y: "70%", duration: 5.2, delay: 1.7 },
  { name: "SCIKIT-LEARN", icon: Terminal, color: "#06B6D4", x: "55%", y: "85%", duration: 6.2, delay: 0.9 },
  { name: "REST APIS", icon: Search, color: "#8B5CF6", x: "85%", y: "80%", duration: 4.8, delay: 2.1 },
  { name: "GIT", icon: GitIcon, color: "#555560", x: "90%", y: "45%", duration: 5.8, delay: 0.4 },
  { name: "MYSQL", icon: Box, color: "#F1F0FB", x: "5%", y: "55%", duration: 6.8, delay: 1.3 },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="py-20 px-6 lg:px-20 bg-[#060608] overflow-hidden min-h-auto">
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <div className="mb-24 text-center">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 003 — ARSENAL
            </span>
            <h2 className="font-display text-7xl lg:text-[140px] text-[#F1F0FB] leading-[0.7] tracking-tighter">
              MY TECH<br />
              <span className="text-outline">STACK</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="bubbles-container relative w-full h-[600px] lg:h-[500px] mt-20">
           {/* Background Decoration */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[#1E1E24] to-transparent opacity-30" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[90%] bg-gradient-to-b from-transparent via-[#1E1E24] to-transparent opacity-30" />

           {/* Scattered Bubbles */}
           <div className="absolute inset-0">
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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        damping: 15, 
        stiffness: 100, 
        delay: index * 0.05 
      }}
      className="absolute"
      style={{ left: item.x, top: item.y }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: item.duration, 
            ease: "easeInOut", 
            delay: item.delay 
          }}
          whileHover={{ 
            scale: 1.15,
            boxShadow: `0 0 50px rgba(139, 92, 246, 0.5)`
          }}
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15), rgba(0,0,0,0.1))`,
            border: `1px solid rgba(255,255,255,0.08)`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
          className="backdrop-blur-md flex items-center justify-center relative overflow-hidden cursor-pointer group transition-all duration-300"
        >
          {/* Inner Violet Glow on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle at center, ${item.color}, transparent)` }}
          />
          
          {/* Icon - Centered at 35% of bubble diameter */}
          <div className="text-[#F1F0FB] group-hover:text-[#8B5CF6] transition-colors duration-300 relative z-10">
            <Icon size={32} strokeWidth={1.5} />
          </div>

          {/* Glass Highlight */}
          <div className="absolute top-[15%] left-[15%] w-[20%] h-[20%] bg-white/20 rounded-full blur-[2px]" />
        </motion.div>

        {/* Label BELOW the bubble */}
        <span className="font-mono text-[9px] tracking-[3px] text-[#555560] uppercase group-hover:text-[#F1F0FB] transition-colors duration-300 text-center whitespace-nowrap">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}
