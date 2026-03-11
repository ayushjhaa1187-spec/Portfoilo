"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, CloudCog } from "lucide-react";
import SectionReveal from "../SectionReveal";

const services = [
  {
    icon: BrainCircuit,
    title: "AI & ML ENGINEERING",
    description: "Building production-grade machine learning pipelines, autonomous agents, and intelligence systems from data preprocessing to cloud deployment.",
    tags: ["Python", "PyTorch", "Scikit-learn", "AI Agents"],
    number: "01"
  },
  {
    icon: BarChart3,
    title: "DATA ANALYSIS & VISUALIZATION",
    description: "Transforming raw data into actionable insights through statistical analysis, interactive dashboards, and compelling visual storytelling.",
    tags: ["Pandas", "NumPy", "Streamlit", "Power BI"],
    number: "02"
  },
  {
    icon: CloudCog,
    title: "FULL STACK DEVELOPMENT",
    description: "Architecting scalable backend architectures and dynamic user interfaces focused on performance, security, and clean developer experience.",
    tags: ["TypeScript", "Node.js", "Next.js", "PostgreSQL"],
    number: "03"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-40 px-6 lg:px-20 bg-[#060608]">
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <div className="mb-24">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 002 — SERVICES
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight">
              WHAT<br />
              <span className="text-outline">I DO</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1E1E24] border-[1px] border-[#1E1E24]">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-[#0E0E12] p-10 lg:p-12 hover:bg-[#141418] transition-all duration-500 relative overflow-hidden"
            >
              {/* Ghost Number */}
              <div className="absolute top-10 right-10 font-display text-6xl text-outline opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                {service.number}
              </div>

              <div className="mb-12 p-4 bg-[#16161D] border border-[#1E1E24] w-fit text-[#8B5CF6]">
                 <service.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-3xl lg:text-4xl text-[#F1F0FB] mb-6 leading-none tracking-wide group-hover:text-[#8B5CF6] transition-colors">
                {service.title}
              </h3>

              <p className="font-body text-[#888] text-sm lg:text-base leading-relaxed mb-12">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-[#1E1E24]">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="font-mono text-[10px] text-[#06B6D4] tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
