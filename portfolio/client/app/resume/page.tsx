'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { personalInfo, experiences, education, skillCategories } from '@/data/portfolio';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div style={{ paddingTop: '80px' }} className="print:pt-0">
            {/* Interactive print control (hidden on print) */}
            <div className="relative py-20 overflow-hidden print:hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-extrabold mb-4"
                        style={{ color: '#F1F5F9' }}
                    >
                        My <span className="gradient-text">Resume</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg mb-8"
                        style={{ color: '#94A3B8' }}
                    >
                        A summary of my experience, education, and skills.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={handlePrint}
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <FiDownload size={18} /> Print & Save as PDF
                    </motion.button>
                </div>
            </div>

            <Section className="print:m-0 print:p-0">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 print:bg-white text-slate-800 dark:text-slate-200 print:text-black p-8 sm:p-12 shadow-xl print:shadow-none border border-slate-200 dark:border-slate-800 print:border-none rounded-2xl print:rounded-none">
                    {/* Header */}
                    <header className="border-b-2 border-slate-200 dark:border-slate-800 print:border-slate-300 pb-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
                        <div>
                            <h1 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-white print:text-black">
                                {personalInfo.name}
                            </h1>
                            <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400 print:text-blue-700 mb-4">
                                {personalInfo.title}
                            </h2>
                            <p className="text-sm max-w-xl text-slate-600 dark:text-slate-400 print:text-slate-700">
                                {personalInfo.bio}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <FiMail size={16} className="text-slate-400 print:text-slate-500" /> {personalInfo.email}
                            </a>
                            <div className="flex items-center gap-2">
                                <FiMapPin size={16} className="text-slate-400 print:text-slate-500" /> {personalInfo.location}
                            </div>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <FiLinkedin size={16} className="text-slate-400 print:text-slate-500" /> LinkedIn
                            </a>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <FiGithub size={16} className="text-slate-400 print:text-slate-500" /> GitHub
                            </a>
                        </div>
                    </header>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Left Column (Experience & Education) */}
                        <div className="md:col-span-2 space-y-10">
                            {/* Experience */}
                            <section>
                                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white print:text-black flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-600 rounded"></span> Experience
                                </h3>
                                <div className="space-y-8">
                                    {experiences.map((exp, idx) => (
                                        <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 print:border-slate-300">
                                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-slate-950 print:ring-white"></div>
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-2">
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">{exp.role}</h4>
                                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 print:text-blue-700 whitespace-nowrap">{exp.period}</span>
                                            </div>
                                            <h5 className="text-md font-medium text-slate-700 dark:text-slate-300 print:text-slate-800 mb-3">{exp.company}</h5>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 marker:text-slate-400">
                                                {exp.desc.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white print:text-black flex items-center gap-3">
                                    <span className="w-8 h-1 bg-green-500 rounded"></span> Education
                                </h3>
                                <div className="space-y-8">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 print:border-slate-300">
                                            <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-slate-950 print:ring-white"></div>
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-2">
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black">{edu.institution}</h4>
                                                <span className="text-sm font-semibold text-green-600 dark:text-green-500 print:text-green-700 whitespace-nowrap">{edu.period}</span>
                                            </div>
                                            <h5 className="text-md font-medium text-slate-700 dark:text-slate-300 print:text-slate-800 mb-2">{edu.degree}</h5>
                                            {edu.coursework.length > 0 && (
                                                <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                                                    <span className="font-semibold text-slate-900 dark:text-white print:text-black">Coursework:</span> {edu.coursework.join(', ')}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column (Skills & Extra) */}
                        <div className="space-y-10">
                            <section>
                                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white print:text-black flex items-center gap-3">
                                    <span className="w-8 h-1 bg-orange-500 rounded"></span> Skills
                                </h3>
                                <div className="space-y-6">
                                    {skillCategories.map((cat, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2 flex items-center gap-2">
                                                {cat.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cat.skills.map(skill => (
                                                    <span key={skill.name} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 print:bg-slate-100 print:border print:border-slate-300 text-slate-700 dark:text-slate-300 print:text-slate-800 text-xs rounded font-medium">
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
