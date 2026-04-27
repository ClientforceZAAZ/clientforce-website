import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';

const LEADERS = [
  {
    name: "Godswill Okoyomon",
    role: "Founder & CEO",
    image: "/images/company/godswill-1.png"
  },
  {
    name: "Unity Ifasaken",
    role: "Head of Product",
     image: "/images/company/godswill-1.png"
  },
  {
    name: "Godswill Okoyomon",
    role: "Design Lead",
     image: "/images/company/godswill-1.png"
  }
];

export default function Leadership() {
  return (
    <section className="w-full pb-16 px-6 lg:px-16 bg-[#F8F9FA]">
      <div className="">
        
        {/* Main Gradient Container */}
        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 216, 85, 0.4) 0%, rgba(255, 255, 255, 0.17) 100%)'
          }}
          className="rounded-2xl p-8 md:p-12 border border-white/20 shadow-sm"
        >
          
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-black font-degular tracking-tight">
              Leadership
            </h2>
            <Link 
    href="#" 
    className="flex items-center gap-1 text-2xl font-degular font-bold text-black hover:opacity-70 transition-opacity group"
  >
    See All 
    <HiChevronRight className="text-lg transition-transform group-hover:translate-x-1" />
  </Link>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERS.map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-4 flex items-center gap-5 shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
              >
                {/* Avatar Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-black tracking-tight leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mt-1">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}