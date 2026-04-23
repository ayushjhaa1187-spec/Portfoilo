'use client';

import { allCaseStudies } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, Github, ExternalLink, Code, Database, Layout } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import React from 'react';

interface MDXComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

const mdxComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => <h1 className="text-4xl font-black mt-8 mb-4 text-blue-900" {...props}>{children}</h1>,
  h2: ({ children, ...props }: MDXComponentProps) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800 border-b pb-2" {...props}>{children}</h2>,
  p: ({ children, ...props }: MDXComponentProps) => <p className="text-lg leading-relaxed text-slate-700 mb-6" {...props}>{children}</p>,
  pre: ({ children, ...props }: MDXComponentProps) => <pre className="p-0 mb-8 rounded-xl overflow-hidden shadow-lg" {...props}>{children}</pre>,
};

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
  const caseStudy = allCaseStudies.find((cs) => cs.slug === params.slug);
  const projectData = projects.find((p) => p.slug === params.slug || p.slug === caseStudy?.projectSlug);

  // Call the hook at the top level of the component
  const MDXContent = useMDXComponent(caseStudy?.body.code || '');

  if (!caseStudy) {
    if (!projectData) notFound();
    
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 max-w-4xl mx-auto text-center">
         <h1 className="text-4xl font-black mb-4">{projectData.title}</h1>
         <p className="text-gray-500 mb-8">Case study content is currently being migrated to MDX.</p>
         <Link href="/projects" className="text-blue-600 font-bold">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-600 mb-12 transition-colors uppercase tracking-widest"
        >
          <ChevronLeft size={16} /> Back to Ecosystem
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Project Case Study
            </span>
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              {format(parseISO(caseStudy.date), 'MMMM yyyy')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
            {caseStudy.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-12">
            {projectData?.githubUrl && (
              <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
                <Github size={20} /> View Source Code
              </a>
            )}
            {projectData?.liveUrl && (
              <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition-colors border border-blue-100">
                <ExternalLink size={20} /> Live Production ↗
              </a>
            )}
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-slate prose-lg max-w-none">
              {React.createElement(MDXContent, { components: mdxComponents })}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-gray-100 sticky top-32">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest border-b pb-4">Architectural Stack</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm h-fit">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Frontend</h4>
                    <p className="text-slate-700 font-bold">React / Next.js / Tailwind</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm h-fit">
                    <Database className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Backend & AI</h4>
                    <p className="text-slate-700 font-bold">Python / PyTorch / Gemini</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm h-fit">
                    <Layout className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Deployment</h4>
                    <p className="text-slate-700 font-bold">Vercel / Supabase / GCP</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-600 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
