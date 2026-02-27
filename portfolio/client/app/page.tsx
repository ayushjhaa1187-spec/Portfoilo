import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: 'Data Scientist & ML/AI Researcher',
    description: 'Portfolio of Ayush Kumar Jha — IIT Madras Data Science Scholar. Showcasing projects at the intersection of AI, business, and real-world impact.',
};

export default function HomePage() {
    return <HomeClient />;
}
