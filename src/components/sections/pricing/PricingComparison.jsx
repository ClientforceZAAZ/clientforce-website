"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
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

const COLUMNS = ["Differentiator", "Starter", "Professional", "Unlimited", "Agency"];

const ROWS = [
  {
    feature: "AI Agents included",
    starter: "1",
    professional: "3",
    unlimited: "Unlimited",
    agency: "Unlimited + client workspaces",
  },
  {
    feature: "Multichannel (Email/WA/Voice/LinkedIn)",
    starter: "Email Only",
    professional: "Email + WA",
    unlimited: "All channels",
    agency: "All channels + team seats",
  },
  {
    feature: "Finder v2 credits / mo",
    starter: "500",
    professional: "2,500",
    unlimited: "10,000",
    agency: "25,000",
  },
  {
    feature: "Dynamic proposals / mo",
    starter: "200",
    professional: "1,000",
    unlimited: "Unlimited",
    agency: "Unlimited",
  },
  {
    feature: "Support",
    starter: "Standard",
    professional: "Priority",
    unlimited: "Unlimited",
    agency: "SLA",
  },
];

export default function PricingComparison() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-8 px-6 lg:px-20">
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
        className="bg-white border border-gray-200 rounded-3xl overflow-hidden"
      >
        {/* Title */}
        <div className="px-8 py-5 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-black font-degular">
            What's Different Across Plans (Quick Glance)
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">

            {/* Header */}
            <thead>
              <tr className="border-b border-gray-100">
                {COLUMNS.map((col, i) => (
                  <th
                    key={col}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(-8px)",
                      transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
                    }}
                    className={`px-6 py-4 text-left text-base font-bold text-black font-pjs whitespace-nowrap ${i === 0 ? "w-[28%]" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                  }}
                  className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-5 text-sm text-gray-500">{row.feature}</td>
                  <td className="px-6 py-5 text-sm text-gray-700">{row.starter}</td>
                  <td className="px-6 py-5 text-sm text-gray-700">{row.professional}</td>
                  <td className="px-6 py-5 text-sm text-gray-700">{row.unlimited}</td>
                  <td className="px-6 py-5 text-sm text-gray-700">{row.agency}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}