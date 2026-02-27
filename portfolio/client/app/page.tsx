import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: 'Ayush Kumar Jha | Portfolio',
    description: 'Portfolio of Ayush Kumar Jha - Product Manager & Data Scientist. Showcasing projects at the intersection of AI, business, and real-world impact.',
};

export default function HomePage() {
    return <HomeClient />;
}
