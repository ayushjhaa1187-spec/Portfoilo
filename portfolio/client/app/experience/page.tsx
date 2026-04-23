'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Experience
      </motion.h1>

      <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 md:ml-8 pl-8 md:pl-12">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            <span
              className="absolute -left-[45px] md:-left-[61px] top-0 w-6 h-6 rounded-full border-4 border-white shadow-sm bg-blue-600"
            ></span>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                  <h3 className="text-xl text-blue-700 font-medium">{exp.company}</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-gray-500 font-bold bg-gray-100 px-4 py-1 rounded-full text-xs uppercase tracking-widest">
                    {exp.date}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter mr-2">
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.desc.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start leading-relaxed">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
