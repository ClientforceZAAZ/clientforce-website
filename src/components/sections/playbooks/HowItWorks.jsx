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





function FeatureGrid() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-2xl sm:text-4xl lg:text-[46px] border px-6 rounded-full font-bold text-center font-degular mb-2">
          How It Works
        </h1>
      </div>

      {/*  Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-14 gap-6 mt-6">
        {/* Playbook */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 lg:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Pick Playbook <span className="text-[#787878] font-normal">(Industry + Goal)</span>
            </h3>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/dfy/pick_playbook.png"
              alt="pick playbook"
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-full h-full"
            />
          </div>
        </div>

        {/* Answer Prompts */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 lg:col-span-4 flex flex-col items-center p-6"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Answer 5–8 Prompts <span className="text-[#787878] font-normal">+ Upload PDFs/URLs (Offer, Pricing, Proof)</span>
            </h3>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/dfy/answer_prompts.png"
              alt="Answer prompts"
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-full h-full"
            />
          </div>
        </div>

        {/* Launch */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 lg:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Launch— <span className="text-[#787878] font-normal">The Agent Runs A Complete, Multichannel Campaign With Built-In Guardrails</span>
            </h3>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/dfy/agents_runs.png"
              alt="agents runs"
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>

    
    </div>
  );
}





export default function WhyThisMatters() {
  return (
    <section
      className="w-full  py-10"
        style={{
        background: "#ffffff",
      }}
    >
      <FeatureGrid />
    </section>
  );
}

