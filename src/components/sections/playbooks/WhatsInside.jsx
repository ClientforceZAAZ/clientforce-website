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
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl rounded-lg font-bold text-center font-degular z-10">
                Sample Playbooks(What's Inside) 
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
              title: "Dental Implants Lead Gen (Local)",
              image: "/images/dfy/dental_implant.png",
              imageAlt: "Dental Implants",
              bullets: [
              ],
              description: "Finder rules for geo + service, 5-step email, WA nudge, single AI voicequalification, dynamic proposal for treatment financing, HIPAA-aware guardrails.",
              moreDescription: "",
            },

            {
              label: "SaaS Demo Booker",
              title: "SaaS Demo Booker",
              image: "/images/dfy/saas_demo.png",
              imageAlt: "SaaS Demo Booker",
              bullets: [
              ],
              description: " ICP filters, value intro + objection email, LinkedIn touch, AI voice consultative call, proposal with plan/pricing blocks, trial→paid CTA.",
            },
              {
              label: "Agency Retainer Closer",
              title: "Agency Retainer Closer",
              image: "/images/dfy/agency_retainer.png",
              imageAlt: "agency retainer",
              bullets: [
              ],
              description: " Authority positioning, results email, case proof, AI voice objection handling, proposal with retainer tiers, deposit link.",
            },
            {
              label: "B2B RFQ Capture",
              title: "B2B RFQ Capture",
              image: "/images/dfy/b2b_rfq.png",
              imageAlt: "B2B RFQ Capture",
              bullets: [
              ],
              description: "Finder for NAICS/keywords, email + LinkedIn nudge, technical voice discovery, proposal with specs table, scheduling + quote request.",
            },
          ]}
          imageRight={true}
    />

    </section>
  );
}

