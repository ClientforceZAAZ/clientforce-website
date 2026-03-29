"use client";

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

function FeatureGrid() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl px-6 py-2 rounded-full font-bold text-center leading-8 sm:leading-10 font-degular mb-8">
          Built For Local Wins
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
              Account Discovery & Enrichment
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Firmographic/Keyword Rules, Territory Logic, Dedupe.
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
                Account Discovery & Enrichment
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Firmographic/Keyword Rules, Territory Logic, Dedupe.
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
                Persona-Based Agents
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Separate Messaging For Economic Buyers vs. Users/Influencers.
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
            {/* LinkedIn + Email + Voice */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0 mb-3 sm:mb-0"
            >
              <div className="flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                  LinkedIn + Email + Voice:
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  Sequenced By Role And Buying Stage; WhatsApp Where Allowed.
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

            {/* Dynamic Proposals & Attachments */}
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
                  className="object-contain rounded-lg w-[315px] h-[220px] bg-[#0000001A]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-black font-bold text-xl leading-snug">
                  Dynamic Proposals & Attachments
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  Personalized Packets Generated From Your PDFs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {/* Embeddable capture */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Embeddable Capture
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Microsite/Chat/Callback Widgets For Campaigns And Event
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/guardrails/"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg h-[220px] bg-[#0000001A]"
            />
          </div>
        </div>

        {/* Unified Inbox*/}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-col-reverse items-center p-6"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Unified Inbox
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Threaded by account + contact with tasking and handoff controls.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/guardrails/"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg h-[220px] bg-[#0000001A]"
            />
          </div>
        </div>
      </div>

      {/* Third Row of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Controls & compliance */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 flex flex-col sm:flex-row-reverse items-center py-6 sm:pr-6 pl-0 pr-0 gap-8"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Controls & Compliance
            </h3>
            <p className="text-[15px] text-[#00000099]">
              DNC, GDPR, template approvals, domain <br /> warm-up, SSO
              (optional).
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

        {/* Evidence dashboards */}
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
              Evidence Dashboards
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Meetings, Proposals, Influenced <br /> Revenue—Exportable For
              Leadership.
            </p>
          </div>
          <div className="flex-1 overflow-hidden flex justify-end">
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
        background: "#EEF9FA",
      }}
    >
      <FeatureGrid />
    </section>
  );
}
