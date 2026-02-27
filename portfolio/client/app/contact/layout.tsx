import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Ayush Kumar Jha',
    description: 'Get in touch for ML/AI collaborations, startup opportunities, and research partnerships.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
