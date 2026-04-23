'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { research } from '@/data/research';

const ResearchPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Research Interests
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {research.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`p-8 h-full transition-all border-2 ${area.current ? 'border-blue-400 bg-blue-50/30' : 'border-transparent shadow-sm'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{area.icon}</div>
                {area.current && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest animate-pulse">
                    ACTIVE RESEARCH
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
              
              {area.methodologies && (
                <div className="mt-auto">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Methodologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.methodologies.map((m, i) => (
                      <span key={i} className="text-[10px] font-bold bg-white border border-gray-200 px-2 py-1 rounded text-gray-500">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
          <span className="text-8xl font-black italic">IITM</span>
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Collaborative Potential</h2>
          <p className="text-slate-300 mb-8 max-w-2xl text-lg font-light leading-relaxed">
            Currently engaged in the IIT Madras ecosystem, I am open to discussing research collaborations in 
            the fields of Earth Observation, Predictive Modeling, and Business Intelligence.
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 group">
              Discuss Collaboration <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
