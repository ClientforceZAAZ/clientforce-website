"use client";

import { useEffect, useRef, useState } from "react";

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

const TABS = [
  {
    label: "Prospect",
    description: (<>Finder V2, Chrome Capture, And Embeddable <br className="hidden lg:block" /> Widgets Keep Your Pipeline Full.</>),
    image: "/images/how-it-works/prospect_bg.png",
    floatingLeft: { image: "/images/sales-loop/avatar_prospect.png", emoji: "👩🏼" },
    floatingRight: { avatars: ["👩", "🧔", "👩🏽"] },
    searchBar: true,
  },
  {
    label: "Engage",
    description: "Multichannel Sequences — Email, WhatsApp, LinkedIn, Voice — Run On Autopilot.",
    image: "/images/sales-loop/engage.png",
    floatingLeft: { emoji: "📧" },
    floatingRight: { avatars: ["👨", "👩🏾", "🧑"] },
    searchBar: false,
  },
  {
    label: "Propose",
    description: "Dynamic Proposals Auto-Built From Your Offer Docs And Sent With One Click.",
    image: "/images/sales-loop/propose.png",
    floatingLeft: { emoji: "📄" },
    floatingRight: { avatars: ["👩", "👨🏿", "🧔🏽"] },
    searchBar: false,
  },
  {
    label: "Call",
    description: "AI Voice Calls Warm Leads, Handle Objections, And Book Meetings Automatically.",
    image: "/images/sales-loop/call.png",
    floatingLeft: { emoji: "📞" },
    floatingRight: { avatars: ["🧑🏻", "👩🏼", "👨"] },
    searchBar: false,
  },
  {
    label: "Close",
    description: "One-Click Booking Links, E-Sign Accept, And Payment Deposits — All In The Proposal.",
    image: "/images/sales-loop/close.png",
    floatingLeft: { emoji: "🤝" },
    floatingRight: { avatars: ["👩🏽", "🧔", "👨🏾"] },
    searchBar: false,
  },
  {
    label: "Learn",
    description: "Analytics Surface What's Working — Best Steps, Channels, And Angles — Automatically.",
    image: "/images/sales-loop/learn.png",
    floatingLeft: { emoji: "📊" },
    floatingRight: { avatars: ["👩", "🧑🏻", "👨🏿"] },
    searchBar: false,
  },
  {
    label: "Repeat",
    description: "Clone Winning Campaigns To New Segments And Compound Your Results Week Over Week.",
    image: "/images/sales-loop/repeat.png",
    floatingLeft: { emoji: "🔄" },
    floatingRight: { avatars: ["👩🏾", "🧔🏽", "👨"] },
    searchBar: false,
  },
];


// Dashboard preview mockup 
function DashboardPreview({ tab }) {
  return (
    <div className="relative w-full">

      {/* Main dashboard card */}
      <div className="relative mx-auto rounded-2xl border border-gray-300 py-8 px-8 sm:px-16 overflow-hidden"
        style={{ minHeight: "320px", background: "#F8F8F8" }}
      >
         {/* Description */}
        <p className="text-center text-black text-lg sm:text-xl md:text-2xl mb-8 mx-auto leading-6 sm:leading-relaxed">
          <span className="font-bold">{tab.label}:</span> {tab.description}
        </p>
        {tab.image ? (
          <img src={tab.image} alt={tab.label} className="w-full h-full object-cover" />
        ) : (
          /* Placeholder mockup when no image */
          <div className="p-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#08A541]" />
                <div className="h-2 bg-gray-200 rounded w-40" />
                <div className="ml-auto flex gap-1">
                  <div className="h-6 w-16 bg-[#08A541] rounded-lg" />
                  <div className="h-6 w-10 bg-gray-100 rounded-lg" />
                </div>
              </div>
              {/* Tab row */}
              <div className="flex gap-2 mb-4">
                {["Widget", "Chrome Extension", "LeadForms", "Lead Finder"].map((t, i) => (
                  <div key={t} className={`text-[9px] px-2 py-1 rounded-md ${i === 3 ? "bg-[#08A541] text-white" : "bg-gray-100 text-gray-500"}`}>{t}</div>
                ))}
              </div>
              {/* Content rows */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-2 bg-gray-100 rounded w-32 mb-3" />
                  {["Rule 1", "Rule 2", "Rule 3"].map((r) => (
                    <div key={r} className="mb-2">
                      <div className="text-[9px] text-gray-400 mb-1">{r}</div>
                      <div className="flex gap-1">
                        {["Keyword", "Industry", "Location"].map((f) => (
                          <div key={f} className="h-5 bg-gray-100 rounded flex-1 flex items-center px-1">
                            <span className="text-[7px] text-gray-400">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="h-2 bg-gray-100 rounded w-24 mb-3" />
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="flex gap-2 mb-1.5 items-center">
                      <div className="w-4 h-4 rounded-full bg-gray-200" />
                      <div className="h-1.5 bg-gray-100 rounded flex-1" />
                      <div className="h-1.5 bg-gray-100 rounded w-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

     
      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateX(-33%) translateY(0); }
          50% { transform: translateX(-33%) translateY(-8px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

// Main Section
export default function AlwaysOnSalesLoop() {
  const [ref, visible] = useVisible();
  const [activeTab, setActiveTab] = useState(0);
  const active = TABS[activeTab];

  return (
    <section ref={ref} className="py-16 px-6 lg:px-50 bg-white">

      {/* Pill heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="flex justify-center mb-6 cursor-pointer"
      >
        <div className="bg-[#D0F56B] text-black font-degular font-bold text-lg lg:text-4xl px-8 py-2.5 mb-4 rounded-full">
          The Always-On Sales Loop
        </div>
      </div>

      {/* Tab nav */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.1s",
        }}
        className="flex flex-wrap items-center justify-center gap-2 mb-8"
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
              background: activeTab === i ? "black" : "white",
              color: activeTab === i ? "#D0F56B" : "black",
              borderColor: activeTab === i ? "#D0F56B" : "#00000033",
              transition: "all 0.25s ease",
            }}
            className="px-5 py-2 rounded-full cursor-pointer border text-sm sm:text-base font-bold hover:border-gray-400 hover:text-gray-800"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        key={activeTab}
        style={{ animation: "tabFadeIn 0.4s ease" }}
        className="max-w-4xl mx-auto"
      >

        {/* Dashboard preview */}
        <DashboardPreview tab={active} />
      </div>

      <style>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}