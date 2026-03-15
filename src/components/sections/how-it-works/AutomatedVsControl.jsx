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

export default function AutomatedVsControl() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-20 px-6 lg:px-50 bg-white">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-14px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl lg:text-[40px] font-degular font-bold text-black">
          What Gets Automated{" "}
          <span className="text-gray-400 font-bold">Vs </span>
          <span style={{ color: "#A05BE6"}}>What You Control</span>
        </h2>
      </div>

      {/* Two cards */}
      <div className="flex flex-col md:flex-row gap-5">

        {/* Automated */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            background: "#0AD85526",
          }}
          className="flex-1 rounded-3xl p-8 flex flex-col items-center text-center shadow-md"
        >
          <div className="bg-gray-900 text-[#D0F56B] text-base font-bold px-5 py-2 rounded-full mb-8 border border-[#D0F56B]">
            Automated
          </div>
          <p className="text-xl font-bold text-black leading-relaxed mb-20">
            Prospecting, Enrichment, <br /> Sequencing, Proposals, Voice <br /> Outreach, Follow-Ups, <br /> Routing, Suppression, <br /> Compliance Checks.
          </p>
        </div>

        {/* You Control */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
          className="flex-1 bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-gray-200 shadow-md"
        >
          <div className="bg-gray-900 text-[#D0F56B] border border-[#D0F56B] text-base font-bold px-5 py-2 rounded-full mb-8">
            You Control
          </div>
          <p className="text-lg font-bold text-gray-900 leading-relaxed">
            Goals, Positioning, Knowledge <br /> Sources, Guardrails, Targeting, <br /> Approvals, And When To Jump In <br /> Via The Inbox.
          </p>
        </div>

      </div>
    </section>
  );
}























