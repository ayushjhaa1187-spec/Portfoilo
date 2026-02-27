import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Education | Ayush Kumar Jha',
    description: 'Building a strong foundation in data science, ML/AI, and entrepreneurship at Indian Institute of Technology Madras and IREU.',
};

export default function EducationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
