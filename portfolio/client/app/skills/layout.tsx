import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skills | Ayush Kumar Jha',
    description: 'Technical and business capabilities spanning Machine Learning, AI, entrepreneurship, and domain expertise.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
