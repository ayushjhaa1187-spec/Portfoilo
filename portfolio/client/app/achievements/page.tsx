import React from 'react';
import { Metadata } from 'next';
import AchievementsClient from './AchievementsClient';

export const metadata: Metadata = {
    title: 'Achievements | Ayush Kumar Jha',
    description: 'Milestones from premier IIT competitions and academic excellence.',
};

export default function AchievementsPage() {
    return <AchievementsClient />;
}
