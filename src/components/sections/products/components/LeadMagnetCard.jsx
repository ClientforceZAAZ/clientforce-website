"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

export default function LeadMagnetCard() {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const channels = [
    {
      id: "email",
      label: "Email",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: (
        <FaWhatsapp />
      ),
    },
    {
      id: "call",
      label: "Call",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered("card")}
      onMouseLeave={() => setHovered(null)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.96)",
        transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease",
        boxShadow: hovered === "card"
          ? "0 20px 60px rgba(0,0,0,0.13)"
          : "0 8px 32px rgba(0,0,0,0.08)",
      }}
      className="w-full max-w-[220px] rounded-2xl bg-white border border-[#00000026] shadow overflow-hidden bg-linear-to-b from-[#D0F56B66] from-0% to-[#D0F56B00] to-40%"
    >
      {/* Top Bar */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
        }}
        className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100"
      >
        {/* Logo */}
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
          <Image src="/icons/clientForce_logo.svg" width={24} height={24} />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-1.5 text-[11px] text-gray-900 font-medium">
          <span className="flex items-center gap-1">
            <Image src="/icons/fire.svg" width={16} height={16} />
            5 Days
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">6 Steps</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-4 pb-3">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-10px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          <h3 className="text-[14px] font-bold text-gray-900 leading-snug">
            Lead Magnet Nurture
          </h3>
          <p className="text-[12px] text-gray-400 mt-0.5">
            Reach out to new prospects
          </p>
        </div>

        {/* Channel Icons */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.35s",
          }}
          className="flex items-center gap-2 mt-4"
        >
          {channels.map((channel, i) => (
            <button
              key={channel.id}
              onMouseEnter={() => setHovered(channel.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.4s ease ${0.35 + i * 0.08}s, transform 0.4s ease ${0.35 + i * 0.08}s, background 0.2s ease, color 0.2s ease`,
                background: hovered === channel.id ? "#08A541" : "#F4F4F5",
                color: hovered === channel.id ? "white" : "#6B7280",
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              title={channel.label}
            >
              {channel.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-100" />

      {/* Footer Buttons */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
        }}
        className="flex items-center gap-2 px-3 py-3"
      >
        <button
          className="flex-1 flex items-center justify-center gap-1.5 text-[12px] text-[#000015] font-medium py-1.5 rounded-lg border border-gray-200"
        >
          <FiEye />
          Preview
        </button>

        <button
          className="flex-1 text-[12px] text-[#000015] font-semibold py-1.5 rounded-lg border border-gray-200"
        >
          Use Template
        </button>
      </div>
    </div>
  );
}