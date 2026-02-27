import React from 'react';
import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'Projects | Ayush Kumar Jha',
    description: 'Showcasing the intersection of Data Science, AI, and Business Strategy.',
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
