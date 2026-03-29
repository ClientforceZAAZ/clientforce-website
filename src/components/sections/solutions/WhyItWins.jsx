"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Automation from "@/components/sections/dynamic-proposals/Automation";
import { BsPatchCheckFill } from "react-icons/bs";


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
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex items-center justify-center">
        <h1 className="text-black bg-[#D0F56B] px-6 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center font-degular mb-10">
          Why It Wins
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        {/* LEFT — Large card (ONLY visible on lg+) */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 rounded-2xl overflow-hidden hidden lg:flex flex-col justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div>
            <h3 className="text-white font-bold text-xl leading-snug">
              End-To-End Out Of The Box
            </h3>
            <p className="text-sm text-[#FFFFFF99]">
              Not Just Templates; Full Prospect → Engage → Proposal → Call →
              Close Flows.
            </p>
          </div>
          <div className="overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/"
              alt=""
              className="object-cover rounded-t-xl h-[400px] w-full bg-[#FFFFFF1A]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-6">
          {/* SAME CARD (mobile/tablet ONLY) */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
            }}
            className="col-span-1 rounded-2xl overflow-hidden lg:hidden flex flex-col items-center justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
          >
            <div className="mb-4 w-full md:w-fit">
              <h3 className="text-white font-bold text-xl leading-snug">
                End-To-End Out Of The Box
              </h3>
              <p className="text-sm text-[#FFFFFF99]">
                Not Just Templates; Full Prospect → Engage → Proposal → Call →
                Close Flows.
              </p>
            </div>
            <div className="overflow-hidden mt-auto flex items-center justify-center">
              <img
                src="/images/"
                alt=""
                className="object-cover rounded-t-xl w-full bg-[#FFFFFF1A]"
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
            className="bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex lg:flex-row flex-col items-center justify-center gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl leading-snug">
                Positioning That Converts
              </h3>
              <p className="text-sm text-[#FFFFFF99]">
                Benefits, Differentiators, Objections, And Proof Already Mapped
                Per Industry.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/images/"
                alt=""
                className="object-contain rounded-lg w-[330px] h-[200px] bg-[#FFFFFF1A]"
              />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="sm:flex sm:flex-row flex-col gap-3 md:gap-6 col-span-1 sm:col-span-2">
            {/* Compliance */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0 mb-3 sm:mb-0"
            >
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Compliance Handled
                </h3>
                <p className="text-sm text-[#FFFFFF99]">
                  Email Verification, Domain Warm-Up, WhatsApp Templates, DNC
                  Logic Included.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4">
                <img
                  src="/images/"
                  alt=""
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Scale */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/"
                  alt=""
                  className="object-contain rounded-lg w-[315px] h-[220px]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Scales Like An Agency
                </h3>
                <p className="text-sm text-[#FFFFFF99]">
                  Duplicate Playbooks, Tweak Variables, Deploy To Unlimited
                  Campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* What’s Inside Each Playbook */}

<div
  style={{
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
  }}
  className="rounded-2xl overflow-hidden flex flex-col lg:flex-row-reverse items-center bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-6 sm:p-8 gap-8 sm:gap-12 mt-8"
>
  {/* Image */}
  <div className="w-full lg:w-[45%] overflow-hidden h-[260px] sm:h-[360px] lg:h-[640px] bg-[#FFFFFF1A]">
    <img
      src="/images/"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex-1 w-full">
    <h3 className="font-bold text-white text-2xl sm:text-[30px] leading-8 sm:leading-12 mb-6 sm:mb-8">
      What’s Inside Each Playbook
    </h3>

    <div className="mt-2 flex flex-col gap-4 sm:gap-6 justify-between items-start w-full">

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_email.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">Email sequences</span> (5–7 steps) with A/B subjects
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_whatsapp.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">WhatsApp nudges</span>
          <span className="block sm:inline"> + fallbacks</span>
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">AI Voice call scripts</span>
          <span className="block sm:inline"> (opener, discovery, objection handling, close)</span>
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">Dynamic proposal templates</span>
          <span className="block sm:inline"> (auto-personalized by company/industry/pain)</span>
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">Widget & form presets</span>
          <span className="block sm:inline"> (lead capture + booking)</span>
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">Objection banks & proof inserts</span>
          <span className="block sm:inline"> (case angles, stats, testimonials)</span>
        </p>
      </div>

      <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45}
          className="w-8 h-8 sm:w-[45px] sm:h-[45px]" />
        <p className="text-white text-xs sm:text-lg font-light w-full">
          <span className="font-bold">Scheduling & guardrails</span>
          <span className="block sm:inline"> tuned per goal</span>
        </p>
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
      className="w-full py-10 lg:py-20"
        style={{
        background: "linear-gradient(to bottom, #000000, #0F2212)",
      }}
    >
      <HowItWorksCard />
    </section>
  );
}

