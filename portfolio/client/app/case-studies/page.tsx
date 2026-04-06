import { caseStudies } from '@/data/projects';
import Link from 'next/link';
import { Terminal, Database, Brain, ArrowRight } from 'lucide-react';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48 bg-black">
      <div className="mb-24">
         <h1 className="text-6xl md:text-9xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tight mb-8 leading-none">TECHNICAL_REPORTS</h1>
         <p className="text-2xl text-slate-400 font-light leading-relaxed tracking-wide max-w-3xl">
            Deep forensic analysis and performance benchmarking of flagship AI systems.
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.projectSlug}`}>
            <div className="glass-panel p-12 h-full hover:bg-white/[0.05] transition-all border border-white/5 rounded-[3rem] group">
              <div className="flex items-center gap-2 mb-6">
                 <span className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Brain size={20} />
                 </span>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Research_Unit_Verified</p>
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-tight group-hover:text-amber-400 transition-colors">{study.title}</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-10 line-clamp-3 italic opacity-60">
                 "{study.problem}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                 <span className="text-[10px] font-black text-amber-400/50 uppercase tracking-widest">Protocol_v1.02</span>
                 <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    EXTRACT_REPORT <ArrowRight size={14} className="text-amber-400" />
                 </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
