import React from 'react';
import { Metadata } from 'next';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
    title: 'Research | Ayush Kumar Jha',
    description: 'Exploring the frontiers of ML/AI, with a focus on Satellite Data and Earth Observation.',
};

export default function ResearchPage() {
    return <ResearchClient />;
}
