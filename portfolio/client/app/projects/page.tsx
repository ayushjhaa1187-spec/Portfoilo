'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Mock data (replace with API call later)
const projectsData = [
  {
    slug: 'satellite-data-analysis',
    title: 'Satellite Data Analysis System',
    category: 'ML/AI',
    shortDescription: 'ML models to classify satellite imagery for environmental monitoring.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Satellite APIs', 'PostgreSQL'],
    metrics: { accuracy: '92%', impact: 'Automated monitoring' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec',
    featured: true
  },
  {
    slug: 'predictive-analytics-dashboard',
    title: 'Predictive Analytics Dashboard',
    category: 'ML/AI',
    shortDescription: 'End-to-end ML pipeline with business insights and interactive visualizations.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'PostgreSQL'],
    metrics: { accuracy: '89%', impact: 'Improved decision making' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec',
    featured: true
  },
  {
    slug: 'startup-idea-validator',
    title: 'Startup Idea Validator',
    category: 'Business',
    shortDescription: 'Validated startup ideas using data-driven market research.',
    techStack: ['Python', 'Pandas', 'Market Research', 'Business Modeling'],
    metrics: { accuracy: 'N/A', impact: 'Validated 3 ideas' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec',
    featured: true
  },
  {
    slug: 'market-analysis-tool',
    title: 'Market Analysis Tool',
    category: 'Business',
    shortDescription: 'Data-driven business intelligence solution combining ML with strategy.',
    techStack: ['Python', 'BeautifulSoup', 'NLP', 'Tableau'],
    metrics: { accuracy: 'N/A', impact: 'Strategic insights' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec',
    featured: false
  },
  {
    slug: 'healthcare-prediction',
    title: 'Healthcare Prediction Model',
    category: 'ML/AI',
    shortDescription: 'Disease prediction using patient data and ML classification.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    metrics: { accuracy: '94%', impact: 'Early detection' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec',
    featured: false
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML/AI', 'Business'];

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projectsData
      : projectsData.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Featured Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Showcasing the intersection of Data Science, AI, and Business Strategy.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12 space-x-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            variant={filter === cat ? 'primary' : 'outline'}
            className={filter === cat ? 'bg-blue-600 text-white' : ''}
          >
            {cat}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col p-6 hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'ML/AI' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-yellow-500 text-sm font-bold">★ Featured</span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{project.shortDescription}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-gray-400 px-1 py-1">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <Link href={`/projects/${project.slug}`} className="text-blue-600 font-medium hover:text-blue-800 text-sm">
                    View Details →
                  </Link>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                    GitHub ↗
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Explore more repositories on my GitHub</p>
        <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">View All 17+ Repositories</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
