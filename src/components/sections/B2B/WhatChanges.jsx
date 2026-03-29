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
    title: "",
    description: (
        <>More <span className="font-bold">first meetings</span> with <br /> the right roles across target accounts</>
    ),
    delay: "0.1s",
    icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#D2F7FD] flex items-center justify-center">
             <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
        </div>
       
    ),
  },
  {
    title: "",
    description: (
        <>Higher <span className="font-bold">opportunity velocity</span> from consistent, multi-threaded touch patterns</>
    ),
    delay: "0.25s",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-[#D2F7FD] flex items-center justify-center">
        <Image src="/images/analytics/icons/attribution.svg" width={70} height={70} />
      </div>
    ),
  },
  {
    title: "",
    description: (
        <><span className="font-bold">Cleaner governance: </span>suppression lists, audit trails, and compliant messaging</>
    ),
    delay: "0.4s",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-[#D2F7FD] flex items-center justify-center">
         <Image src="/images/analytics/icons/actionability.svg" width={70} height={70} />
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
      className="flex-1 bg-white rounded-2xl border border-[#D7D7D7] p-6 flex flex-col items-center gap-6 cursor-default"
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
      <p className="text-base leading-relaxed text-center">
        <span className="font-bold text-black">{title} </span>
        {description}
      </p>
    </div>
  );
}

export default function WhatYouGet() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-8 md:py-16 px-6 lg:px-30 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-degular text-gray-900">
          What Changes
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {ITEMS.map((item) => (
          <GlanceCard key={item.title} {...item} visible={visible} />
        ))}
      </div>

    </section>
  );
}