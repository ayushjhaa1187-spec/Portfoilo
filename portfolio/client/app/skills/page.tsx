'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Supervised Learning', level: 85 },
        { name: 'Deep Learning', level: 75 },
        { name: 'Computer Vision', level: 80 },
        { name: 'Satellite Data Analysis', level: 75 },
        { name: 'Statistical Modeling', level: 85 },
        { name: 'NLP', level: 65 },
      ],
      color: 'blue'
    },
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'NumPy, Pandas', level: 85 },
        { name: 'TensorFlow, PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Jupyter, Colab', level: 90 },
        { name: 'SQL', level: 80 },
      ],
      color: 'green'
    },
    {
      title: 'Business & Strategy',
      skills: [
        { name: 'Startup Ideation', level: 85 },
        { name: 'Market Analysis', level: 75 },
        { name: 'Product Strategy', level: 70 },
        { name: 'Business Modeling', level: 80 },
      ],
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Technical & Business Skills
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 border-t-4"
            style={{ borderColor: category.color === 'blue' ? '#1E40AF' : category.color === 'green' ? '#10B981' : '#F97316' }}
          >
            <h2 className="text-xl font-bold mb-6 text-gray-800">{category.title}</h2>
            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      style={{ backgroundColor: category.color === 'blue' ? '#1E40AF' : category.color === 'green' ? '#10B981' : '#F97316' }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
