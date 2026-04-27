"use client"

import React, { useState } from 'react';

const CATEGORIES = [
  "All", "Email & Sending", "Calendars", "Messages & Voice", "CRM & Data", "Automation", "Payments"
];

const INTEGRATIONS_DATA = [
  {
    id: 1,
    category: "Email & Sending",
    name: "Gmail (OAuth)",
    status: "Connected",
    description: "Sync inbox, send from any domain, log replies to ClientForce, and track deliverability."
  },
  {
    id: 2,
    category: "Email & Sending",
    name: "Outlook / Microsoft 365",
    status: "Connect",
    description: "Connect Outlook to send, log emails, auto-thread conversations, and track deliverability."
  },
  {
    id: 3,
    category: "Email & Sending",
    name: "SendGrid / Mailgun / SES",
    status: "Connect",
    description: "Set up for higher throughput. DKIM/SPF verification and bounce tracking."
  },
  {
    id: 4,
    category: "Payments",
    name: "Stripe",
    status: "Connected",
    description: "Connect Stripe for payments, subscriptions, and invoicing."
  },
  {
    id: 5,
    category: "Payments",
    name: "Paddle",
    status: "Connect",
    description: "Integrate Paddle for SaaS billing and global payments."
  },
  {
    id: 6,
    category: "Payments",
    name: "Paypal Checkout",
    status: "Coming Soon",
    description: "Enable PayPal for fast, secure checkout."
  }
];

export default function AllIntegrations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredIntegrations = activeFilter === "All"
    ? INTEGRATIONS_DATA
    : INTEGRATIONS_DATA.filter(item => item.category === activeFilter);

  return (
    <section className="bg-[#F8F9FA] min-h-screen pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Functional Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                activeFilter === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2. Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col min-h-[340px]"
            >
              {/* Card Header: Icon and Status */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl border border-gray-200" />
                <StatusBadge status={item.status} />
              </div>

              {/* Card Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black mb-3">{item.name}</h3>
                <p className="text-gray-500 text-lg font-semibold leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: 3D Manage Button and Docs */}
              <div className="flex gap-3">
                <button className="relative group">
                  <div className="absolute inset-0 translate-y-[3px] bg-green-500 rounded-xl" />
                  <div className="relative bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-2.5 rounded-xl text-base font-bold font-asgard transition-transform active:translate-y-[2px]">
                    Manage
                  </div>
                </button>
                
                <button className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-xl text-base font-bold shadow-sm hover:bg-gray-50 transition-colors">
                  Docs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** * Helper: Dynamic Status Badge */
function StatusBadge({ status }) {
  const styles = {
    "Connected": "text-green-600 bg-green-50 border-green-100",
    "Connect": "text-gray-400 bg-gray-50 border-gray-100",
    "Coming Soon": "text-orange-600 bg-orange-50 border-orange-100"
  };

  return (
    <span className={`px-3 py-1 rounded-lg text-[11px] font-bold border ${styles[status] || styles["Connect"]}`}>
      {status}
    </span>
  );
}