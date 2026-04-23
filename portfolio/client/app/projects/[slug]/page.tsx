'use client';
/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { allCaseStudies } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, ExternalLink, Code, Database } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import Link from 'next/link';
import React, { use } from 'react';
import Image from 'next/image';

const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800" {...props} />,
  p: (props: any) => <p className="text-gray-600 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600" {...props} />,
  li: (props: any) => <li {...props} />,
  code: (props: any) => <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm" {...props} />,
};

const MDXContent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const study = allCaseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ChevronLeft size={16} /> Back to Projects
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest rounded-full">
              Case Study
            </span>
            <time className="text-sm text-gray-400">
              {format(parseISO(study.date), 'MMMM yyyy')}
            </time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            {study.techStack?.map((tech: string) => (
              <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {study.githubUrl && (
              <a 
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-all"
              >
                <GithubIcon size={20} /> View Source Code
              </a>
            )}
            {study.liveUrl && (
              <a 
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            )}
          </div>
        </header>

        {study.image && (
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-gray-100 shadow-2xl">
            <Image 
              src={study.image} 
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <MDXContent code={study.body.code} />
          </div>

          <aside className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code size={16} className="text-blue-600" /> Core Tech
              </h3>
              <ul className="space-y-2">
                {study.techStack?.slice(0, 5).map((tech: string) => (
                  <li key={tech} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 rounded-2xl p-6 text-white shadow-xl shadow-blue-100">
              <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <Database size={16} className="text-blue-300" /> Key Outcome
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed italic">
                &quot;{study.description}&quot;
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
