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
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden border-b border-[var(--border-glass)]">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--success)] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-10 text-sm font-semibold transition-colors hover:text-[var(--primary)] text-[var(--text-secondary)]">
            <FiArrowLeft /> Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
              style={{ background: 'rgba(0, 240, 255, 0.05)', color: 'var(--primary)', borderColor: 'rgba(0, 240, 255, 0.2)', textShadow: '0 0 10px var(--primary)' }}>
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-8 leading-tight text-white drop-shadow-2xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <FiCalendar size={16} className="text-[var(--primary)]" />
              <span>{post.date}</span>
            </div>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="flex items-center gap-2">
              <FiClock size={16} className="text-[var(--success)]" />
              <span>{post.readTime}</span>
            </div>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="flex items-center gap-2">
              <FiUser size={16} className="text-white" />
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
