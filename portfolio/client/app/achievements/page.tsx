'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const AchievementsPage = () => {
  const achievements = [
    {
      title: 'Jury @ AI-volution, GES 2026',
      company: 'IIT Kharagpur',
      desc: 'Invited as a jury member to evaluate AI-driven solutions during the Entrepreneurship Summit at IIT Kharagpur.',
      icon: '⚖️',
      color: 'blue'
    },
    {
      title: 'Finalist at Shaastra 2026 - Enable Ideathon',
      company: 'IIT Madras x Shaastra',
      desc: 'Advanced to the final rounds of the Enable Ideathon at Shaastra, focusing on accessibility through tech.',
      icon: '🏆',
      color: 'blue'
    },
    {
      title: 'Changethon @ National Social Summit',
      company: 'IIT Roorkee',
      desc: 'Finalist in the Social Impact Hackathon, developing tech-driven solutions for civic challenges.',
      icon: '🥈',
      color: 'blue'
    },
    {
      title: 'Co-Founder Catalyst - BECon 2026',
      company: 'IIT Delhi',
      desc: 'Recognized in the startup catalyst program at IIT Delhi for innovative architectural vision.',
      icon: '🚀',
      color: 'orange'
    },
    {
      title: 'Campus Ambassador (Multiple IITs)',
      company: 'IIT Kanpur, Bombay, Delhi, Roorkee',
      desc: 'Represented premier technical fests including Techfest (IITB), Techkriti (IITK), and E-Summits nationwide.',
      icon: '🤝',
      color: 'green'
    }
  ];

  const certifications = [
    {
      title: 'IBM Data Science Specialization',
      issuer: 'Coursera / IBM',
      date: 'Dec 2025',
      icon: '📜'
    },
    {
      title: 'Space Race Certificate',
      issuer: 'IEEE DTU',
      date: 'Oct 2025',
      icon: '🚀'
    },
    {
      title: 'Udemy - Profile Bio Mastery',
      issuer: 'Udemy',
      date: 'Oct 2025',
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16 space-y-16">
      <section>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-blue-900"
        >
          Hackathon Achievements
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full border-t-4 hover:shadow-lg transition-transform hover:-translate-y-1"
                style={{ borderColor: item.color === 'blue' ? '#1E40AF' : item.color === 'orange' ? '#F97316' : '#10B981' }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
                <h3 className="text-blue-700 text-sm font-medium mb-3">{item.company}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-slate-800"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-colors"
            >
              <div className="text-3xl">{cert.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900">{cert.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
