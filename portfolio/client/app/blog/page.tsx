'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  // Sort posts by date
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-black text-blue-900 mb-4 tracking-tighter">Technical Insights</h1>
        <p className="text-gray-500 max-w-2xl text-lg">
          Exploring the intersection of Data Science, Entrepreneurship, and AI engineering.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post, idx) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={post.url} className="group">
                <article className="h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <Calendar size={12} />
                      {format(parseISO(post.date), 'MMM dd, yyyy')}
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                        <Tag size={10} />
                        {post.tags[0]}
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium italic">No articles found in the latent space yet...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
