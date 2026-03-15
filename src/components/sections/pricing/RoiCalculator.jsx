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

function useCounter(target, duration = 800) {
  const [count, setCount] = useState(0);
  const prevTarget = useRef(target);
  useEffect(() => {
    let start = prevTarget.current === target ? 0 : count;
    prevTarget.current = target;
    const step = (target - start) / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if ((step > 0 && current >= target) || (step < 0 && current <= target)) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return count;
}


const PLANS = [
  { label: "Launch $708/year",    cost: 708  },
  { label: "Professional $948/year", cost: 948  },
  { label: "Scale $1,788/year",   cost: 1788 },
];

const SLIDERS = [
  { key: "leads",      label: "Leads per month",    min: 50,   max: 2000, step: 50,  default: 250  },
  { key: "booking",    label: "Booking rate (%)",   min: 1,    max: 50,   step: 1,   default: 12   },
  { key: "close",      label: "Close rate (%)",     min: 1,    max: 80,   step: 1,   default: 30   },
  { key: "dealValue",  label: "Average deal value", min: 100,  max: 20000,step: 100, default: 1200 },
];

function Slider({ label, min, max, step, value, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-4 last:mb-0 bg-white p-4 rounded-2xl border border-[#00000026]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-black font-bold">{label}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-gray-800">
          {label.includes("%") ? `${value}%` : value.toLocaleString()}
        </span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#08A541] transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [ref, visible] = useVisible();
  const [annual, setAnnual] = useState(false);
  const [planIdx, setPlanIdx] = useState(1);
  const [values, setValues] = useState({
    leads: 250, booking: 12, close: 30, dealValue: 1200,
  });

  const bookedCalls = Math.round(values.leads * (values.booking / 100));
  const closedDeals = Math.round(bookedCalls * (values.close / 100));
  const revenue = closedDeals * values.dealValue;
  const planCost = annual
    ? PLANS[planIdx].cost
    : Math.round(PLANS[planIdx].cost / 12);
  const annualCost = PLANS[planIdx].cost;
  const roi = (revenue * 12 / annualCost).toFixed(1);

  const bookedCount = useCounter(bookedCalls);
  const closedCount = useCounter(closedDeals);
  const revenueCount = useCounter(revenue);

  function update(key, val) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  const CheckIcon = () => (
    <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
      <svg width="9" height="7" viewBox="0 0 12 10" fill="none">
        <path d="M1 5l3.5 3.5L11 1" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <section ref={ref} className="py-8 px-6 lg:px-20">
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}
        className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8"
      >

        {/*  Top bar  */}
        <div className="flex flex-row items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold text-black font-degular">Estimate Your ROI</h3>
          <div className="flex items-center gap-3 flex-wrap">
            {/* Plan selector */}
            <div className="flex items-center gap-2">
              <span className="text-base font-medium font-pjs text-gray-500">Plan For ROI</span>
              <div className="relative">
                <select
                  value={planIdx}
                  onChange={(e) => setPlanIdx(Number(e.target.value))}
                  className="appearance-none border border-gray-200 rounded-xl px-3 py-2 pr-8 text-sm font-medium text-gray-700 outline-none cursor-pointer hover:border-gray-400 transition-colors bg-white"
                >
                  {PLANS.map((p, i) => (
                    <option key={p.label} value={i}>{p.label}</option>
                  ))}
                </select>
                {/* <svg className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg> */}
              </div>
            </div>
            {/* Monthly/Annual toggle */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              {["Monthly", "Annual"].map((t) => (
                <button
                  key={t}
                  onClick={() => setAnnual(t === "Annual")}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    (t === "Annual") === annual
                      ? "bg-[#35E834] text-black shadow-sm"
                      : "text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid  */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Left — sliders */}
          <div className="flex-1 bg-linear-to-b from-[#D0F56B66] to-[#D0F56B00] to-20% border border-[#BBF7D0] rounded-2xl p-5">
            {SLIDERS.map((s) => (
              <Slider
                key={s.key}
                label={s.label}
                min={s.min}
                max={s.max}
                step={s.step}
                value={values[s.key]}
                onChange={(v) => update(s.key, v)}
              />
            ))}
          </div>

          {/* Right — outputs */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Booked + Closed row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Booked calls per month", value: bookedCount },
                { label: "Closed deals per month", value: closedCount },
              ].map((m) => (
                <div key={m.label} className="border border-gray-200 rounded-2xl p-4 font-pjs">
                  <p className="text-base text-[#787878] mb-1">{m.label}</p>
                  <p className="text-4xl font-extrabold text-gray-900">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Projected Revenue */}
            <div className="border border-gray-200 rounded-2xl p-5 flex-1">
              <p className="text-base text-[#787878] font-medium mb-1">Projected Revenue</p>
              <p className="text-5xl font-extrabold text-gray-900 mb-3">
                ${revenueCount.toLocaleString()}
              </p>
              <p className="text-base text-[#787878] mt-20">
                Compared to plan cost ${annualCost.toLocaleString()}/year
              </p>
              <p className="text-sm font-bold text-[#08A541] mt-1">
                ROI multiplier {roi}×
              </p>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── + Button */}
        <div className="flex flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="flex gap-8">
            {[
              { bold: "30-Day Money-Back:", text: (<>Love <br /> It Or Get A Full Refund.</>) },
              { bold: "No Contracts:", text: (<>Cancel <br /> Anytime. Keep Your Data.</>) },
              { bold: "Secure & Compliant:", text: (<>DKIM/SPF, <br /> DNC, GDPR/TCPA Ready.</>) },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-2">
                 <Image src="/images/pricing/icons/check.svg" width={15} height={15} />
                <p className="text-xs text-black leading-snug">
                  <span className="font-bold text-black">{item.bold}</span> {item.text}
                </p>
              </div>
            ))}
          </div>

          <button
            className="flex-shrink-0 bg-[#35E834] cursor-pointer text-black font-bold font-degular px-16 py-3 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ boxShadow: "0 0 18px 4px rgba(8,165,65,0.4)" }}
          >
            Get Started →
          </button>
        </div>

      </div>
    </section>
  );
}