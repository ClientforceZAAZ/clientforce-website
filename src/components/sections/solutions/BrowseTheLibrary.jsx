
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
    <section className="bg-[#EEF9FA] pb-6 pt-0 px-8 md:px-26">
        <div ref={ref} className={`rounded-3xl overflow-hidden shadow-xl  px-6 sm:px-14 pt-0 lg:pt-8 lg:pr-0 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
        <div className={`flex flex-col lg:flex-row justify-center  lg:justify-between gap-8 py-8 lg:py-0`}>

            {/* Text Side */}
            <div className={`flex flex-col w-full lg:w-[50%] pb-6 `}>
            <div
                style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                }}
                className=""
            >
                <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px]  xl:text-[46px] font-degular text-white leading-8 sm:leading-10 md:leading-12 xl:leading-14 mb-6 xl:mb-10 mt-4">
                <span className="font-bold">Browse the Library →</span> <br className="hidden lg:block" /> Deploy an Agent in <br className="hidden lg:block" /> Minutes
                </h2>
                <Link href="#"  className="font-bold text-base sm:text-lg md:text-xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white transition-all duration-300 hover:scale-110 hover:brightness-150"     style={{
                        boxShadow: "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                        }}>Get Started →
                </Link>
                
            </div>

            
            </div>

            {/* Image Side */}
            <div
            className={` items-center justify-center lg:w-[45%] hidden lg:flex`}
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