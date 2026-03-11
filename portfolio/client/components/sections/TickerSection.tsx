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
    <div className="bg-[#0E0E12] border-y border-[#1E1E24] overflow-hidden py-6 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tickerText, ...tickerText, ...tickerText].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-display text-2xl tracking-[4px] text-[#555560]">
              {item}
            </span>
            <span className="mx-8 text-[#8B5CF6] text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
