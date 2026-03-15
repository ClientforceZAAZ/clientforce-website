"use client";

export default function AgentEngineDashboard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-100 overflow-hidden font-sans select-none">

      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-900">Clientforce</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1 text-[11px]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#08A541] text-[#08A541] font-semibold">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            Dashboard
          </div>
          {["Agents", "Contacts", "Analytics", "Playbook"].map((item) => (
            <span key={item} className="px-3 py-1.5 text-gray-400 font-medium">{item}</span>
          ))}
        </div>
      </div>

      {/* Page Header */}
      <div className="px-5 pt-4 pb-2">
        <h3 className="text-[13px] font-bold text-gray-900">Setup Agent</h3>
        <p className="text-[10px] text-gray-400 mt-0.5">Follow these steps to launch your AI Agent, it only takes a few mins</p>
      </div>

      {/* Main Content */}
      <div className="flex gap-3 px-5 pb-5">

        {/* Left Stepper */}
        <div className="w-[130px] flex-shrink-0 space-y-2 pt-1">
          {/* Active Step */}
          <div className="flex items-center gap-2 bg-white rounded-xl px-2.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="w-4 h-4 rounded-full bg-[#08A541] flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <span className="text-[10px] font-semibold text-gray-800">Setup Agent</span>
          </div>

          {/* Inactive Steps */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2 px-2.5 py-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-200 flex-shrink-0" />
              <div className={`h-2 rounded-full bg-gray-200 ${i % 2 === 0 ? "w-14" : "w-10"}`} />
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex gap-3">

          {/* Schedule Card */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">

            {/* Agent Header */}
            <div className="flex items-center gap-2 px-3 py-2.5 bg-[#F0FDF4] border-b border-green-100">
              <div className="w-7 h-7 rounded-full bg-[#f5c5a3] flex items-center justify-center text-[14px]">
                🧑
              </div>
              <span className="text-[11px] font-bold text-gray-900">New ForceAgent 1</span>
            </div>

            {/* Schedule Section */}
            <div className="px-3 pt-3 pb-2">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold text-gray-700">Schedule</span>
                <div className="w-4 h-4 rounded-full bg-[#08A541] flex items-center justify-center">
                  <svg width="7" height="6" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex gap-2 mb-3">
                {[
                  { value: "3", label: "EST Send/Day", color: "bg-[#E8F5B0]" },
                  { value: "12", label: "EST Calls /Day", color: "bg-[#B8EEF8]" },
                  { value: "9", label: "EST Replies/Day", color: "bg-[#EDD8F8]" },
                ].map((stat) => (
                  <div key={stat.label} className={`flex-1 ${stat.color} rounded-xl px-2 py-2 text-center`}>
                    <div className="text-[14px] font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[8px] text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Duration */}
              <div className="mb-3">
                <span className="text-[9px] font-semibold text-gray-600">Duration:</span>
                <div className="h-2 rounded-full bg-gray-100 mt-1 w-3/4" />
              </div>

              {/* Bottom Row with Avatar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#f5c5a3] flex items-center justify-center text-[9px]">🧑</div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 bg-gray-200 rounded-full" />
                    <div className="h-1.5 w-10 bg-gray-100 rounded-full" />
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#08A541] flex items-center justify-center">
                  <svg width="7" height="6" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Config Panel */}
          <div className="w-[100px] flex-shrink-0 space-y-3 pt-1">
            {[
              { label: "Avatar", content: "upload" },
              { label: "Primary Goal", content: "dash" },
              { label: "Owner", content: "dash" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[9px] font-semibold text-gray-500 mb-1">{item.label}</p>
                {item.content === "upload" ? (
                  <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1.5">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-[8px] text-gray-400">Upload Avatar</span>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg px-2 py-1.5">
                    <span className="text-[9px] text-gray-300">-.</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}