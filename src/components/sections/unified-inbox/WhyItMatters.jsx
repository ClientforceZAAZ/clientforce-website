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

const BENEFITS = [
  {
    icon: (
      <Image src="/images/unified-inbox/icons/zero_lead.svg" width={40} height={40} />
    ),
    title: "Zero lead leakage",
    description: "Nothing falls through the cracks—every touchpoint is tracked and actionable.",
    delay: "0.1s",
  },
  {
    icon: (
      <Image src="/images/unified-inbox/icons/faster_follow.svg" width={40} height={40} />
    ),
    title: "Faster follow-ups:",
    description: " AI highlights who to contact now based on intent (opens, clicks, time on proposal, missed calls).",
    delay: "0.2s",
  },
  {
    icon: (
      <Image src="/images/unified-inbox/icons/closer_collab.svg" width={40} height={40} />
    ),
    title: "Closer collaboration:",
    description: "Assign owners, @mention teammates, and hand off context without switching tools.",
    delay: "0.3s",
  },
  {
    icon: (
      <Image src="/images/unified-inbox/icons/more_closes.svg" width={40} height={40} />
    ),
    title: "More closes, less chaos:",
    description: " One screen to respond, schedule, send proposals, or trigger a voice follow-up.",
    delay: "0.4s",
  },
];

function BenefitCard({ icon, title, description, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px)"
          : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? "0 12px 36px rgba(8,165,65,0.18)"
          : "0 2px 12px rgba(0,0,0,0.08)",
      }}
      className="flex-1 bg-white border border-[#D7D7D7] rounded-2xl p-6 flex flex-col gap-10 cursor-default"
    >
      {/* Icon */}
      <div
        style={{
          transition: "background 0.3s ease",
        }}
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <div
        >
          {icon}
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-base text-black leading-relaxed">
          <span className="font-bold">{title} </span>
          <span className="text-black block">{description}</span>
        </p>
      </div>
    </div>
  );
}

export default function WhyItMatters() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="pb-16 px-6 lg:px-16 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl lg:text-[45px] font-bold text-black font-degular ">
          Why It Matters (Benefits)
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {BENEFITS.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            {...benefit}
            visible={visible}
          />
        ))}
      </div>

    </section>
  );
}