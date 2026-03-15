"use client";

import { useEffect, useRef, useState } from "react";
import Image  from "next/image";
import { RiEyeLine } from "react-icons/ri";

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

const PLAYBOOKS = [
  {
    title: "Lead Magnet Nurture",
    description: "Reach out to new prospects",
    days: 5,
    steps: 6,
    bg: "linear-gradient(to bottom, #D0F56B66, #D0F56B00)",
  },
  {
    title: "Cold Email Outreach",
    description: "Reach out to new prospects",
    days: 5,
    steps: 6,
    bg: "linear-gradient(to bottom, #6BE3F566, #6BE3F500)",
  },
  {
    title: "Client Re-engagement",
    description: "Reach out to new prospects",
    days: 5,
    steps: 6,
    bg: "linear-gradient(to bottom, #BB6BF566, #BB6BF500)",
  },
  {
    title: "High-Ticket Consulting",
    description: "(agencies, coaches, B2B services)",
    days: 7,
    steps: 8,
    bg: "linear-gradient(to bottom, #BDFBBC, #C9FFC800)",
  },
  {
    title: "SaaS Demo Booking",
    description: "Convert trials into demos",
    days: 5,
    steps: 6,
    bg: "linear-gradient(to bottom, #BDFBBC, #C9FFC800)",
  },
];

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6z" />
  </svg>
);


// Single Playbook Card 
function PlaybookCard({ title, description, days, steps, bg, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
        minWidth: "200px",
        flex: "0 0 auto",
        background: `${bg}`
      }}
      className={`rounded-2xl border border-gray-300 p-4 flex flex-col gap-3 cursor-default`}
    >
      {/* Top row — logo + timer */}
      <div className="flex items-center justify-between">
        <div
          style={{ transform: hovered ? "rotate(15deg) scale(1.1)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
        >
          <Image src="/icons/clientForce_logo.svg"  width={24} height={24} />
        </div>
        <div className="flex items-center gap-1 text-gray-500">
           <Image src="/icons/fire.svg"  width={14} height={14} />
          <span className="text-[11px]">{days} Days</span>
          <span className="text-[11px] text-gray-300 mx-0.5">|</span>
          <span className="text-[11px]">{steps} Steps</span>
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-xl font-pjs font-bold text-gray-900 leading-snug">{title}</h3>
        <p className="text-sm font-pjs text-[#787878] mt-0.5 leading-snug">{description}</p>
      </div>

      {/* Channel icons */}
      <div className="flex items-center gap-3 mt-6 text-gray-400">
        <EmailIcon />
        <WhatsAppIcon />
        <PhoneIcon />
      </div>

      {/* Buttons */}
      <div className="flex items-center mt-4 gap-2">
        <button
          className="flex items-center font-pjs gap-1 text-sm text-black py-1.5 rounded-lg"
        >
          <RiEyeLine size={13} />
          Preview
        </button>
        <button
          className="flex-1 text-sm font-pjs py-1.5 rounded-lg transition-all duration-200 text-black"
         
        >
          Use Template
        </button>
      </div>
    </div>
  );
}

//  Main Section 
export default function PlaybooksIncluded() {
  const [ref, visible] = useVisible();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  }

  return (
    <section ref={ref} className="py-16 px-6 lg:px-16 bg-[#EEF9FA]">

      {/* Heading + arrows */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="flex items-center justify-between mb-8"
      >
        <h2 className="text-3xl lg:text-[45px] font-degular font-bold text-black mx-auto">
          Playbooks Included
        </h2>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        {PLAYBOOKS.map((p, i) => (
          <PlaybookCard
            key={p.title}
            {...p}
            visible={visible}
            delay={`${0.1 + i * 0.07}s`}
          />
        ))}
      </div>

       <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-400 transition-all disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-gray-400 transition-all disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

    </section>
  );
}