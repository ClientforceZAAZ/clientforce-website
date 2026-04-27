import React from 'react'

export default function LiveOnDemandWebinar() {
  return (
    /* Main Container: 
       Replace 'YOUR_GRADIENT_IMAGE_URL' with your actual image path.
       We use bg-top to ensure the 'dark' part starts at the top and transitions to 'dark green'.
    */
    <section 
      className="w-full bg-cover bg-top bg-no-repeat py-20 px-6"
      style={{ backgroundImage: `url('/images/resources/live_on_demand_bg.png')`, }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* 1. Top Section: Webinars & Subscription */}
        <div>
          <h2 className="text-2xl font-medium text-white mb-10 opacity-80">
            Live & on-demand webinars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WebinarCard 
              title="Perpetual Campaigns: from setup to scale." 
              description="See real setups for email -> WA -> voice with proposals at scale. Button: Watch now"
            />
            <WebinarCard 
              title="Perpetual Campaigns: from setup to scale." 
              description="See real setups for email -> WA -> voice with proposals at scale. Button: Watch now"
            />

            {/* Subscription Card */}
            <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/10 rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="text-[#D0F56B] font-bold mb-2">Get updates</h3>
                <p className="text-white font-bold text-xl leading-tight">
                  New resources weekly.<br /> No noise, just wins.
                </p>
              </div>
              <div className="space-y-3 mt-6">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none"
                />
                <button className="w-fit px-6 py-2 border border-white/20 text-white rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Middle Section: Docs & Roadmap (These sit on the green part of your gradient) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocsCard 
            title="Product Docs"
            description="Configuration, APIs, and advanced playbook setup. Everything documented in one place."
          />
          <DocsCard 
            title="Changelog & Roadmapz"
            description="See what shipped and what's coming. Vote on features and request integrations."
          />
        </div>

        {/* 3.= Blue Banner */}
         <div className="bg-[#6cd3e6] rounded-xl pl-4 sm:pl-8 lg:py-6 py-4 sm:py-6 pr-4 sm:pr-6 lg:pr-0 relative overflow-hidden flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between">
        
        {/* Left Side: Content */}
        <div className="flex-1 z-10">
          <h2 className=" text-2xl sm:text-4xl font-bold font-degular text-black tracking-tight mb-1">
            Deploy your first Agent this week. Follow the guides, clone a playbook, and launch in minutes.
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

      </div>
    </section>
  )
}

/** * Internal Helper: Webinar Card */
function WebinarCard({ title, description }) {
  return (
    <div className="bg-[#262626]/80 backdrop-blur-md rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[280px] border border-white/5 hover:border-white/20 transition-all">
      <div>
        <span className="text-[#D0F56B] text-sm font-bold mb-4 block uppercase tracking-wider">On-Demand:</span>
        <h3 className="text-lg font-bold leading-snug mb-3 text-white">
          {title} <span className="text-gray-400 font-normal">{description}</span>
        </h3>
      </div>
      <button className="w-fit bg-gradient-to-r from-[#D0F56B] to-[#A3E635] text-black px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110 transition-all">
        Watch Now
      </button>
    </div>
  )
}

/** * Internal Helper: Docs/Changelog Card */
function DocsCard({ title, description }) {
  return (
    <div className="bg-white rounded-[2rem] p-10 flex flex-col gap-8 shadow-2xl">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="bg-gradient-to-b from-[#4a5542] to-[#2d3528] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:opacity-90">
          View Changelog
        </button>
        <button className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50">
          See Roadmap
        </button>
      </div>
    </div>
  )
}