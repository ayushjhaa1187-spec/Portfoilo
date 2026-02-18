'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const AchievementsPage = () => {
  const achievements = [
    {
      title: 'Finalist at [IIT Name] Ideathon 2025',
      desc: 'Top 10 out of 500+ teams. Presented an AI-driven solution for sustainable agriculture using satellite data.',
      icon: '🥇',
      color: 'blue'
    },
    {
      title: 'Top 10 at [IIT Name] Hackathon 2026',
      desc: 'Developed a real-time remote sensing application for disaster management. Recognized for innovative use of ML.',
      icon: '🥈',
      color: 'blue'
    },
    {
      title: 'IREU Startup Ideation Completion',
      desc: 'Successfully validated 3+ startup ideas through rigorous market research and business modeling.',
      icon: '🚀',
      color: 'orange'
    },
    {
      title: 'IIT Madras BS Data Science Scholar',
      desc: 'Maintaining academic excellence in the rigorous BS in Data Science & Applications program.',
      icon: '🎓',
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
        Achievements & Awards
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-8 h-full border-t-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: item.color === 'blue' ? '#1E40AF' : item.color === 'orange' ? '#F97316' : '#10B981' }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
