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

//  Animated counter 
function useCounter(target, visible, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return count;
}

//  SVG Wave Charts 
function PurpleWave() {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M0,55 C20,45 35,65 60,50 C85,35 95,60 120,45 C145,30 155,55 180,40 C205,25 220,50 250,38 C270,30 285,42 300,35 L300,80 L0,80 Z"
        fill="url(#purpleGrad)"
      />
      <path
        d="M0,55 C20,45 35,65 60,50 C85,35 95,60 120,45 C145,30 155,55 180,40 C205,25 220,50 250,38 C270,30 285,42 300,35"
        fill="none"
        stroke="#a855f7"
        strokeWidth="2.5"
      />
      <circle cx="95" cy="60" r="4" fill="#a855f7" />
    </svg>
  );
}

function GreenWave() {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0,70 C50,68 80,55 120,40 C160,25 200,20 240,15 C260,12 280,10 300,8 L300,80 L0,80 Z"
        fill="url(#greenGrad)"
      />
      <path
        d="M0,70 C50,68 80,55 120,40 C160,25 200,20 240,15 C260,12 280,10 300,8"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2.5"
      />
      <circle cx="180" cy="22" r="4" fill="#22c55e" />
    </svg>
  );
}

function OrangeWave() {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M0,30 C30,25 50,45 80,50 C110,55 130,35 160,45 C190,55 210,40 240,50 C265,58 280,52 300,55 L300,80 L0,80 Z"
        fill="url(#orangeGrad)"
      />
      <path
        d="M0,30 C30,25 50,45 80,50 C110,55 130,35 160,45 C190,55 210,40 240,50 C265,58 280,52 300,55"
        fill="none"
        stroke="#f97316"
        strokeWidth="2.5"
      />
    </svg>
  );
}

// Person Row 
function PersonRow({ image, name, role, nameColor }) {
  return (
    <div className="flex items-center gap-2 mt-auto">
      <img
        src={image}
        alt={name}
        // width={40}
        // height={40}
        className="rounded-full object-cover w-[36px]"
      />
      <div>
        <p className="text-xs font-bold" style={{ color: nameColor }}>{name}</p>
        <p className="text-[10px] text-[#0A0A0A80]">{role}</p>
      </div>
    </div>
  );
}

// Cards 
function MeetingsCard({ visible }) {
  const count = useCounter(37, visible, 1600);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 16px 48px rgba(168,85,247,0.25)" : "0 4px 20px rgba(0,0,0,0.07)",
      }}
      className="flex-1 bg-[#F5D6F8] rounded-3xl p-5 flex flex-col min-h-[280px]"
    >
      {/* Stat */}
      <div className="flex items-end gap-2 mb-1">
        <span className="text-5xl font-extrabold text-black">{count}</span>
        <div className="mb-2">
          <p className="text-base font-bold text-black leading-tight">Meetings</p>
          <p className="text-base font-bold text-black leading-tight">in 7 days</p>
        </div>
      </div>

      {/* Wave */}
      <div className="my-3">
        <Image src="/images/multichannel-outreach/meeting_card_chart.svg" width={295} height={122} />
      </div>

      {/* Description */}
      <p className="text-base text-[#3B3B3B] mt-1">
        Using email + WA nudge + single <br /> voice call.
      </p>

      <PersonRow
        image="/images/multichannel-outreach/maria_lopez.png"
        name="Maria Lopez"
        role="Owner, High-Growth Roofing & Home Services"
        nameColor="#BA0BD1"
      />
    </div>
  );
}

function ProposalsCard({ visible }) {
  const count = useCounter(120, visible, 1800);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 16px 48px rgba(34,197,94,0.2)" : "0 4px 20px rgba(0,0,0,0.07)",
      }}
      className="flex-1 bg-[#E3FFED] rounded-3xl p-5 flex flex-col min-h-[280px]"
    >
      {/* Wave first on this card */}
      <div className="mb-3">
        <Image src="/images/multichannel-outreach/proposals_card_chart.svg" width={295} height={122} />
      </div>

      {/* Stat */}
      <div className="mb-1">
        <span className="text-5xl font-extrabold text-gray-900">{count}+</span>
        <p className="text-xl font-bold text-gray-900 mt-1 leading-snug">
          Proposals sent <br /> automatically
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-1">
        with smart handoffs from email.
      </p>

      <PersonRow
        image="/images/multichannel-outreach/chris_turner.png"
        name="Chris Turner"
        role="Founder, Turner Digital Marketing Agency"
        nameColor="#16a34a"
      />
    </div>
  );
}

function RevenueCard({ visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 16px 48px rgba(249,115,22,0.22)" : "0 4px 20px rgba(0,0,0,0.07)",
      }}
      className="flex-1 bg-[#FACBB2] rounded-3xl p-5 flex flex-col min-h-[280px]"
    >
      {/* Stat */}
      <div className="mb-3">
        <p
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
          className="text-5xl font-extrabold text-gray-900"
        >
          $42K
        </p>
        <p className="text-xl font-bold text-gray-900 mt-1">Closed</p>
      </div>

      {/* Wave */}
      <div className="mt-auto mb-3">
        <Image src="/images/multichannel-outreach/revenue_card_chart.svg" width={295} height={122} />
      </div>

      <p className="text-xs text-gray-500">
        Via AI Voice after email warm-up (no manual dialing).
      </p>

      <PersonRow
        image="/images/multichannel-outreach/elaine_morris.png"
        name="Dr. Elaine Morris"
        role="B2B Sales Consultant & Author"
        nameColor="#ea580c"
      />
    </div>
  );
}

//  Main Export 
export default function ProofInPractice() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-16 px-6 lg:px-36 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="mb-8"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-black font-degular">
          Proof In Practice
        </h2>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row gap-8">
        <MeetingsCard visible={visible} />
        <ProposalsCard visible={visible} />
        <RevenueCard visible={visible} />
      </div>

    </section>
  );
}