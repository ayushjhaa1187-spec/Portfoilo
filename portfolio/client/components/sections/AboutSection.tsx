"use client";

import SectionReveal from "../SectionReveal";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

const infoPills = [
  { icon: MapPin, label: "Ghaziabad, Uttar Pradesh" },
  { icon: GraduationCap, label: "IIT Madras, BS Data Science (2025–2029)" },
  { icon: Briefcase, label: "Open to AI/ML roles, internships, collaborations" },
  { icon: Mail, label: "ayushjhaa1187@gmail.com" },
];

const certifications = [
  "IBM Certified — Python for Data Science",
  "IBM Certified — Data Visualization",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-12"
      style={{ background: "#0E0E12" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <span className="section-label">// 006 — ABOUT</span>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-8">
          {/* Left Column — Big Statement */}
          <SectionReveal>
            <h2
              className="font-display section-title-large"
              style={{ fontSize: "72px", lineHeight: 1, color: "#F1F0FB" }}
            >
              I BUILD
              <br />
              THINGS
              <br />
              WITH{" "}
              <span style={{ color: "#8B5CF6" }}>DATA</span>
            </h2>
          </SectionReveal>

          {/* Right Column — Details */}
          <SectionReveal delay={0.15}>
            <div>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#999" }}
              >
                I&apos;m Ayush — a Data Scientist and IIT Madras scholar who
                spent time in industry as an analyst before going back to study
                at India&apos;s best tech institution. I build AI systems, data
                pipelines, and full-stack platforms that solve real problems.
              </p>

              {/* Info Grid */}
              <div className="space-y-4 mb-8">
                {infoPills.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <Icon
                        size={16}
                        style={{ color: "#8B5CF6", flexShrink: 0 }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "#ccc" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="font-mono text-[10px] tracking-wider px-4 py-2"
                    style={{
                      color: "#F59E0B",
                      border: "1px solid rgba(245,158,11,0.2)",
                      background: "rgba(245,158,11,0.05)",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
