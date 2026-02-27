import React from 'react';
import { Metadata } from 'next';
import ResumeClient from './ResumeClient';

export const metadata: Metadata = {
    title: 'Resume | Ayush Kumar Jha',
    description: 'Download my resume containing my experience, education, and skills.',
};

export default function ResumePage() {
    return <ResumeClient />;
}
