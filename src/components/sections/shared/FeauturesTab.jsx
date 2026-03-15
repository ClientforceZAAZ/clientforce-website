
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const tagColors = {
  green:  "bg-[#DEFFEA] text-black",
  yellow: "bg-[#EFFFC2] text-black",
  blue:   "bg-[#D5EEFF] text-black",
  purple: "bg-violet-100 text-violet-800",
  pink:   "bg-pink-100 text-pink-800",
};



// Notch SVG

const NOTCH_W = 108;
const NOTCH_H = 24;

function Notch({ x, bgColor = "#f5f5f3" }) {
  if (x === null) return null;

  const w = NOTCH_W;
  const h = NOTCH_H;

  // Full closed shape for the white fill
  const fillPath = `
    M 0,${h}
    Q ${w * 0.25},${h} ${w * 0.35},${h * 0.4}
    Q ${w * 0.5},0 ${w * 0.65},${h * 0.4}
    Q ${w * 0.75},${h} ${w},${h}
    Z
  `;

  // Only the curved top edge for the stroke — no bottom line
  const strokePath = `
    M 0,${h}
    Q ${w * 0.25},${h} ${w * 0.35},${h * 0.4}
    Q ${w * 0.5},0 ${w * 0.65},${h * 0.4}
    Q ${w * 0.75},${h} ${w},${h}
  `;

  return (
    <div
      style={{
        position: "absolute",
        top: -NOTCH_H,
        left: x - NOTCH_W / 2,
        transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: "none",
        zIndex: 10,
        width: NOTCH_W,
        height: NOTCH_H,
      }}
    >
      <svg
        width={NOTCH_W}
        height={NOTCH_H}
        viewBox={`0 0 ${NOTCH_W} ${NOTCH_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* White fill for the bump */}
        <path d={fillPath} fill="#ffffff" />
        {/* Border only on the curved top edge, matching border-gray-300 = #d1d5db */}
        <path d={strokePath} fill="none" stroke="#d1d5db" strokeWidth="1" />
      </svg>
    </div>
  );
}


const VISIBLE_COUNT = 4;

// ----- Main component --------

export default function FeatureTabs({ TABS = [] }) {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const [expanded, setExpanded] = useState(false);
  const [notchX, setNotchX]     = useState(null);

  const tabRefs = useRef({});
  const cardRef = useRef(null);

  const visibleTabs = expanded ? TABS : TABS.slice(0, VISIBLE_COUNT);
  const activeTab   = TABS.find((t) => t.id === activeId) ?? TABS[0];

  useEffect(() => {
    function calculate() {
      const tabEl  = tabRefs.current[activeId];
      const cardEl = cardRef.current;
      if (!tabEl || !cardEl) return;
      const tabRect  = tabEl.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();
      setNotchX((tabRect.left + tabRect.width / 2) - cardRect.left);
    }
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [activeId, expanded]);

  function handleSeeMore() {
    if (expanded) {
      const stillVisible = TABS.slice(0, VISIBLE_COUNT).some((t) => t.id === activeId);
      if (!stillVisible) setActiveId(TABS[0].id);
    }
    setExpanded((v) => !v);
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center px-20 py-16">
      <div className="w-full">

        {/* Tab bar — no bottom margin so it sits flush above the card */}
        <div className="mx-auto mb-0 flex w-fit flex-wrap items-center gap-0.5 rounded-full bg-gray-900 p-1.5">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el; }}
              onClick={() => setActiveId(tab.id)}
              className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-200 cursor-pointer ${
                activeId === tab.id
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
         {TABS.length > 4 ? ( <button
            onClick={handleSeeMore}
            className="flex items-center gap-1 rounded-full px-4 py-2 text-[13.5px] font-medium text-gray-400 transition-colors hover:text-gray-100"
          >
            {expanded ? "See Less " : "See More →"}
          </button>) : "" }
        </div>

        {/* Feature card */}
        <div
          ref={cardRef}
          key={activeId}
          style={{ animation: "featureCardFadeUp 0.35s ease both" }}
          className="relative flex flex-col items-center mt-10 border border-gray-300 gap-12 rounded-3xl bg-white p-8 shadow-lg md:flex-row md:p-12"
        >
          {/* Concave notch cut into the top edge */}
          <Notch x={notchX} bgColor="#f5f5f3" />

          {/* Left: copy */}
          <div className="flex-1">
            <h2 className={`mb-4 text-4xl ${activeTab.headingStyle} font-bold leading-tight text-gray-900`}>
              {activeTab.heading}{" "}
              <span className="text-gray-400">{activeTab.headingMuted}</span>
            </h2>
            {activeTab.description && (
              <div>
                  <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-gray-500">
                    {activeTab.description}
                  </p>
                  <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-gray-500">
                    {activeTab.more_description}
                   </p>
              </div>
              
            )}
            {activeTab.bullets.length > 0 && (
              <ul className="mb-8 flex flex-col gap-3">
                {activeTab.bullets.map((b) => (
                  <li key={b.bold} className="flex items-start gap-2.5 text-sm text-black">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                    <span>
                      <strong className="text-black">{b.bold}</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab.tags.length > 0 && (
              <div className="mb-7 flex flex-wrap gap-2">
                {activeTab.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-md px-3.5 py-1.5 text-[12.5px] font-medium ${tagColors[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
            {activeTab.btn && (
              <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:border-gray-900 hover:bg-gray-50">
                Learn More <Image src="/icons/→.svg" width={11} height={15} />
              </button>
            )}
          </div>

          {/* Right: mockup */}
          <div className="flex flex-1 items-center justify-center">
            <Image src={activeTab.image} width={558} height={370} quality={100} />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes featureCardFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
