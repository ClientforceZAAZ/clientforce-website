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
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, visible, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return count;
}

// SVG Wave variants
function WavePurple() {
  return (
    <svg
      viewBox="0 0 300 70"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <path
        d="M0,50 C20,42 35,60 60,46 C85,32 95,56 120,42 C145,28 155,50 180,37 C205,24 220,46 250,35 C270,28 285,40 300,32 L300,70 L0,70 Z"
        fill="url(#waveP)"
      />
      <path
        d="M0,50 C20,42 35,60 60,46 C85,32 95,56 120,42 C145,28 155,50 180,37 C205,24 220,46 250,35 C270,28 285,40 300,32"
        fill="none"
        stroke="#a855f7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="88" cy="56" r="4" fill="#a855f7" />
    </svg>
  );
}

function WaveGreen() {
  return (
    <svg
      viewBox="0 0 300 70"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0,65 C50,63 80,50 120,35 C160,20 200,16 240,12 C265,9 280,8 300,6 L300,70 L0,70 Z"
        fill="url(#waveG)"
      />
      <path
        d="M0,65 C50,63 80,50 120,35 C160,20 200,16 240,12 C265,9 280,8 300,6"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="172" cy="20" r="4" fill="#22c55e" />
    </svg>
  );
}

function WaveOrange() {
  return (
    <svg
      viewBox="0 0 300 70"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveO" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <path
        d="M0,28 C30,22 50,42 80,46 C110,50 130,32 160,42 C190,52 210,37 240,46 C265,54 280,48 300,50 L300,70 L0,70 Z"
        fill="url(#waveO)"
      />
      <path
        d="M0,28 C30,22 50,42 80,46 C110,50 130,32 160,42 C190,52 210,37 240,46 C265,54 280,48 300,50"
        fill="none"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WaveBlue() {
  return (
    <svg
      viewBox="0 0 300 70"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <path
        d="M0,55 C40,35 70,60 110,45 C150,30 170,50 200,38 C230,26 260,44 300,30 L300,70 L0,70 Z"
        fill="url(#waveB)"
      />
      <path
        d="M0,55 C40,35 70,60 110,45 C150,30 170,50 200,38 C230,26 260,44 300,30"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="110" cy="45" r="4" fill="#3b82f6" />
    </svg>
  );
}

function WaveBars() {
  const bars = [40, 55, 35, 65, 80, 50, 38];
  return (
    <svg
      viewBox="0 0 300 70"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      {bars.map((h, i) => {
        const x = i * (300 / bars.length) + 10;
        const barH = h * 0.85;
        return (
          <rect
            key={i}
            x={x}
            y={70 - barH}
            width={18}
            height={barH}
            rx="5"
            fill="#000000"
            opacity={0.85}
          />
        );
      })}
    </svg>
  );
}

const WAVES = {
  purple: WavePurple,
  green: WaveGreen,
  orange: WaveOrange,
  blue: WaveBlue,
  bar: WaveBars,
};
const BG_COLORS = {
  purple: "#F5D6F8",
  green: "#E3FFED",
  orange: "#FACBB2",
  blue: "#D8F9FF",
  bar: "#D8F9FF",
};
const STAT_COLORS = {
  purple: "#BA0BD1",
  green: "#31C165",
  orange: "#F05022",
  blue: "#2563eb",
  bar: "#477998",
};

// Single Analytics Card
function AnalyticsCard({
  stat,
  statPrefix = "",
  statSuffix = "",
  description,
  avatar,
  name,
  role,
  wave = "purple",
  visible,
  delay = "0s",
  nameColor,
}) {
  const numericTarget = parseInt(stat.replace(/[^0-9]/g, ""), 10) || 0;
  const count = useCounter(numericTarget, visible, 1300);
  const [hovered, setHovered] = useState(false);
  const Wave = WAVES[wave] || WavePurple;
  const bg = BG_COLORS[wave] || "#f3e8ff";
  const statColor = STAT_COLORS[wave] || "#a855f7";
  const nc = nameColor || statColor;

  // Reconstruct display: e.g. "+14%" → "+" + count + "%"
  const hasPlus = stat.startsWith("+");
  const suffix = stat.replace(/[0-9+]/g, "").trim();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.12)`
          : "0 4px 20px rgba(0,0,0,0.06)",
        background: bg,
        // minWidth: "316px",
        // maxWidth: "400px",
        width: "316px",
        // height: "340px",
        flex: "0 0 auto",
      }}
      className="rounded-3xl p-5 flex flex-col"
    >
      {wave === "green" ? null : (
        <>
          {/* Stat */}
          <div className="mb-1">
            <span className="text-5xl font-extrabold text-black">{stat}</span>
          </div>
        </>
      )}

      {/* Wave */}
      <div className="my-6">
        <Wave />
      </div>

      {wave === "green" && (
        <>
          {/* Stat */}
          <div className="mb-1">
            <span className="text-4xl font-extrabold text-black">{stat}</span>
          </div>
        </>
      )}

      {/* Description */}
      <p className="text-[15px] text-[#3B3B3B] mt-10 leading-5 flex-1">
        {description}
      </p>

      {/* Person */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-black/5">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
        )}
        <div>
          <p
            className="text-[12px] font-bold leading-tight"
            style={{ color: nc }}
          >
            {name}
          </p>
          <p className="text-[10px] text-[#0A0A0A80] leading-tight">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Scrollable Analytics Row — Reusable
export function AnalyticsScrollRow({ cards = [], title, subtitle }) {
  const [ref, visible] = useVisible();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

   function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  }


  return (
    <section ref={ref} className="pt-10 pb-10 px-6 lg:px-16 bg-[#E1F1F2]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 md:mb-12 font-degular">
        Outcomes You Can Promise
      </h1>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-2 min-[1140px]:justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {cards.map((card, i) => (
          <AnalyticsCard
            key={i}
            {...card}
            visible={visible}
            delay={`${0.1 + i * 0.08}s`}
          />
        ))}
      </div>
      {/* Scroll arrows */}
      <div className="flex items-center justify-center mt-4 gap-4 w-full min-[1140px]:hidden">
        <button
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center transition-all hover:border-gray-400 disabled:opacity-30"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center transition-all hover:border-gray-400 disabled:opacity-30"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

//  Analytics data
const ANALYTICS_CARDS = [
  {
    stat: "+30 - 70%",
    description:
      "More qualified demos from ICP campaigns and instant follow-ups",
    avatar: "/images/multichannel-outreach/maria_lopez.png",
    name: "Maria Lopez",
    role: "Owner, High-Growth Roofing & Home Services",
    wave: "purple",
  },
  {
    stat: "+15 - 35%",
    description:
      "+15–35% lift in trial-to-paid conversion with activation sequences and voice nudges",
    avatar: "/images/multichannel-outreach/chris_turner.png",
    name: "Chris Turner",
    role: "Founder, Turner Digital Marketing Agency",
    wave: "green",
  },
  {
    stat: "2 - 5x",
    description:
      "Faster deal cycles from dynamic proposals tailored to role, industry, and pain",
    avatar: "/images/multichannel-outreach/elaine_morris.png",
    name: "Dr. Elaine Morris",
    role: "B2B Sales Consultant & Author",
    wave: "bar",
  },
];

export default function AnalyticsProofSection() {
  return (
    <AnalyticsScrollRow
      title="Real Results From The Experiment Lab"
      subtitle="Live data from campaigns using ClientForce AI"
      cards={ANALYTICS_CARDS}
    />
  );
}
