"use client";

import Image from "next/image";
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



const ADD_ONS = [
  { title: "Credit Packs", description: "Email Verification, Enrichment, AI Voice Minutes" },
  { title: "Warm-Up & Deliverability Suite", description: null },
  { title: "Phone Numbers", description: "Purchase/Assign Per Region" },
  { title: "Done-For-You Playbooks", description: "(Industry/Goal Packs)" },
];

const INCLUDED = [
  { title: "Agent Builder:", description: "Start With AI, Playbooks, Or From Scratch" },
  { title: "Business Knowledge:", description: "Upload PDFs/URLs; Agents Learn Your Offer" },
  { title: "Sequence Orchestrator:", description: "Timed, Branched, Goal-Driven" },
  { title: "Unified Timeline & Inbox", description: null },
  { title: "Compliance Basics:", description: "Unsub Links, Domain Verification" },
  { title: "Fast Support + Onboarding Guides", description: null },
];

export default function PricingExtras() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-8 px-6 lg:px-50">
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
        className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col lg:flex-row gap-8"
      >

        {/*  Left: Add-Ons  */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-black font-degular mb-5">Add-Ons (All Plans)</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {ADD_ONS.map((item, i) => (
              <div
                key={item.title}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
                }}
                className="flex flex-col gap-1.5 mb-4"
              >
                  <Image src="/images/pricing/icons/check.svg" width={15} height={15} />
                <p className="text-[15px] font-bold text-gray-900 leading-snug">{item.title}</p>
                {item.description && (
                  <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        {/* <div className="hidden lg:block w-px bg-black self-stretch" />
        <div className="block lg:hidden h-px bg-black" /> */}



        {/*  Right: What's Included  */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-black font-degular mb-5">What's Included In Every Plan</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {INCLUDED.map((item, i) => (
              <div
                key={item.title}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.07}s, transform 0.5s ease ${0.2 + i * 0.07}s`,
                }}
                className="flex items-start gap-1.5 mr-2 mb-4"
              >
                <Image src="/images/pricing/icons/check.svg" width={15} height={15} />
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-bold text-black">{item.title} </span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}