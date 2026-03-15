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

// const STEPS = [
//   {
//     text: "Pick A Goal:",
//     description: " Demos, Trial→Paid, Winback, High-Ticket, Or Local.",
//     position: "bottom-left",
//   },
//   {
//     text: "Choose A Build Path:",
//     description: " Start With AI, DFY Playbook, Or From Scratch.",
//     position: "top-center",
//   },
//   {
//     text: "Launch:",
//     description: " Connect Inbox/Number, Set Finder Rules, Embed Widget — Go Live.",
//     position: "bottom-right",
//   },
// ];

export default function HowToGetStarted() {
  const [ref, visible] = useVisible();
 

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setLineDrawn(true), 400);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section ref={ref} className="py-16 px-6 lg:px-30 bg-[#E1F1F2]">

      {/* Heading pill */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="flex justify-center mb-10"
      >
        <div className=" border border-black rounded-full px-6 text-[46px] text-black font-bold font-degular shadow-sm">
          How To Get Started
        </div>
      </div>

      {/* Three-column card grid */}
      <div className="relative grid grid-cols-11 gap-6">


        {/* Card 1 — bottom-left text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease 0.15s, transform 0.55s ease 0.15s",
            position: "relative",
            zIndex: 1,
          }}
          className="bg-white border border-[#00000024] rounded-2xl p-5 flex flex-col col-span-4"
        >
        
          <div>
            <img src="" alt="" className=" h-[280px]" />
          </div>
        
          <div className="mt-auto">
            <p className=" text-lg leading-6">
              <span className="font-bold">Pick A Goal:</span> Demos, Trial→Paid, Winback, High-Ticket, Or Local.
            </p>
          </div>
         
        </div>

        {/* Card 2 — top-center text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
            position: "relative",
            zIndex: 1,
          }}
          className=" bg-white border border-[#00000024] rounded-2xl p-5 flex flex-col col-span-3"
        >
          <div>
            <p className="text-lg leading-6">
              <span className="font-bold">Choose A Build Path:</span> Start With AI, DFY Playbook, Or From Scratch.
            </p>
          </div>

        </div>

        {/* Card 3 — bottom-right text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease 0.45s, transform 0.55s ease 0.45s",
            position: "relative",
            zIndex: 1,
          }}
          className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col min-h-[160px] col-span-4"
        >
          <div className="mt-auto">
            <p className="text-lg leading-6">
              <span className="font-bold">Launch:</span> Connect Inbox/Number, Set Finder Rules, Embed Widget — Go Live.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}