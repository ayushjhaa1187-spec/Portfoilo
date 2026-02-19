import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { projects as projectsData } from '@/data/projects';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto pb-16">
      <Link href="/projects" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">Key Metrics</h2>
              <div className="space-y-2">
                {project.metrics.accuracy !== 'N/A' && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="font-bold text-green-600">{project.metrics.accuracy}</span>
                  </div>
                )}
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Business Impact</span>
                  <span className="font-bold text-blue-600 text-right">{project.metrics.impact}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button>View Code on GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
