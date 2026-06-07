'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Zap, Brain, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/data/profile';

const focusIcons = [Brain, Code2, Zap, Globe];

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About Ayush Kumar Jha"
      className="py-[var(--section-gap)] px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Building AI that{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                actually works
              </span>
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed text-base mb-10">
              <p>
                I'm{' '}
                <span className="text-white font-semibold">Ayush Kumar Jha</span>, an AI and
                full-stack developer currently pursuing Data Science through{' '}
                <span className="text-amber-400 font-semibold">IIT Madras</span>. I enjoy
                building practical AI products, experimenting with LLM systems, and turning ideas
                into working web applications.
              </p>
              <p>
                My current focus areas include multi-agent systems, retrieval-augmented
                generation (RAG), AI-assisted automation, and full-stack product development.
                I've participated in hackathons, contributed to open-source projects, and built
                real tools across AI, data analysis, and web development.
              </p>
              <p>
                I believe good engineering means shipping something real — not just prototyping
                in isolation.
              </p>
            </div>

            {/* Education highlight */}
            <div className="p-5 glass-card border border-amber-400/20 rounded-2xl mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">IIT Madras</p>
                  <p className="text-slate-400 text-sm">BS in Data Science & Applications</p>
                  <p className="text-slate-600 text-xs mt-1">Jan 2025 – May 2029 (Expected)</p>
                </div>
              </div>
            </div>

            {/* Location + CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin size={14} />
                India
              </div>
              <Link href="/about">
                <button className="group inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded">
                  Full Story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Focus areas + stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Current Focus areas */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-slate-600 uppercase mb-4">
                Current Focus Areas
              </p>
              <div className="space-y-3">
                {profile.focusAreas.map((area, i) => {
                  const Icon = focusIcons[i % focusIcons.length];
                  return (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-amber-400/20 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition-colors">
                        <Icon size={16} className="text-amber-400" />
                      </div>
                      <span className="text-white font-medium text-sm">{area}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Verified stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { value: `${profile.stats.publicRepos}+`, label: 'GitHub Repos' },
                { value: `${profile.stats.liveProjects}+`, label: 'Projects Built' },
                { value: `${profile.stats.hackathons}+`, label: 'Hackathons' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
