

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

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





function HowItWorksCard() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="">
        <h1 className="text-[#6BE8FD] text-3xl sm:text-5xl md:text-6xl font-bold text-center font-degular mb-10">How It Works <span className="text-[#787878]">(Fast)</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">

  {/* LEFT CARD — Desktop only */}
  <div
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0px)" : "translateY(24px)",
      transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
    }}
    className="col-span-3 bg-[#0d1f0d] rounded-2xl overflow-hidden hidden lg:flex flex-col justify-center px-8 py-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
  >
    <div>
      <h3 className="text-white font-bold text-xl leading-snug">
        Choose your goal{" "}
        <span className="block font-normal">(e.g., Book Demos).</span>
      </h3>
    </div>

    <div className="overflow-hidden mt-auto flex items-center justify-center">
      <img
        src="/images/multichannel-outreach/choose_your_goal.png"
        alt=""
        className="object-cover rounded-t-xl h-[400px]"
      />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6">

    {/* LEFT CARD — Mobile/Tablet */}
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
      }}
      className="col-span-1 bg-[#0d1f0d] rounded-2xl overflow-hidden lg:hidden flex flex-col items-center justify-center p-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
    >
      <div className="mb-4">
        <h3 className="text-white font-bold text-xl leading-snug">
          Choose your goal{" "}
          <span className="inline-block font-normal">(e.g., Book Demos).</span>
        </h3>
      </div>

      <div className="overflow-hidden">
        <img
          src="/images/multichannel-outreach/choose_your_goal.png"
          alt=""
          className="object-cover rounded-t-xl h-[230px]"
        />
      </div>
    </div>

    {/* TOP CARD */}
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
      }}
      className="col-span-1 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex lg:flex-row flex-col items-center justify-center gap-4 p-6"
    >
      <div className="flex-1">
        <h3 className="text-white font-bold text-xl leading-snug">
          Build or pick a playbook{" "}
          <span className="font-normal block">
            (Email → WA/SMS nudge → <br /> Voice close)
          </span>
        </h3>
      </div>

      <div className="flex-shrink-0">
        <img
          src="/images/multichannel-outreach/socials.png"
          alt=""
          className="object-contain rounded-lg w-[323px]"
        />
      </div>
    </div>

    {/* BOTTOM ROW */}
    <div className="sm:flex sm:flex-row flex-col gap-6 col-span-1 sm:col-span-2">

      {/* CARD 1 */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(24px)",
          transition: "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
        }}
        className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6 mb-6 sm:mb-0"
      >
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl leading-snug">
            Set windows & caps;{" "}
            <span className="block font-normal min-w-[220px]">
              connect senders and templates.
            </span>
          </h3>
        </div>

        <div className="flex-shrink-0 mt-4 sm:mt-0">
          <img
            src="/images/multichannel-outreach/set-window.png"
            alt=""
            className="object-contain rounded-lg w-[271px]"
          />
        </div>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(24px)",
          transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
        }}
        className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
      >
        <div className="flex-1 overflow-hidden">
          <img
            src="/images/multichannel-outreach/system-sequence.png"
            alt=""
            className="object-contain rounded-lg w-[315px]"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-xl leading-snug">
            Launch—{" "}
            <span className="font-normal">
              The System Sequences <br /> Channels, Handles Fallbacks, And Learns From Replies.
            </span>
          </h3>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
}





export default function HowItWorks() {
  return (
    <section
      className="w-full px-6 lg:px-20 py-10 sm:py-20"
      style={{
        background: "linear-gradient(to bottom, #000000, #0F2212)",
      }}
    >
      <HowItWorksCard />
    </section>
  );
}
