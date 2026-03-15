"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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


const STEPS = [
  {
    step: "STEP 1",
    title: "Create Your AI Sales Agent",
    subtitle: "Pick A DFY Playbook Or Use Chat-Style Setup. Your Agent Learns From Your PDFs/Links And Adopts Your Positioning, Pricing, Proof, And Tone.",
    bullets: [
      { bold: "Start Fast:", text: " AI Builder, Playbooks By Industry/Goal, Or Build From Scratch." },
      { bold: "Train With Your Docs:", text: " Upload Pricing Sheets, Decks, FAQs. Agent Extracts Benefits, Differentiators, Objections, And CTAs." },
      { bold: "Set The Goal:", text: " Book Demos, Convert Trials, Close High-Ticket, Reactivate Leads." },
      { bold: "Guardrails On:", text: " Time Windows, Daily Caps, Compliance Defaults Included." },
    ],
    outcome: "A Goal-Aligned Agent With A Ready-To-Run, Personalized Campaign Plan.",
    image: (<><Image src="/images/how-it-works/step_one.png" width={100} height={40} /></>),
    imageLeft: false,
  },
  {
    step: "STEP 2",
    title: "Create Your AI Sales Agent",
    subtitle: "Import CSV, Enable The Finder For Auto-Prospecting, Add Widgets To Your Site, Or Capture From LinkedIn/Google Business Via The Chrome Extension.",
    bullets: [
      { bold: "Finder V2 (Auto-Prospecting):", text: " Keywords, Industry, Geo, Frequency → Fresh Leads Flow In On Schedule." },
      { bold: "Train With Your Docs:", text: " Upload Pricing Sheets, Decks, FAQs. Agent Extracts Benefits, Differentiators, Objections, And CTAs." },
      { bold: "Embeddable Widgets:", text: " Chat + Callback + Forms; Branded, Compliant (GDPR/TCPA)." },
      { bold: "Smart Import:", text: " Field Mapping, De-Dups, Email Verification; Bad Addresses Suppressed." },
    ],
    outcome: "Your Pipeline Refills Itself — Clean, Enriched, And Instantly Routed.",
    image: (<><Image src="/images/how-it-works/step_two.png" width={100} height={40} /></>),
    imageLeft: true,
  },
  {
    step: "STEP 3",
    title: "Launch A Perpetual Campaign",
    subtitle: "Your Agent Runs A Goal-Aligned Sequence — Email → WhatsApp → Voice — Sends Dynamic Proposals, And Books Calls 24/7 With Compliance Guardrails.",
    bullets: [
      { bold: "Multichannel Orchestration:", text: " Email As Backbone; WA Nudge; One Strategic AI Voice Call To Qualify/Close." },
      { bold: "Dynamic Proposals At Scale:", text: " Personalized By Company/Industry/Pain. Tracked For Opens & Time-On-Page." },
      { bold: "Unified Inbox:", text: " Every Email, WA Reply, Call Note, And Booking In One Thread With Next-Best-Action." },
      { bold: "Optimization Built-In:", text: " Step Performance, Reply Types, A/B Subjects, Deliverability & Number Reputation." },
    ],
    outcome: "Always-On Campaigns That Prospect, Engage, And Close — Without Manual Chasing.",
     image: (<><Image src="/images/how-it-works/step_three.png" width={100} height={40} /></>),
    imageLeft: false,
  },
];

function StepCard({ step, index }) {
  const [ref, visible] = useVisible(0.15);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
      className=""
      style2={{
        background: "linear-gradient(135deg, #0d1f0d 0%, #0a1a0a 100%)",
      }}
    >
      <div
        className={`relative flex flex-col lg:flex-row items-center py-6 gap-8 bg-linear-to-bl from-[#FFFFFF0D] from-60% to-[#6BE8FD33] border border-[#FFFFFF0D]`}
      >
        {/* Image side */}
        {step.imageLeft && (
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition:
                "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s",
            }}
            className="lg:w-[50%] relative overflow-hidden max-w-44"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a1a] to-[#061a0a]" /> */}
            <Image
              src="/images/how-it-works/steps_card_image_left.png"
              alt={step.title}
              width={1060}
              height={784}
            />
          </div>
        )}

        {/* Text side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : step.imageLeft
                ? "translateX(24px)"
                : "translateX(-24px)",
            transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
          }}
          className={`lg:w-[50%] flex flex-col justify-center ${step.imageLeft ? "pr-8" : "pl-6"}`}
        >
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-2">
            {step.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-white leading-relaxed mb-5">
            {step.subtitle}
          </p>

          {/* Bullets */}
          <div className="space-y-3 mb-6 p-3 shadow-md border border-[#FFFFFF0D] rounded-2xl" style={{ background: "#FFFFFF0D"}}>
            {step.bullets.map((b, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-12px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`,
                }}
                className="flex gap-2"
              >
                <Image
                  src="/images/how-it-works/check-square.svg"
                  width={14}
                  height={14}
                />
                <p className="text-xs text-[#FFFFFFCC] leading-relaxed">
                  <span className="font-bold text-white">{b.bold}</span>
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="">
            <p className="text-base text-white">
              <span className="font-bold" style={{ color: "#63E5FB"}}>Outcome: </span>
              {step.outcome}
            </p>
          </div>
        </div>

        {/* Image side — right */}
        {!step.imageLeft && (
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition:
                "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s",
            }}
            className="lg:w-[50%] relative overflow-hidden"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a1a] to-[#061a0a]" /> */}
            <Image
              src="/images/how-it-works/steps_card_image.png"
              alt={step.title}
              width={1060}
              height={784}
            />
          </div>
        )}

        {/* Step Tag */}
        <div
          style={{
            position: "absolute",
            top: "-1.4rem",
            left: step.imageLeft ? "33rem" : "1.5rem",
          }}
        >
          {step.image}
        </div>
      </div>
    </div>
  );
}


//  Main Section 
export default function HowItWorks() {
  return (
    <section
      className="py-16 px-6 lg:px-16"
      style={{ background: "linear-gradient(to bottom, #001508 0%,#001508 70%, #034a1d 100%)" }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-6xl font-bold font-degular text-white">
          How It Works <span className="text-[#08A541]">(Simple Steps)</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {STEPS.map((step, i) => (
          <StepCard key={step.step} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}