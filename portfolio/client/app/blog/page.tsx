'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const BlogPage = () => {
  const blogPosts = [
    {
      slug: 'satellite-ml-agriculture',
      title: 'How Satellite Data + ML Can Transform Agriculture',
      excerpt: 'Exploring the potential of remote sensing for crop yield prediction and precision farming.',
      category: 'ML/AI',
      date: 'Feb 15, 2026',
      readTime: '8 min read'
    },
    {
      slug: 'iit-ideation-to-product',
      title: 'From IIT Ideation to Product: My Startup Journey',
      excerpt: 'Lessons learned from validating startup ideas during the IREU entrepreneurship track.',
      category: 'Startups',
      date: 'Feb 10, 2026',
      readTime: '6 min read'
    },
    {
      slug: 'business-side-of-data-science',
      title: 'The Business Side of Data Science: What Models Don\'t Tell You',
      excerpt: 'Why understanding business context is just as important as model accuracy.',
      category: 'Business',
      date: 'Jan 28, 2026',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <h1 className="text-4xl font-bold mb-12 text-blue-900">Blog & Insights</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="p-6 h-full hover:border-blue-400 transition-colors flex flex-col">
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <span className="font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-blue-600 font-medium text-sm">Read More →</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
