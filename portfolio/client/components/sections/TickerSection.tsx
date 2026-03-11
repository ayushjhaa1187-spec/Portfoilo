"use client";

export default function TickerSection() {
  const items = [
    "DATA SCIENTIST",
    "✦",
    "MACHINE LEARNING",
    "✦",
    "IIT MADRAS",
    "✦",
    "AI RESEARCH",
    "✦",
    "FULL STACK",
    "✦",
    "HACKATHON BUILDER",
    "✦",
  ];

  const tickerContent = [...items, ...items, ...items, ...items];

  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        background: "#0E0E12",
        borderTop: "1px solid #1E1E24",
        borderBottom: "1px solid #1E1E24",
      }}
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {tickerContent.map((item, i) => (
          <span
            key={i}
            className="font-display text-xl tracking-[4px] mx-4"
            style={{
              color: item === "✦" ? "#8B5CF6" : "#555560",
              fontSize: item === "✦" ? "14px" : "20px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
