import React from 'react';
import { Metadata } from 'next';
import ExperienceClient from './ExperienceClient';

export const metadata: Metadata = {
    title: 'Experience | Ayush Kumar Jha',
    description: 'My professional journey at the intersection of Data Science and Entrepreneurship.',
};

export default function ExperiencePage() {
    return <ExperienceClient />;
}
