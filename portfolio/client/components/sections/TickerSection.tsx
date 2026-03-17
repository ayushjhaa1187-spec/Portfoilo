"use client";

const tickerText = [
  "DATA SCIENTIST",
  "IIT MADRAS",
  "MACHINE LEARNING",
  "JUNIOR DATA ANALYST",
  "AI RESEARCHER",
  "HACKATHON FINALIST",
  "IBM CERTIFIED",
  "FULL STACK",
];

export default function TickerSection() {
  return (
    <div className="bg-[#0E0E12] border-y border-[#1E1E24] overflow-hidden py-16 lg:py-28 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tickerText, ...tickerText, ...tickerText].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-display text-3xl lg:text-4xl tracking-[6px] text-[#F1F0FB]/80">
              {item}
            </span>
            <span className="mx-8 text-[#8B5CF6] text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
