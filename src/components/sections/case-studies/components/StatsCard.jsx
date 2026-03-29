"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const STATS = [
  { label: "Total Revenue Influenced", value: "$7.8M", bg: "#FDECFF" },
  { label: "Average Reply Lift vs Baseline", value: "$7.8M", bg: "#EDFFED" },
  { label: "Average Time-to-First-Touch", value: "$7.8M", bg: "#FDFFEC" },
];

export default function StatsCard() {
  const [ref, visible] = useVisible();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
      className="bg-white border border-gray-300 rounded-2xl p-4 flex flex-col gap-3 w-full "
    >
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            background: stat.bg,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(16px)",
            transition: `opacity 0.5s ease ${0.15 + i * 0.12}s, transform 0.5s ease ${0.15 + i * 0.12}s`,
          }}
          className="flex items-center justify-between border border-gray-300 px-4 lg:px-8 py-5 lg:py-10 rounded-2xl"
        >
          <span className="text-sm sm:text-lg font-medium text-[#00000099]">{stat.label}</span>
          <span className=" text-xl sm:text-3xl font-extrabold text-[#000015] ml-4 whitespace-nowrap">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}