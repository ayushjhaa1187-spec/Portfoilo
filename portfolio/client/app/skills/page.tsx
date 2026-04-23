'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Technical & Business Skills
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all"
          >
            <h2 className="text-xl font-black mb-8 text-gray-900 border-b pb-4 flex items-center justify-between">
              {category.category}
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                {category.items.length} Skills
              </span>
            </h2>
            
            <div className="space-y-7">
              {category.items.map((skill, skillIdx) => (
                <div key={skillIdx} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{skill.name}</span>
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-400 transition-colors">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm font-medium tracking-widest uppercase italic">
        * Continuously evolving in the latent space of AI & Data Science
      </div>
    </div>
  );
};

export default SkillsPage;
