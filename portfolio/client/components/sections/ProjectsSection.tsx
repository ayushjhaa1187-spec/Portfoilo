"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

interface Project {
  num: string;
  tags: string[];
  title: string;
  desc: string;
  stack?: string[];
  github?: string;
  live?: string;
  fullDesc?: string;
}

const projects: Project[] = [
  {
    num: "01",
    tags: ["AI Agent", "Python", "Automation"],
    title: "StockSense AI Agent",
    desc: "Autonomous AI agent for pharmacy inventory management. Detects expiring stock, triggers reorder alerts, and optimizes inventory levels using real-time data analysis.",
    stack: ["Python", "AI Agents", "Data Analysis"],
    github: "https://github.com/ayushjhaa1187-spec/stocksense-agent",
    fullDesc:
      "StockSense is an autonomous AI agent designed for pharmacy inventory management systems. It uses intelligent monitoring to detect expiring stock, trigger automated reorder alerts, and continuously optimize inventory levels through real-time data analysis. Built with a modular architecture allowing easy extension and customization.",
  },
  {
    num: "02",
    tags: ["Full Stack", "TypeScript", "Hackathon"],
    title: "Circles — Event Platform",
    desc: "Multi-event management system built for ELITE HACK 1.0. Features QR-based check-ins, real-time analytics dashboard, invite-code team formation, and a live control room interface.",
    stack: ["Express", "Prisma", "PostgreSQL", "Vercel"],
    github: "https://github.com/ayushjhaa1187-spec/Portfoilo",
    fullDesc:
      "Circles is a comprehensive multi-event management platform designed and built during ELITE HACK 1.0. It features QR-based attendee check-ins, real-time analytics dashboards for organizers, invite-code-based team formation, and a live control room interface. The backend uses Express with Prisma ORM and PostgreSQL, deployed on Vercel for global edge performance.",
  },
  {
    num: "03",
    tags: ["ML", "Streamlit", "Data Science"],
    title: "Predictive Analytics Dashboard",
    desc: "End-to-end ML pipeline with interactive business dashboards. Covers feature engineering, model training, evaluation metrics, and live visualization of predictions.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    fullDesc:
      "A comprehensive predictive analytics dashboard featuring an end-to-end machine learning pipeline. It covers the complete lifecycle from feature engineering and model training to evaluation metrics visualization and live prediction serving. Interactive dashboards allow stakeholders to explore data insights and model performance in real-time.",
  },
  {
    num: "04",
    tags: ["NLP", "Python", "Automation"],
    title: "AI Voice Assistant",
    desc: "Python-based natural language voice assistant for hands-free task automation. Integrates speech recognition, intent parsing, and text-to-speech synthesis.",
    stack: ["Python", "SpeechRecognition", "pyttsx3"],
    github: "https://github.com/ayushjhaa1187-spec/Voice-Assistant",
    fullDesc:
      "An intelligent Python-based voice assistant that enables hands-free task automation. It integrates advanced speech recognition for command input, natural language intent parsing for understanding user requests, and text-to-speech synthesis for vocal responses. Designed for extensibility with a modular plugin architecture.",
  },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-12"
      style={{ background: "#060608" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <span className="section-label">// 005 — WORK</span>
          <h2
            className="font-display section-title-large mb-16"
            style={{ fontSize: "72px", lineHeight: 1, color: "#F1F0FB" }}
          >
            Featured
            <br />
            Projects
          </h2>
        </SectionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {projects.map((project, i) => (
            <SectionReveal key={project.num} delay={i * 0.1}>
              <div
                className="card-hover-border relative p-8 lg:p-10 group transition-all duration-300 h-full"
                style={{
                  background: "#0E0E12",
                  border: "1px solid #1E1E24",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setExpandedProject(project);
                }}
                aria-label={`View details for ${project.title}`}
              >
                {/* Ghost Number */}
                <span
                  className="ghost-text absolute top-4 right-6"
                  style={{ fontSize: "100px", lineHeight: 1 }}
                >
                  {project.num}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="font-display text-3xl lg:text-4xl tracking-wider mb-4 relative z-10"
                  style={{ color: "#F1F0FB" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 relative z-10"
                  style={{ color: "#888" }}
                >
                  {project.desc}
                </p>

                {/* Stack badges */}
                {project.stack && (
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] tracking-wider px-2 py-1"
                        style={{
                          color: "#06B6D4",
                          border: "1px solid rgba(6,182,212,0.15)",
                          background: "rgba(6,182,212,0.05)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links row */}
                <div className="flex gap-3 relative z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-wider flex items-center gap-1 transition-colors duration-200 hover:text-[#8B5CF6]"
                      style={{ color: "#555560" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-wider flex items-center gap-1 transition-colors duration-200 hover:text-[#8B5CF6]"
                      style={{ color: "#555560" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </div>

                {/* Hover Arrow */}
                <div
                  className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10"
                  style={{ color: "#8B5CF6" }}
                >
                  <ArrowRight size={24} />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* View All Projects CTA */}
        <SectionReveal delay={0.4}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/ayushjhaa1187-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-12 py-4 font-mono text-sm tracking-wider uppercase text-center transition-all duration-300 hover:border-[#8B5CF6]"
              style={{
                border: "1px solid #1E1E24",
                color: "#F1F0FB",
              }}
            >
              View All Projects →
            </a>
          </div>
        </SectionReveal>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
            style={{ background: "rgba(6,6,8,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl w-full p-8 lg:p-12 relative"
              style={{
                background: "#0E0E12",
                border: "1px solid #1E1E24",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-4 right-4 transition-colors duration-200 hover:text-[#8B5CF6]"
                style={{ color: "#555560" }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {expandedProject.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="font-display text-4xl lg:text-5xl tracking-wider mb-4"
                style={{ color: "#F1F0FB" }}
              >
                {expandedProject.title}
              </h3>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#999" }}
              >
                {expandedProject.fullDesc || expandedProject.desc}
              </p>

              {expandedProject.stack && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {expandedProject.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs tracking-wider px-3 py-1.5"
                      style={{
                        color: "#06B6D4",
                        border: "1px solid rgba(6,182,212,0.2)",
                        background: "rgba(6,182,212,0.05)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-4">
                {expandedProject.github && (
                  <a
                    href={expandedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm tracking-wider px-6 py-3 transition-all duration-300 hover:border-[#8B5CF6]"
                    style={{
                      border: "1px solid #1E1E24",
                      color: "#F1F0FB",
                    }}
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
                {expandedProject.live && (
                  <a
                    href={expandedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn flex items-center gap-2 font-mono text-sm tracking-wider px-6 py-3 text-white"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
