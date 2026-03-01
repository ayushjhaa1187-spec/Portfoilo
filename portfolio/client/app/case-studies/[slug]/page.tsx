import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '@/data/portfolio';
import { FiArrowLeft, FiAlertCircle, FiTrendingUp, FiCheckCircle, FiTool } from 'react-icons/fi';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden border-b border-[var(--border-glass)]">
        {/* Ambient glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--success)] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/case-studies" className="inline-flex items-center gap-2 mb-10 text-sm font-semibold transition-colors hover:text-[var(--primary)] text-[var(--text-secondary)]">
            <FiArrowLeft /> Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{ background: 'rgba(0, 240, 255, 0.05)', color: 'var(--primary)', borderColor: 'rgba(0, 240, 255, 0.2)', textShadow: '0 0 10px var(--primary)' }}>
              {study.category} Case Study
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-8 leading-tight text-white drop-shadow-2xl">
            {study.title}
          </h1>

          {/* Connected Project Link */}
          {study.projectSlug && (
            <Link href={`/projects/${study.projectSlug}`} className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all font-semibold uppercase tracking-widest text-xs glass-card border border-[var(--primary)]/30 hover:border-[var(--primary)] text-[var(--primary)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-1">
              View Embedded Project Demo
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
        {/* The Challenge */}
        <div className="glass-card p-8 sm:p-10 border-l-[4px] relative overflow-hidden group" style={{ borderLeftColor: 'var(--error)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--error)] opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-[var(--error)]/10 text-[var(--error)] border border-[var(--error)]/20 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <FiAlertCircle size={28} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white">The Challenge</h2>
          </div>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] relative z-10">
            {study.challenge}
          </p>
        </div>

        {/* The Approach */}
        <div className="glass-card p-8 sm:p-10 border-l-[4px] relative overflow-hidden group" style={{ borderLeftColor: 'var(--primary)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <FiTool size={28} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Data Science Approach</h2>
          </div>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] relative z-10">
            {study.approach}
          </p>
        </div>

        {/* Implementation */}
        <div className="glass-card p-8 sm:p-10 border-l-[4px] relative overflow-hidden group" style={{ borderLeftColor: '#F97316' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316] opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <FiCheckCircle size={28} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Technical Implementation</h2>
          </div>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] relative z-10">
            {study.implementation}
          </p>
        </div>

        {/* Results */}
        <div className="glass-card p-8 sm:p-10 border-l-[4px] relative overflow-hidden group" style={{ borderLeftColor: 'var(--success)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--success)] opacity-5 blur-[40px] rounded-full group-hover:opacity-10 transition-opacity" />
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <FiTrendingUp size={28} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Results & Impact</h2>
          </div>
          <p className="text-xl leading-relaxed font-bold mb-8 text-[var(--success)] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)] relative z-10">
            {study.results}
          </p>

          <div className="p-6 rounded-xl border border-white/10 bg-black/40 relative z-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a8b2d1] mb-3">Key Learnings</h3>
            <p className="italic text-base text-[var(--text-secondary)]">
              &quot;{study.learnings}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
