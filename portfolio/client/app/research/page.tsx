'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const ResearchPage = () => {
  const researchAreas = [
    {
      title: 'Machine Learning for Satellite Data',
      desc: 'Investigating advanced CNN architectures for processing multi-spectral satellite imagery to detect environmental changes.',
      icon: '🛰️'
    },
    {
      title: 'Remote Sensing & Geospatial Intelligence',
      desc: 'Developing algorithms to analyze geospatial data for urban planning, agriculture, and disaster management.',
      icon: '🌍'
    },
    {
      title: 'AI for Environmental Monitoring',
      desc: 'Building models to track deforestation, water quality, and air pollution using earth observation data.',
      icon: '🤖'
    },
    {
      title: 'Computer Vision for Earth Observation',
      desc: 'Applying state-of-the-art object detection and segmentation techniques to high-resolution aerial imagery.',
      icon: '📡'
    }
  ];

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
        {researchAreas.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-8 h-full">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h2>
              <p className="text-gray-600 leading-relaxed">{area.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Current Research Focus</h2>
        <p className="text-gray-700 mb-4">
          Currently working on a project at IIT Madras to improve the accuracy of crop yield prediction using time-series satellite data and deep learning models.
        </p>
        <h3 className="text-lg font-bold mb-2 text-gray-800">Key methodologies:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Time-series analysis using LSTM/GRU networks</li>
          <li>Data fusion of optical and radar (SAR) imagery</li>
          <li>Transfer learning from pre-trained models on ImageNet</li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchPage;
