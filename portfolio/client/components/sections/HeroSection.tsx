"use client";

import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";
import { Download, ArrowRight } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2x", label: "IBM Certified" },
  { value: "Top 10", label: "IIT Ideathon '25" },
  { value: "35+", label: "GitHub Repos" },
];

const floatingBadges = [
  { label: "● ML / AI", top: "10%", right: "5%", delay: 0 },
  { label: "● Data Science", top: "45%", left: "2%", delay: 0.5 },
  { label: "● IIT Madras", bottom: "20%", right: "8%", delay: 1 },
  { label: "● Full Stack", bottom: "10%", left: "5%", delay: 1.5 },
];

const nameLines = [
  { text: "AYUSH", style: { color: "#F1F0FB" } },
  {
    text: "KUMAR",
    style: {
      WebkitTextStroke: "2px rgba(241,240,251,0.3)",
      WebkitTextFillColor: "transparent",
    },
  },
  { text: "JHA", style: { color: "#8B5CF6" } },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(139,92,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-24 lg:pt-0">
        {/* LEFT COLUMN — Text Content */}
        <div className="flex flex-col justify-center z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span
              className="animate-pulse-dot inline-block w-2 h-2 rounded-full"
              style={{ background: "#22C55E" }}
            />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "#06B6D4" }}
            >
              Open to AI/ML Roles
            </span>
          </motion.div>

          {/* Name */}
          <div className="mb-6">
            {nameLines.map((line, i) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                transition={{ delay: 2.6 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <h1
                  className="font-display hero-name leading-[0.9] tracking-tight"
                  style={{ fontSize: "120px", ...line.style }}
                >
                  {line.text}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="font-mono text-xs tracking-[4px] uppercase mb-6"
            style={{ color: "#06B6D4" }}
          >
            Data Scientist · IIT Madras · AI/ML Researcher
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.5 }}
            className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: "#999" }}
          >
            IIT Madras BS Data Science scholar building AI systems at the
            intersection of science & business. Top 10 at IIT Ideathon 2025
            out of 500+ teams.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <MagneticButton
              href="#projects"
              className="shimmer-btn px-8 py-3 font-mono text-sm tracking-wider uppercase text-white flex items-center gap-2 transition-all duration-300"
            >
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/Ayush_Resume.pdf"
              className="px-8 py-3 font-mono text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:border-[#8B5CF6]"
              style={{
                border: "1px solid #1E1E24",
                color: "#F1F0FB",
                background: "transparent",
              }}
            >
              <Download size={16} /> Download CV
            </MagneticButton>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7, duration: 0.5 }}
            className="flex flex-wrap gap-0"
            style={{ borderTop: "1px solid #1E1E24" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[100px] py-5"
                style={{
                  borderRight:
                    i < stats.length - 1 ? "1px solid #1E1E24" : "none",
                  paddingLeft: i > 0 ? "16px" : "0",
                  paddingRight: "16px",
                }}
              >
                <div
                  className="font-display text-3xl"
                  style={{ color: "#F1F0FB" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-[10px] tracking-widest uppercase mt-1"
                  style={{ color: "#555560" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN — 3D Character Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Radial Glow Behind */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Concentric Rings */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full animate-ring-1"
            style={{
              border: "1px solid rgba(139,92,246,0.12)",
            }}
          />
          <div
            className="absolute w-[340px] h-[340px] rounded-full animate-ring-2"
            style={{
              border: "1px solid rgba(139,92,246,0.08)",
            }}
          />

          {/* Character Placeholder — Stylized Avatar */}
          <div className="animate-float relative z-10">
            <div
              className="w-[280px] h-[320px] rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(14,14,18,0.9) 100%)",
                border: "1px solid rgba(139,92,246,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Stylized Code/AI Visual */}
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <div
                  className="font-mono text-xs tracking-wider"
                  style={{ color: "#8B5CF6" }}
                >
                  {"<AyushJha />"}
                </div>
                <div className="flex items-center justify-center gap-1 mt-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#22C55E" }}
                  />
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "#555560" }}
                  >
                    IIT-M Scholar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Info Badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2 + badge.delay * 0.3, duration: 0.4 }}
              className={`absolute z-20 ${i % 2 === 0 ? "bubble-float-1" : "bubble-float-2"}`}
              style={{
                top: badge.top,
                right: badge.right,
                bottom: badge.bottom,
                left: badge.left,
                background: "#141418",
                border: "1px solid #1E1E24",
                padding: "6px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#999",
                animationDelay: `${badge.delay}s`,
              }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "#555560" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-6"
          style={{ background: "linear-gradient(180deg, #8B5CF6, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
