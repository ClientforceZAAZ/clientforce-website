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

//Single Arc Gauge 
function ArcGauge({ value = 45, visible, delay = 0, label }) {
  const [progress, setProgress] = useState(0);
  const count = useCounter(value, visible, 1200);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      let p = 0;
      const timer = setInterval(() => {
        p += 0.022;
        if (p >= 1) { setProgress(1); clearInterval(timer); }
        else setProgress(p);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  const size = 45;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  // Arc spans from ~210deg to ~330deg (bottom-left to bottom-right, open at bottom)
  const startAngle = 15;
  const endAngle = 325;
  const arcRange = endAngle - startAngle; // 110 degrees

  function polarToXY(angleDeg) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  function describeArc(from, to) {
    const s = polarToXY(from);
    const e = polarToXY(to);
    const large = to - from > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
  }

  const fillEnd = startAngle + arcRange * (value / 100) * progress;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2"
      style={{ cursor: "default" }}
    >
      {/* Gauge */}
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <svg width={size} height={size}>
          {/* Track */}
          <path
            d={describeArc(startAngle, endAngle)}
            fill="none"
            stroke="#F1F5F9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Filled arc */}
          {progress > 0.01 && (
            <path
              d={describeArc(startAngle, fillEnd)}
              fill="none"
              stroke="#EF4444"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{ filter: hovered ? "drop-shadow(0 0 4px rgba(239,68,68,0.6))" : "none", transition: "filter 0.3s ease" }}
            />
          )}

          {/* End dot glow */}
          {progress > 0.05 && (() => {
            const dot = polarToXY(fillEnd);
            return (
              <circle
                cx={dot.x}
                cy={dot.y}
                r={hovered ? 4 : 3}
                fill="#EF4444"
                style={{ transition: "r 0.3s ease", filter: "drop-shadow(0 0 3px rgba(239,68,68,0.7))" }}
              />
            );
          })()}
        </svg>

        {/* Center % */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-xs font-bold text-gray-800"
            style={{ transition: "color 0.3s ease", color: hovered ? "#EF4444" : "#1F2937" }}
          >
            {count}%
          </span>
        </div>
      </div>

      {/* Label pill */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: `opacity 0.5s ease ${delay + 600}ms, transform 0.5s ease ${delay + 600}ms`,
          background: hovered ? "#FEE2E2" : "#F1F5F9",
          transition2: "background 0.3s ease",
        }}
        className="h-2 rounded-full w-16 transition-all duration-300"
      />
    </div>
  );
}

// Drop Off Response Card 
export default function DropOffResponseCard() {
  const [ref, visible] = useVisible(0.2);
  const [hovered, setHovered] = useState(false);

  const gauges = [
    { value: 45, label: "Step 1" },
    { value: 45, label: "Step 2" },
    { value: 45, label: "Step 3" },
    { value: 45, label: "Step 4" },
  ];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.1)" : "0 4px 24px rgba(0,0,0,0.06)",
      }}
      className="bg-white rounded-2xl border border-gray-100 p-5 w-fit"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-bold text-gray-900">Drop Off Response</h3>
      </div>

      {/* Gauges Row */}
      <div className="flex items-center gap-1">
        {gauges.map((g, i) => (
          <ArcGauge
            key={i}
            value={g.value}
            label={g.label}
            visible={visible}
            delay={i * 120}
          />
        ))}
      </div>

      <style>{`
        @keyframes gaugePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}