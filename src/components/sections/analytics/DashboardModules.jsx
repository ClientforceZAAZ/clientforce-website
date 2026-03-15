
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

const MODULES = [
  {
    id: 1,
    label: "Campaign Overview",
    title: "Campaign Overview (Goal-Aware)",
    bullets: [
      { bold: "KPIs By Goal:", text: " Open → Reply → Positive → Meetings → Wins → Revenue" },
      { bold: "Funnel View Per Campaign/Agent", text: " With Conversion Deltas Vs Last Period" },
      { bold: "Lead Velocity", text: " (Time-To-First-Touch, Touches-To-Meeting)" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* Agent Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center text-xs">🧑</div>
          <span className="text-xs font-semibold text-gray-700">New ForceAgent 1</span>
        </div>
        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Agent Name", value: "New Force Agent", full: false },
            { label: "Avatar", value: null, upload: true },
            { label: "Campaign Name", value: "Typing...", full: false },
            { label: "Primary Goal", value: "-", full: false },
            { label: "Audience Description", value: "-", full: false },
            { label: "Owner", value: "-", full: false },
          ].map((field, i) => (
            <div key={i} className={field.full ? "col-span-2" : ""}>
              <p className="text-[9px] text-gray-400 mb-1">{field.label}</p>
              {field.upload ? (
                <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span className="text-[9px] text-gray-400 flex-1">Upload Avatar</span>
                  <span className="text-[8px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">Use Default</span>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-lg px-2 py-1.5">
                  <span className="text-[9px] text-gray-500">{field.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Step Analytics",
    title: "Step Analytics (Per Step)",
    bullets: [
      { bold: "Open, Click & Reply Rates:", text: " Per email step with trend arrows" },
      { bold: "Drop-Off Points:", text: " See exactly where leads disengage" },
      { bold: "Best Performing Steps:", text: " Auto-highlighted for fast duplication" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Step Performance</p>
        {["Email Step 1", "WhatsApp Nudge", "Voice Call", "Proposal Drop"].map((step, i) => (
          <div key={step} className="flex items-center gap-2 mb-2">
            <span className="text-[9px] text-gray-500 w-24 flex-shrink-0">{step}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#08A541] to-[#0FC6D8]"
                style={{ width: `${[72, 58, 44, 81][i]}%` }}
              />
            </div>
            <span className="text-[9px] font-semibold text-gray-700 w-8 text-right">{[72, 58, 44, 81][i]}%</span>
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 3,
    label: "Channel Mix Performance",
    title: "Channel Mix Performance",
    bullets: [
      { bold: "Email vs WhatsApp vs Voice:", text: " Side-by-side reply rates" },
      { bold: "Best Channel Per Segment:", text: " AI recommendation per audience type" },
      { bold: "Cost Per Reply:", text: " By channel to optimize spend" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Channel Breakdown</p>
        {[
          { label: "Email", color: "#3b82f6", val: 65 },
          { label: "WhatsApp", color: "#22c55e", val: 82 },
          { label: "Voice", color: "#f59e0b", val: 48 },
        ].map((ch) => (
          <div key={ch.label} className="flex items-center gap-2 mb-2">
            <span className="text-[9px] text-gray-500 w-16 flex-shrink-0">{ch.label}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${ch.val}%`, background: ch.color }} />
            </div>
            <span className="text-[9px] font-semibold w-8 text-right" style={{ color: ch.color }}>{ch.val}%</span>
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 4,
    label: "Outcome & Revenue Attribution",
    title: "Outcome & Revenue Attribution",
    bullets: [
      { bold: "Revenue Per Campaign:", text: " Track closed deals back to source" },
      { bold: "Meeting-To-Close Rate:", text: " By agent and playbook" },
      { bold: "Pipeline Value:", text: " In-progress deals with weighted probability" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Revenue Attribution</p>
        <div className="grid grid-cols-3 gap-2">
          {[{ label: "Closed", val: "$42K", color: "#08A541" }, { label: "Pipeline", val: "$128K", color: "#3b82f6" }, { label: "Close Rate", val: "34%", color: "#f59e0b" }].map((m) => (
            <div key={m.label} className="bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-base font-extrabold" style={{ color: m.color }}>{m.val}</p>
              <p className="text-[9px] text-gray-400 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    ),
  },
  {
    id: 5,
    label: "Cohorts & Segments",
    title: "Cohorts & Segments",
    bullets: [
      { bold: "Filter By Industry, Company Size:", text: " Or custom tag" },
      { bold: "Cohort Comparison:", text: " Week-over-week performance per segment" },
      { bold: "Best Fit Profiles:", text: " Auto-surface highest converting ICPs" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Segment Performance</p>
        {["SaaS", "Agency", "E-Commerce", "Consulting"].map((seg, i) => (
          <div key={seg} className="flex items-center justify-between mb-2 py-1 border-b border-gray-50">
            <span className="text-[9px] text-gray-600">{seg}</span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-semibold text-[#08A541]">{[68, 74, 61, 79][i]}% reply</span>
              <span className="text-[8px] text-gray-400">{["+4%", "+11%", "-2%", "+8%"][i]}</span>
            </div>
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 6,
    label: "Experiment Lab",
    title: "Experiment Lab (A/B Testing)",
    bullets: [
      { bold: "Subject Line A/B:", text: " Auto-declare winner at statistical significance" },
      { bold: "Message Angle Testing:", text: " Pain vs. benefit vs. curiosity hooks" },
      { bold: "Send Time Experiments:", text: " Find the optimal window per audience" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">A/B Test Results</p>
        {[{ label: "Variant A", val: 38, winner: false }, { label: "Variant B", val: 61, winner: true }].map((v) => (
          <div key={v.label} className="flex items-center gap-2 mb-2">
            <span className="text-[9px] text-gray-500 w-16">{v.label}</span>
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${v.val}%`, background: v.winner ? "#08A541" : "#9CA3AF" }} />
            </div>
            <span className="text-[9px] font-bold" style={{ color: v.winner ? "#08A541" : "#9CA3AF" }}>{v.val}%</span>
            {v.winner && <span className="text-[8px] bg-[#F0FDF4] text-[#08A541] px-1.5 py-0.5 rounded-full font-semibold">Winner</span>}
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 7,
    label: "Deliverability & Number Reputation",
    title: "Deliverability & Number Reputation",
    bullets: [
      { bold: "Inbox Placement Rate:", text: " Per domain and sending pool" },
      { bold: "Spam Score Monitoring:", text: " Real-time alerts before damage occurs" },
      { bold: "Number Health:", text: " Call answer rates and flagging status" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Health Status</p>
        {[{ label: "Inbox Rate", val: "94%", status: "good" }, { label: "Spam Score", val: "Low", status: "good" }, { label: "Number Health", val: "Clean", status: "good" }].map((item) => (
          <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-gray-50">
            <span className="text-[9px] text-gray-500">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#08A541]" />
              <span className="text-[9px] font-semibold text-[#08A541]">{item.val}</span>
            </div>
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 8,
    label: "Compliance & Guardrails Health",
    title: "Compliance & Guardrails Health",
    bullets: [
      { bold: "GDPR/TCPA Status:", text: " Per contact and campaign" },
      { bold: "Unsub & DNC Sync:", text: " Automatic across all channels" },
      { bold: "Send Cap Adherence:", text: " Daily limits respected per agent" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Compliance Dashboard</p>
        {[{ label: "GDPR Compliance", ok: true }, { label: "TCPA Compliance", ok: true }, { label: "DNC List Sync", ok: true }, { label: "Send Cap Status", ok: true }].map((item) => (
          <div key={item.label} className="flex items-center gap-2 py-1">
            <div className="w-4 h-4 rounded-full bg-[#08A541] flex items-center justify-center flex-shrink-0">
              <svg width="7" height="6" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[9px] text-gray-600">{item.label}</span>
          </div>
        ))} */}
      </div>
    ),
  },
  {
    id: 9,
    label: "SLA & Speed To Lead",
    title: "SLA & Speed To Lead",
    bullets: [
      { bold: "First Touch Time:", text: " Average minutes from lead capture to contact" },
      { bold: "SLA Breach Alerts:", text: " Notify when leads go cold beyond threshold" },
      { bold: "Response Velocity Trends:", text: " Week-over-week improvement tracking" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">Speed To Lead</p>
        <div className="grid grid-cols-2 gap-2">
          {[{ label: "Avg First Touch", val: "4 min", color: "#08A541" }, { label: "SLA Breaches", val: "0", color: "#3b82f6" }, { label: "Leads Today", val: "47", color: "#f59e0b" }, { label: "Velocity", val: "+12%", color: "#08A541" }].map((m) => (
            <div key={m.label} className="bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-sm font-extrabold" style={{ color: m.color }}>{m.val}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    ),
  },
  {
    id: 10,
    label: "Alerts & AI Recommendations",
    title: "Alerts & AI Recommendations",
    bullets: [
      { bold: "Smart Alerts:", text: " Drop in reply rate, spike in unsubscribes, missed bookings" },
      { bold: "AI Suggestions:", text: " 'Pause Step 3 — reply rate dropped 40% this week'" },
      { bold: "One-Click Fix:", text: " Apply recommendation instantly from the alert" },
    ],
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        {/* <p className="text-xs font-semibold text-gray-700 mb-3">AI Recommendations</p>
        {[
          { text: "Pause Step 3 — reply rate dropped 40%", type: "warning" },
          { text: "Promote Variant B — winner detected", type: "success" },
          { text: "Warm up domain — inbox rate at 81%", type: "warning" },
        ].map((alert, i) => (
          <div key={i} className="flex items-start gap-2 mb-2 p-2 rounded-lg" style={{ background: alert.type === "success" ? "#F0FDF4" : "#FFFBEB" }}>
            <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: alert.type === "success" ? "#08A541" : "#F59E0B" }} />
            <span className="text-[9px] text-gray-600 leading-relaxed">{alert.text}</span>
          </div>
        ))} */}
      </div>
    ),
  },
];

export default function DashboardsModules() {
  const [ref, visible] = useVisible();
  const [activeId, setActiveId] = useState(1);

  const activeModule = MODULES.find((m) => m.id === activeId);

  return (
    <section ref={ref} className="py-16 px-6 lg:px-16 bg-[#EEF9FA] relative">

      {/* Pill Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="flex justify-center mb-10"
      >
        <div className="bg-[#D0F56B] text-black font-bold text-2xl lg:text-[40px] font-degular px-6 py-1 rounded-2xl">
          Dashboards & Modules
        </div>
      </div>

      {/* Main Layout */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}
        className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto"
      >

        {/* Left — Module List */}
        <div className="flex flex-col gap-2 w-fit flex-shrink-0">
          {MODULES.map((module, i) => (
            <button
              key={module.id}
              onClick={() => setActiveId(module.id)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.04}s, transform 0.5s ease ${0.1 + i * 0.04}s`,
                background: activeId === module.id ? "#0AD8551A" : "white",
                borderColor: activeId === module.id ? "#0AD855" : "#00000033",
                color: activeId === module.id ? "#11A848" : "black",
              }}
              className="text-left text-base px-4 py-2.5 rounded-full border font-bold transition-all duration-200 hover:border-[#D0F56B] hover:text-gray-800 cursor-pointer"
            >
              {module.id}. {module.label}
            </button>
          ))}
        </div>

        {/* Right — Preview + Description */}
        <div className="flex-1 flex flex-col gap-4 border border-[#00000033] rounded-2xl bg-white">

          {/* Dashboard Preview */}
          <div
            key={activeId}
            style={{ animation: "fadeSlideIn 0.35s ease" }}
            className="bg-gradient-to-br from-[#e0f2fe] to-[#d1fae5] rounded-2xl p-4 mb-auto"
          >
            {activeModule?.preview}
          </div>

          {/* Description */}
          <div
            key={`desc-${activeId}`}
            style={{ animation: "fadeSlideIn 0.4s ease" }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <h3 className="text-3xl font-bold text-black mb-6">
              {activeModule?.title}
            </h3>
            <div className="space-y-2">
              {activeModule?.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                   <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-sm text-black leading-relaxed">
                    <span className="font-bold text-gray-900">{bullet.bold}</span>
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


      
      <Image src="/images/guardrails/Ellipse_guardrails_right.png" width={400} height={250} className="absolute bottom-[-20] left-0" />
      <Image src="/images/guardrails/Ellipse_guardrails_left.png" width={400} height={250} className="absolute bottom-[-20] right-0" />

      <Image src="/images/guardrails/icons/right.svg" width={50} height={50} className="absolute top-50 right-0" />
      <Image src="/images/guardrails/icons/left.svg" width={50} height={50} className="absolute top-50 left-0" />

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}