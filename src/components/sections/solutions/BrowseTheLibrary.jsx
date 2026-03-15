
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}




export default function Generate() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section className="bg-[#EEF9FA] pb-6 pt-0 px-26">
        <div ref={ref} className={`rounded-3xl overflow-hidden shadow-xl  px-14 pt-8 pr-0 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
        <div className={`flex flex-col lg:flex-row justify-between gap-8`}>

            {/* Text Side */}
            <div className={`flex flex-col`}>
            <div
                style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                }}
            >
                <h2 className="lg:text-[46px] font-degular text-white leading-14 mb-12 mt-4">
                <span className="font-bold">Browse the Library →</span> <br /> Deploy an Agent in <br /> Minutes
                </h2>
                <Link href="#"  className="font-bold text-xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white transition-all duration-300 hover:scale-110 hover:brightness-150"     style={{
                        boxShadow: "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                        }}>Get Started →
                </Link>
                
            </div>

            
            </div>

            {/* Image Side */}
            <div
            className={`flex items-center justify-center`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(40px)",
                transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
            >
            <img
                src="/images/solutions/browse_the_library_rightBg.png"
                alt="Browse the library"
                
                className="w-[500px] h-auto object-contain drop-shadow"
            />
            </div>

        </div>
        </div>
    </section>

  );
}