'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, notFound } from 'next/navigation';
import { projects, caseStudies } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, Target, Cpu, Lightbulb, BarChart, Lock } from 'lucide-react';
import Link from 'next/link';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const caseStudy = caseStudies.find((cs) => cs.projectSlug === slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Back Button */}
        <Link
          href="/projects"
          className="flex items-center gap-2 text-slate-500 hover:text-amber-400 mb-12 transition-colors group"
          aria-label="Back to all projects"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-wide">Back to Projects</span>
        </Link>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="px-3 py-1 bg-amber-400 text-black text-[10px] font-bold tracking-wide uppercase rounded">
              {project.category}
            </span>
            <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
              project.status === 'Live' ? 'bg-emerald-400/10 text-emerald-400' :
              project.status === 'Hackathon Build' ? 'bg-amber-400/10 text-amber-400' :
              project.status === 'In Development' ? 'bg-blue-400/10 text-blue-400' :
              'bg-violet-400/10 text-violet-400'
            }`}>
              {project.status}
            </span>
            {project.featured && (
              <span className="text-amber-400 text-[10px] font-bold tracking-wide flex items-center gap-1">
                ★ Featured
              </span>
            )}
            {caseStudy && (
              <Link
                href={`/case-studies/${project.slug}`}
                className="px-3 py-1 bg-white/8 text-white text-[10px] font-bold tracking-wide uppercase rounded hover:bg-white/15 transition-colors"
              >
                Case Study Available
              </Link>
            )}
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-xs tracking-wide uppercase hover:border-amber-400 transition-all hover:scale-105"
              >
                <Github size={18} /> View on GitHub
              </a>
            ) : (
              <span className="flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-xs tracking-wide uppercase text-slate-600 cursor-not-allowed">
                <Lock size={18} /> Private Repository
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="flex items-center gap-2.5 px-8 py-4 bg-amber-400 text-black rounded-full font-bold text-xs tracking-wide uppercase hover:scale-105 transition-all shadow-lg shadow-amber-400/25"
              >
                <ExternalLink size={18} /> Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="space-y-16">

          {/* Problem & Solution */}
          {(project.problem || project.solution || caseStudy) && (
            <section className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2.5 text-amber-400 mb-5 border-b border-white/5 pb-3">
                  <Target size={20} />
                  <h2 className="text-lg font-black tracking-tight uppercase">Problem</h2>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {caseStudy?.problem ?? project.problem ?? 'Documentation in progress.'}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2.5 text-emerald-400 mb-5 border-b border-white/5 pb-3">
                  <Lightbulb size={20} />
                  <h2 className="text-lg font-black tracking-tight uppercase">Solution</h2>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {caseStudy?.solution ?? project.solution ?? 'Documentation in progress.'}
                </p>
              </motion.div>
            </section>
          )}

          {/* Architecture & Tech Stack */}
          <section>
            <div className="flex items-center gap-2.5 text-blue-400 mb-8 border-b border-white/5 pb-3">
              <Cpu size={20} />
              <h2 className="text-lg font-black tracking-tight uppercase">Architecture & Tech Stack</h2>
            </div>

            {project.architecture && project.architecture.length > 0 && (
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {project.architecture.map((step, i) => (
                  <div key={i} className="glass-panel p-6 relative border border-white/5 rounded-2xl hover:border-white/10 transition-all">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0a0a0a] border border-amber-400/30 rounded-full flex items-center justify-center font-black text-amber-400 text-xs">
                      {i + 1}
                    </div>
                    <p className="text-white font-medium text-sm">{step}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-slate-400 uppercase tracking-wide hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Metrics (if any) */}
          {project.metrics && project.metrics.length > 0 && (
            <section>
              <div className="flex items-center gap-2.5 text-emerald-400 mb-8 border-b border-white/5 pb-3">
                <BarChart size={20} />
                <h2 className="text-lg font-black tracking-tight uppercase">Project Metrics</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="glass-card p-5 text-center">
                    <p className="text-2xl font-black text-amber-400">{m.value}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Case study results */}
          {caseStudy && caseStudy.results && caseStudy.results.length > 0 && (
            <section className="glass-card p-8 rounded-2xl">
              <h3 className="text-base font-black text-white uppercase tracking-tight mb-5">Results</h3>
              <ul className="space-y-3">
                {caseStudy.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-slate-600 font-bold uppercase tracking-widest"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
