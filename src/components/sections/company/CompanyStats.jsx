"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const STATS = [
  {
    label: "Revenue unlocked",
    value: 7.8,
    prefix: "$",
    suffix: "M",
    active: false,
  },
  {
    label: "Companies served",
    value: 2000,
    suffix: "+",
    active: false,
  },
  {
    label: "Countries",
    value: 40,
    suffix: "+",
    active: false,
  },
];

export default function CompanyStats() {
  return (
    <section className="w-full py-10 px-6 lg:px-30 bg-[#F8F9FA]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, prefix = "", suffix = "", active }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Motion value for the number
  const count = useMotionValue(0);
  
  // Transform the raw number into a formatted string (handling decimals for 7.8)
  const rounded = useTransform(count, (latest) => {
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-xl border-2 transition-all duration-500 flex flex-col justify-center ${
        active ? "border-[#0091FF] shadow-lg shadow-blue-50" : "border-gray-100"
      }`}
    >
      <span className="text-gray-500 text-sm font-medium mb-2">{label}</span>
      <div className="text-black text-3xl font-bold tracking-tight flex items-baseline">
        <span>{prefix}</span>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
    </div>
  );
}