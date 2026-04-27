// import React from 'react';
// import { FiChevronRight } from 'react-icons/fi'; // Assumes react-icons is installed

// const TemplatesAndDownloads = () => {
//   // Define mock data for the cards
//   const cardData = [
//     {
//       id: 1,
//       type: "Guide",
//       title: "Deploy your first AI Sales Agent (Step-by-Step)",
//       description: "Launch your first AI sales agent, connect data, and boost performance.",
//       tags: ["PDF", "5-mins Read", "Beginner"]
//     },
//     {
//       id: 2,
//       type: "Playbook",
//       title: "DIY Playbooks for Agencies, SaaS, and Local",
//       description: "Description: Customizable playbooks for different industries.",
//       tags: ["PDF", "5-mins Read", "Beginner"]
//     },
//     {
//       id: 3,
//       type: "Webinar",
//       title: "Masterclass: Multichannel Outreach that Converts",
//       description: "Outreach strategies with live Q&A.",
//       tags: ["PDF", "5-mins Read", "Beginner"]
//     }
//   ];

//   return (
//     // Outer container with light grey background and padding
//     <div className="bg-gray-100 p-6 md:p-8 lg:p-10">
//       {/* Main content area with rounded corners and card styling */}
//       <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-md">
        
//         {/* Header section with title and Browse library link */}
//         <header className="flex items-center justify-between mb-10">
//           <h2 className="text-gray-800 text-base">Templates & downloads</h2>
//           <a href="#" className="flex items-center gap-1.5 text-gray-900 font-semibold text-base group">
//             Browse library
//             <FiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
//           </a>
//         </header>

//         {/* Responsive grid for the cards: 1 column on mobile, 2 on tablet, 3 on desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cardData.map((card) => (
//             // Flex container for the card content to stack vertically
//             <div key={card.id} className="flex flex-col gap-5 p-4 rounded-[20px] bg-white transition hover:shadow-lg">
              
//               {/* Aspect-ratio box for the light grey image placeholder */}
//               <div className="aspect-[16/10] bg-gray-100 rounded-[20px] flex items-center justify-center border border-gray-200">
//                 {/* No actual image, just a placeholder as shown */}
//               </div>
              
//               {/* Content area within the card */}
//               <div className="flex flex-col gap-3">
//                 <span className="text-gray-700 text-sm">{card.type}</span>
//                 <h3 className="text-gray-900 text-xl font-bold leading-tight">{card.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                
//                 {/* Horizontal list for the small tags */}
//                 <div className="flex flex-wrap items-center gap-2 mt-2">
//                   {card.tags.map((tag, index) => (
//                     <span key={index} className="text-xs font-medium text-gray-500 border border-gray-300 rounded-[8px] px-3 py-1 bg-white">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action buttons at the bottom of the card, spaced out from the content */}
//               <div className="flex items-center gap-3 mt-4">
//                 <button className="flex-1 bg-gradient-to-b from-green-800 via-green-900 to-black text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
//                   Save
//                 </button>
//                 <button className="flex-1 bg-white border border-gray-300 text-gray-900 text-sm font-semibold px-6 py-3.5 rounded-full shadow-md hover:bg-gray-50 transition-colors">
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemplatesAndDownloads;



"use client"

import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';


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

export default function TemplatesAndDownloads() {


  return (
    <section className=" px-6 lg:px-16 pb-8 bg-[#F8F9FA]">
      {/* Header section with title and Browse library link */}
      <header className="flex items-center justify-between mb-10">
        <h2 className="text-gray-800 text-base font-bold">Templates & downloads</h2>{" "}
        <a
          href="#"
          className="flex items-center gap-1.5 text-gray-900 font-semibold text-base group"
        >
          {" "}
          Browse library
          <FiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
        </a>
      </header>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESOURCE_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col group border border-gray-300 rounded-xl p-4"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-[#F7F7F7] rounded-xl mb-6 border border-gray-100 transition-shadow group-hover:shadow-md" />

            {/* Content */}
            <span className="text-gray-500 text-sm font-medium mb-2">
              {item.label}
            </span>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 uppercase tracking-wider"
                >
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