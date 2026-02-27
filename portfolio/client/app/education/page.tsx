import React from 'react';
import { Metadata } from 'next';
import EducationClient from './EducationClient';

export const metadata: Metadata = {
    title: 'Education | Ayush Kumar Jha',
    description: 'Building a strong foundation in data science, ML/AI, and entrepreneurship.',
};

export default function EducationPage() {
    return <EducationClient />;
}
