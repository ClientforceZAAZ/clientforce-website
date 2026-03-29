"use client";

import { useState, useMemo } from "react";

const SLIDERS = [
  { id: "dealValue",
    label: "Average Deal Value",
    min: 500,  
    max: 10000, 
    step: 100, 
    defaultValue: 8000, 
    format: (v) => `$${v.toLocaleString()}` 
  },

  { id: "leadsPerAgent",  
    label: "Monthly Lead per Agent",   
    min: 50,   
    max: 1000,  
    step: 10,  
    defaultValue: 700,  
    format: (v) => v.toLocaleString() },

  { id: "conversionRate", 
    label: "Conversion Rate",          
    min: 3,    
    max: 25,    
    step: 1,   
    defaultValue: 15,   
    format: (v) => `${v}%` },

  { id: "agents",         
    label: "Number of Agents",         
    min: 1,   
    max: 10,   
    step: 1,   
    defaultValue: 8,    
    format: (v) => v },
];

function Slider({ config, value, onChange }) {
  const pct = ((value - config.min) / (config.max - config.min)) * 100;
  return (
    <div className="mb-2 border border-gray-300 px-4 py-4 shadow rounded-2xl">
      <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm font-bold text-black">{config.label}</span>
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <span className="font-medium text-gray-800">{config.format(config.min)}</span>
          <span className="text-gray-300">→</span>
          <span className="font-semibold text-gray-900">{config.format(config.max)}</span>
        </span>
      </div>
      <div className="relative h-2 w-full rounded-full bg-gray-200">
        <div className="absolute left-0 top-0 h-2 rounded-full bg-green-400 transition-all duration-150" style={{ width: `${pct}%` }} />
        <input type="range" min={config.min} max={config.max} step={config.step} value={value} onChange={(e) => onChange(config.id, Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
      </div>
    </div>
  );
}

export default function AgentRoiCard() {
  const [values, setValues] = useState(() => Object.fromEntries(SLIDERS.map((s) => [s.id, s.defaultValue])));

  function handleChange(id, val) {
    setValues((prev) => ({ ...prev, [id]: val }));
  }

  const monthlyRevenue = useMemo(() => {
    const { dealValue, leadsPerAgent, conversionRate, agents } = values;
    return Math.round(dealValue * (leadsPerAgent * (conversionRate / 100)) * agents);
  }, [values]);

  return (
    <div className="relative w-full max-w-sm mx-4 sm:mx-0 overflow-hidden rounded-3xl bg-white p-6 shadow-xl">
      <h3 className="mb-2 text-xl font-bold text-black border border-gray-300 px-4 py-4 shadow rounded-2xl">ROI Calculator</h3>
      {SLIDERS.map((s) => (
        <Slider key={s.id} config={s} value={values[s.id]} onChange={handleChange} />
      ))}
      <div className="my-2 h-px bg-gray-100" />
      <div>
        <p className="text-xl lg:text-[28px] text-[#787878]">Project Monthly Revenue:</p>
        <p className="my-1 text-4xl lg:text-5xl font-bold tracking-tight text-black">
          ${monthlyRevenue.toLocaleString()}+
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#787878]">
          Every Agent runs a full sales cycle—finding leads following up, calling and closing automaticaly.
        </p>
      </div>
      <style>{`
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 2px solid #4ade80; box-shadow: 0 1px 4px rgba(0,0,0,0.15); cursor: pointer; }
        input[type="range"]::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 2px solid #4ade80; box-shadow: 0 1px 4px rgba(0,0,0,0.15); cursor: pointer; }
      `}</style>
    </div>
  );
}