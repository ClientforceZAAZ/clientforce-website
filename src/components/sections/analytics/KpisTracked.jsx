
"use client";

import { useEffect, useRef, useState } from "react";


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



export default function KpisTracked() {
     const [ref, visible] = useVisible();
  return (
    <section ref={ref}
      className="w-full px-6 lg:px-26 my-8"
    >
      
        <div
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: `opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s`,
        }}
        className={`rounded-2xl overflow-hidden flex flex-row items-center px-8 py-12 gap-18 bg-linear-to-bl from-[#0000000D] from-30% to-[#6BE8FD33] border border-gray-300`}
        >
            <div className="overflow-hidden">
            <img
                src=""
                alt=""
                // width={980}
                // height={737}
                // quality={100}
                className="object-cover w-[560px] h-[300px] bg-white"
            />
            </div>
            <div className="flex-1">
                <h3 className={`font-bold text-[40px] text-[#000000] `}>KPIs Tracked</h3>
                <p
                className={`text-[#000000] text-lg mt-2 leading-relaxed`}
                >
               Open rate • Click rate • Reply rate • Positive reply rate • Meetings booked • Proposal views/time-on-page • Win rate • Revenue influenced • Time-to- first-touch • Touches-to-meeting • Bounce/spam • Sender & number reputation
                </p>
            </div>
        </div>;
    </section>
  );
}


