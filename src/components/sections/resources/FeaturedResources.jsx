"use client"

import React, { useState } from 'react';

const CATEGORIES = ["All", "Getting Started", "Guides", "Playbooks", "Webinars", "Templates", "Docs", "Changelog"];

const RESOURCE_DATA = [
  {
    id: 1,
    category: "Guides",
    label: "Guide",
    title: "Deploy your first AI Sales Agent (Step-by-Step)",
    description: "Launch your first AI sales agent, connect data, and boost performance.",
    tags: ["PDF", "5-mins Read", "Beginner"],
  },
  {
    id: 2,
    category: "Playbooks",
    label: "Playbook",
    title: "DIY Playbooks for Agencies, SaaS, and Local",
    description: "Description: Customizable playbooks for different industries.",
    tags: ["PDF", "5-mins Read", "Beginner"],
  },
  {
    id: 3,
    category: "Webinars",
    label: "Webinar",
    title: "Masterclass: Multichannel Outreach that Converts",
    description: "Outreach strategies with live Q&A.",
    tags: ["PDF", "5-mins Read", "Beginner"],
  },
  // Add more mock data as needed to test filtering
];

export default function FeaturedResources() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredResources = activeFilter === "All" 
    ? RESOURCE_DATA 
    : RESOURCE_DATA.filter(item => item.category === activeFilter);

  return (
    <section className=" px-6 lg:px-16 py-16 bg-[#F8F9FA]">
      {/* 1. Functional Filter Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar mb-8 pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all whitespace-nowrap ${
              activeFilter === cat 
                ? "bg-black text-white border-black" 
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Header Section */}
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
        <button className="flex items-center gap-1 text-gray-900 font-bold hover:underline">
          See All 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* 3. Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((item) => (
          <div key={item.id} className="flex flex-col group border border-gray-300 rounded-xl p-4">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-[#F7F7F7] rounded-xl mb-6 border border-gray-100 transition-shadow group-hover:shadow-md" />
            
            {/* Content */}
            <span className="text-gray-500 text-sm font-medium mb-2">{item.label}</span>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-3">
              <button className="bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">
                Save
              </button>
              <button className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}