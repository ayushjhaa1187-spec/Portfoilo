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
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/case-studies" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-blue-400" style={{ color: 'var(--text-secondary)' }}>
            <FiArrowLeft /> Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--primary-light)' }}>
              {study.category} Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {study.title}
          </h1>

          {/* Connected Project Link */}
          {study.projectSlug && (
            <Link href={`/projects/${study.projectSlug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.05)' }}>
              View Full Project Details
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* The Challenge */}
        <div className="card p-8 border-l-4" style={{ borderLeftColor: 'var(--error)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500">
              <FiAlertCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>The Challenge</h2>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {study.challenge}
          </p>
        </div>

        {/* The Approach */}
        <div className="card p-8 border-l-4" style={{ borderLeftColor: 'var(--primary-light)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500">
              <FiTool size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Data Science Approach</h2>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {study.approach}
          </p>
        </div>

        {/* Implementation */}
        <div className="card p-8 border-l-4" style={{ borderLeftColor: 'var(--accent)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-500">
              <FiCheckCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Technical Implementation</h2>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {study.implementation}
          </p>
        </div>

        {/* Results */}
        <div className="card p-8 border-l-4" style={{ borderLeftColor: 'var(--success)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500">
              <FiTrendingUp size={24} />
            </div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Results & Impact</h2>
          </div>
          <p className="text-lg leading-relaxed font-semibold mb-6" style={{ color: 'var(--success)' }}>
            {study.results}
          </p>

          <div className="p-6 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Key Learnings</h3>
            <p className="italic text-base" style={{ color: 'var(--text-secondary)' }}>
              &quot;{study.learnings}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
