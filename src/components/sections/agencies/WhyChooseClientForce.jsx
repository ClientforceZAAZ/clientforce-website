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
        <h1 className="text-black text-5xl px-6 py-2 rounded-full font-bold text-center font-degular mb-2">
          Why Agencies Choose ClientForceAI
        </h1>
      </div>

      <div className="grid grid-cols-9 gap-6">
        {/* Card Takes 2 cols, full height */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-white border border-[#00000024]"
        >
          <div className="">
            <h3 className="text-black font-bold text-xl leading-snug">
              Multi-Client Workspaces
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Manage Dozens Of Clients From One Hub; Isolate Data/Permissions.
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

        {/* RIGHT — Container: takes 3 cols */}
        <div className="col-span-6 flex flex-col gap-6">
          {/* Top Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
            }}
            className=" bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-black font-bold text-xl leading-snug">
                Agents Per Objective
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Demo Booking, Trial → Paid, Reactivation, Local <br /> Quotes, Event Blitz.
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

          {/*  DFY playbooks by industry AND  Voice Call Micro-Scripts  */}
          <div className="flex gap-6">
            {/* DFY playbooks by industry */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0"
            >
              <div className=" flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                 DFY playbooks by industry
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  Dental, HVAC, Real Estate, SaaS, Coaches, And More.
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

            {/*   Voice Call Micro-Scripts */}
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
                  Voice Call Micro-Scripts: Opener, Discovery Qs, Objection Handling, Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-14 gap-6 mt-6">
        {/* Embeddable widgets */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Embeddable Widgets
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Drop Chat/Callback/Proposal Widgets On Client Sites To Convert Traffic.
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

        {/* Chrome Capture */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-4 flex flex-col items-center p-6"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Chrome Capture
            </h3>
            <p className="text-[15px] text-[#00000099]">
              One-Click Prospecting From LinkedIn/GMB → Auto-Routes Into Campaigns.
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

        {/* Unified Inbox */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Unified Inbox
            </h3>
            <p className="text-[15px] text-[#00000099] ">
              Unified Inbox: Email, WhatsApp, Call Notes, Proposals—One Timeline Per Lead.
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
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Compliance Guardrails */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-row-reverse gap-8 items-center p-6 pl-0"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Dynamic Proposals <br /> At Scale
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Personalized docs sent automatically, <br /> tied to each playbook.
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

        {/* Analytics Presets */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex items-center py-6 pl-6 pr-0 gap-8"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Analytics Clients <br /> Understand
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Meetings, Proposals Sent, <br /> Revenue Attributed—By Agent/Campaign.
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

