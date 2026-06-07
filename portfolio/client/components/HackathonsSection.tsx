'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Sprout, Clock, Users, ExternalLink } from 'lucide-react';
import { hackathons, Hackathon } from '@/data/hackathons';

const resultConfig: Record<string, { bg: string; text: string }> = {
  Winner:        { bg: 'bg-amber-400/15', text: 'text-amber-400' },
  Finalist:      { bg: 'bg-violet-400/15', text: 'text-violet-400' },
  'Runner-up':   { bg: 'bg-blue-400/15', text: 'text-blue-400' },
  Participant:   { bg: 'bg-slate-400/10', text: 'text-slate-400' },
  'Hackathon Build': { bg: 'bg-emerald-400/10', text: 'text-emerald-400' },
};

const HackathonCard = ({ hackathon, index }: { hackathon: Hackathon; index: number }) => {
  const result = resultConfig[hackathon.result] ?? resultConfig.Participant;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 md:p-7 rounded-2xl group hover:border-amber-400/20 transition-all"
      aria-label={`${hackathon.name} hackathon`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-xl flex-shrink-0">
            {hackathon.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-base leading-snug">{hackathon.name}</h3>
            <p className="text-slate-500 text-xs">{hackathon.organizer}</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${result.bg} ${result.text}`}>
          {hackathon.result}
        </span>
      </div>

      <p className="text-amber-400 font-semibold text-sm mb-2">{hackathon.project}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {hackathon.projectDescription}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <Users size={12} className="text-slate-600" />
          {hackathon.role}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={12} className="text-slate-600" />
          {hackathon.date}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {hackathon.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-white/5 text-slate-500 text-[10px] font-medium rounded border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>

      {hackathon.githubUrl && (
        <a
          href={hackathon.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${hackathon.project} on GitHub`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ExternalLink size={12} />
          View on GitHub
        </a>
      )}
    </motion.article>
  );
};

export const HackathonsSection = () => {
  return (
    <section
      id="hackathons"
      aria-label="Hackathons & Competitions"
      className="py-[var(--section-gap)] px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Competitions & Sprints
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Hackathons &{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Competitions
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg">
            Real projects built under pressure. Every entry is a working prototype shipped in a sprint.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hackathons.map((h, i) => (
            <HackathonCard key={h.id} hackathon={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
