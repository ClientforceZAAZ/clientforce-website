
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

export default function TabbedFeatureSection() {
  const [ref, visible] = useVisible();


  return (
    <section
      ref={ref}
      className="pt-8 pb-14 px-6 lg:px-16 relative"
    >
      

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
          style={{ animation: "tabFadeIn 0.35s ease" }}
          className={`flex flex-col md:flex-row`}
        >
          {/* Left — image */}
          <div className="md:w-[50%] p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
          </div>

          {/* Right — text */}
          <div className="md:w-[50%] p-8 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-black leading-10 mb-6">
              What’s Included <br /> (At A Glance)
            </h2>
            <div className="space-y-4">

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                    Done-for-you <span className="font-bold text-black">Sequences </span> (5–7 steps, branched)</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                    <span className="font-bold text-black">Voice Call Scripts </span>  tuned to objections in your niche</p>

                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                     <span className="font-bold text-black">Dynamic Proposal </span> layouts with variables from your PDFs</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                    <span className="font-bold text-black">Finder v2 </span>  recipes + saved searches</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                     <span className="font-bold text-black">Widgets </span>  for chat/callback/forms with consent tags</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                     <span className="font-bold text-black">Chrome Capture </span>  templates (field mapping + routing)</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                     <span className="font-bold text-black">Guardrails </span>  bundle (verification, warm-up, approvals, DNC)</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Image src="/icons/Done.svg" width={18} height={18} />
                  </div>
                  <p className="text-base text-black leading-relaxed">
                    <span className="font-bold text-black">Analytics</span>  dashboards per playbook</p>
                </div>


            </div>
    
          </div>
        </div>
      </div>



      <style>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}



