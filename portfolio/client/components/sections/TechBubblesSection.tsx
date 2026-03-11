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
  { name: "PYTHON", icon: Code2, color: "#8B5CF6", float: "bubble-float-1" },
  { name: "ML / AI", icon: Brain, color: "#06B6D4", float: "bubble-float-2" },
  { name: "PYTORCH", icon: Cpu, color: "#F1F0FB", float: "bubble-float-3" },
  { name: "TYPESCRIPT", icon: Zap, color: "#06B6D4", float: "bubble-float-1" },
  { name: "NODE.JS", icon: Server, color: "#8B5CF6", float: "bubble-float-2" },
  { name: "POSTGRESQL", icon: Database, color: "#555560", float: "bubble-float-3" },
  { name: "PANDAS", icon: Layers, color: "#F1F0FB", float: "bubble-float-1" },
  { name: "STREAMLIT", icon: Workflow, color: "#F59E0B", float: "bubble-float-2" },
  { name: "SCIKIT-LEARN", icon: Terminal, color: "#06B6D4", float: "bubble-float-3" },
  { name: "REST APIS", icon: Search, color: "#8B5CF6", float: "bubble-float-1" },
  { name: "GIT", icon: GitIcon, color: "#555560", float: "bubble-float-2" },
  { name: "MYSQL", icon: Box, color: "#F1F0FB", float: "bubble-float-3" },
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

           <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.15 }}
      className={`relative group ${item.float}`}
    >
      {/* Glossy Sphere */}
      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#0E0E12]/80 backdrop-blur-xl border border-[#1E1E24] rounded-full flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#8B5CF6]/50 transition-colors shadow-2xl">
         {/* Gloss highlights */}
         <div className="absolute top-4 left-4 w-8 h-4 bg-white/10 rounded-full blur-md -rotate-45" />
         <div className="absolute bottom-4 right-8 w-12 h-6 bg-[#8B5CF6]/5 rounded-full blur-xl" />
         
         {/* Icon */}
         <div className="p-3 text-[#F1F0FB] group-hover:text-[#8B5CF6] transition-colors mb-4 relative z-10">
           <Icon size={28} strokeWidth={1.5} />
         </div>

         {/* Label */}
         <span className="font-mono text-[9px] tracking-[3px] text-[#555560] group-hover:text-[#F1F0FB] transition-colors relative z-10 text-center px-4 leading-tight">
           {item.name}
         </span>

         {/* Inner Glow */}
         <div 
           className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
           style={{ background: `radial-gradient(circle at center, ${item.color}, transparent)` }}
         />
      </div>

      {/* Orbit Decoration */}
      <div className="absolute -inset-4 border border-dashed border-[#1E1E24] rounded-full opacity-0 group-hover:opacity-20 group-hover:rotate-180 transition-all duration-1000" />
    </motion.div>
  );
}
