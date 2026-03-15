"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";


function AgentCard({ icon, title, channels, isActive, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5 + index * 0.3,
        ease: "easeOut",
      }}
      className={`relative p-4 rounded-2xl border flex flex-col gap-2 transition-colors duration-500 ${
        isActive
          ? "bg-[#f0fdf4] border-[#22C55E]/30"
          : "bg-white border-gray-100"
      }`}
    >
      {/* Activate / Activated badge */}
      <div className="absolute top-4 right-4">
        {isActive ? (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-1 bg-black text-white text-[8px] font-semibold px-2 py-0.5 rounded-full"
          >
            ✓ Activated
          </motion.span>
        ) : (
          <span className="flex items-center gap-1 border border-gray-200 text-gray-400 text-[8px] px-2 py-0.5 rounded-full">
            ○ Activate
          </span>
        )}
      </div>

      {/* Icon */}
      <motion.div
        animate={{
          backgroundColor: isActive ? "#0AD855" : "#F3F4F6",
        }}
        transition={{ duration: 0.4 }}
        className="w-6 h-6 rounded-md flex items-center justify-center"
      >
        <Image
          src={icon}
          alt={title}
          width={14}
          height={14}
          className="w-3 h-3"
        />
      </motion.div>

      {/* Title & Channels */}
      <div>
        <p className="text-[8px] font-semibold text-gray-900">{title}</p>
        <p className="text-[7px] text-gray-400 mt-0.5">{channels}</p>
      </div>
    </motion.div>
  );
}

const agents = [
  {
    icon: "/icons/demoBookingIcon.svg",
    title: "Demo Booking Agent",
    channels: "Channels, Emails, Whatsapp, Voice",
  },
  {
    icon: "/icons/localBusinessIcon.svg",
    title: "Local Business Outreach",
    channels: "Channels, Emails, Whatsapp, Voice",
  },
  {
    icon: "/icons/trialIcon.svg",
    title: "Trial Conversion",
    channels: "Channels, Emails, Whatsapp, Voice",
  },
  {
    icon: "/icons/custom_scratch_icon.svg",
    title: "Custom Scratch Setup",
    channels: "Channels, Emails, Whatsapp, Voice",
  },
];

export default function AgentModal() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % agents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-2xl border p-5 w-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="text-[12px] font-bold text-gray-900">
            Choose your first agent
          </h3>
          <p className="text-[10px] text-gray-400 mt-0.5">
            Follow these steps to launch your AI Agent, it only takes a few mins
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {agents.map((agent, index) => (
          <AgentCard
            key={agent.title}
            {...agent}
            index={index}
            isActive={activeIndex === index}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <button className="text-[10px] text-gray-500 hover:text-gray-700 transition-colors">
          Back
        </button>
        <button className="bg-[#0AD855] text-black text-[10px] font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#16A34A] transition-colors">
          Continue →
        </button>
      </div>
    </motion.div>
  );
}