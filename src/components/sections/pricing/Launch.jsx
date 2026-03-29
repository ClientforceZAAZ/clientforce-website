"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AgentRoiLiveFeed from "../home/components/AgenRoiLiveFeed";
import GraphCard from "../home/components/GraphCard";
import SidebarCard from "../home/components/SideBarCard";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}



export default function WhyItWins() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section
      ref={ref}
      className="relative rounded-3xl overflow-hidden mx-8 sm:mx-20 mt-6 mb-20"
    >
      {/* Background image — room + dashboard combined */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pricing/launch_bg.png')" }}
      />

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/30 rounded-3xl" /> */}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-8 pt-8 md:pt-16">

        {/* Heading */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="flex flex-col gap-3 items-center "
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white font-degular text-center leading-6 sm:leading-8 md:leading-10 lg:leading-13">
            Launch your first AI Sales <br className="hidden sm:block" /> Agent today
          </h2>
          <p className=" text-lg md:text-xl lg:text-2xl font-degular text-[#FFFFFF99] mb-2 text-center leading-5 sm:leading-6">End-To-End Prospecting, Follow-Up, And Closing—On Autopilot.</p>
           <button
            className="flex-shrink-0 bg-[#35E834] cursor-pointer text-black font-bold font-degular px-16 py-2 border-2 border-white rounded-full text-lg transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ boxShadow: "0 0 18px 4px rgba(8,165,65,0.4)" }}
          >
            Get Started →
          </button>
        </div>

            <div className="mt-8 md:mt-20 relative">
                <Image src="/images/agent_roi_bg3.png" width={840} height={525} className="hidden sm:block" />

                    
                <div className="absolute inset-0 hidden lg:block">
                    <GraphCard />
                    <SidebarCard />
                        <div className="absolute bottom-[4%] right-[-54] w-[40%] z-30">
                        <AgentRoiLiveFeed />
                        </div>
                </div>
            </div>  

      </div>
    </section>
  );
}