"use client";

import SectionReveal from "../SectionReveal";

const services = [
  {
    num: "01",
    icon: "🤖",
    title: "AI & ML Engineering",
    desc: "Building end-to-end machine learning pipelines, autonomous AI agents, and intelligent systems. From data preprocessing to production deployment.",
    tags: ["Python", "PyTorch", "Scikit-learn", "LLMs", "AI Agents"],
  },
  {
    num: "02",
    icon: "📊",
    title: "Data Analysis & Visualization",
    desc: "Transforming raw datasets into strategic business insights. Interactive dashboards, statistical analysis, and visual storytelling with data.",
    tags: ["Pandas", "NumPy", "Streamlit", "Power BI", "Matplotlib"],
  },
  {
    num: "03",
    icon: "⚡",
    title: "Full Stack Development",
    desc: "Architecting scalable backend APIs, databases, and data-driven web applications. From schema design to production deployment on Vercel.",
    tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 lg:px-12"
      style={{ background: "#060608" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <span className="section-label">// 002 — SERVICES</span>
          <h2
            className="font-display section-title-large mb-16"
            style={{ fontSize: "72px", lineHeight: 1, color: "#F1F0FB" }}
          >
            What I{" "}
            <span className="text-outline">DO</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {services.map((service, i) => (
            <SectionReveal key={service.num} delay={i * 0.1}>
              <div
                className="card-hover-border relative p-8 lg:p-10 group transition-all duration-300 h-full"
                style={{
                  background: "#0E0E12",
                  border: "1px solid #1E1E24",
                }}
              >
                {/* Ghost Number */}
                <span
                  className="ghost-text absolute top-4 right-4"
                  style={{ fontSize: "80px", lineHeight: 1 }}
                >
                  {service.num}
                </span>

                {/* Icon */}
                <div className="text-3xl mb-6">{service.icon}</div>

                {/* Title */}
                <h3
                  className="font-display text-2xl tracking-wider mb-4"
                  style={{ color: "#F1F0FB" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#888" }}
                >
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
