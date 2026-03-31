'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  const experiences = [
    {
      role: 'Student @ BS in Data Science & Applications',
      company: 'Indian Institute of Technology Madras',
      date: 'Jan 2026 – Present',
      desc: [
        'Pursuing rigorous degree in Data Science and Applications.',
        'Focusing on Machine Learning, Statistics, and AI systems engineering.',
        'Actively building production-ready projects in the IITM ecosystem.'
      ],
      color: 'blue'
    },
    {
      role: 'Member @ Nilgiri House',
      company: 'IIT Madras',
      date: 'Sep 2025 – Present',
      desc: [
        'Active member of Nilgiri House, participating in technical and cultural initiatives within the IITM residential community.'
      ],
      color: 'blue'
    },
    {
      role: 'Spaceborn Intern',
      company: 'Spaceborn',
      date: 'Oct 2025 – Dec 2025',
      desc: [
        'Explored the intersection of aerospace data and machine learning.',
        'Developed insights for environmental monitoring using specialized datasets.'
      ],
      color: 'orange'
    },
    {
      role: 'Spacelance Intern',
      company: 'Spacelance',
      date: 'Dec 2025',
      desc: [
        'Intensive one-month project focusing on digital service architecture and client-facing solutions.'
      ],
      color: 'orange'
    },
    {
      role: 'Junior Data Analyst Intern',
      company: 'Yuva Intern (by Henry Harvin)',
      date: 'Oct 2025 – Jan 2026',
      desc: [
        'Performed exploratory data analysis and visualization for business datasets.',
        'Automated reporting workflows using Python and Pandas.'
      ],
      color: 'green'
    },
    {
      role: 'Frontend Web Developer Intern',
      company: 'Yuva Intern (by Henry Harvin)',
      date: 'Sep 2025 – Jan 2026',
      desc: [
        'Built interactive UI components using modern JavaScript frameworks.',
        'Optimized web performance and ensured cross-browser compatibility.'
      ],
      color: 'green'
    },
    {
      role: 'Data Science with Python Intern',
      company: 'Yuva Intern (by Henry Harvin)',
      date: 'Sep 2025 – Jan 2026',
      desc: [
        'Implemented predictive models and statistical analysis pipelines.',
        'Cleaned and pre-processed complex datasets for model training.'
      ],
      color: 'green'
    },
    {
      role: 'E-Cell Campus Ambassador @ DTU',
      company: 'Delhi Technological University',
      date: 'Oct 2025 – Jan 2026',
      desc: [
        'Represented DTU\'s Entrepreneurship Cell, managing outreach and fostering startup culture.',
        'Coordinated between student body and flagship events.'
      ],
      color: 'blue'
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
