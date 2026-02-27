import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch for ML/AI projects, startups, or research opportunities.',
};

export default function ContactPage() {
    return <ContactClient />;
}
