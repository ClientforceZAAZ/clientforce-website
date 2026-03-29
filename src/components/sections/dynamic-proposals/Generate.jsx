
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-8 md:mb-14 mt-8 md:mt-16 mx-8 md:mx-26 px-10 pt-12 md:pr-0 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
      <div className={`flex flex-row items-center lg:items-start  justify-center md:justify-between gap-8`}>

        {/* Text Side */}
        <div className={`flex flex-col justify-center md:w-[50%] pb-8 `}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] lg:mt-12 font-degular text-white leading-8 md:leading-12 xl:leading-14">
              Generate Your First <br className="hidden md:block" /> Dynamic Proposal →
            </h2>
            <p className=" text-[#FFFFFF] text-sm md:text-base lg:text-lg mt-1 mb-6 lg:mb-12">Import your offer docs, pick a template, and send <br className="hidden sm:block" /> a tailored proposal in minutes.</p>
            <Link href="#"  className="font-bold text-sm md:text-lg lg:text-xl bg-[#35E834] rounded-full px-4 sm:px-8 py-2 border-[3px] border-white hover:scale-105 transition-all ease-in-out">Get Started →
            </Link>
            
          </div> 
        </div>

        {/* Image Side */}
        <div
          className={`md:flex items-center justify-center w-[45%] hidden`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <img
            src="/images/dynamic-proposals/generate_right.png"
            alt="Control Safeguard Image"
            
            className="w-[500px] h-auto object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}