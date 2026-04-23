'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Work Experience
      </motion.h1>

      <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 md:ml-8 pl-8 md:pl-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] md:-left-[57px] top-0 bg-blue-600 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10"></span>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                <h3 className="text-lg font-medium text-blue-700">{exp.company}</h3>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-gray-500 font-bold bg-gray-100 px-4 py-1 rounded-full text-xs uppercase tracking-widest">
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter mr-2">
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-600 leading-relaxed text-sm flex gap-3">
                  <span className="text-blue-500 mt-1.5 text-[8px]">●</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-100">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
