

"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 flex-shrink-0 ml-1">
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,6 5,9 10,3" />
    </svg>
  </span>
);

const INDUSTRY_ITEMS = [
  {
    label: "Real Estate, Home Services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "B2B Tech & Manufacturing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Coaching / Consulting",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "Agencies & Services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Healthcare & Wellness",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: "Education / Training",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Automotive, ECommerce B2B",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Local, Dental, HVAC, Legal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Finance / Insurance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    label: "Fitness",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "SaaS",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const GOAL_ITEMS = [
  "Book Demos",
  "Convert Free Trials",
  "Close High-Ticket",
  "Local Lead Capture",
  "Reactivate Cold Leads",
  "Upsell / Cross-Sell",
  "Webinar / Demo Registration",
  "Post-Event Follow-Up",
  "Abandoned Lead Revive",
];

function LibraryCoverageSection() {
  const [ref, visible] = useVisible();
  const [activeTab, setActiveTab] = useState("industries");

  return (
    <div ref={ref} className="px-6 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-7">
        <h1 className="text-black text-4xl md:text-5xl lg:text-[55px] px-6 py-2 rounded-full font-bold text-center font-degular">
          Library Coverage
        </h1>
        <div className="text-[#787878] text-lg md:text-xl lg:text-[18px] font-bold text-center border border-[#787878] w-fit px-4 py-1 rounded-full mt-1">
          (By Industry And Goal)
        </div>
      </div>

      {/* Toggle Pill */}
      <div className="flex justify-center mb-8">
        <div className="relative flex bg-white rounded-full p-[5px] shadow-md w-[280px]">
          {/* Sliding highlight */}
          <span
            className="absolute top-[5px] bottom-[5px] w-[calc(50%-5px)] rounded-full transition-transform duration-300 ease-in-out"
            style={{
              background: "linear-gradient(90deg, #7EE8E8 0%, #3DD6D6 100%)",
              transform: activeTab === "goals" ? "translateX(calc(100%))" : "translateX(0)",
            }}
          />
          <button
            onClick={() => setActiveTab("industries")}
            className={`relative cursor-pointer z-10 flex-1 py-2.5 text-[15px] font-bold rounded-full transition-colors duration-200 ${
              activeTab === "industries" ? "text-black" : "text-gray-400"
            }`}
          >
            Industries
          </button>
          <button
            onClick={() => setActiveTab("goals")}
            className={`relative cursor-pointer z-10 flex-1 py-2.5 text-[15px] font-bold rounded-full transition-colors duration-200 ${
              activeTab === "goals" ? "text-black" : "text-gray-400"
            }`}
          >
            Goals
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {activeTab === "industries"
          ? INDUSTRY_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-full px-4 py-2 text-[14px] font-medium text-gray-800 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.45s ease ${0.05 * i}s, transform 0.45s ease ${0.05 * i}s`,
                }}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {item.label}
              </div>
            ))
          : GOAL_ITEMS.map((goal, i) => (
              <div
                key={goal}
                className="inline-flex items-center gap-2 bg-white border border-[#e0e0e0] rounded-full px-4 py-2 text-[14px] font-medium text-gray-800 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.45s ease ${0.05 * i}s, transform 0.45s ease ${0.05 * i}s`,
                }}
              >
                {goal}
                <CheckIcon />
              </div>
            ))}
      </div>
    </div>
  );
}

export default function LibraryCoverage() {
  return (
    <section
      className="w-full lg:px-50 pb-10 sm:py-10"
      style={{ background: "#E1F1F2" }}
    >
      <LibraryCoverageSection />
    </section>
  );
}