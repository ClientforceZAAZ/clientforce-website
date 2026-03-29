"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.1) {
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

const CASE_STUDIES = [
  { company: "Acme Dental", industry: "SaaS", title: "37 qualified meetings in 7 days", revenue: "$43k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental.png", goal: "Meetings" },
  { company: "Acme Dental", industry: "Local Services", title: "37 qualified meetings in 7 days", revenue: "$42k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental2.png", goal: "Revenue" },
  { company: "Acme Dental", industry: "Local Services", title: "37 qualified meetings in 7 days", revenue: "$42k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental3.png", goal: "Proposals" },
  { company: "Acme Dental", industry: "Local Services", title: "37 qualified meetings in 7 days", revenue: "$42k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental4.png", goal: "Meetings" },
  { company: "Acme Dental", industry: "Local Services", title: "37 qualified meetings in 7 days", revenue: "$42k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental5.png", goal: "Revenue" },
  { company: "Acme Dental", industry: "Local Services", title: "37 qualified meetings in 7 days", revenue: "$42k new revenue", proposals: "120+ proposals", tags: ["Finder v2", "Email + WA + Voice", "Unified Inbox"], image: "/images/case-studies/acme_dental6.png", goal: "Proposals" },
];

const INDUSTRIES = ["All", "Local Services", "SaaS", "Agency", "Healthcare"];
const GOALS = ["All", "Meetings", "Revenue", "Proposals"];
const SORT_OPTIONS = ["All", "Newest", "Most Revenue", "Most Meetings"];

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg text-black font-bold whitespace-nowrap">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none border border-gray-200 bg-white rounded-lg pl-3 pr-8 py-1.5 text-sm sm:text-lg text-black font-semibold outline-none cursor-pointer hover:border-gray-400 transition-colors"
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <svg className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
      }}
      className="bg-white border border-gray-200 p-3 rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div
        className="w-full bg-gray-100 overflow-hidden"
        style={{ height: "160px" }}
      >
        {study.image ? (
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-2 flex-1">

        {/* Company + Industry */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gray-300 flex-shrink-0" />
          <div>
            <p className="text-[10px] text-gray-400">Company</p>
            <p className="text-sm font-semibold text-black leading-none">{study.company}</p>
          </div>
          <div className="ml-4">
            <p className="text-[10px] text-gray-400">Industry</p>
            <p className="text-sm font-semibold text-[#00000099] leading-none">{study.industry}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{study.title}</h3>

        {/* Stats */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-black font-semibold  border border-[#00000033] px-2 py-0.5 rounded-md">{study.revenue}</span>
          <span className="text-xs text-black font-semibold  border border-[#00000033] px-2 py-0.5 rounded-md">{study.proposals}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {study.tags.map((tag) => (
            <span key={tag} className="text-xs text-black border border-[#00000033] px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-8 pt-2">
          <button className="flex-1 text-sm font-bold bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white py-2 rounded-lg  transition-all duration-200">
            View Case Study
          </button>
          <button className="flex-1 text-sm font-bold bg-[linear-gradient(90deg,#EEFC5399,#3DD8E733,#3DD8E733,#0AD85599,#0AD85599)] text-black py-2 rounded-lg hover:brightness-110 transition-all duration-200">
            Deploy Playbook
          </button>
        </div>

      </div>
    </div>
  );
}

export default function FeaturedCaseStudies() {
  const [ref, visible] = useVisible();
  const [industry, setIndustry] = useState("All");
  const [goal, setGoal] = useState("All");
  const [sort, setSort] = useState("All");

  const filtered = CASE_STUDIES.filter((s) => {
    if (industry !== "All" && s.industry !== industry) return false;
    if (goal !== "All" && s.goal !== goal) return false;
    return true;
  });

  return (
    <section ref={ref} className="py-6 md:py-12 px-6 lg:px-16 bg-gray-50">

      {/* Header row */}
      <div
  style={{
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-12px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  }}
  className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 sm:mb-12"
>
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-degular text-black text-center sm:text-left">
    Featured Case Studies
  </h2>

  {/* Filters */}
  <div className="flex flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
    <FilterSelect
      label="Industry:"
      options={INDUSTRIES}
      value={industry}
      onChange={setIndustry}
    />
    <FilterSelect
      label="Goal:"
      options={GOALS}
      value={goal}
      onChange={setGoal}
    />
    <FilterSelect
      label="Sort by:"
      options={SORT_OPTIONS}
      value={sort}
      onChange={setSort}
    />
  </div>
</div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((study, i) => (
          <CaseStudyCard
            key={i}
            study={study}
            visible={visible}
            delay={`${0.1 + i * 0.07}s`}
          />
        ))}
      </div>

      {/* See All */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.5s",
        }}
        className="flex justify-center mt-10"
      >
        <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
          See All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}