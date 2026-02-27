import React from 'react';
import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Blog & Insights | Ayush Kumar Jha',
    description: 'Thoughts on Data Science, Business Strategy, and the Startup Ecosystem.',
};

export default function BlogPage() {
    return <BlogClient />;
}
