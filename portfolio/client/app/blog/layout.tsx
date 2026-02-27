import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog & Insights | Ayush Kumar Jha',
    description: 'Thoughts and articles on Data Science, Business Strategy, and the Startup Ecosystem.',
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
