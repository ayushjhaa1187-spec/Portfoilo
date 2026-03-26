'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const AboutPage = () => {
  const timeline = [
    { year: '2020', title: 'Commerce Background', desc: 'Started with economics, discovered passion for data and technology.' },
    { year: '2023', title: 'Self-Taught Journey', desc: 'Learned Python, ML fundamentals, statistics independently.' },
    { year: '2025', title: 'IIT Madras Admission', desc: 'Accepted into BS Data Science & Applications program.' },
    { year: '2025', title: 'IREU Entrepreneurship', desc: 'Startup Ideation Track - validated business ideas with data.' },
    { year: '2026', title: 'IIT Competition Finalist', desc: 'Top 10 at [Competition] among 500+ teams.' },
    { year: 'Present', title: 'Building & Learning', desc: 'Focusing on ML/AI for satellite data and business applications.' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-blue-900">About Me</h1>

        {/* Philosophy Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">My Philosophy</h2>
          <p className="text-xl italic text-gray-700">
            &quot;I don&apos;t just build models - I build solutions that matter. My unique combination of IIT-level data science and entrepreneurial thinking lets me create AI systems that are both technically robust and commercially viable.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">The Story</h2>
            <div className="space-y-8 relative border-l-2 border-blue-200 ml-3 pl-8 pb-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 bg-blue-600 w-4 h-4 rounded-full border-4 border-white shadow-sm"></span>
                  <h3 className="text-lg font-bold text-blue-900">{item.year}: {item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Focus</h2>
            <div className="grid gap-4">
              {[
                '🛰️ ML Applications in Satellite Data',
                '🧠 Deep Learning & Computer Vision',
                '💼 Data-Driven Business Strategy',
                '🚀 Building Startup-Ready AI Products'
              ].map((focus, idx) => (
                <Card key={idx} className="p-4 flex items-center bg-white border border-gray-100 shadow-sm">
                  <span className="text-lg font-medium text-gray-800">{focus}</span>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">The Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Building AI solutions that solve real-world problems with business impact. Bridging the gap between cutting-edge data science and practical entrepreneurial innovation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
