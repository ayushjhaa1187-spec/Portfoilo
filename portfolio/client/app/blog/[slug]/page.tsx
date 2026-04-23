'use client';

import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, Calendar, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface MDXComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

// Custom components to use in MDX
const mdxComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => <h1 className="text-4xl font-black mt-8 mb-4 text-blue-900" {...props}>{children}</h1>,
  h2: ({ children, ...props }: MDXComponentProps) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-800 border-b pb-2" {...props}>{children}</h2>,
  p: ({ children, ...props }: MDXComponentProps) => <p className="text-lg leading-relaxed text-slate-700 mb-6" {...props}>{children}</p>,
  pre: ({ children, ...props }: MDXComponentProps) => <pre className="p-0 mb-8 rounded-xl overflow-hidden" {...props}>{children}</pre>,
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  // Call the hook at the top level of the component
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="min-h-screen pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-600 mb-12 transition-colors uppercase tracking-widest"
      >
        <ChevronLeft size={16} /> Back to Insights
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
            <Calendar size={14} className="text-blue-500" />
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </div>
          {post.tags && post.tags.map(tag => (
            <div key={tag} className="flex items-center gap-1.5 text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              <Tag size={12} />
              {tag}
            </div>
          ))}
          <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
            <Clock size={14} />
            5 min read
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
          {post.title}
        </h1>
        
        <p className="text-xl text-slate-500 font-medium italic border-l-4 border-blue-100 pl-6 py-2">
          {post.description}
        </p>
      </header>

      {post.image && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-video relative">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-slate prose-lg max-w-none">
        {React.createElement(MDXContent, { components: mdxComponents })}
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-100">
        <div className="bg-slate-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
            AKJ
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Written by Ayush Kumar Jha</h3>
            <p className="text-slate-500 text-sm mb-4">Data Scientist & AI Architect. Building high-performance data ecosystems.</p>
            <div className="flex justify-center md:justify-start gap-4">
               <a href="/contact" className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">Connect</a>
               <a href="https://github.com/ayushjhaa1187-spec" className="text-xs font-black text-slate-400 uppercase tracking-widest hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PostPage;
