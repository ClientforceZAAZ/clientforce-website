"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const VALUES = [
  {
    icon: (<Image src="/images/company/icons/dollar-increase.svg" width={25} height={25} />),
    title: "Outcomes over output",
    description: "We ship real results: revenue, not vanity features.",
    delay: "0.1s",
  },
  {
    icon: (<Image src="/images/company/icons/star-1--reward.svg" width={25} height={25} />),
    title: "Clarity beats cleverness",
    description: "Simple, clear, predictable results. Honest communication.",
    delay: "0.2s",
  },
  {
    icon: (<Image src="/images/company/icons/ai-generate.svg" width={25} height={25} />),
    title: "Agents, not automations",
    description: "Real sales experiences driven by real results, not isolated tasks.",
    delay: "0.3s",
  },
  {
    icon: (<Image src="/images/company/icons/shield-2--shield.svg" width={25} height={25} />),
    title: "Privacy & control",
    description: "Explicit user control. Strong defaults, explicit consent.",
    delay: "0.4s",
  },
  {
    icon: (<Image src="/images/company/icons/help-chat.svg" width={25} height={25} />),
    title: "Default to helpful",
    description: "Design, development, analytics, and support designed to make you win.",
    delay: "0.5s",
  },
  {
    icon: (<Image src="/images/company/icons/trophy--reward.svg" width={25} height={25} />),
    title: "Compounding wins",
    description: "Small steady improvements create outsized outcomes.",
    delay: "0.6s",
  },
];

function ValueCard({ icon, title, description, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 36px rgba(58,125,71,0.15)" : "none",
      }}
      className="min-w-[280px] md:min-w-[320px] bg-[#011D0B] rounded-2xl p-8 flex flex-col gap-10 cursor-default border border-white/5"
    >
      {/* Icon Container */}
      <div
        style={{
          background: hovered ? "#3a7d47" : "#2A4132",
          transition: "all 0.3s ease",
        }}
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#4ade80]"
      >
        <div style={{ color: hovered ? "#fff" : "inherit" }}>
          {icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-[#FFFFFF99] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CompanyValues() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className=" pb-16 px-6 lg:px-16 bg-[#F8F9FA] overflow-hidden">
      <div className="">
        
        {/* Heading */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-black font-degular tracking-tight">
            Values We Work By
          </h2>
        </div>

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {VALUES.map((val) => (
            <div key={val.title} className="snap-start">
              <ValueCard
                {...val}
                visible={visible}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}