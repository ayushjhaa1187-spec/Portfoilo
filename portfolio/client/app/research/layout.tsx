import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research | Ayush Kumar Jha',
    description: 'Exploring the frontiers of ML/AI, with a focus on Satellite Data, Earth Observation, and Computer Vision.',
};

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
