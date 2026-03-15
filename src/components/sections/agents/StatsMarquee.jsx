"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.2) {
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

const TOP_STATS = [
  { value: "104", description: "Qualified Meetings In 14 Days", lightText: "(B2B SaaS Rollout)." },
  { value: "$186,500", description: "Closed In 30 Days Via AI Voice Agents", lightText: "(Agency Cohort)." },
  { value: "1,800", description: "Personalized Proposals In 72 Hours — ", lightText: "Fully Auto-Generated And Sent." },
  { value: "1,800", description: "212% Lift In Reply Rates", lightText: " Vs Email-Only Sequences." },
  { value: "50+", description: "Campaigns Launched With", lightText: " 70% Open Rates."},
  { value: "3X", description: "Revenue Growth In 90 Days For", lightText: "E-Commerce Brands." },
];

const BOTTOM_STATS = [
  { value: "2min", description: "Speed-To-First-Touch", lightText: "(45 Min → 5 Min)." },
  { value: "58%", description: "Lower Cost Per Meeting", lightText: "Compared To SDR Outbound." },
  { value: "95%", description: "Of Inbound Leads Engaged Within Minutes", lightText: "(Timezone Aware)." },
  { value: "3–5X", description: "More Pipeline In 60 Days —", lightText: "Without Hiring SDRs." },
  { value: "60sec", description: "Sub-60-Second First Response, 24/7 —", lightText: "Every Lead Touched While It's Hot." },
  { value: "12K+", description: "Leads Processed Monthly", lightText: "Across All Active Agents." },
];

function StatCard({ value, description, lightText }) {
  return (
    <div className="flex-shrink-0 w-[200px] bg-white rounded-2xl border border-[#00000033] px-5 py-2 mx-2">
      <p className="text-3xl font-extrabold text-[#00000099] leading-tight">{value}</p>
      <p className="text-[12px] text-[#00000099] font-bold mt-1 leading-relaxed">{description} <span className="font-normal">{lightText}</span></p>
    </div>
  );
}

function MarqueeRow({ stats, direction = "left", speed = 40 }) {
  // Duplicate for seamless loop
  const items = [...stats, ...stats];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {items.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </div>
  );
}

export default function StatsMarquee() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section
      ref={ref}
      className="w-full py-16 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause on hover */
        .marquee-row:hover > div {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex flex-col gap-4">
        {/* Top row — scrolls left */}
        <div className="marquee-row">
          <MarqueeRow stats={TOP_STATS} direction="left" speed={35} />
        </div>

        {/* Bottom row — scrolls right */}
        <div className="marquee-row">
          <MarqueeRow stats={BOTTOM_STATS} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
}