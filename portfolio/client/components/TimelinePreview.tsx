'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TIMELINE_EVENTS = [
  {
    id: 1,
    date: 'May 2026 – Present',
    title: 'Research & Education Design Intern',
    org: 'Vicharanashala (VLED), IIT Ropar',
    description: 'Working under Prof. Sudarshan Iyengar on AI-assisted pedagogy and intelligent problem-solving tools.',
    type: 'current',
    icon: Star,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    id: 2,
    date: 'Jun 2026',
    title: 'Selected for Bharat Innovates (Nice, France)',
    org: 'Global Deep-Tech Accelerator',
    description: 'Selected among top deep-tech builders across 15 premier Indian institutions and 120 startups.',
    type: 'achievement',
    icon: Trophy,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    id: 3,
    date: 'Apr 2026',
    title: 'Top 10 Finalist — DevFusion Hackathon',
    org: 'IIT Bombay',
    description: 'Shortlisted with SkillBridge — AI-first peer learning platform with instant doubt-solving and credit economics.',
    type: 'achievement',
    icon: Trophy,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    id: 4,
    date: 'Apr 2026',
    title: 'Top 10 Finalist — Elite Hack 1.0',
    org: 'Elite Coders (7,400+ Builders)',
    description: 'Finished in the Top 10 nationally by deploying a live full-stack event platform in 48 hours on Vercel.',
    type: 'achievement',
    icon: Trophy,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    id: 5,
    date: 'Jan 2026',
    title: 'Jury Member — AI-volution',
    org: 'GES 2026, IIT Kharagpur',
    description: 'Invited as jury to evaluate AI startup pitches at Asia\'s premier entrepreneurship summit.',
    type: 'achievement',
    icon: Briefcase,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    id: 6,
    date: 'Jan 2025 – 2029',
    title: 'BS in Data Science & Applications',
    org: 'IIT Madras',
    description: 'Pursuing foundational & applied machine learning, statistics, and agentic AI architectures.',
    type: 'education',
    icon: GraduationCap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
];

export const TimelinePreview = () => {
  return (
    <section
      id="timeline"
      aria-label="Journey Timeline"
      className="py-[var(--section-gap)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        <Link href="/experience">
          <button className="group flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-bold text-sm rounded-full hover:border-amber-400/40 hover:text-amber-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            View Full Experience
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Timeline entries */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/5" aria-hidden="true" />

        <div className="space-y-8">
          {TIMELINE_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Icon dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${event.bg} flex items-center justify-center`}>
                  <event.icon size={20} className={event.color} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="glass-card p-5 rounded-2xl hover:border-white/10 transition-all group">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      {event.date}
                    </span>
                    {event.type === 'current' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-400/10 text-emerald-400 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-base mb-0.5 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-2 ${event.color}`}>{event.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
