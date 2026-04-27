import React from "react";

export default function IntegrationsDetail() {
  return (
    <section className="w-full bg-[#F8F9FA] pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* SECTION 1: Top Row (Process & Status) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Process (Wider Span) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-8 font-asgard">
              How connections power your Agents
            </h3>
            <ul className="space-y-5">
              <ProcessItem
                number="1"
                title="Connect once:"
                desc="OAuth, API key, or webhook URL. We guide setup with inline checks."
              />
              <ProcessItem
                number="2"
                title="Map fields:"
                desc="Match names/phones/custom fields so Agents can personalize correctly."
              />
              <ProcessItem
                number="3"
                title="Assign to agents:"
                desc="Choose which senders, calendars, and numbers each Agent can use."
              />
              <ProcessItem
                number="4"
                title="Monitor health:"
                desc="Deliverability, number reputation, and template approval status."
              />
              <ProcessItem
                number="5"
                title="Automate events:"
                desc="Trigger zaps or webhooks on new lead, reply, booking, proposal viewed, paid."
              />
            </ul>
          </div>

          {/* Card 2: Live Monitoring (Narrower Span) */}
          <div className="lg:col-span-5 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-8 font-asgard">
              How connections power your Agents
            </h3>
            <div className="space-y-6">
              <StatusRow
                label="1. Gmail (team@domain.com)"
                status="Healthy"
                color="text-green-500"
              />
              <StatusRow
                label="2. WhatsApp Business (API)"
                status="Approved"
                color="text-green-500"
              />
              <StatusRow
                label="3. Twilio Voice (+1•••)"
                status="Reputation watch"
                color="text-orange-400"
              />
              <StatusRow
                label="4. Google Calendar"
                status="Sync on"
                color="text-green-500"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Middle Row (Security & Request) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 3: Security (Wider Span) */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-black mb-6 font-asgard">
                Security & Permissions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-xl">
                OAuth wherever possible, scoped API keys, per-agent permissions,
                and audit logs. Email uses DKIM/SPF; WhatsApp templates require
                approval; voice adheres to DNC rules. You control access per
                workspace and client.
              </p>
            </div>
            <button className="w-fit px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-black hover:bg-gray-50 transition-colors shadow-sm">
              Manage Connections
            </button>
          </div>

          {/* Card 4: Tool Request (Narrower Span) */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-black mb-6 font-asgard">
                Don't see your tool?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                Use Webhooks/Zapier or request a native integration. Popular
                requests fast-tracked each cycle.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="relative group">
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 translate-y-[3px] bg-green-600 rounded-xl" />
                {/* Main Gradient Body */}
                <div className="relative bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold font-asgard transition-transform active:translate-y-[2px]">
                  Request Integration
                </div>
              </button>
              <button className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-black hover:bg-gray-50 transition-colors shadow-sm">
                Open API Docs
              </button>
            </div>
          </div>
        </div>

        {/* 3.Banner */}
        <div className="bg-[#f5fcab] rounded-xl pl-4 sm:pl-6 lg:py-0 py-4 sm:py-6 pr-4 sm:pr-6 lg:pr-0 relative overflow-hidden flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between">
          {/* Left Side: Content */}
          <div className="flex-1 z-10">
            <h2 className=" text-2xl sm:text-4xl font-bold font-degular text-black tracking-tight mb-1">
              Connect your stacks in minutes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 mb-6">
              From inboxes to Voice to webhooks- your Agents work where you
              already do.
            </p>

            {/* Buttons Area */}
            <div className="flex flex-wrap gap-4">
              {/* Start Free Trial Button Placeholder */}
              <button className=" bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border-b-4 border-green-500 hover:scale-105 transition-all shadow-lg cursor-pointer ease-in-out sm:text-base text-sm">
                Start Free Trial
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Talk To Sales Button Placeholder */}
              <button className="bg-white text-gray-700 px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border border-gray-500 shadow-sm hover:scale-105 transition-all ease-in-out cursor-pointer text-sm sm:text-base">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Talk To Sales
              </button>
            </div>
          </div>

          {/* Right Side: Image Cluster */}
          <div className="flex-1 relative w-full lg:flex items-center justify-end hidden">
            <img
              src="/images/legal/buildConfidence.png"
              alt="Build Confidence"
              className="h-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** * Internal Helper: List Item for Process Card */
function ProcessItem({ number, title, desc }) {
  return (
    <li className="flex gap-1.5 text-sm leading-relaxed">
      <span className="font-bold text-black shrink-0">
        {number}. {title}
      </span>
      <span className="text-gray-700">{desc}</span>
    </li>
  );
}

/** * Internal Helper: Status Row with Dash Separator */
function StatusRow({ label, status, color }) {
  return (
    <div className="flex justify-between items-center text-[13.5px] font-medium">
      <span className="text-gray-900">{label}</span>
      <span className={`flex items-center gap-2 ${color}`}>
        <span className="text-gray-300 font-light">—</span> {status}
      </span>
    </div>
  );
}
