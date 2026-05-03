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
        className="flex-col lg:flex lg:flex-row justify-between px-8 sm:px-16 z-30 pt-6 md:pt-12 pb-0 sm:pb-16 lg:pb-0 bg-cover bg-center gap-6"
        style={{ backgroundImage: "url('/images/pricing/')" }}
      >
        {/* LEFT */}
        <div className={`space-y-3 z-30`}>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="inline-block">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#FF9D7C,#F437AB)]">
                <div
                  className={` rounded-full px-3 py-1 flex items-center justify-center`}
                  style={{ background: "#FFFFFF" }}
                >
                  <span className="text-xs sm:text-sm font-bold bg-linear-to-r from-black to-[#C521D1] bg-clip-text text-transparent">
                    About Company
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-degular font-extrabold text-4xl sm:text-6xl  leading-8 sm:leading-14 md:leading-15 text-center lg:text-left z-30">
            We build AI Sales <br className="hidden sm:block" /> Agents So
            Humans Can <br className="hidden lg:block" />Focus On Building
            <br className="hidden sm:block" /> Remarkable Businesses.
          </h1>

          <p
            className={`font-degular font-medium z-30  text-sm sm:text-lg text-center lg:text-left text-[#676767] lg:max-w-130 z-30  leading-4 sm:leading-6`}
          >
            ClientForce turns prospecting, follow-ups, and closing into an
            always-on system. Our mission is simple: give every team a
            compounding sales engine without the complexity.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start  mt-8 mb-0 md:mb-8">
            {/* Start Free Trial Button */}
            <button className="relative group cursor-pointer hover:scale-105 transition-all ease-in-out z-10 ">
              {/* The Green 3D Depth Layer */}
              <div className="absolute inset-0 translate-y-[4px] bg-[#00E65A] rounded-xl" />

              {/* The Main Gradient Body */}
              <div className="relative flex items-center gap-3 px-8 py-3.5 rounded-lg text-white text-sm sm:text-base font-bold font-asgard bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] transition-transform active:translate-y-[2px]">
                Start Free Trial
                <img
                  src="/icons/forward.svg"
                  alt="forwardIcon"
                  className="h-4 md:h-6"
                />
              </div>
            </button>

            {/* See Open Roles Button */}
            <button className="relative group cursor-pointer hover:scale-105 transition-all ease-in-out z-10">
              {/* The Gray 3D Depth Layer */}
              <div className="absolute inset-0 translate-y-[4px] bg-black/20 rounded-xl" />

              {/* The Main White Body */}
              <div className="relative flex items-center px-8 py-3.5 rounded-lg bg-white border text-sm sm:text-base border-black/80 text-[#555] font-bold font-asgard transition-transform active:translate-y-[2px]">
                + See Open Roles
              </div>
            </button>
          </div>
          
        </div>

        {/* RIGHT */}
        <div className="w-full mt-8 lg:mt-0 mb-10 pl-10 lg:w-[45%] z-30">
          <div className="relative hidden lg:block">
            <Image
              src="/images/company/company_hero_img.png"
              alt="Dashboard Preview"
              height={1198}
              width={950}
              className=""
              priority
            />
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
        <img src="/images/legal/Vector_legal_hero.png" alt="vector legal" />
      </div>
    </section>
  );
}