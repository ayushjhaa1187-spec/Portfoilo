'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, Database, Terminal, ShieldCheck, Zap, ArrowUpRight, BarChart } from 'lucide-react';

const researchProjects = [
  {
    id: 1,
    title: "Eco-Vision: Satellite Deforestation Detection",
    abstract: "A computer vision model achieving 92% accuracy in detecting deforestation markers using multi-spectral satellite imagery and Deep Learning.",
    category: "Computer Vision",
    status: "Published / Open Source",
    metrics: { accuracy: "92%", latency: "< 500ms" },
    tech: ["PyTorch", "GDAL", "TensorFlow", "FastAPI"]
  },
  {
    id: 2,
    title: "LLM_PEXPERIMENT: Prompt Optimization",
    abstract: "Benchmarking prompt engineering across 12+ large language models to determine optimal token efficiency and reasoning alignment.",
    category: "LLM Research",
    status: "In Progress",
    metrics: { models: "12+", tokens: "1M+" },
    tech: ["Weights & Biases", "LangChain", "Claude API", "Python"]
  },
  {
    id: 3,
    title: "Synergy Karma: Decentralized Reputation",
    abstract: "Researching decentralized karma systems for inter-campus knowledge networks using graph theory and verified academic ledger models.",
    category: "Blockchain / Networks",
    status: "Prototype",
    metrics: { nodes: "100+", karma: "Verified" },
    tech: ["Solidity", "Next.js", "PostgreSQL", "Graph Theory"]
  }
];

const ResearchPage = () => {
    return (
        <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 text-center"
            >
                <div className="inline-flex items-center gap-4 px-6 py-2 bg-amber-400 text-black text-xs font-black tracking-[0.4em] uppercase rounded-full mb-8">
                    <Microscope size={16} /> LABORATORY_RESEARCH_v1.0
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter uppercase leading-none">
                    ENGINEERING <span className="text-amber-400 font-serif italic lowercase">Hypothesis</span>
                </h1>
                <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                    Exploring the frontiers of autonomous intelligence, satellite computer vision, and decentralized knowledge ecosystems.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
                {researchProjects.map((project, idx) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel p-16 group hover:border-amber-400/20 transition-all border-white/5 relative overflow-hidden h-full flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                            <Target size={300} />
                        </div>

                        <div className="flex items-center justify-between mb-12">
                            <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">{project.category}</span>
                            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black tracking-widest uppercase">
                                <ShieldCheck size={14} /> {project.status}
                            </div>
                        </div>

                        <h3 className="text-4xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tight mb-8 leading-none">
                            {project.title}
                        </h3>

                        <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 flex-grow">
                            {project.abstract}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-white/5">
                            {Object.entries(project.metrics).map(([key, val]) => (
                                <div key={key}>
                                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">{key}</p>
                                    <p className="text-2xl font-black text-white">{val}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-12">
                            {project.tech.map(t => (
                                <span key={t} className="px-5 py-2 bg-white/5 rounded-full text-[9px] font-black tracking-widest uppercase text-slate-500 border border-white/5 group-hover:text-amber-400 transition-all">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <button className="self-start flex items-center gap-4 text-[10px] font-black tracking-[0.5em] text-white/40 hover:text-amber-400 transition-all uppercase">
                            View_Abstract_v1.0.4 <ArrowUpRight size={14} />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-40 text-center py-20 border-t border-white/5 group">
                <BarChart size={40} className="mx-auto text-slate-800 mb-8 group-hover:text-amber-400 transition-colors" />
                <p className="text-slate-600 text-xs font-black tracking-[0.4em] uppercase">Open Source Repository Available for Review on Request</p>
                <div className="mt-12 flex justify-center gap-1">
                    {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-1 w-6 bg-white/5 rounded-full hover:bg-amber-400/50 transition-all" />)}
                </div>
            </div>
        </div>
    );
};

export default ResearchPage;
