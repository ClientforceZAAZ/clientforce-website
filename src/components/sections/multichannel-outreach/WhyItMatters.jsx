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
      <Image src="/images/multichannel-outreach/icons/more_response.svg" width={30} height={30} />
    ),
    title: "More responses, faster:",
    description: "Hit the right channel at the right moment with goal-aware timing.",
    delay: "0.1s",
  },
  {
    icon: (
      <Image src="/images/multichannel-outreach/icons/feels_at_scale.svg" width={30} height={30} />
    ),
    title: "Feels 1:1 at scale:",
    description: "Dynamic personalization and angles pulled from your offer docs.",
    delay: "0.2s",
  },
  {
    icon: (
      <Image src="/images/multichannel-outreach/icons/zero_busy_work.svg" width={30} height={30} />
    ),
    title: "Zero busywork:",
    description: "One sequence controls all channels—no tab-hopping, no duplicate tools.",
    delay: "0.3s",
  },
  {
    icon: (
      <Image src="/images/multichannel-outreach/icons/always_safe.svg" width={30} height={30} />
    ),
    title: "Always safe, always on:",
    description: "Template approvals, domain health, and number reputation handled.",
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
      className="flex-1 bg-[#011D0B] rounded-2xl p-6 flex flex-col gap-10 cursor-default"
    >
      {/* Icon */}
      <div
        style={{
          background: hovered ? "#08A541" : "#1a3a1a",
          transition: "background 0.3s ease",
        }}
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <div
          style={{
            filter: hovered ? "brightness(0) invert(1)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          {icon}
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-base text-white leading-relaxed">
          <span className="font-bold">{title} </span>
          <span className="text-[#FFFFFF99] block">{description}</span>
        </p>
      </div>
    </div>
  );
}

export default function WhyItMatters() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-16 px-6 lg:px-16 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-black font-degular ">
          Why It Matters
        </h2>
        <p className="text-3xl lg:text-5xl font-bold text-[#787878] mt-1 font-degular">
          (Benefits At A Glance)
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4">
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