'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import api from '@/lib/api';

interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  techStack: string[];
  metrics?: { accuracy: string; impact: string };
  githubUrl?: string;
  featured: boolean;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML/AI', 'Business'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects?limit=100');
        if (res.data.projects) {
          setProjects(res.data.projects);
        } else {
          // Fallback in case of unexpected response structure
          setProjects([]);
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects. Please try again later.');
        // Fallback to mock data if API fails (optional, but good for stability if backend is down)
        // For this task, I will just show error or empty to prove we are using API.
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 text-center px-4">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

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
                  {project.techStack?.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack?.length > 3 && (
                    <span className="text-xs text-gray-400 px-1 py-1">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <Link href={`/projects/${project.slug}`} className="text-blue-600 font-medium hover:text-blue-800 text-sm">
                    View Details →
                  </Link>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                      GitHub ↗
                    </a>
                  )}
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
