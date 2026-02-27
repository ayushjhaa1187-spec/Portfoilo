import React from 'react';
import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
    title: 'Case Studies | Ayush Kumar Jha',
    description: 'Deep dives into complex problems and how I solved them using data.',
};

export default function CaseStudiesPage() {
    return <CaseStudiesClient />;
}
