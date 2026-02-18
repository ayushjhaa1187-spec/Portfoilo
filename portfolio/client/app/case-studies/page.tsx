'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      slug: 'satellite-environmental-monitoring',
      title: 'How Satellite Data + ML Can Transform Environmental Monitoring',
      desc: 'Reducing manual analysis time by 60% using deep learning pipelines.',
      category: 'Environment',
      date: 'Feb 2026'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <h1 className="text-4xl font-bold mb-12 text-blue-900">Case Studies</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`}>
            <Card className="p-8 h-full hover:border-blue-500 transition-colors">
              <span className="text-sm text-blue-600 font-medium mb-2 block">{study.category} • {study.date}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
              <p className="text-gray-600 mb-6">{study.desc}</p>
              <Button variant="outline">Read Case Study →</Button>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
