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

const CARDS = [
  {
    id: "pipeline",
    icon: (
      <img src="/images/lead-acquisition-suite/icons/hand-free.svg" alt="Hand free Pipeline Icon" className=" w-11 h-11" />
    ),
    title: "Hands-free pipeline:",
    description: "continuous inflow of qualified prospects.",
    position: "bottom-left",
    delay: "0.15s",
    enterFrom: "translateX(-40px)",
  },
  {
    id: "control",
    icon: (
      <img src="/images/lead-acquisition-suite/icons/total-control.svg" alt="Total Control Icon" className=" w-11 h-11" />
    ),
    title: "Total control:",
    description: "preview before ingest or run fully automated—your call.",
    position: "bottom-left-2",
    delay: "0.3s",
    enterFrom: "translateX(-40px)",
  },
  {
    id: "conversion",
    icon: (
      <img src="/images/lead-acquisition-suite/icons/higher-conversion.svg" alt="Higher Conversion Icon" className=" w-11 h-11" />
    ),
    title: "Higher conversion:",
    description: "warm, instant routing to goal-driven AI campaigns.",
    position: "bottom-right",
    delay: "0.45s",
    enterFrom: "translateX(40px)",
  },
  {
    id: "sending",
    icon: (
      <img src="/images/lead-acquisition-suite/icons/cleaner-sending.svg" alt="Cleaner Sending Icon" className=" w-11 h-11" />
    ),
    title: "Cleaner sending:",
    description: "built-in verification + suppression protects deliverability.",
    position: "bottom-right-2",
    delay: "0.6s",
    enterFrom: "translateX(40px)",
  },
];

function WhyItWinsCard({ card, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(30px)`,
        transition: `opacity 0.6s ease ${card.delay}, transform 0.6s ease ${card.delay}, box-shadow 0.3s ease, scale 0.3s ease`,
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.25)"
          : "0 4px 20px rgba(0,0,0,0.15)",
        scale: hovered ? "1.03" : "1",
      }}
      className="bg-white/95 backdrop-blur-sm border border-[#0AD855] rounded-2xl px-4 py-3 flex items-center gap-3 cursor-default max-w-[296px] max-h-[78px]"
    >
      {/* Icon */}
      <div
        style={{
          transition: "background 0.3s ease",
        }}
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <div style={{ transition: "filter 0.3s ease" }}>
          {card.icon}
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-bold text-black">{card.title} </p>
        <p className="text-sm text-black leading-4">{card.description}</p>
      </div>
    </div>
  );
}

export default function WhyItWins() {
  const [ref, visible] = useVisible(0.15);

  return (
    <div
      ref={ref}
      className="relative rounded-3xl overflow-hidden mx-8 md:mx-20 mt-6 mb-20"
      style={{ minHeight: "680px" }}
    >
      {/* Background image — room + dashboard combined */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/lead-acquisition-suite/why_it_wins_bg.png')" }}
      />

      {/* Dark overlay for readability */}
      <div className=" block absolute md:hidden inset-0 bg-black/30 rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-8 py-10" style={{ minHeight: "520px" }}>

        {/* Heading */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="flex items-center gap-4 md:gap-20"
        >
          <span><Image src="/images/lead-acquisition-suite/icons/WhyItWins-left.svg" width={50} height={50} /></span>
          <h2 className=" text-3xl md:text-5xl lg:text-6xl font-extrabold text-white font-degular">
            Why It Wins
          </h2>
          <span><Image src="/images/lead-acquisition-suite/icons/WhyItWins-right.svg" width={50} height={50} /></span>
        </div>

        {/* Cards Row — two on left*/}
        <div className="w-full flex-col md:flex md:flex-row items-center justify-center md:justify-between  absolute top-70 md:top-108 px-14">

          {/* Left cards */}
          <div className="flex flex-col items-center gap-4 mb-6 md:mb-0">
            {CARDS.filter((_, i) => i < 2).map((card) => (
              <WhyItWinsCard key={card.id} card={card} visible={visible} />
            ))}
          </div>

          {/* Right cards */}
          <div className="flex flex-col items-center gap-4">
            {CARDS.filter((_, i) => i >= 2).map((card) => (
              <WhyItWinsCard key={card.id} card={card} visible={visible} />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}