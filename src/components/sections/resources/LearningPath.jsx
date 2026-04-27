import React from 'react';

const PATHS = [
  {
    title: "Agencies",
    bgColor: "#3DD8E733", // #3DD8E7 at 20%
    items: [
      "From lead drought to booked calendars",
      "Clone high-ticket outreach playbook",
      "Activate Finder 2 with 3 keyword themes",
      "Enable Dynamic Proposals for fast spec"
    ]
  },
  {
    title: "SaaS / B2B",
    bgColor: "#FF9D7C33", // #FF9D7C at 20%
    items: [
      "Trials to paid: the activation engine",
      "Personalize welcome & onboarding",
      "Win page: A/B test of Day 4",
      "Proposal with pricing & ROI calc"
    ]
  }
];

export default function LearningPath() {
  return (
    <section className=" px-6 lg:px-16 pb-10 bg-[#F8F9FA]">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Header Content */}
        <div className="lg:w-1/3 pt-4">
          <h2 className="text-2xl font-bold text-black mb-4">Learning paths</h2>
          <p className="text-gray-700 leading-relaxed font-medium">
            Pick a path tailored to your role or goal and complete the quick wins in under a week.
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 w-full">
          {PATHS.map((path, index) => (
            <div 
              key={index} 
              className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Inner Colored Content Block */}
              <div 
                style={{ backgroundColor: path.bgColor }}
                className="rounded-xl p-8 mb-6 flex-grow"
              >
                <h3 className="text-xl font-bold text-black mb-6">{path.title}</h3>
                <ul className="space-y-3">
                  {path.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm leading-snug">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-fit px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm ml-2 mb-2">
                Start Path
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}