"use client";

import { useEffect, useRef, useState } from "react";
import TabbedFeatureSection from "../shared/TabbedFeatureSection";


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





function WhatsInsideSection() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="">
        <div className="flex justify-center">
            <h1 className="text-black bg-[#D0F56B] text-3xl md:text-4xl lg:text-5xl px-6 py-2 rounded-lg font-bold text-center font-degular mb-10">
                What's Inside
            </h1>
        </div>

    </div>
  );
}





export default function WhatsInside() {
  return (
    <section
      className="w-full  py-10"
        style={{
        background: "#F4F9FA",
      }}
    >
      <WhatsInsideSection />
      
    <TabbedFeatureSection
          background="#F4F9FA"
          tabs={[
            {
              label: "Dental Implants Lead Gen",
              title: "Finder v2 — Automated Lead Discovery",
              image: "/images/guardrails/policy_engine.png",
              imageAlt: "Policy Engine Dashboard",
              bullets: [
              ],
              description: "Define keywords, industry, geography, radius, and frequency.",
              moreDescription: "Finder v2 surfaces net-new prospects on schedule, enriches with contact data, and either queues them for review or auto-ingests them directly into the mapped Agent/playbook.",
            },
            {
              label: "SaaS Demo Booker",
              title: "SaaS Demo Booker",
              image: "/images/compliance/security.png",
              imageAlt: "Security Controls",
              bullets: [
              ],
            },
              {
              label: "Agency Retainer Closer",
              title: "Agency Retainer Closer",
              image: "/images/compliance/security.png",
              imageAlt: "Security Controls",
              bullets: [
              ],
            },
            {
              label: "B2B RFQ Capture",
              title: "B2B RFQ Capture",
              image: "/images/compliance/security.png",
              imageAlt: "Security Controls",
              bullets: [
              ],
            },
          ]}
          imageRight={true}
    />

    </section>
  );
}

