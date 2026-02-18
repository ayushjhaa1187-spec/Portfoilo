'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

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

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-8 h-full border-l-4 border-blue-600 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Indian Institute of Technology Madras</h2>
            <p className="text-xl font-medium text-blue-700 mb-4">BS in Data Science & Applications</p>
            <p className="text-gray-500 mb-6">2025 - 2029</p>

            <h3 className="font-semibold text-lg mb-3 text-gray-800">Focus Areas:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Machine Learning & AI</li>
              <li>Satellite Data Analysis</li>
              <li>Statistical Modeling</li>
              <li>Business Applications of DS</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Coursework:</h3>
            <div className="flex flex-wrap gap-2">
              {['ML Foundations', 'Deep Learning', 'Neural Networks', 'Statistical Methods', 'Data Structures', 'Business Analytics'].map((course) => (
                <span key={course} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {course}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 border-l-4 border-orange-500 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">IREU School for Startups</h2>
              <p className="text-xl font-medium text-orange-600 mb-4">Entrepreneurship Intern</p>
              <p className="text-gray-500 mb-6">Startup Ideation Track</p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span> Validated 3+ startup ideas with data-driven research
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span> Developed detailed business models and pitch decks
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span> Gained hands-on experience in market analysis
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 border-l-4 border-green-500 shadow-sm bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Learning</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Self-taught Python & Data Science stack</li>
                <li>• Online certifications in Deep Learning</li>
                <li>• Research papers on Remote Sensing applications</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
