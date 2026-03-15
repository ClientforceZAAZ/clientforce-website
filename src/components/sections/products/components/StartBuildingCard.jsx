"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });



export default function StartBuildingCard() {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.97)",
        transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="w-full max-w-[420px] rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-[#00000026] overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex flex-col items-center">
        {/* Typewriter headline */}
        <div className="text-sm font-bold text-[#000015] tracking-tight min-h-[32px]">
          <Typewriter
            options={{
              strings: [
                "Start Building with AI",
                "Launch Your First Agent",
                "Automate Your Pipeline",
                "Close Deals on Autopilot",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 35,
            }}
          />
        </div>

        <div className="w-full border-[0.3px] border-[#00000020] rounded-2xl flex items-center justify-between p-1">
            <div className="w-[80%] h-3 bg-[#F4F4F4] rounded-full" />
            <Image src="/icons/startBuilding1.svg" width={26} height={26} />
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">
          Answer a few quick questions and let AI generate your full agent campaign.
        </p>
      </div>
    </div>
  );
}