"use client";

import { useEffect, useRef, useState } from "react";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";

// function useVisible(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
//       },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }



// Dashboard mockup
function DashboardMockup({ visible }) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center pl-10 py-32"
      style={{
        background: "#EBD7FF",
      }}
    >
      {/* Floating waveform */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          position: "absolute",
          top: -20,
          left: "30%",
          animation: visible ? "floatUp 3s ease-in-out infinite" : "none",
        }}
      ></div>

      <img src="/images/how-it-works/scale-optimize-img.png" alt="" />

      <Image
        src="/images/how-it-works/ai_girl.png"
        alt=""
        width={258}
        height={191}
        className=" absolute inset-0 top-100"
        style={{
          position: "absolute",
          top: "28rem",
          left: "8rem",
        }}
      />

      <Image
        src="/images/how-it-works/sound_girl.png"
        alt=""
        width={206}
        height={60}
        className=" absolute inset-0 top-100"
        style={{
          position: "absolute",
          top: "6rem",
          left: "20rem",
        }}
      />
    </div>
  );
}

//  Main Section 
export default function ScaleManageOptimize() {

  return (
    <section
      className=" overflow-hidden"
    >
      <div className=" flex flex-col lg:flex-row items-center">

        {/* Left — dashboard */}
        <div className=" w-[50%]" style={{ }}>
          <DashboardMockup />
        </div>

        {/* Right — text */}
        <div className=" w-[50%] px-16 py-40 bg-[#E1F1F2]">
          <div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-black leading-12 mb-4">
              Scale, Manage &<br />Optimize
            </h2>
            <p className="text-base text-black leading-relaxed mb-8">
              Enjoy The Bookings And Sales While Staying In Control: Monitor <br /> Everything In The Unified Inbox, Use AI "Next Best Action" <br /> Recommendations (Or Override Manually), And Improve <br /> Results With Step-Level Analytics, A/B Tests, And Simple <br /> Tweaks To Timing, Caps, And Channels.
            </p>

            <h3 className="text-3xl font-bold text-black mb-8">Ready To See It Run?</h3>

            <div className="flex items-center gap-4">
             <PrimaryCTA> Get Started Now</PrimaryCTA>
              <p className="text-sm font-bold text-black">
                Launch Your First<br />Agent In Minutes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}