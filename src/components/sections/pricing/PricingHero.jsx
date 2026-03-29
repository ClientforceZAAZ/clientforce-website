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


const PLANS = [
  {
    icon: (<><img src="/images/pricing/icons/Vector (2).svg" alt="" /></>),
    name: "Launch",
    tag: null,
    subtitle: (<>For Solos & Small Teams Getting <br /> Their First Wins</>),
    monthlyPrice: 59,
    annualPrice: 47,
    cta: "Get Started →",
    ctaStyle: "bg-[#35E834] text-black",
    cardStyle: "bg-white border border-gray-200",
    features: [
        { bold: "1 AI Sales Agent", text: "(Goal-Based Campaign)"},
        { bold: "Core Channels:", text: "Email + LinkedIn Touches"},
        { bold: "Dynamic Proposals", text: "(Standard Templates)"},
        { bold: "Finder V2:", text: " 1 Saved Query (Auto-Prospect)"},
        { bold: "Chrome Capture:", text: "(1-Click Add To Pipeline)"},
        { bold: "Embeddable Widget:", text: " Lead Form + Callback"},
        { bold: "Unified Inbox", text: " (Email + Notes)"},
        { bold: "Analytics (Core):", text: "Opens, Replies, Bookings"},
        { bold: "Compliance Basics:", text: "Domain Verify, Unsub"},
        { bold: "Starter Credits", text: " (Email Verify & Voice)"},
    ],
    outcome: "Launch An End-To-End Campaign Fast And Prove ROI.",
  },
  {
    icon: (<><img src="/images/pricing/icons/Graph Up.svg" alt="" /></>),
    name: "Growth",
    tag: "Most Popular",
    subtitle: (<>For Businesses That Want Perpetual <br /> Pipeline & Multichannel Follow-Up</>),
    monthlyPrice: 149,
    annualPrice: 119,
    cta: "Get Started →",
    ctaStyle: "bg-[#35E834] text-black",
    cardStyle: "bg-white border-2 border-black",
    dark: false,
    features: [
        { bold: "Up To 5 AI Sales Agents", text: ""},
        { bold: "Multichannel:", text: "Email, WhatsApp, LinkedIn, AI Voice (WA Template Fallback To Email If Unapproved) 1 Voice Step Per Sequence (Minutes Included)"},
        { bold: "Dynamic Proposals At Scale", text: "(Advanced Merge Fields)"},
        { bold: "Finder V2:", text: " Up To 3 Saved Queries (Scheduled Intake)"},
        { bold: "Embeddable Widget:", text: "Chat + Callback + Forms"},
        { bold: "Unified Inbox:", text: "Email, WA Replies, Call Notes"},
        { bold: "Analytics (Advanced):", text: " Step Performance, A/B Subjects"},
        { bold: "Number Reputation & Deliverability Health", text: ""},
        { bold: "Team Seats (3) & Roles", text: ""},
        { bold: "More Credits", text: "(Verify, Enrichment, Voice)"},
    ],
    outcome: "Launch An End-To-End Campaign Fast And Prove ROI.",
  },
  {
    icon: (<><img src="/images/pricing/icons/Union.svg" alt="" /></>),
    name: "Scale / Agency",
    tag: null,
    subtitle: "For Agencies & Scale-Ups Managing Multiple Brands Or Clients",
    monthlyPrice: 299,
    annualPrice: 239,
    cta: "Talk To Sales →",
    ctaStyle: "bg-[#35E834] text-black",
    cardStyle: "bg-black border border-gray-200",
    features: [
        { bold: "Unlimited AI Sales Agents", text: ""},
        { bold: "Multi-Workspace", text: "(Client Folders, Brand Isolation)"},
        { bold: "SLA + Priority Support", text: ""},
        { bold: "Advanced Approvals & Guardrails", text: "(DNC, GDPR/TCPA Tooling)"},
        { bold: "Deeper Analytics:", text: "Revenue Influence, Team Reporting"},
        { bold: "Seats (10+) & Granular Permissions", text: ""},
        { bold: "Custom WA Templates & Numbers Pool", text: ""},
        { bold: "Dedicated IP / Deliverability Options", text: ""},
        { bold: "API & Integrations", text: "(CRM, Billing, Webhooks)"},
         { bold: "Bulk credits ", text: "(best rates)Z"},
    ],
    dark: true,
    outcome: "Outcome: Productive AI Sales For Every Client—At Scale And Under Control.",
  },
];

function PlanCard({ plan, annual, visible, delay }) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? plan.dark ? "0 20px 60px rgba(8,165,65,0.3)" : "0 20px 60px rgba(0,0,0,0.12)"
          : plan.dark ? "0 8px 32px rgba(8,165,65,0.15)" : "0 4px 20px rgba(0,0,0,0.06)",
      }}
      className={`relative flex-1 rounded-3xl p-6 flex flex-col ${plan.cardStyle}`}
    >
      {/* Popular badge */}
      {plan.tag && (
       <div className="flex items-center justify-center mb-2 absolute -top-3 right-4">
            <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
              <div className=" text-black text-[12px] font-bold rounded-full px-3 py-1 flex items-center justify-center" style={{ background: "linear-gradient(to right,#E5FFFA 60%, #0AD85599)"}}>
                <span className="text-sm font-bold"> {plan.tag}</span>
              </div>
            </div>
        </div>

      )}

 
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{plan.icon}</span>
          <h3 className={`text-[22px] font-bold ${plan.dark ? "text-white" : "text-black"}`}>{plan.name}</h3>
        </div>
        <p className={`text-sm leading-relaxed ${plan.dark ? "text-[#FFFFFF99]" : "text-gray-500"}`}>{plan.subtitle}</p>
      </div>

      <div className={`my-4 border-t ${ plan.dark ? "border-[#FFFFFF52]" : "border-[#00000024] "}`} />

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-end gap-1">
          <span className={`text-6xl font-extrabold ${plan.dark ? "text-white" : "text-black"}`}>
            ${price}
          </span>
          <span className={`text-sm mb-2 ${plan.dark ? "text-white" : "text-black"}`}>/ Month</span>
        </div>
        {annual && (
          <p className="text-[11px] text-[#08A541] font-medium mt-0.5">
            Billed annually · Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-full border-2 border-white font-bold text-xl mt-2 mb-5 transition-all duration-200 hover:opacity-90 hover:scale-[1.02] ${plan.ctaStyle} hover:scale-105 cursor-pointer`}
         style={{
              boxShadow:
                "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
            }}
      >
        {plan.cta}
      </button>

      

      {/* Features */}
      <ul className="space-y-3 flex-1 mt-5">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            {plan.dark ? (<Image src="/images/pricing/icons/white_check.svg" width={14} height={14} />) : (<Image src="/images/pricing/icons/check.svg" width={14} height={14} />)}
            <p className={`text-[13px] leading-snug ${plan.dark ? "text-white" : "text-black"}`}><span className="font-bold">{f.bold}</span> {f.text}</p>
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className={`mt-5 pt-4 border-t ${plan.dark ? "border-white/10" : "border-gray-100"}`}>
        <p className={`text-[11px] leading-relaxed ${plan.dark ? "text-gray-400" : "text-gray-400"}`}>
          <span className={`font-bold ${plan.dark ? "text-white" : "text-gray-700"}`}>Outcome: </span>
          {plan.outcome}
        </p>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [ref, visible] = useVisible();
  const [annual, setAnnual] = useState(false);

  return (
    <section
      ref={ref}
      className="mt-18 md:mt-21  relative"
    >
      {/* Top Hero Section */}
      <div className="pt-6 sm:pt-12 bg-cover bg-center " style={{ backgroundImage: "url('/images/pricing/pricing_heroBg.png')", }}>
        
        <div
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}
          className="flex justify-center mb-3 sm:mb-5"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
              <div className="bg-[#E1F1F2] text-black rounded-full px-3 py-1 flex items-center justify-center">
                <span className="text-sm font-bold">Pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}
          className="text-center mb-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-degular text-black leading-8 md:leading-12 lg:leading-14 mx-auto z-30">
            Simple Plans To Launch Your <br /> First AI Sales Agent Today
          </h1>
          <p className="text-gray-500 mt-2 sm:mt-4 text-lg md:text-[22px] font-medium z-30">
            Start In Minutes. Scale When You're Ready.
          </p>
        </div>

        {/* Toggle */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.2s",
          }}
          className="flex justify-center mb-10 "
        >
          <div className="flex items-center gap-1 bg-white rounded-lg border p-1 relative z-30">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${!annual ? "bg-[#35E834] text-black shadow-sm" : "text-[#00000099]"} cursor-pointer`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${annual ? "bg-[#35E834] text-black shadow-sm" : "text-[#00000099]"} cursor-pointer`}
            >
              Annual
            </button>
            {/* Save badge */}
           <div className="flex items-center justify-center" style={{
                opacity: annual ? 1 : 1,
                transition: "opacity 0.3s ease",
                position: "absolute",
                top: "-0.5rem",
                right: "0rem",
                
              }}>
                <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                    <div className=" bg-black text-white rounded-full px-2 flex items-center justify-center" >
                    <span className="text-[10px] font-bold">Save 30%</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className=""  style={{
                position: "absolute",
                top: "12rem",  
              }}>
        <img src="/images/pricing/Vector_pricing_hero.png" alt="" />
      </div>

      {/* Plan cards */}
      <div className="z-30 flex flex-col lg:flex-row gap-10 px-6 sm:px-20 mx-auto items-stretch">
        {PLANS.map((plan, i) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            annual={annual}
            visible={visible}
            delay={`${0.15 + i * 0.12}s`}
          />
        ))}
      </div>
    </section>
  );
}