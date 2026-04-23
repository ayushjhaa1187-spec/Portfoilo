'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { about } from '@/data/about';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-blue-900">About Me</h1>

        {/* Philosophy Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">My Philosophy</h2>
          <p className="text-xl italic text-gray-700">
            &quot;{about.philosophy}&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">The Journey</h2>
            <div className="space-y-8 relative border-l-2 border-blue-200 ml-3 pl-8 pb-4">
              {about.timeline.map((item, index) => (
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
              {about.currentFocus.map((focus, idx) => (
                <Card key={idx} className="p-4 flex items-center bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-lg font-medium text-gray-800">{focus}</span>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">The Vision</h3>
              <p className="text-gray-600 leading-relaxed">
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
