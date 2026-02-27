import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume | Ayush Kumar Jha',
    description: 'Download the resume of Ayush Kumar Jha, a Data Scientist, IIT Madras Scholar, and Entrepreneur.',
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
