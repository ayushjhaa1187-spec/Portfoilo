import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock Data
const caseStudiesData = [
  {
    slug: 'satellite-environmental-monitoring',
    title: 'How Satellite Data + ML Can Transform Environmental Monitoring',
    challenge: 'Manual analysis of satellite imagery is time-consuming and prone to error. Environmental agencies struggle to process petabytes of daily data to detect deforestation or illegal mining activities in real-time.',
    approach: 'We hypothesized that a Convolutional Neural Network (CNN) could identify specific environmental features with high accuracy. We collected 10,000 labeled satellite images and preprocessed them to handle cloud cover and atmospheric noise.',
    implementation: 'The solution involved a U-Net architecture for semantic segmentation. The model was trained on AWS using PyTorch. We implemented a sliding window approach to process large-scale geotiff images.',
    results: 'The automated system achieved 92% accuracy compared to expert analysis. It reduced the time to generate a report for a 100 sq km area from 3 days to 4 hours (60% reduction in overall workflow time).',
    learnings: 'High-quality labeled data is more critical than model complexity in remote sensing. Handling different sensor resolutions required robust normalization techniques.'
  }
];

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-3xl mx-auto pb-16">
      <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Case Studies
      </Link>

      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">{study.title}</h1>

        <div className="bg-blue-50 p-6 rounded-lg mb-10 border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-900 mb-2 mt-0">The Challenge</h2>
          <p className="text-gray-800 m-0">{study.challenge}</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Science Approach</h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{study.approach}</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Implementation</h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{study.implementation}</p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Results & Impact</h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{study.results}</p>

        <div className="bg-gray-50 p-6 rounded-lg mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-2 mt-0">Key Learnings</h2>
          <p className="text-gray-700 m-0 italic">&quot;{study.learnings}&quot;</p>
        </div>
      </article>
    </div>
  );
}
