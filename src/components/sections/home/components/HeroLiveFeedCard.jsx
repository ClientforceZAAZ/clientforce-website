"use client";

import { motion } from "framer-motion";
import { MicOff, Phone, Plus, Radio } from "lucide-react";
import { MdPhone } from "react-icons/md";

function CallRow({ name, time, isLive }) {
  return (
    <div
      className={`flex items-center justify-between py-1.5 px-1.5 rounded-lg ${
        isLive ? "bg-[#d9ebde]" : "bg-white"
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-1">
        <MdPhone size={12} className="text-black" />
        <span className="text-[8px] font-medium text-black">{name}</span>
      </div>

      {/* Right */}
      {isLive ? (
        <div className="flex items-center gap-2">
          <button className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center">
            <MicOff size={7} className="text-white" />
          </button>
          <button className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
            <Phone size={7} className="text-white rotate-[135deg]" />
          </button>
          <button className="w-4 h-4 rounded-full bg-[#22C55E] flex items-center justify-center">
            <Plus size={7} className="text-white" />
          </button>
          <span className="flex items-center gap-1 text-[8px] font-semibold text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Live
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <span className="text-[8px] text-gray-400">{time}</span>
          <button className="text-[8px] font-semibold text-gray-700 border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default function LiveFeedCard() {
  return (
    // Floating loop wrapper
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Entrance animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-xl border p-2 w-full"
      >
          {/* Header */}
          <div className="flex items-center gap-1 mb-1">
            <Radio size={12} className="text-black" />
            <span className="text-[8px] font-bold text-black">
              Live Feed
            </span>
          </div>

          {/* Calls */}
          <div className="flex flex-col gap-1">
            <CallRow name="Call with @Chris Adol" isLive={true} />
            <CallRow
              name="Call with @Mark Miller"
              time="03:01 AM"
              isLive={false}
            />
          </div>
      </motion.div>
    </motion.div>
  );
}