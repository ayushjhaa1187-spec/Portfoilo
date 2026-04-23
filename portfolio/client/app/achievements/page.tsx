'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { achievements } from '@/data/achievements';
import { certifications } from '@/data/certifications';

const AchievementsPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16 space-y-16">
      <section>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-blue-900"
        >
          Major Achievements
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full border-t-4 border-blue-600 hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
                <h3 className="text-blue-700 text-sm font-bold mb-3 uppercase tracking-wider">{item.company}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                  {item.date}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-slate-800"
        >
          Professional Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform">{cert.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-1">{cert.title}</h4>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{cert.issuer}</span>
                  <span className="text-[10px] font-medium text-slate-400">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
