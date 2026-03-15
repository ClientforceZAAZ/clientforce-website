"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.2) {
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

function useCounter(target, visible, duration = 1200) {
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

//  Animated Donut Chart 
function DonutChart({ green = 45, blue = 55, visible, delay = 0 }) {
  const [progress, setProgress] = useState(0);
  const count = useCounter(blue, visible, 1200);

  const size = 70;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      let p = 0;
      const timer = setInterval(() => {
        p += 0.018;
        if (p >= 1) { setProgress(1); clearInterval(timer); }
        else setProgress(p);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, delay]);

  // Green takes first 45% of circle, blue takes next 55%
  const greenDash = circumference * (green / 100) * progress;
  const greenGap = circumference - greenDash;

  const blueDash = circumference * (blue / 100) * progress;
  const blueGap = circumference - blueDash;

  // Offset: green starts at top (- circumference * 0.25)
  // Blue starts after green segment
  const greenOffset = -circumference * 0.25;
  const blueOffset = -(circumference * 0.25) - circumference * (green / 100);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          {/* Background track */}
          <circle
            cx={cx} cy={cy} r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />

          {/* Green arc */}
          <circle
            cx={cx} cy={cy} r={radius}
            fill="none"
            stroke="#22c55e"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${greenDash} ${greenGap}`}
            strokeDashoffset={greenOffset}
            style={{ transition: "stroke-dasharray 0.05s linear" }}
          />

          {/* Blue arc */}
          <circle
            cx={cx} cy={cy} r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${blueDash} ${blueGap}`}
            strokeDashoffset={blueOffset}
            style={{ transition: "stroke-dasharray 0.05s linear" }}
          />
        </svg>

        {/* Center % */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{count}%</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 text-[11px] text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#22c55e] inline-block" />
          {green}%
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6] inline-block" />
          {blue}%
        </span>
      </div>

      <p className="text-[11px] text-gray-500 text-center">
        Widget <span className="font-bold text-gray-700">VS</span> Chrome
      </p>
    </div>
  );
}

//  Source Mix Card 
export default function SourceMixCard() {
  const [ref, visible] = useVisible(0.2);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(30px) scale(0.97)",
        transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.12)"
          : "0 8px 32px rgba(0,0,0,0.08)",
      }}
      className="bg-white rounded-2xl border border-[#C7C7C7] px-12 py-3 w-fit "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900">Source Mix</h3>
        <div
          className="w-2 h-2 rounded-full bg-[#22c55e]"
          style={{ animation: "ping-slow 2s ease-in-out infinite" }}
        />
      </div>

      {/* Charts */}
      <div className="flex items-center gap-6">
        <DonutChart green={45} blue={55} visible={visible} delay={200} />
        <DonutChart green={45} blue={55} visible={visible} delay={400} />
      </div>

      <style>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}