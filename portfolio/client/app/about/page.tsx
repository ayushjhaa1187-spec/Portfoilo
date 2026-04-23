'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { about } from '@/data/about';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16 dark:bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-12 text-slate-900 dark:text-white tracking-tighter">
          About <span className="text-blue-600">Me_</span>
        </h1>

        {/* Philosophy Section */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border-l-8 border-blue-600 p-10 mb-16 rounded-r-3xl shadow-xl shadow-blue-100 dark:shadow-none">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-blue-600 dark:text-blue-400">Core Philosophy</h2>
          <p className="text-2xl md:text-3xl font-bold italic text-slate-800 dark:text-blue-100 leading-tight">
            &quot;{about.philosophy}&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center text-sm">01</span>
              The Journey
            </h2>
            <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10">
              {about.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[49px] top-1 bg-white dark:bg-slate-900 w-4 h-4 rounded-full border-4 border-blue-600 shadow-sm"></span>
                  <div className="text-sm font-black text-blue-600 dark:text-blue-400 mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center text-sm">02</span>
                Current Focus
              </h2>
              <div className="grid gap-4">
                {about.currentFocus.map((focus, idx) => (
                  <Card key={idx} className="p-6 flex items-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all rounded-2xl group">
                    <span className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">{focus}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-white rounded-[2rem] p-10 text-white dark:text-slate-900 shadow-2xl">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 opacity-50">Future Vision</h3>
              <p className="text-xl font-medium leading-relaxed">
                {about.vision}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
