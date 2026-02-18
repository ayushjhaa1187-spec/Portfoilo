'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  const experiences = [
    {
      role: 'Entrepreneurship Intern',
      company: 'IREU School for Startups',
      date: 'Startup Ideation Track',
      desc: [
        'Completed intensive entrepreneurship program focusing on startup validation.',
        'Developed 3+ business ideas with data-driven market research.',
        'Created business model canvases and financial projections.',
        'Pitched to industry experts and received feedback.'
      ],
      color: 'orange'
    },
    {
      role: 'Data Science Student & Researcher',
      company: 'IIT Madras',
      date: '2025 - Present',
      desc: [
        'Pursuing BS in Data Science & Applications.',
        'Working on ML/AI projects in satellite data analysis and remote sensing.',
        'Participating in research initiatives and building production-ready ML systems.'
      ],
      color: 'blue'
    },
    {
      role: 'IIT Competition Participant',
      company: 'Various Premier IITs',
      date: '2025 - 2026',
      desc: [
        'Finalist at [IIT X] Ideathon and Top 10 at [IIT Y] Hackathon.',
        'Competed against 500+ teams nationwide.',
        'Built end-to-end solutions combining ML/AI with business strategy.'
      ],
      color: 'green'
    }
  ];

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
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <span
              className="absolute -left-[45px] md:-left-[61px] top-0 w-6 h-6 rounded-full border-4 border-white shadow-sm"
              style={{ backgroundColor: exp.color === 'blue' ? '#1E40AF' : exp.color === 'orange' ? '#F97316' : '#10B981' }}
            ></span>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                  <h3 className="text-xl text-blue-700 font-medium">{exp.company}</h3>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-gray-100 px-3 py-1 rounded-full text-sm inline-block w-fit">
                  {exp.date}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.desc.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
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
