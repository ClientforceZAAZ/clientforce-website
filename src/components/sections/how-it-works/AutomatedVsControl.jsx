// "use client";

// import { useEffect, useRef, useState } from "react";

// function useVisible(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
//       },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }

// export default function AutomatedVsControl() {
//   const [ref, visible] = useVisible();

//   return (
//     <section ref={ref} className=" py-10 md:py-20 px-6 lg:px-50 bg-white">

//       {/* Heading */}
//       <div
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(-14px)",
//           transition: "opacity 0.5s ease, transform 0.5s ease",
//         }}
//         className="text-center mb-5 md:mb-10"
//       >
//         <h2 className="text-3xl lg:text-[40px] font-degular font-bold text-black">
//           What Gets Automated{" "}
//           <span className="text-gray-400 font-bold">Vs </span>
//           <span style={{ color: "#A05BE6"}}>What You Control</span>
//         </h2>
//       </div>

//       {/* Two cards */}
//       <div className="flex flex-col md:flex-row gap-5">

//         {/* Automated */}
//         <div
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
//             background: "#0AD85526",
//           }}
//           className="flex-1 rounded-3xl p-8 flex flex-col items-center text-center shadow-md"
//         >
//           <div className="bg-gray-900 text-[#D0F56B] text-base font-bold px-5 py-2 rounded-full mb-8 border border-[#D0F56B]">
//             Automated
//           </div>
//           <p className="text-xl font-bold text-black leading-relaxed mb-20">
//             Prospecting, Enrichment, <br /> Sequencing, Proposals, Voice <br /> Outreach, Follow-Ups, <br /> Routing, Suppression, <br /> Compliance Checks.
//           </p>
//         </div>

//         {/* You Control */}
//         <div
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
//           }}
//           className="flex-1 bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-gray-200 shadow-md"
//         >
//           <div className="bg-gray-900 text-[#D0F56B] border border-[#D0F56B] text-base font-bold px-5 py-2 rounded-full mb-8">
//             You Control
//           </div>
//           <p className="text-lg font-bold text-gray-900 leading-relaxed">
//             Goals, Positioning, Knowledge <br /> Sources, Guardrails, Targeting, <br /> Approvals, And When To Jump In <br /> Via The Inbox.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setLineDrawn(true), 500);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <section ref={ref} className="py-10 md:py-20 px-6 lg:px-50 bg-white overflow-hidden">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-14px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="text-center mb-6 md:mb-8"
      >
        <h2 className="text-3xl lg:text-[40px] font-degular font-bold text-black">
          What Gets Automated{" "}
          <span className="text-gray-400 font-bold">Vs </span>
          <span style={{ color: "#A05BE6" }}>What You Control</span>
        </h2>
      </div>

      {/* Cards + connector */}
      <div className="flex flex-col md:flex-row items-center gap-0">

        {/* ── Automated card ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            background: "#d4f7e0",
            flex: 1,
          }}
          className="w-full rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-gray-300"
        >
          {/* Card image — replace src with your actual image path */}
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/how-it-works/automated-card.png"
              alt="Automated"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Label + description */}
          <div className="mt-10">
            <span className="inline-block bg-gray-900 border-2 border-[#D0F56B] text-white text-sm font-bold px-5 py-2 rounded-full mb-3">
              Automated
            </span>
            <p className="text-base text-black font-medium leading-relaxed">
              Prospecting, Enrichment, Sequencing, Proposals, Voice Outreach,
              Follow-Ups, Routing, Suppression, Compliance Checks.
            </p>
          </div>
        </div>

        {/* ── Desktop horizontal connector ── */}
        <div
          className="hidden md:flex items-center justify-center flex-shrink-0 relative"
          style={{ width: 80, height: 64 }}
        >
          <svg
            width="80"
            height="64"
            viewBox="0 0 80 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradH" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Animated line */}
            <line
              x1="8"
              y1="32"
              x2="72"
              y2="32"
              stroke="url(#lineGradH)"
              strokeWidth="2"
              strokeDasharray="64"
              strokeDashoffset={lineDrawn ? 0 : 64}
              style={{ transition: "stroke-dashoffset 0.75s cubic-bezier(0.4,0,0.2,1) 0s" }}
            />

            {/* Left dot */}
            <circle
              cx="8"
              cy="32"
              r="5"
              fill="#22c55e"
              style={{
                opacity: lineDrawn ? 1 : 0,
                transition: "opacity 0.25s ease 0s",
              }}
            />
            {/* Left dot inner */}
            <circle cx="8" cy="32" r="2.5" fill="#fff"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0s" }}
            />

            {/* Right dot */}
            <circle
              cx="72"
              cy="32"
              r="5"
              fill="#a855f7"
              style={{
                opacity: lineDrawn ? 1 : 0,
                transition: "opacity 0.25s ease 0.7s",
              }}
            />
            {/* Right dot inner */}
            <circle cx="72" cy="32" r="2.5" fill="#fff"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0.7s" }}
            />
          </svg>
        </div>

        {/* ── Mobile vertical connector ── */}
        <div
          className="flex md:hidden items-center justify-center relative"
          style={{ height: 64, width: 64 }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradV" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            <line
              x1="32"
              y1="8"
              x2="32"
              y2="56"
              stroke="url(#lineGradV)"
              strokeWidth="2"
              strokeDasharray="48"
              strokeDashoffset={lineDrawn ? 0 : 48}
              style={{ transition: "stroke-dashoffset 0.75s cubic-bezier(0.4,0,0.2,1) 0s" }}
            />

            <circle cx="32" cy="8" r="5" fill="#22c55e"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0s" }} />
            <circle cx="32" cy="8" r="2.5" fill="#fff"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0s" }} />

            <circle cx="32" cy="56" r="5" fill="#a855f7"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0.7s" }} />
            <circle cx="32" cy="56" r="2.5" fill="#fff"
              style={{ opacity: lineDrawn ? 1 : 0, transition: "opacity 0.25s ease 0.7s" }} />
          </svg>
        </div>

        {/* ── You Control card ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            background: "#E9D5FD",
            flex: 1,
          }}
          className="w-full rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-gray-300"
        >
          {/* Card image — replace src with your actual image path */}
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/how-it-works/you-control-card.png"
              alt="You Control"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Label + description */}
          <div className="mt-2">
            <span className="inline-block bg-gray-900 border-2 border-[#D0F56B] text-white text-sm font-bold px-5 py-2 rounded-full mb-3">
              You Control
            </span>
            <p className="text-base text-black font-medium leading-relaxed">
              Goals, Positioning, Knowledge Sources, Guardrails, Targeting,
              Approvals, And When To Jump In Via The Inbox.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}



















