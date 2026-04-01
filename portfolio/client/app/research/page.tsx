'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Globe, Rocket, Terminal, Target } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          RESEARCH <span className="text-amber-400 font-serif italic lowercase">Interests</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Exploring the boundaries of agentic reasoning, decentralized intelligence, and large-scale data modeling.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-32">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-12 hover:border-amber-400/50 transition-all group">
           <Brain size={48} className="text-amber-400 mb-8 animate-pulse" />
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Autonomous_Agent_Reasoning</h3>
           <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">
              Investigating LangGraph-based multi-agent orchestration for complex financial modeling and predictive analytics. 
              Focusing on minimizing hallucination through hierarchical reasoning traces and external tool validation.
           </p>
           <div className="flex flex-wrap gap-2 opacity-50">
              {['LangGraph', 'LLM Agents', 'Heuristic Reasoning', 'Chain-of-Thought'].map(tag => (
                <span key={tag} className="text-[10px] font-black text-slate-500 tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/5 rounded-full">{tag}</span>
              ))}
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-12 hover:border-amber-400/50 transition-all group">
           <Database size={48} className="text-amber-400 mb-8 animate-bounce delay-500" />
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Decentralized_Knowledge_Sharing</h3>
           <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">
              Developing p2p reputation protocols for inter-campus knowledge networks. Researching verifiable reputation scoring (as seen in Nexus AI) to ensure high-fidelity peer-to-peer data integrity.
           </p>
           <div className="flex flex-wrap gap-2 opacity-50">
              {['P2P Protocols', 'Decentralized Rep', 'RAG Frameworks', 'Knowledge Management'].map(tag => (
                <span key={tag} className="text-[10px] font-black text-slate-500 tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/5 rounded-full">{tag}</span>
              ))}
           </div>
        </motion.div>
      </div>

      <div className="mb-32">
         <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12">IIT_MADRAS <span className="text-amber-400 font-serif italic lowercase">Coursework</span></h2>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Statistical Thinking', 'Modern App Dev v2', 'Machine Learning Foundations', 'Database Management'].map((course, idx) => (
              <motion.div 
                key={course}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 hover:bg-white/[0.04] transition-all border-white/5 group"
              >
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:rotate-12 transition-transform">
                    <Target size={24} />
                 </div>
                 <p className="text-[10px] font-black text-slate-600 tracking-[0.3em] uppercase mb-2">Core_Protocol</p>
                 <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors uppercase tracking-tight">{course}</h4>
                 <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mt-6 opacity-40 italic">IIT Madras Status: Active</p>
              </motion.div>
            ))}
         </div>
      </div>

      <div className="p-20 glass-panel rounded-[4rem] text-center border border-white/10 relative overflow-hidden bg-gradient-to-br from-transparent to-amber-400/5">
         <div className="flex justify-center gap-12 mb-10 text-slate-600">
            <Cpu size={40} />
            <Globe size={40} />
            <Rocket size={40} />
            <Terminal size={40} />
         </div>
         <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">RESEARCH_MISSION_2026</h3>
         <p className="text-xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed relative z-10 italic">
            "To converge academic statistical foundations with industrial AI implementations, pioneering robust, self-optimizing technical infrastructures."
         </p>
      </div>
    </div>
  );
};

export default ResearchPage;
