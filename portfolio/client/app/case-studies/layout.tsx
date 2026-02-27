import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | Ayush Kumar Jha',
    description: 'Deep dives into complex environmental and business problems and how they were solved using data science and machine learning.',
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
