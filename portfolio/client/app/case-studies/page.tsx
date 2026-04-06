'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { caseStudies } from '@/data/caseStudies';
import { Brain, Trophy } from 'lucide-react';

const CaseStudiesPage = () => {
  return (
    <PageShell title="CASE" subtitle="studies">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-slate-400 max-w-3xl mb-24 font-light leading-relaxed tracking-wide"
      >
        Real competition case notes: problem framing, solution strategy, and measurable outcomes from IIT events.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Brain className="text-amber-400" size={20} />
                <h3 className="text-xl font-black text-white">{study.title}</h3>
              </div>
              {study.featured && <Trophy className="text-amber-400" size={18} />}
            </div>
            <p className="text-slate-300 text-sm mb-2">{study.subtitle}</p>
            <p className="text-slate-500 text-xs mb-5">{study.event} · {study.institution} · {study.date}</p>
            <p className="text-slate-400 text-sm mb-4"><strong className="text-white">Problem:</strong> {study.problem}</p>
            <p className="text-slate-400 text-sm mb-4"><strong className="text-white">Solution:</strong> {study.solution}</p>
            <p className="text-slate-400 text-sm mb-4"><strong className="text-white">Impact:</strong> {study.impact}</p>
            <ul className="list-disc pl-5 text-xs text-slate-400 space-y-1">
              {study.keyLearnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
};

export default CaseStudiesPage;
