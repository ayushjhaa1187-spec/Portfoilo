import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Ayush Kumar Jha',
    description: 'Showcasing featured projects at the intersection of Data Science, AI, and Business Strategy. Filter by ML/AI, Business, and Research.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
