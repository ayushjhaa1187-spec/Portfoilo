"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="py-6 px-6 lg:px-12"
      style={{
        background: "#060608",
        borderTop: "1px solid #1E1E24",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span
          className="font-display text-2xl tracking-wider"
          style={{ color: "#8B5CF6" }}
        >
          AKJ
        </span>

        {/* Copyright */}
        <p
          className="font-mono text-[11px] tracking-wider text-center"
          style={{ color: "#555560" }}
        >
          © 2026 Ayush Kumar Jha. Built with Next.js.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {[
            {
              icon: Github,
              href: "https://github.com/ayushjhaa1187-spec",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:ayushjhaa1187@gmail.com",
              label: "Email",
            },
          ].map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="font-mono text-[11px] tracking-wider flex items-center gap-1.5 transition-colors duration-200 hover:text-[#8B5CF6]"
                style={{ color: "#555560" }}
                aria-label={link.label}
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
