import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Ayush Kumar Jha',
    description: 'From Commerce to Cutting-Edge Data Science at IIT Madras. Learn more about my journey, philosophy, and current focus.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
