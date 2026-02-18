import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock Data
const blogPostsData = [
  {
    slug: 'satellite-ml-agriculture',
    title: 'How Satellite Data + ML Can Transform Agriculture',
    content: `
      <p>Precision agriculture is revolutionizing how we grow food. By leveraging satellite imagery and machine learning, farmers can now monitor crop health, soil moisture, and pest infestations with unprecedented accuracy.</p>
      <h2>The Role of Remote Sensing</h2>
      <p>Satellites like Sentinel-2 and Landsat provide multispectral data that goes beyond visible light. Indices like NDVI (Normalized Difference Vegetation Index) allow us to assess plant vigor.</p>
      <h2>Machine Learning Models</h2>
      <p>We can train CNNs to segment fields and classify crop types. Time-series analysis using LSTMs can predict yield based on historical growth patterns and weather data.</p>
      <h2>Business Impact</h2>
      <p>For a medium-sized farm, optimizing fertilizer application based on satellite data can reduce costs by 20% while increasing yield by 15%.</p>
    `,
    category: 'ML/AI',
    date: 'Feb 15, 2026',
    author: 'Ayush Kumar Jha'
  },
  {
    slug: 'iit-ideation-to-product',
    title: 'From IIT Ideation to Product: My Startup Journey',
    content: `
      <p>Participating in the IREU School for Startups was a transformative experience. It taught me that a great technical solution is worthless without a viable business model.</p>
      <h2>Validating the Problem</h2>
      <p>We started with a hypothesis: "Small businesses struggle with inventory management." We interviewed 50+ shop owners to validate this before writing a single line of code.</p>
      <h2>The MVP</h2>
      <p>Instead of building a full-fledged app, we created a simple WhatsApp chatbot to test engagement. The results were promising.</p>
      <h2>Lessons Learned</h2>
      <p>1. Fall in love with the problem, not the solution.<br>2. Data beats opinion.<br>3. Speed of execution matters more than perfection.</p>
    `,
    category: 'Startups',
    date: 'Feb 10, 2026',
    author: 'Ayush Kumar Jha'
  },
  {
    slug: 'business-side-of-data-science',
    title: 'The Business Side of Data Science: What Models Don\'t Tell You',
    content: `
      <p>As data scientists, we often obsess over accuracy, precision, and recall. But business stakeholders care about ROI, time-to-market, and scalability.</p>
      <h2>The Translation Layer</h2>
      <p>One of the most valuable skills I've learned is translating technical metrics into business outcomes. Instead of saying "The model has 90% accuracy," say "This model will reduce manual review time by 50%."</p>
      <h2>Choosing the Right Metric</h2>
      <p>Sometimes, a false positive is more expensive than a false negative. Understanding the cost matrix is crucial for alignment.</p>
    `,
    category: 'Business',
    date: 'Jan 28, 2026',
    author: 'Ayush Kumar Jha'
  }
];

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-3xl mx-auto pb-16">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Blog
      </Link>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">{post.title}</h1>

        <div className="flex items-center space-x-4 mb-8 text-gray-500 border-b border-gray-100 pb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span className="font-medium text-blue-600">{post.category}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <div
          className="text-gray-800 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
