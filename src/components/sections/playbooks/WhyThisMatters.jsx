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
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl px-6 py-2 rounded-full font-bold text-center font-degular mb-0 sm:mb-2">
          Why This Matters
        </h1>
        <p className="text-[#000000CC] font-medium text-center text-sm  sm:text-base">
          Most Tools Give You Features. Playbooks Give You Outcomes. Each
          Playbook Encodes The <br className="hidden md:block" /> Strategy Of A
          Top Closer—So Your Agent Runs The Entire Campaign (From Lead Sourcing
          To <br className="hidden md:block" /> Booked Calls And Signed
          Proposals) Without You Stitching Tools Together.
        </p>
        <div className="text-[#787878] text-lg md:text-[27px] font-bold text-center my-8 border border-[#787878] w-fit px-4 py-1 rounded-full">
          What you get in every playbook
        </div>
      </div>

      {/* Top Grid Layout */}

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
          <div className="">
            <h3 className="text-black font-bold text-xl leading-snug">
              Agent Blueprint
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Pre-Configured Goal, Targeting, Tone, And Variables
            </p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/guardrails/"
              alt="domain_auth"
              // width={323}
              // height={342}
              // quality={100}
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
                Agent Blueprint
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Pre-Configured Goal, Targeting, Tone, And Variables
              </p>
            </div>
            <div className=" overflow-hidden mt-auto flex items-center justify-center">
              <img
                src="/images/guardrails/"
                alt="domain_auth"
                // width={323}
                // height={342}
                // quality={100}
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
            className=" bg-white border border-[#00000024] rounded-2xl overflow-hidden flex lg:flex-row flex-col lg:items-start items-center justify-center gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-black font-bold text-xl leading-snug">
                Sequence Orchestrator
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Email + WhatsApp/SMS + LinkedIn + AI Voice steps, Timed And
                Branched.
              </p>
            </div>
            <div className=" flex-shrink-0">
              <img
                src="/images/guardrails/"
                alt="Verification & Hygiene"
                //   width={323}
                //   height={179}
                //   quality={100}
                className=" object-contain rounded-lg w-[330px] h-[200px] bg-[#0000001A]"
              />
            </div>
          </div>

          {/*  Dynamic Proposal Template AND Voice Call Micro-Scripts */}
          <div className="sm:flex sm:flex-row flex-col gap-3 md:gap-6 col-span-1 sm:col-span-2">
            {/* Dynamic Proposal Template */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0 mb-3 sm:mb-0"
            >
              <div className=" flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                  Dynamic Proposal Template
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  on-brand, auto-personalized pricing/benefits/proof
                </p>
              </div>
              <div className=" flex-shrink-0 mt-4">
                <img
                  src="/images/guardrails/.png"
                  alt=""
                  //   width={274}
                  //   height={143}
                  //   quality={100}
                  className=" object-contain rounded-lg w-full h-full bg-[#0000001A]"
                />
              </div>
            </div>

            {/* Voice Call Micro-Scripts */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col p-8 items-center"
            >
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
              <div className="mt-4">
                <h3 className="text-black font-bold text-xl leading-snug">
                  Voice Call Micro-Scripts
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  Voice Call Micro-Scripts: opener, discovery Qs, objection
                  handling, close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-14 gap-6 mt-6">
        {/* Finder v2 Rules */}
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
              Finder v2 Rules
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Keywords, Geo, Industry Filters, Run Frequency (Auto-Prospecting)
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

        {/* Embeddable Widget Presets */}
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
              Embeddable Widget Presets
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Chat/Callback/Form With Consent <br /> And Tagging
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

        {/* Chrome Capture Tags */}
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
              Chrome Capture Tags
            </h3>
            <p className="text-[15px] text-[#00000099] ">
              One-Click Mapping Into The Right <br /> Agent/Campaign
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

      {/* Third Row of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Compliance Guardrails */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-col sm:flex sm:flex-row-reverse gap-8 items-center p-6 pl-0"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Compliance Guardrails
            </h3>
            <p className="text-[15px] text-[#00000099]">
              email verification, domain warm-up, <br /> WhatsApp template
              status, <br /> DNC handling
            </p>
          </div>
          <div className="flex-1 overflow-hidden flex justify-start">
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

        {/* Analytics Presets */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-col sm:flex-row items-center py-6 sm:pl-6 pl-0 pr-0 gap-8"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Analytics Presets
            </h3>
            <p className="text-[15px] text-[#00000099]">
              step KPIs, reply types, booking rate, <br /> revenue influence
            </p>
          </div>
          <div className="flex-1 overflow-hidden flex justify-end">
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

