import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experience | Ayush Kumar Jha',
    description: 'Professional journey at the intersection of Data Science and Entrepreneurship, from IIT Madras to IREU School for Startups.',
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
