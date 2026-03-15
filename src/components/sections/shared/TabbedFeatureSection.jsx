

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

export default function TabbedFeatureSection({ background = "", tabs = [], imageRight }) {
  const [ref, visible] = useVisible();
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  if (!tabs.length) return null;

  return (
    <section
      ref={ref}
      className="py-8 px-6 lg:px-16 relative"
      style={{ background }}
    >
      {/* Tabs */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="flex flex-wrap gap-3 justify-center mb-8"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
              borderColor: activeTab === i ? "#0AD855" : "#00000033",
              color: activeTab === i ? "#11A848" : "#000000",
              background: "white",
              transition: "all 0.25s ease",
            }}
            className="px-5 py-2 rounded-full border text-sm font-bold cursor-pointer"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
        }}
        className={`bg-white border border-gray-300 rounded-3xl overflow-hidden `}
      >
        <div
          key={activeTab}
          style={{ animation: "tabFadeIn 0.35s ease" }}
          className={`flex flex-col ${imageRight? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          {/* Left — image */}
          <div className="md:w-[50%] p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            {active?.image && (
              <img
                src={active.image}
                alt={active.imageAlt || ""}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>

          {/* Right — text */}
          <div className="md:w-[50%] p-8 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-10 mb-6">
              {active?.title}
            </h2>
            <div className="space-y-4">
              {active?.bullets?.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                    <span className="font-bold text-black">{b.bold}</span>{b.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-lg text-[#00000099] mb-6">{active?.description}</div>
            <div className="text-lg text-[#00000099]">{active?.moreDescription}</div>
          </div>
        </div>
      </div>



      <Image src="/images/guardrails/Ellipse_guardrails_right.png" width={400} height={250} className="absolute bottom-[-20] left-0" />
      <Image src="/images/guardrails/Ellipse_guardrails_left.png" width={400} height={250} className="absolute bottom-[-20] right-0" />

      <Image src="/images/guardrails/icons/right.svg" width={50} height={50} className="absolute top-50 right-0" />
      <Image src="/images/guardrails/icons/left.svg" width={50} height={50} className="absolute top-50 left-0" />

      <style>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}