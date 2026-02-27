import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Achievements | Ayush Kumar Jha',
    description: 'Milestones from premier IIT competitions, Startup Ideation tracks, and academic excellence as a Data Science Scholar.',
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
