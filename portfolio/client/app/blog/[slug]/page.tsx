import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { blogPosts, personalInfo } from '@/data/portfolio';
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from 'react-icons/fi';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-blue-400" style={{ color: '#94A3B8' }}>
            <FiArrowLeft /> Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#93C5FD' }}>
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#F1F5F9' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium" style={{ color: '#94A3B8' }}>
            <div className="flex items-center gap-2">
              <FiCalendar size={14} />
              <span>{post.date}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <FiClock size={14} />
              <span>{post.readTime}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <FiUser size={14} />
              <span>{personalInfo.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">AJ</div>
            </div>
            <div>
              <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{personalInfo.name}</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{personalInfo.title}</div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary text-sm py-2 px-4">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
