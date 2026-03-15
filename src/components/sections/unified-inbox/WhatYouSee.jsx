
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



//  What You See
function WhatYouSee() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="">
        <div className="flex justify-center mb-14">
            <div className={`bg-[#C4FAFF] rounded-full px-8 py-2 font-degular text-black text-[45px] font-semibold`}>
                What You See
            </div>
        </div>

        <div className="grid grid-cols-11 gap-8">
            <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: `opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s`,
            }}
            className={` rounded-2xl overflow-hidden flex flex-col  col-span-4 bg-linear-to-bl from-[#00000021] to-[#FFFFFF0D] to-50% border border-gray-300 p-8`}
            >
            <div className="overflow-hidden">
                <Image
                src="/images/unified-inbox/smart_side_panel.png"
                alt=""
                width={612}
                height={304}
                quality={100}
                className="w-full h-auto object-cover"
                />
            </div>

            <div className="mt-4 flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                    Smart Side Panel
                </h3>
                <p className="text-[#00000099] text-sm mt-2 leading-relaxed">
                    Lead profile, deal stage, last intent signal, AI summary, and Next Best Action (e.g., “Send proposal,” “Book call,” “Drop WA nudge”).
                </p>
            </div>
            </div>

            {/*  */}
             <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: `opacity 0.55s ease 0.7s, transform 0.55s ease 0.7s`,
            }}
            className={` rounded-2xl overflow-hidden flex flex-col-reverse col-span-3 bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#00000021] border border-gray-300 p-8`}
            >
            <div className="w-full overflow-hidden">
                <Image
                src="/images/unified-inbox/unified_thread.png"
                alt=""
                width={500}
                height={332}
                quality={100}
                className="w-full h-auto object-cover"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                Unified Thread
                </h3>
                <p className="text-[#00000099] text-sm mt-2 leading-relaxed">
                Emails, WA replies, LinkedIn touches, call transcripts/notes, proposals viewed, bookings—<span className="font-bold">all in one place.</span>
                </p>
            </div>
            </div>

            {/*  */}
             <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: `opacity 0.55s ease 0.8s, transform 0.55s ease 0.8s`,
            }}
            className={`rounded-2xl overflow-hidden flex flex-col col-span-4 bg-linear-to-br from-[#00000021] to-[#FFFFFF0D] to-50% border border-gray-300 p-8`}
            >
            <div className="w-full overflow-hidden">
                <Image
                src="/images/unified-inbox/activity timeline.png"
                alt=""
                width={686}
                height={266}
                quality={100}
                className="w-full h-auto object-cover"
                />
            </div>

            <div className="mt-6 flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                    Activity Timeline (Audit-Clean)
                </h3>
                <p className="text-[#00000099] text-sm mt-2 leading-relaxed" >
                    Source → captured → verified → sent/open/click → reply → call outcome → proposal viewed (time-on-page) → meeting booked → stage moved.
                </p>
            </div>
            </div>

        </div>
    </div>
  );
}






export default function AgentDeepDive() {
  return (
    <section
      className="w-full px-6 lg:px-20 py-15 bg-[#EEF9FA]"
    >
      <WhatYouSee />
    </section>
  );
}







