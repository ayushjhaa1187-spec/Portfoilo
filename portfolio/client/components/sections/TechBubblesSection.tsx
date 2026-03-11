"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";

interface Bubble {
  label: string;
  icon: string;
  size: number;
  x: string;
  y: string;
  color: string;
  animClass: string;
  delay: string;
  desc: string;
}

const bubbles: Bubble[] = [
  {
    label: "Python",
    icon: "🐍",
    size: 100,
    x: "12%",
    y: "15%",
    color: "59,130,246",
    animClass: "bubble-float-1",
    delay: "0s",
    desc: "Core language for AI/ML",
  },
  {
    label: "ML / AI",
    icon: "🤖",
    size: 95,
    x: "55%",
    y: "8%",
    color: "139,92,246",
    animClass: "bubble-float-2",
    delay: "0.5s",
    desc: "Machine Learning & AI Systems",
  },
  {
    label: "PyTorch",
    icon: "🔥",
    size: 90,
    x: "78%",
    y: "20%",
    color: "239,68,68",
    animClass: "bubble-float-3",
    delay: "1s",
    desc: "Deep Learning Framework",
  },
  {
    label: "TypeScript",
    icon: "⚡",
    size: 80,
    x: "30%",
    y: "45%",
    color: "6,182,212",
    animClass: "bubble-float-2",
    delay: "0.3s",
    desc: "Type-safe JavaScript",
  },
  {
    label: "Node.js",
    icon: "🌐",
    size: 78,
    x: "68%",
    y: "50%",
    color: "34,197,94",
    animClass: "bubble-float-1",
    delay: "0.8s",
    desc: "Server-side Runtime",
  },
  {
    label: "PostgreSQL",
    icon: "💾",
    size: 75,
    x: "8%",
    y: "60%",
    color: "59,130,246",
    animClass: "bubble-float-3",
    delay: "0.2s",
    desc: "Relational Database",
  },
  {
    label: "Pandas",
    icon: "📊",
    size: 65,
    x: "45%",
    y: "70%",
    color: "245,158,11",
    animClass: "bubble-float-1",
    delay: "0.6s",
    desc: "Data Manipulation",
  },
  {
    label: "Streamlit",
    icon: "📈",
    size: 62,
    x: "85%",
    y: "65%",
    color: "239,68,68",
    animClass: "bubble-float-2",
    delay: "1.2s",
    desc: "Data App Framework",
  },
  {
    label: "Scikit-learn",
    icon: "🧠",
    size: 60,
    x: "20%",
    y: "80%",
    color: "245,158,11",
    animClass: "bubble-float-3",
    delay: "0.4s",
    desc: "ML Library",
  },
  {
    label: "REST APIs",
    icon: "🔌",
    size: 58,
    x: "62%",
    y: "85%",
    color: "6,182,212",
    animClass: "bubble-float-1",
    delay: "0.9s",
    desc: "API Architecture",
  },
  {
    label: "Git",
    icon: "⌨️",
    size: 55,
    x: "40%",
    y: "25%",
    color: "239,68,68",
    animClass: "bubble-float-2",
    delay: "0.7s",
    desc: "Version Control",
  },
];

export default function TechBubblesSection() {
  return (
    <section
      id="tech-stack"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
      style={{ background: "#060608" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <span className="section-label">// 003 — ARSENAL</span>
          <h2
            className="font-display section-title-large mb-8"
            style={{ fontSize: "72px", lineHeight: 1, color: "#F1F0FB" }}
          >
            My Tech{" "}
            <span className="text-outline">Stack</span>
          </h2>
        </SectionReveal>

        {/* Bubbles Container */}
        <div className="relative w-full" style={{ height: "550px" }}>
          {bubbles.map((bubble, i) => (
            <motion.div
              key={bubble.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "backOut" }}
              className={`absolute ${bubble.animClass} group`}
              style={{
                left: bubble.x,
                top: bubble.y,
                animationDelay: bubble.delay,
                zIndex: 10,
              }}
            >
              <div
                className="flex flex-col items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 relative"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12), rgba(${bubble.color}, 0.08))`,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
                }}
              >
                <span style={{ fontSize: `${bubble.size * 0.35}px` }}>
                  {bubble.icon}
                </span>

                {/* Tooltip */}
                <div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                  style={{
                    background: "#141418",
                    border: "1px solid #1E1E24",
                    padding: "4px 10px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "#999",
                  }}
                >
                  {bubble.desc}
                </div>
              </div>
              <div
                className="text-center mt-2 font-mono"
                style={{
                  fontSize: "10px",
                  color: "#555560",
                  letterSpacing: "1px",
                }}
              >
                {bubble.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
