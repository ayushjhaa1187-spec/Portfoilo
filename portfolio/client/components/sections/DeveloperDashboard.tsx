"use client";

import { motion } from "framer-motion";
import { Github, Star, GitPullRequest, Code2, Globe, GitBranch } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { githubStats } from "../../data/portfolio";
import { fadeUp, staggerContainer, hoverScale } from "../../lib/animations";

export default function DeveloperDashboard() {
  const statCards = [
    { label: "Contributions", value: githubStats.contributions, icon: GitPullRequest, color: "#D4AF37" },
    { label: "Repositories", value: githubStats.repositories, icon: GitBranch, color: "#06B6D4" },
    { label: "Stars Earned", value: githubStats.stars, icon: Star, color: "#D4AF37" },
    { label: "Pull Requests", value: githubStats.pullRequests, icon: GitPullRequest, color: "#06B6D4" },
  ];

  return (
    <section id="stats" className="bg-[#0A0A0B] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeUp}>
          <div className="mb-12 md:mb-20">
            <span className="section-label text-[#555560] font-mono text-[10px] tracking-[8px] uppercase block mb-4">
              // TELEMETRY_HUB
            </span>
            <h2 className="font-display text-5xl lg:text-7xl text-[#F1F0FB] tracking-tighter leading-none mb-4">
              DEVELOPER <span className="text-[#D4AF37]">DASHBOARD</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statCards.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={hoverScale.whileHover}
                whileTap={hoverScale.whileTap}
                className="bg-[#111113] border border-[#1E1E24] p-8 rounded-3xl flex items-center gap-8 group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12"
                  style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
                >
                  <stat.icon size={28} />
                </div>
                <div>
                  <span className="block font-display text-4xl text-[#F1F0FB] mb-1">{stat.value}</span>
                  <span className="block font-mono text-[10px] tracking-[3px] text-[#555560] uppercase">{stat.label}</span>
                </div>
              </motion.div>
            ))}

            <motion.div 
              variants={fadeUp}
              className="bg-[#111113] border border-[#1E1E24] p-8 rounded-3xl md:col-span-2 flex flex-col md:flex-row items-center gap-8 group overflow-hidden relative"
            >
              <div className="relative z-10 flex flex-col gap-6 w-full">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <Github className="text-[#F1F0FB]/60" size={24} />
                     <h4 className="font-mono text-xs tracking-widest text-[#F1F0FB] uppercase">Language Ecosystem</h4>
                   </div>
                   <Globe className="text-[#06B6D4] animate-spin-slow" size={20} />
                </div>
                <div className="flex flex-wrap gap-4">
                  {githubStats.mostUsedLanguages.map((lang, i) => (
                    <div key={i} className="flex flex-col gap-2 flex-1 min-w-[120px]">
                      <div className="flex justify-between font-mono text-[9px] text-[#555560] uppercase tracking-widest">
                        <span>{lang}</span>
                        <span>{i === 0 ? "85%" : i === 1 ? "60%" : "45%"}</span>
                      </div>
                      <div className="h-1 bg-[#1E1E24] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: i === 0 ? "85%" : i === 1 ? "60%" : "45%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                          className={`h-full ${i === 0 ? "bg-[#D4AF37]" : "bg-[#06B6D4]"} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Abstract code visual */}
              <div className="absolute right-[-20px] top-[-20px] opacity-[0.05] pointer-events-none select-none">
                <pre className="font-mono text-[10px] text-[#F1F0FB]">
                  {`
                    function optimize(data) {
                      return data.map(node => {
                        const score = compute(node);
                        return { ...node, score };
                      });
                    }
                    
                    const system = new Engine({
                      entropy: 0.04,
                      vision: true,
                      impact: "global"
                    });
                  `}
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Contributions Graph Mockup */}
          <motion.div 
             variants={fadeUp}
             className="bg-[#111113] border border-[#1E1E24] p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h4 className="font-display text-2xl text-[#F1F0FB] mb-2">Contribution DNA</h4>
              <p className="text-[#F1F0FB]/40 text-sm font-light leading-relaxed mb-10">
                Visualizing consistency. Each cell represents a commitment to high-performance engineering and iterative building.
              </p>
              
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 144 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.005 }}
                    className={`aspect-square rounded-[2px] ${
                      i % 13 === 0 ? "bg-[#D4AF37]" : 
                      i % 7 === 0 ? "bg-[#06B6D4]/60" : 
                      i % 5 === 0 ? "bg-[#F1F0FB]/20" : 
                      "bg-[#1e1e24]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#1E1E24] flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[#555560] uppercase tracking-widest">Efficiency</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`w-3 h-1 rounded-full ${i < 4 ? "bg-[#D4AF37]" : "bg-[#1E1E24]"}`} />
                    ))}
                  </div>
               </div>
               <Code2 className="text-[#555560]" size={16} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
