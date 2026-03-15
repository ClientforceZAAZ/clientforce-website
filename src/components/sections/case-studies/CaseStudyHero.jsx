"use client";

import { useEffect, useRef, useState } from "react";
import StatsCard from "./components/StatsCard";
import Image from "next/image";

function useVisible(threshold = 0.1) {
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



export default function PricingSection() {
  const [ref, visible] = useVisible();
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={ref} className="mt-21  relative">
      {/* Top Hero Section */}

      <div
        className="flex items-center justify-between px-16 z-30 pt-12 pb-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pricing/pricing_heroBg.png')" }}
      >
        {/* LEFT */}
        <div className={`space-y-3 z-30`}>
          <div className="inline-block">
            <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#FF9D7C,#F437AB)]">
              <div
                className={` rounded-full px-3 py-1 flex items-center justify-center`}
                style={{ background: "#E5FFFA"}}
              >
                <span className="text-sm font-bold bg-linear-to-r from-black to-[#C521D1] bg-clip-text text-transparent">
                  Customer Results
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-degular font-extrabold text-7xl leading-15 z-30">
            Real Wins with AI <br /> Sales Agents, <br />{" "}
            <span className="font-normal text-[#787878]">Customer Results</span>
          </h1>

          <p
            className={`font-degular font-medium text-lg text-[#676767] max-w-130 z-30 `}
          >
            Explore how teams in local services, agencies, SaaS & B2B <br /> use
            clientforce to prospect, engage, call and close on <br /> autopilot,
            then clone the exact playbook.
          </p>

         <div className="flex items-center gap-2 mt-4">
             <div className="flex items-center bg-white rounded-xl px-4 py-4 gap-3 shadow-sm border border-gray-200 w-full max-w-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              className="flex-shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search industries, goals, keyword"
              className="flex-1 text-sm text-gray-600 placeholder-[#787878] outline-none bg-transparent"
            />
            
          </div>
          <button className="bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white text-sm font-semibold px-5 py-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex-shrink-0">
              Search
          </button>
         </div>

          <div className="flex items-center gap-2 mt-10">
            <span className="inline-block">
              <Image
                src="/images/face notifications.png"
                alt="Logo"
                width={140}
                height={55}
              />
            </span>
            <span>★★★★★ 2,000+ USERS</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[50%] z-30">
          <StatsCard />
        </div>
      </div>

      <div className="absolute top-60 -z-10">
        <img src="/images/pricing/Vector_pricing_hero.png" alt="" />
      </div>
    </section>
  );
}