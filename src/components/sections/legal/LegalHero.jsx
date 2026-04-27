"use client";

import { useEffect, useRef, useState } from "react";
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
    <section ref={ref} className="mt-18 lg:mt-21  relative">
      {/* Top Hero Section */}

      <div
        className="flex-col lg:flex lg:flex-row justify-between px-8 sm:px-16 z-30 pt-6 md:pt-12 pb-16 lg:pb-0 bg-cover bg-center gap-6"
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
                    Legal Center
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-degular font-extrabold text-4xl sm:text-6xl lg:text-[65px]  leading-8 sm:leading-14 md:leading-15 text-center lg:text-left z-30">
           Policies, Protections, <br /> And Terms For Using <br />ClientForce.
          </h1>

          <p
            className={`font-degular font-medium z-30  text-sm sm:text-lg text-center lg:text-left text-[#676767] lg:max-w-130 z-30  leading-4 sm:leading-6`}
          >
            Transparent terms, strong privacy, and compliance-first defaults{" "}
            <br className="hidden sm:block" /> so you can deploy AI Sales Agents with confidence.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 mb-6 z-30">
              <div class="w-full flex flex-wrap gap-1 items-center justify-center lg:justify-start font-semibold">
  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    GDPR
  </div>

  <span class="text-gray-400">-</span>

  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    CCPA
  </div>

  <span class="text-gray-400">-</span>

  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    TCPA
  </div>

  <span class="text-gray-400">-</span>

  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    DKIM/SPF
  </div>

  <span class="text-gray-400">-</span>

  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    DNC
  </div>

  <span class="text-gray-400">-</span>

  <div class="bg-white px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
    SOC-aligned practices
  </div>
</div>
          </div>

          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-0 lg:mb-20">
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
        <div className="w-full mt-8 lg:mt-0 pl-10 lg:w-[45%] z-30">
            <div className="relative hidden lg:block">
                <Image src="/images/legal/legal_hero.png" alt="Dashboard Preview" height={1198} width={950} className="" priority />
            </div>
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
          src="/images/legal/Vector_legal_hero.png"
          alt="vector legal"
        />
      </div>
    </section>
  );
}