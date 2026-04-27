import React from 'react';
import { HiStar } from 'react-icons/hi'; // Using Heroicons for the green stars

export default function CompanyGoals() {
  return (
    <section className="w-full bg-[#F8F9FA] pb-16 px-6 md:px-16">
      <div className=" flex flex-col gap-8">
        
        {/* Top Row: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Mission */}
          <GoalCard 
            imageSrc="/images/company/mission-image.png" 
            title="Our Mission"
            description="Remove The Radical Grind From Revenue So Founders And Teams Can Focus On Product, Service, And Customers. We Design Agents That Remove Prospecting, End-To-End Sales Campaigns — From Finding Leads To Booking Calls To Closing Deals — With Built-In Guardrails."
          />
          
          {/* Our Vision */}
          <GoalCard 
            imageSrc="/images/company/vision-image.png" 
            title="Our Vision"
            description="A World Where Every Business, Regardless Of Size, Deploys AI Operators That Compound Results Daily. Sales Becomes A Reliable Input System — Not A Heroic Effort."
          />
        </div>

        {/* Bottom Row: What We Build Section */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-4 md:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left: Product Image with Green Accent Backdrop */}
            <div className="w-full lg:w-1/2 relative">
                <img 
                  src="/images/company/what_we_build.png" 
                  alt="Product UI Illustration"
                  className="w-full h-full object-cover"
                />
            </div>

            {/* Right: What We Build Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-6">
              <h2 className="text-3xl font-bold text-black mb-8 font-degular tracking-tight">
                What We Build
              </h2>
              <ul className="space-y-4">
                <BuildListItem text="AI Agent Infrastructure" />
                <BuildListItem text="Agent Training (AI Sales Prospecting)" />
                <BuildListItem text="Multichannel Outreach" />
                <BuildListItem text="Conversation AI" />
                <BuildListItem text="Unified Inbox & Analytics" />
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/** * Helper Component: Mission/Vision Cards */
function GoalCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#24000000] shadow-sm flex flex-col gap-6">
      <div className="w-full h-64 rounded-xl overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-black font-degular tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

/** * Helper Component: Green Star List Item */
function BuildListItem({ text }) {
  return (
    <li className="flex items-center gap-4 text-lg font-bold text-gray-800">
      <HiStar className="text-[#35E834] text-2xl shrink-0" />
      <span className="tracking-tight">{text}</span>
    </li>
  );
}