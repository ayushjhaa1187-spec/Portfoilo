import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import { FiArrowLeft, FiGithub, FiExternalLink, FiClock, FiTarget, FiActivity } from 'react-icons/fi';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-blue-400" style={{ color: 'var(--text-secondary)' }}>
            <FiArrowLeft /> Back to Projects
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">{project.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--primary-light)' }}>
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Overview</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Performance & Impact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={i} className="card p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      {key === 'accuracy' ? <FiTarget size={20} /> : key === 'impact' ? <FiActivity size={20} /> : <FiClock size={20} />}
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>
                        {key}
                      </div>
                      <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>Links</h3>
              <div className="space-y-3">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg transition-colors border"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                  <FiGithub size={18} />
                  <span className="font-medium text-sm">View Source Code</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg transition-colors border opacity-50 cursor-not-allowed"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
                  <FiExternalLink size={18} />
                  <span className="font-medium text-sm">Live Demo (Coming Soon)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
