'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { education } from '@/data/education';

const EducationPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Education & Learning
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-8 h-full border-t-4 border-blue-600 shadow-xl bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black">{edu.duration.split('-')[1] || edu.duration}</span>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{edu.institution}</h2>
                <p className="text-xl font-medium text-blue-700 mb-4">{edu.degree}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {edu.duration}
                  </span>
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-tighter">
                    {edu.location}
                  </span>
                </div>

                <div className="space-y-6">
                  {edu.focusAreas && (
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-3">Focus Areas</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.focusAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.coursework && (
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-3">Key Coursework</h3>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.achievements && (
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-3">Highlights</h3>
                      <ul className="space-y-2">
                        {edu.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="mt-1.5 text-blue-600 text-[8px]">●</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
