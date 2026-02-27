import React from 'react';
import { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
    title: 'Skills & Expertise',
    description: 'Technical and business capabilities spanning ML/AI, entrepreneurship, and domain expertise.',
};

export default function SkillsPage() {
    return <SkillsClient />;
}
