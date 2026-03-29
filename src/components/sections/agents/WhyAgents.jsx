
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const ACTIVE_DAYS = ["MON", "TUE", "WED", "THU", "FRI"];




//  Schedule Card 
function ScheduleCard({ visible }) {
  const [activeIndex, setActiveIndex] = useState(1); 

  // Cycle through active days
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ACTIVE_DAYS.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        animation: visible ? "float 4s ease-in-out infinite" : "none",
      }}
      className="w-[320px] bg-[#FAB9FF] border border-[#00000026] rounded-3xl p-5 shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm">
            <Image src="/images/agents/icons/girl_icon.svg" width={28} height={28} />
          </div>
          <span className="text-xs font-pjs font-bold text-gray-900">New ForceAgent 1</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#08A541] flex items-center justify-center">
          <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-3 bg-white/40 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-white rounded-full"
          style={{
            width: `${((activeIndex + 1) / ACTIVE_DAYS.length) * 100}%`,
            transition: "width 0.6s ease",
          }}
        />
      </div>

      {/* Schedule text */}
      <p className="text-[12px] font-pjs text-black mb-6">
        Emails will be sent on{" "}
        <span className="font-bold">Monday, Tuesday, Wednesday, Thursday, Friday</span>
      </p>

      {/* Day Pills */}
      <div className="flex items-center justify-between gap-1">
        {DAYS.map((day) => {
          const isActive = ACTIVE_DAYS.includes(day);
          const isHighlighted = isActive && ACTIVE_DAYS[activeIndex] === day;
          return (
            <div
              key={day}
              style={{
                transition: "background 0.4s ease, color 0.4s ease, transform 0.4s ease",
                transform: isHighlighted ? "scale(1.12)" : "scale(1)",
                background: isHighlighted
                  ? "#111"
                  : isActive
                  ? "#111"
                  : "rgba(255,255,255,0.3)",
                color: isActive ? "white" : "black",
                
              }}
              className="flex-1 text-center text-[10px] font-pjs font-normal py-2 rounded-full bg-transparent border"
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

//  Video Call Card
function VideoCallCard({ visible }) {
  const [pulse, setPulse] = useState(false);

  // Pulse the decline button periodically
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 2500);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
      }}
      className="w-fit bg-white rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
    >
      {/* Video preview */}
      <div className="flex items-center justify-center p-3 overflow-hidden">
        <img src="/images/agents/videoCall_img.png" className="h-full" />
      </div>

      {/* Call Controls */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          {/* Mic */}
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
            </svg>
          </button>

          {/* Decline — pulses */}
          <button
            style={{
              transform: pulse ? "scale(1.18)" : "scale(1)",
              boxShadow: pulse ? "0 0 0 6px rgba(239,68,68,0.25)" : "0 0 0 0px rgba(239,68,68,0)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </button>

          {/* Camera */}
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M23 7l-7 5 7 5V7z" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </button>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-items-start gap-1 mt-3 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1 text-[9px] text-gray-400">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            1hr 30Mins
          </div>
          <div className="flex items-center gap-1 text-[9px] text-[#08A541] font-semibold">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Copy Link
          </div>
        </div>
      </div>
    </div>
  );
}


export default function WhyAgents() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section ref={ref} className="relative w-full px-6 py-8  md:py-16">
      <style>{`
            @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            }
            @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            }
        `}</style>

      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-degular text-center flex items-center justify-center flex-col md:flex-row">
          <span className="font-bold w-fit bg-[#6BE8FD] px-2 rounded-xl">
            Why Agents?
          </span>{" "}
          <span className=" font-normal text-[#787878]">
            (Not Just Automation)
          </span>
        </h1>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-center mt-6 sm:mt-8 leading-snug">
          Manual Prospecting Is Slow. Follow-Ups Slip. Revenue Leaks.
        </p>
        <p className="text-center text-[#676767] text-base sm:text-lg md:text-xl lg:text-xl mt-3 sm:mt-4 leading-relaxed">
          ClientForce Agents Run Perpetual Campaigns That Find Leads, Engage,{" "}
          <br className="hidden sm:block" /> And Close—Without You Chasing Tasks
          Or Juggling Tools.
        </p>
      </div>

      <div
        className=" hidden md:block  md:relative rounded-3xl mx-50 overflow-hidden mt-10 min-h-[520px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/agents/garden_nature.png')" }}
      >
        {/* Dashboard panel image — right side */}
        <img
          src="/images/agents/whyAgent_dashboard.png"
          alt="Agent Dashboard"
          className="absolute top-8 right-0 w-[57%] h-auto object-contain drop-shadow-xl"
        />

        {/* Floating Cards — left side */}
        <div className="absolute top-8 left-8 flex flex-col gap-4">
          <ScheduleCard visible={visible} />
          <VideoCallCard visible={visible} />
        </div>

        <div className="absolute top-50 left-48 w-[370px]">
          <img
            src="/images/agents/stats.png"
            alt="Agent Dashboard"
            className=" drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}


