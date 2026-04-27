import React from 'react'
import Image from 'next/image'

export default function BuildConfidence() {
  return (
    <section className="px-8 pt-6 pb-10">
      {/* Main Container */}
      <div className="bg-[#6cd3e6] rounded-xl pl-4 sm:pl-6 lg:py-0 py-4 sm:py-6 pr-4 sm:pr-6 lg:pr-0 relative overflow-hidden flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between">
        
        {/* Left Side: Content */}
        <div className="flex-1 z-10">
          <h2 className=" text-3xl sm:text-4xl font-bold font-degular text-black tracking-tight mb-1">
            Build with confidence.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 mb-6">
            Strong defaults, clear policies, and responsive support.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-wrap gap-4">
            {/* Start Free Trial Button Placeholder */}
            <button className=" bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)] text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border-b-4 border-green-500 hover:scale-105 transition-all shadow-lg cursor-pointer ease-in-out sm:text-base text-sm">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Talk To Sales Button Placeholder */}
            <button className="bg-white text-gray-700 px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 border border-gray-500 shadow-sm hover:scale-105 transition-all ease-in-out cursor-pointer text-sm sm:text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Talk To Sales
            </button>
          </div>
        </div>

        {/* Right Side: Image Cluster */}
        <div className="flex-1 relative w-full lg:flex items-center justify-end hidden">
          <img src="/images/legal/buildConfidence.png" alt="Build Confidence" className='h-60' />
        </div>

      </div>
    </section>
  )
}