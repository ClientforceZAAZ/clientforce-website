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
    <section ref={ref} className="mt-18 md:mt-21  relative">
      {/* Top Hero Section */}

      <div
        className="flex-col lg:flex lg:flex-row items-center justify-between px-8 sm:px-16 z-30 pt-6 md:pt-12 pb-16 lg:pb-0 bg-cover bg-center gap-6"
        style={{ backgroundImage: "url('/images/pricing/pricing_heroBg.png')" }}
      >
        {/* LEFT */}
        <div className={`space-y-3 z-30`}>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="inline-block">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#FF9D7C,#F437AB)]">
                <div
                  className={` rounded-full px-3 py-1 flex items-center justify-center`}
                  style={{ background: "#E5FFFA" }}
                >
                  <span className="text-xs sm:text-sm font-bold bg-linear-to-r from-black to-[#C521D1] bg-clip-text text-transparent">
                    Customer Results
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-degular font-extrabold text-4xl sm:text-6xl md:text-7xl leading-8 sm:leading-14 md:leading-16 text-center lg:text-left z-30">
            Real Wins with AI <br /> Sales Agents, <br />{" "}
            <span className="font-normal text-[#787878]">Customer Results</span>
          </h1>

          <p
            className={`font-degular font-medium z-30  text-sm sm:text-lg text-center lg:text-left text-[#676767] lg:max-w-130 z-30  leading-4 sm:leading-6`}
          >
            Explore how teams in local services, agencies, SaaS & B2B{" "}
            <br className="hidden sm:block" /> use clientforce to prospect,
            engage, call and close on <br className="hidden sm:block" />{" "}
            autopilot, then clone the exact playbook.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 z-30">
            <div
              className="flex items-center bg-white rounded-xl px-4 py-4 gap-1.5 sm:gap-3 
             shadow-sm border border-gray-200 w-full max-w-60 sm:max-w-md lg:max-w-xl"
            >
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
                className="flex-1 text-xs sm:text-sm text-gray-600 placeholder-[#787878] outline-none bg-transparent z-30"
              />
            </div>
            <button className="bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white text-xs sm:text-sm font-semibold px-5 py-4 rounded-lg hover:bg-gray-700 duration-200 flex-shrink-0 z-30 hover:scale-105 transition-all ease-in-out">
              Search
            </button>
          </div>

          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-10 lg:mb-30">
              <span className="relative inline-block w-[100px] sm:w-[120px] md:w-[140px] aspect-[140/55]">
                <Image
                  src="/images/face notifications.png"
                  alt="Logo"
                  fill
                  className="object-contain z-30" 
                />
              </span>
              <span className="text-[#676767] text-sm sm:text-base z-30">
                ★★★★★ 2,000+ USERS
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full mt-10 lg:mt-0  lg:w-[50%] z-30">
          <StatsCard />
        </div>
      </div>

      <div
        className=""
        style={{
          position: "absolute",
          top: "14rem",
        }}
      >
        <img
          src="/images/pricing/Vector_pricing_hero.png"
          alt="vector pricing"
        />
      </div>
    </section>
  );
}