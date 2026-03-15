

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

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





function HowItWorksCard() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="">
        <h1 className="text-[#6BE8FD] text-6xl font-bold text-center font-degular mb-10">How It Works <span className="text-[#787878]">(Fast)</span></h1>

        <div className="grid grid-cols-9 gap-6">

          {/* Card Takes 2 cols, full height */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
            }}
            className="col-span-3 bg-[#0d1f0d] rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
          >
            <div className="">
              <h3 className="text-white font-bold text-xl leading-snug">
                Choose your goal <span className="block font-normal"> (e.g., Book Demos).</span>
              </h3>
            </div>
            <div className=" overflow-hidden mt-auto flex items-center justify-center">
              <img
                src="/images/multichannel-outreach/choose_your_goal.png"
                alt="Finder V2"
                // width={323}
                // height={342}
                // quality={100}
                className="object-cover rounded-t-xl h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT — Container: takes 3 cols */}
          <div className="col-span-6 flex flex-col gap-6">

            {/* Top Left */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
              }}
              className=" bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
            >
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Build or pick a playbook <span className="font-normal block">(Email → WA/SMS nudge → <br /> Voice close)</span>
                </h3>
              </div>
              <div className=" flex-shrink-0">
                <img
                  src="/images/multichannel-outreach/socials.png"
                  alt="Chrome Capture"
                //   width={323}
                //   height={179}
                //   quality={100}
                  className=" object-contain rounded-lg w-[323px]"
                />
              </div>
            </div>
 

            <div className="flex gap-6">
                
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6"
            >
              <div className=" flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Set windows & caps; <span className="block min-w-[220px] font-normal">connect senders and templates.</span>
                </h3>
              </div>
              <div className=" flex-shrink-0 mt-4">
                <img
                  src="/images/multichannel-outreach/set-window.png"
                  alt="CSV Import"
                //   width={274}
                //   height={143}
                //   quality={100}
                  className=" object-contain rounded-lg w-[271px]"
                />
              </div>
            </div>

             {/*  Embeddable Widgets: image top, text bottom */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/multichannel-outreach/system-sequence.png"
                  alt="Embeddable Widgets"
                //   width={200}
                //   height={134}
                //   quality={100}
                  className=" object-contain rounded-lg w-[315px]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Launch— <span className="font-normal">The System Sequences <br /> Channels, Handles Fallbacks, And Learns From Replies.</span>
                </h3>
              </div>
            </div>
            </div>

          </div>
          
        </div>
    </div>
  );
}





export default function HowItWorks() {
  return (
    <section
      className="w-full px-6 lg:px-20 py-20"
      style={{
        background: "linear-gradient(to bottom, #000000, #0F2212)",
      }}
    >
      <HowItWorksCard />
    </section>
  );
}
