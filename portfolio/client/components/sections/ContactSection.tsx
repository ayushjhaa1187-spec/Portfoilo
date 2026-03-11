"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import MagneticButton from "../MagneticButton";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-32 px-6 lg:px-12 overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 90%, rgba(139,92,246,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Ghost Text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display text-outline pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(100px, 15vw, 220px)",
          opacity: 0.03,
          lineHeight: 1,
        }}
      >
        AVAILABLE
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <SectionReveal>
          <span className="section-label">// 007 — CONTACT</span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: "#555560" }}
          >
            // LET&apos;S TALK
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <h2
            className="font-display section-title-large mb-8"
            style={{
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: 1,
              color: "#F1F0FB",
            }}
          >
            Let&apos;s Build
            <br />
            The Future
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <a
            href="mailto:ayushjhaa1187@gmail.com"
            className="inline-block font-mono text-lg lg:text-2xl tracking-wider mb-10 transition-colors duration-300 hover:text-[#8B5CF6]"
            style={{ color: "#06B6D4" }}
          >
            ayushjhaa1187@gmail.com
          </a>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <MagneticButton
              href="mailto:ayushjhaa1187@gmail.com"
              className="shimmer-btn px-8 py-3 font-mono text-sm tracking-wider uppercase text-white flex items-center gap-2"
            >
              Say Hello <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="https://github.com/ayushjhaa1187-spec"
              className="px-8 py-3 font-mono text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:border-[#8B5CF6]"
              style={{
                border: "1px solid #1E1E24",
                color: "#F1F0FB",
                background: "transparent",
              }}
            >
              <Github size={16} /> View GitHub
            </MagneticButton>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <div className="flex justify-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/ayushjhaa1187-spec",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:ayushjhaa1187@gmail.com",
                label: "Email",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors duration-200 hover:text-[#8B5CF6]"
                  style={{ color: "#555560" }}
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <Icon size={16} />
                  {social.label}
                </motion.a>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
