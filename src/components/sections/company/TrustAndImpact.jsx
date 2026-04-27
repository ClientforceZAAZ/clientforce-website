import React from 'react'
import { HiArrowDown } from 'react-icons/hi'

export default function TrustAndImpact() {
  return (
    <section  className="w-full bg-cover bg-top bg-no-repeat py-16 px-6 sm:px-10"
      style={{ backgroundImage: `url('/images/resources/live_on_demand_bg.png')`, }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* 1. Top Section: Trust & Social Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trust & Security Card - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
            <h2 className="text-2xl font-bold text-black tracking-tight font-degular">
              Trust & Security
            </h2>
            <ul className="space-y-4">
              <SecurityItem text="Data residency controls, encrypted rest and in transit" />
              <SecurityItem text="OAuth where possible, scoped API keys, per-agent permissions" />
              <SecurityItem text="Compliance standards: DPA/GDPR, DMCA, GDPR/CCPA, WhatsApp templates" />
              <SecurityItem text="Audit logs, SSO/SAML, Enterprise, role-based access controls" />
            </ul>
          </div>

          {/* Social Impact Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black tracking-tight font-degular">
                Social Impact
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Community skill-building and entrepreneurship through foundation initiatives and mentorship programs.
              </p>
            </div>
            <button className="w-fit mt-8 px-6 py-2.5 border border-gray-200 text-black rounded-xl text-sm font-bold hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* 2. Middle Section: Press, Advisors, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Press Card */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
             <span className="text-[#D0F56B] text-xs font-bold uppercase tracking-widest">Press</span>
             <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10" />
             <button className="flex items-center gap-2 w-fit bg-linear-to-r from-[#f5fca8] via-[#b9fcd2] to-[#57fa93] text-black px-4 py-2 rounded-lg text-base font-bold hover:brightness-110 transition-all mt-auto">
                Download Press Kit <HiArrowDown />
             </button>
          </div>

          {/* Advisors Card */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
             <span className="text-[#D0F56B] text-xs font-bold uppercase tracking-widest">Advisors & Partners</span>
             <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-full bg-white/10 border border-white/5" />
                ))}
             </div>
             <button className="w-fit bg-linear-to-r from-[#f5fca8] via-[#b9fcd2] to-[#57fa93] text-black px-5 py-2 rounded-lg text-base font-bold hover:bg-white/20 transition-all border border-white/10">
                Watch Now
             </button>
          </div>

          {/* Contact Card */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
             <span className="text-[#D0F56B] text-xs font-bold uppercase tracking-widest">Contact</span>
             <div className="space-y-1">
                <p className="text-white font-medium text-base">Press: <span className="text-white/60">press@enterpret.ai</span></p>
                <p className="text-white font-medium text-base">Partnerships: <span className="text-white/60">sales@enterpret.ai</span></p>
             </div>
             <div className="mt-auto">
               <button className=" px-4 border border-white/40 text-white py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
                 Talk To Sales
               </button>
             </div>
          </div>
        </div>

          {/* 3.Banner */}
         <div className="bg-[#FF9D7C9C] rounded-xl pl-4 sm:pl-6 lg:py-0 py-4 sm:py-6 pr-4 sm:pr-6 lg:pr-0 relative overflow-hidden flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between">
        
        {/* Left Side: Content */}
        <div className="flex-1 z-10">
          <h2 className=" text-2xl sm:text-4xl font-bold font-degular text-white tracking-tight mb-1">
            Come build with us!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6">
            From inboxes to Voice to webhooks- your Agents work where you already do.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-wrap gap-4">
            {/* Start Free Trial Button Placeholder */}
            <button className=" bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border-b-4 border-green-500 hover:scale-105 transition-all shadow-lg cursor-pointer ease-in-out sm:text-base text-sm">
              See Open Roles
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Talk To Sales Button Placeholder */}
            <button className="bg-white text-gray-700 px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border border-gray-500 shadow-sm hover:scale-105 transition-all ease-in-out cursor-pointer text-sm sm:text-base">
              About The Team
            </button>
          </div>
        </div>

        {/* Right Side: Image Cluster */}
        <div className="flex-1 relative w-full lg:flex items-center justify-end hidden">
          <img src="/images/legal/buildConfidence.png" alt="Build Confidence" className='h-60' />
        </div>

      </div>

      </div>
    </section>
  )
}

function SecurityItem({ text }) {
  return (
    <li className="text-gray-500 font-medium text-sm flex items-start gap-2">
       <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
       {text}
    </li>
  )
}