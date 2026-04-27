// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

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

// const ITEMS = [
//   {
//     title: "Channels: ",
//     description: "enable/disable Email, WA/SMS, LinkedIn, Voice",
//     delay: "0.1s",
//     icon: (
//         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
//              <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
//         </div>
       
//     ),
//   },
//   {
//     title: "Channels: ",
//     description: "enable/disable Email, WA/SMS, LinkedIn, Voice",
//     delay: "0.1s",
//     icon: (
//         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
//              <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
//         </div>
       
//     ),
//   },
//   {
//     title: "Timing: ",
//     description: "caps, windows, timezone, pacing by goal",
//     delay: "0.1s",
//     icon: (
//         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
//              <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
//         </div>
       
//     ),
//   },
//   {
//     title: "Assets: ",
//     description: "swap proposal theme, widget design, finder rules",
//     delay: "0.1s",
//     icon: (
//         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
//              <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
//         </div>
       
//     ),
//   },
//   {
//     title: "Regions & Compliance:",
//     description: " GDPR/TCPA, opt-out, DNC",
//     delay: "0.1s",
//     icon: (
//         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
//              <Image src="/images/analytics/icons/charity_icon.svg" width={70} height={70} />
//         </div>
       
//     ),
//   },
// ];

// function GlanceCard({ icon, title, description, delay, visible }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0px)" : "translateY(24px)",
//         transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
//         boxShadow: hovered
//           ? "0 12px 40px rgba(0,0,0,0.10)"
//           : "0 2px 16px rgba(0,0,0,0.05)",
//       }}
//       className="flex-1 bg-[#EEF9FA] rounded-2xl border border-[#D7D7D7] p-6 flex flex-col gap-6 cursor-default"
//     >
//       {/* Icon */}
//       <div
//         style={{
//           transform: hovered ? "scale(1.08)" : "scale(1)",
//           transition: "transform 0.3s ease",
//         }}
//         className=""
//       >
//         {icon}
//       </div>

//       {/* Text */}
//       <p className="text-base leading-relaxed">
//         <span className="font-bold text-black">{title} </span>
//         {description}
//       </p>
//     </div>
//   );
// }

// export default function WhatYouGet() {
//   const [ref, visible] = useVisible();

//   return (
//     <section ref={ref} className="pb-10 px-6 lg:px-14 bg-[#EEF9FA]">

//       {/* Heading */}
//       <div
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(-16px)",
//           transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
//         }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-degular text-gray-900">
//           What You Get{" "}
//           <span className="font-normal">(At A Glance)</span>
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {ITEMS.map((item) => (
//           <GlanceCard key={item.title} {...item} visible={visible} />
//         ))}
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

const ITEMS = [
  {
    title: "Done-For-You Sequences",
    description: "(5–7 steps, branched)",
    delay: "0.05s",
    icon: (
      <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/sequences_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Channels:",
    description: "enable/disable Email, WA/SMS, LinkedIn, Voice",
    delay: "0.1s",
    icon: (
      <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/channels_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Dynamic Proposal",
    description: "layouts with variables from your PDFs",
    delay: "0.15s",
    icon: (
      <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/dynamic_proposals_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Finder v2",
    description: "recipes + saved searches",
    delay: "0.2s",
    icon: (
      <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/finder_v2_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Widgets",
    description: "for chat/callback/forms with consent tab",
    delay: "0.25s",
    icon: (
     <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/widgets_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Chrome Capture",
    description: "templates (field mapping + routing)",
    delay: "0.3s",
    icon: (
     <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/chrome_capture_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Guardrails",
    description: " bundle (verification, warm-up, approvals, DNC)",
    delay: "0.35s",
    icon: (
      <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/guardrails_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
  {
    title: "Analytics",
    description: " dashboards per playbook",
    delay: "0.4s",
    icon: (
     <div className=" rounded-full flex items-center justify-start">
        <Image src="/images/dfy/icons/analytics_icon.svg" width={50} height={50} alt="Sequences" />
      </div>
    ),
  },
];

function GlanceCard({ icon, title, description, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.10)"
          : "0 2px 16px rgba(0,0,0,0.05)",
        minWidth: "200px",
        maxWidth: "220px",
        flexShrink: 0,
      }}
      className="bg-white rounded-2xl border border-[#D7D7D7] p-6 flex flex-col gap-6 cursor-default select-none"
    >
      <div
        style={{
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {icon}
      </div>

      <p className="text-base leading-relaxed">
        <span className="font-bold text-black">{title} </span>
        <span className="text-gray-700">{description}</span>
      </p>
    </div>
  );
}

export default function WhatYouGet() {
  const [ref, visible] = useVisible();
  const scrollRef = useRef(null);

  // Drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Arrow navigation
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  const [scrollState, setScrollState] = useState({ atStart: true, atEnd: false });

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  return (
    <section ref={ref} className="pb-10 pt-10 bg-[#EEF9FA]">
      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-10 px-6 lg:px-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-degular text-gray-900">
          What You Get{" "}
          <span className="font-normal">(At A Glance)</span>
        </h2>
      </div>

      {/* Scroll container wrapper with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to right, #EEF9FA, transparent)",
            opacity: scrollState.atStart ? 0 : 1,
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to left, #EEF9FA, transparent)",
            opacity: scrollState.atEnd ? 0 : 1,
          }}
        />

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-4 overflow-x-auto px-6 lg:px-14 pb-4"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {ITEMS.map((item) => (
            <GlanceCard key={item.title + item.description} {...item} visible={visible} />
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => scroll(-1)}
          disabled={scrollState.atStart}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm transition-opacity duration-200 disabled:opacity-30 hover:bg-gray-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={scrollState.atEnd}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm transition-opacity duration-200 disabled:opacity-30 hover:bg-gray-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}