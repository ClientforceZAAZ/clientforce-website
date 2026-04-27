"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.5) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const JOURNEY = [
  {
    year: "2023",
    title: "Original CRM & Automation suite",
    description: "Launched foundational tools for B2B sales ops.",
    delay: "0.1s",
  },
  {
    year: "2024",
    title: "Dynamic prospects & individualized touches",
    description: "Introduced development plans & individualized touches.",
    delay: "0.2s",
  },
  {
    year: "2025",
    title: "AI Sales Agent platform",
    description: "End-to-end agents that prospect, engage, call, and close.",
    delay: "0.3s",
  },
];

function JourneyCard({ year, title, description, delay, isLast }) {
  const [ref, visible] = useVisible(0.6);

  return (
    <div ref={ref} className="relative flex gap-8 pb-12 last:pb-0">
      {/* Left Column: Timeline Line and Nodes */}
      <div className="relative flex flex-col items-center">
        {/* Animation Line */}
        {!isLast && (
          <div className="absolute top-8 w-[1px] h-full bg-gray-400" />
        )}
        
        {/* Timeline Node: Black Outer, 30% White Inner */}
        <div className="relative w-8 h-8 rounded-full bg-black z-10 flex items-center justify-center border border-white/10">
          <div className="w-3 h-3 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Right Column: Year and Content Card */}
      <div className="flex-1">
        {/* Year Tag - Now Outside the Card */}
        <div className="mb-3">
          <span className="bg-[#D0F56B] text-black text-sm font-bold px-4 py-2 rounded-md">
            {year}
          </span>
        </div>

        {/* Animated Content Card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(28px)",
            transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}, border 0.5s ease`,
            border: visible ? "1px solid #0AD855" : "1px solid #E5E7EB",
            backgroundColor: visible ? "#F2FFF5" : "#F9FAFB",
          }}
          className="rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold font-degular text-black tracking-tight mb-1">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurJourney() {
  return (
    <section className="pb-16 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black font-degular tracking-tight mb-8">
          Our journey
        </h2>

        <div className="flex flex-col">
          {JOURNEY.map((item, index) => (
            <JourneyCard
              key={item.year}
              {...item}
              isLast={index === JOURNEY.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}