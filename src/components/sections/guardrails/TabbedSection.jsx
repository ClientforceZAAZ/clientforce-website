

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

function TabbedFeatureSection({ background = "", tabs = [], imageRight }) {
  const [ref, visible] = useVisible();
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  if (!tabs.length) return null;

  return (
    <section
      ref={ref}
      className=" py-8 md:py-16 px-6 lg:px-16 relative"
      style={{ background }}
    >
      {/* Tabs */}
      <div className="flex items-center justify-center z-10">
         <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="flex flex-wrap gap-3 justify-center mb-8 rounded-full border border-gray-600 px-3 py-2 w-fit z-10"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
            //   borderColor: activeTab === i ? "#D0F56B" : "transparent",
              color: activeTab === i ? "#000000" : "#C2C2C2",
              background: activeTab === i ? "#D0F56B" : "transparent",
              transition: "all 0.25s ease",
            }}
            className="px-5 py-2 rounded-full text-sm font-bold cursor-pointer"
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>
     

      {/* Content card */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
        }}
        className={`bg-[#ffffff11] border border-[#FFFFFF0D] shadow-lg rounded-3xl overflow-hidden z-10 `}
      >
        <div
          key={activeTab}
          style={{ animation: "tabFadeIn 0.35s ease" }}
          className={`flex flex-col md:flex-row-reverse z-10`}
        >
          {/* Left — image */}
          <div className="md:w-[50%] p-6 flex items-center justify-center  z-10">
            {active?.image && (
              <img
                src={active.image}
                alt={active.imageAlt || ""}
                className="w-full h-full object-cover rounded-2xl z-10"
              />
            )}
          </div>

          {/* Right — text */}
          <div className="md:w-[50%] p-8 flex flex-col justify-center z-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-10 mb-6">
              {active?.title}
            </h2>
            <div className="space-y-4">
              {active?.bullets?.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  {/* <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div> */}
                  <p className="text-base text-white leading-relaxed">
                    <span className="font-bold text-white">{b.bold}</span>{b.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-lg text-[#00000099] mb-6">{active?.description}</div>
            <div className="text-lg text-[#00000099]">{active?.moreDescription}</div>
          </div>
        </div>
      </div>



      <Image src="/images/guardrails/Ellipse_guardrails_right.png" width={400} height={250} className="absolute bottom-[-20] left-0 z-0" />
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


export default function TabbedSection() {
  return (
    <TabbedFeatureSection
          background="#010101"
          tabs={[
            {
              label: "Policy Engine & Real-Time Alerts",
              title: "Policy Engine & Real-Time Alerts",
              image: "/images/guardrails/policy_engine2.png",
              imageAlt: "Policy Engine Dashboard",
              bullets: [
                { bold: "Automatic Safeguards :", text: " If bounces/complaints spike or reputation dips, campaigns auto-pause and suggest fixes" },
                { bold: "Health Dashboard :", text: "  Deliverability, number health, template status, and compliance warnings in one view." },
              ],
            },
            {
              label: "Data Security & Access Controls",
              title: "Data Security & Access Controls",
              image: "/images/guardrails/data_security.png",
              imageAlt: "Security Controls",
              bullets: [
                { bold: "Security by Design : ", text: " Encryption in transit/at rest, role-based access, PII masking and redaction options." },
                { bold: "Audit & Retention :", text: " Immutable activity logs, export controls, and configurable data-retention policies" },
              ],
            },
              {
              label: "Safe Defaults, Fast Launch",
              title: "Safe Defaults, Fast Launch",
              image: "/images/guardrails/safe_defaults.png",
              imageAlt: "Security Controls",
              bullets: [
                { bold: "Pre-vetted Templates :", text: " Compliant email footers, WA templates, and conservative warmup curves out of the box." },
                { bold: "One Toggle, All Agents :", text: " Apply guardrails org-wide or per Agent with a single switch." },
              ],
            },
          ]}
        />

    );
}
