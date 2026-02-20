'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import axios from 'axios';
import { Button } from '@/components/ui/Button';

interface Achievement {
  _id?: string;
  title: string;
  desc: string;
  icon?: string;
  color?: string;
  date?: string;
  category?: string;
}

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  // Use a fallback for icon and color if not present
  const getIcon = (item: Achievement) => item.icon || '🏆';
  const getColor = (item: Achievement) => item.color || 'blue';

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await axios.get(`${apiUrl}/achievements`, {
          params: { page, limit }
        });

        if (page === 1) {
          setAchievements(res.data.achievements);
        } else {
          setAchievements(prev => [...prev, ...res.data.achievements]);
        }

        if (res.data.meta) {
          setTotalPages(res.data.meta.pages);
        }
        setError(null);
      } catch (err: unknown) {
        console.error('Error fetching achievements:', err);
        // If we are on page 1 and have no data, show error
        // Note: checking achievements.length here captures the value at the time useEffect ran.
        // Since we want to know if we *already* have data, and this effect runs when page changes,
        // it should be fine. If page=1, achievements is likely empty.
        // However, to be safer, we can check inside a functional update or just rely on UI state.
        // But since we are inside useEffect, we can't easily check 'current' state without ref.
        // But for page 1 error handling, checking initial state is fine.
        if (page === 1) {
           setError('Failed to load achievements from server.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-blue-900"
      >
        Achievements & Awards
      </motion.h1>

      {error && (
        <div className="text-red-500 mb-8 text-center bg-red-50 p-4 rounded-lg">
          {error}
          <p className="text-sm mt-2 text-gray-600">Ensure the backend is running.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={item._id || idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % limit) * 0.1 }}
          >
            <Card className="p-8 h-full border-t-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: getColor(item) === 'blue' ? '#1E40AF' : getColor(item) === 'orange' ? '#F97316' : '#10B981' }}
            >
              <div className="text-4xl mb-4">{getIcon(item)}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {loading && (
        <div className="text-center mt-8 text-gray-500 animate-pulse">Loading achievements...</div>
      )}

      {!loading && page < totalPages && (
        <div className="mt-12 text-center">
          <Button onClick={handleLoadMore} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;
