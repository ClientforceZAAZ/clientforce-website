"use client";

import { useEffect, useRef, useState } from "react";


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





function FeatureGrid() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl px-6 py-2 rounded-full font-bold text-center leading-8 sm:leading-10 font-degular mb-4 md:mb-8">
          Why SaaS Teams Adopt ClientForceAI
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
    className="col-span-3 rounded-2xl overflow-hidden hidden lg:flex flex-col justify-center px-8 py-6 bg-white border border-[#00000024]"
  >
    <div>
      <h3 className="text-black font-bold text-xl leading-snug">
        ICP-Smart Prospecting
      </h3>
      <p className="text-[15px] text-[#00000099]">
        Keywords, Tech Stack Cues, Geo, Company Size—Auto-Discover Net New
      </p>
    </div>
    <div className="overflow-hidden mt-auto flex items-center justify-center">
      <img
        src="/images/guardrails/"
        alt="domain_auth"
        className="object-cover rounded-xl h-[430px] w-full bg-[#0000001A]"
      />
    </div>
  </div>

  {/* RIGHT Side */}
  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-6">
    
    {/* SAME CARD for mobile/tablet (hidden on lg) */}
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
      }}
      className="col-span-1 rounded-2xl overflow-hidden lg:hidden flex flex-col items-center justify-center px-8 py-6 bg-white border border-[#00000024]"
    >
      <div className="mb-4 w-full md:w-fit">
        <h3 className="text-black font-bold text-xl leading-snug">
          ICP-Smart Prospecting
        </h3>
        <p className="text-[15px] text-[#00000099]">
          Keywords, Tech Stack Cues, Geo, Company Size—Auto-Discover Net New
        </p>
      </div>
      <div className="overflow-hidden mt-auto flex items-center justify-center">
        <img
          src="/images/guardrails/"
          alt="domain_auth"
          className="object-cover rounded-xl lg:h-[430px] w-full bg-[#0000001A]"
        />
      </div>
    </div>

    {/* Top Left */}
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
      }}
      className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex lg:flex-row flex-col lg:items-start items-center justify-center gap-4 p-6"
    >
      <div className="flex-1">
        <h3 className="text-black font-bold text-xl leading-snug">
          Demo Engine
        </h3>
        <p className="text-[15px] text-[#00000099]">
          Multi-Touch Outreach With Smart Timing And Booking Handoff.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/images/guardrails/"
          alt="Verification & Hygiene"
          className="object-contain rounded-lg w-[330px] h-[200px] bg-[#0000001A]"
        />
      </div>
    </div>

    {/* Bottom two cards */}
    <div className="sm:flex sm:flex-row flex-col gap-3 md:gap-6 col-span-1 sm:col-span-2">
      
      {/* Trial Activation Playbooks */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(24px)",
          transition: "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
        }}
        className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0 mb-3 sm:mb-0"
      >
        <div className="flex-1">
          <h3 className="text-black font-bold text-xl leading-snug">
            Trial Activation Playbooks
          </h3>
          <p className="text-[15px] text-[#00000099]">
            Usage-Aware Nudges, “Aha!” Moments, And Voice Check-Ins.
          </p>
        </div>
        <div className="flex-shrink-0 mt-4">
          <img
            src="/images/guardrails/.png"
            alt=""
            className="object-contain rounded-lg w-full h-full bg-[#0000001A]"
          />
        </div>
      </div>

      {/* Expansion & Win-Back */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(24px)",
          transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
        }}
        className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col p-8 items-center"
      >
        <div className="flex-1 overflow-hidden">
          <img
            src="/images/guardrails/"
            alt=""
            className="object-contain rounded-lg w-[315px] h-[220px] bg-[#0000001A]"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-black font-bold text-xl leading-snug">
            Expansion & Win-Back
          </h3>
          <p className="text-[15px] text-[#00000099]">
            Playbooks For PQLs, Cross-Sell, And Churn Rescue.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-14 gap-6 mt-6">
        {/* Dynamic proposals at scale*/}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Dynamic Proposals At Scale
            </h3>
            <p className="text-[15px] text-[#00000099]">
             Role-Specific Pitches With Pricing/ROI Inserts From Your Docs
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/guardrails/"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-[315px] h-[220px] bg-[#0000001A]"
            />
          </div>
        </div>

        {/* Embeddable widgets*/}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-4 flex flex-col items-center p-6"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Embeddable Widgets
            </h3>
            <p className="text-[15px] text-[#00000099]">
              In-App And Website Capture That Routes To The Right Agent.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/guardrails/"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-[280px] h-[220px] bg-[#0000001A]"
            />
          </div>
        </div>

        {/*Unified Inbox & analytics */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Unified Inbox & Analytics
            </h3>
            <p className="text-[15px] text-[#00000099] ">
              Replies, Calls, Proposals, Meetings—Attributed To Revenue.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/guardrails/"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-[315px] h-[220px] bg-[#0000001A]"
            />
          </div>
        </div>
      </div>

    </div>
  );
}





export default function WhyThisMatters() {
  return (
    <section
      className="w-full  py-10"
        style={{
        background: "#E1F1F2",
      }}
    >
      <FeatureGrid />
    </section>
  );
}

