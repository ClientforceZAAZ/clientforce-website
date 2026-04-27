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

const ITEMS = [
  {
    title: "Clarity:",
    description: "Goal-aware dashboards for demos, trial conversions, high-ticket closes.",
    delay: "0.1s",
    icon: (
        <div className="w-14 h-14 rounded-[50%] border border-gray-600 bg-[#FFFFFF29] flex items-center justify-center">
             <Image src="/images/analytics/icons/ai-technology-spark--lightbulb.svg" width={25} height={25} />
        </div>
       
    ),
  },
  {
    title: "Attribution:",
    description: "See revenue and meetings attributed to specific steps, channels, and playbooks.",
    delay: "0.25s",
    icon: (
      <div className="w-14 h-14 rounded-[50%] border border-gray-600 bg-[#FFFFFF29] flex items-center justify-center">
             <Image src="/images/analytics/icons/dollar-increase--dollar.svg" width={25} height={25} />
        </div>
    ),
  },
  {
    title: "Actionability:",
    description: "Auto-promote winning variants, pause underperformers, fix deliverability in seconds.",
    delay: "0.4s",
    icon: (
      <div className="w-14 h-14 rounded-[50%] border border-gray-600 bg-[#FFFFFF29] flex items-center justify-center">
             <Image src="/images/analytics/icons/light-bolt.svg" width={25} height={25} />
        </div>
    ),
  },
];

function GlanceCard({ icon, title, description, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.10)"
          : "0 2px 16px rgba(0,0,0,0.05)",
      }}
      className="flex-1 bg-[#011D0B] rounded-2xl border border-[#D7D7D7] p-6 flex flex-col items-center gap-6 cursor-default"
    >
      {/* Icon */}
      <div
        style={{
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
        className=""
      >
        {icon}
      </div>

      {/* Text */}
      <p className="text-base leading-relaxed text-center text-white">
        <span className="font-bold text-white">{title} </span>
        {description}
      </p>
    </div>
  );
}

export default function WhatYouGet() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="pt-8 md:pt-16 px-6 lg:px-50 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold font-degular text-gray-900">
          What You Get{" "}
          <span className="font-normal">(At A Glance)</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <GlanceCard key={item.title} {...item} visible={visible} />
        ))}
      </div>

    </section>
  );
}