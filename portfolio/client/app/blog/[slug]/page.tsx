import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-3xl mx-auto pb-16">
      <Link href="/blog" className="text-amber-400 hover:text-white mb-8 inline-block text-sm">
        ← Back to Blog
      </Link>

      <article className="max-w-none text-slate-300">
        <h1 className="text-4xl font-bold mb-2 text-white leading-tight">{post.title}</h1>
        <p className="text-amber-100/70 mb-6">{post.subtitle}</p>

        <div className="flex items-center space-x-4 mb-8 text-slate-500 border-b border-white/10 pb-8 text-sm">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span>•</span>
          <span className="font-medium text-amber-400 uppercase">{post.category}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>

        <div className="space-y-4 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-semibold text-white mt-8">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
