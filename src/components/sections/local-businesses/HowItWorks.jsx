"use client";
import Link from "next/link";
import Image from "next/image";
import DropOffResponseCard from "../analytics/components/DropOffResponseCard";
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

export default function HowItWorks() {
  const [ref, visible] = useVisible();

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setLineDrawn(true), 400);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section className="relative">
      <div ref={ref} className="bg-black pt-16 pb-10 lg:px-20">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          className="flex justify-center mb-10"
        >
          <div className=" border border-white rounded-full px-6 text-3xl sm:text-4xl lg:text-[46px] text-white font-bold font-degular shadow-sm">
            How It Works{" "}
            <span className="text-[#D0F56B] font-normal">(3 steps)</span>
          </div>
        </div>
        {/* Three-column card grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-11 gap-6 px-8">
          {/* Card 1 — bottom-left text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.55s ease 0.15s, transform 0.55s ease 0.15s",
              position: "relative",
              zIndex: 1,
            }}
            className="bg-white border border-[#00000024] rounded-2xl p-5 flex flex-col col-span-1 md:col-span-4"
          >
            <div>
              <img src="" alt="" className=" h-[280px]" />
            </div>

            <div className="mt-auto">
              <p className=" text-lg leading-6">
                <span className="font-bold">Choose Your Goal:</span> Book
                Service Calls, Request Quotes, Or Membership Renewals.
              </p>
            </div>
          </div>

          {/* Card 2 — top-center text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              position: "relative",
              zIndex: 1,
            }}
            className=" bg-white border border-[#00000024] rounded-2xl p-5 flex flex-col col-span-1 md:col-span-3"
          >
            <div>
              <p className="text-lg leading-6">
                <span className="font-bold"> Turn On Sources:</span> Widget On
                Your Site, Finder V2, And One-Click Chrome Capture.
              </p>
            </div>
          </div>

          {/* Card 3 — bottom-right text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.55s ease 0.45s, transform 0.55s ease 0.45s",
              position: "relative",
              zIndex: 1,
            }}
            className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col min-h-[160px] col-span-1 md:col-span-4"
          >
            <div className="mt-auto">
              <p className="text-lg leading-6">
                <span className="font-bold">Let It Run:</span> Your Agent
                Follows Up Across Email/WhatsApp/Voice Until The Job Is Booked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOOK MORE */}
      <div
        className="bg-cover bg-center flex flex-col items-center justify-center z-10"
        style={{ backgroundImage: "url('/images/agent_roi_bg.png')" }}
      >
        <div
          className="bg-cover bg-center w-full pt-12 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/images/agent_roi_bg2.png')" }}
        >
          <p className="  text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-degular font-bold text-white mt-4 mb-2 sm:mb-6">
            Book More Local Jobs With ClientForceAI
          </p>
          <Link
            href="#"
            className="font-bold text-base sm:text-lg md:text-2xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white"
            style={{
              boxShadow:
                "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
            }}
          >
            Start Your First Agent →
          </Link>
          <div className="mt-12 relative">
            <Image
              src="/images/analytics/whats_working.png"
              width={840}
              height={525}
            />

            <div className="absolute inset-0 hidden lg:block ">
              <div className="absolute bottom-[8%] left-[-110] z-30">
                <DropOffResponseCard />
              </div>
              <div className="absolute top-[42%] right-[-140] z-30">
                <img
                  src="/images/analytics/card.png"
                  alt=""
                  className="w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
