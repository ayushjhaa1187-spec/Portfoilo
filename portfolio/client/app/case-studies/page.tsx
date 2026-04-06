'use client';

import { caseStudies } from '@/data/projects';
import Link from 'next/link';
import { Brain, ArrowRight } from 'lucide-react';
import CaseStudyViewer from '@/components/case-studies/CaseStudyViewer';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/animations';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48 bg-black">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
        <h1 className="text-6xl md:text-9xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tight mb-8 leading-none">TECHNICAL_REPORTS</h1>
        <p className="text-2xl text-slate-400 font-light leading-relaxed tracking-wide max-w-3xl">
          Deep forensic analysis and performance benchmarking of flagship AI systems.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid md:grid-cols-2 gap-12"
      >
        {caseStudies.map((study, i) => (
          <motion.div variants={fadeUp} custom={i} key={study.slug} className="space-y-5">
            <Link href={`/case-studies/${study.projectSlug}`}>
              <div className="glass-panel p-8 h-full hover:bg-white/[0.05] transition-all border border-white/5 rounded-[2rem] group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Brain size={20} />
                  </span>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Research_Unit_Verified</p>
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 leading-tight group-hover:text-amber-400 transition-colors">{study.title}</h2>
                <p className="text-slate-400 font-light leading-relaxed mb-6 line-clamp-2">{study.problem}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-black text-amber-400/50 uppercase tracking-widest">Protocol_v2.0</span>
                  <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    EXTRACT_REPORT <ArrowRight size={14} className="text-amber-400" />
                  </div>
                </div>
              </div>
            </Link>
            <CaseStudyViewer study={study} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CaseStudiesPage;
