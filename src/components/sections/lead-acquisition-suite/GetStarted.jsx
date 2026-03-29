
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



export default function GetStarted() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-14 mt-28 mx-8 md:mx-26 px-6 md:px-10 pt-6 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
      <div className={`flex flex-col lg:flex-row items-center justify-between gap-8`}>

        {/* Text Side */}
        <div className={`flex flex-col justify-center py-6`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <Image src="/images/lead-acquisition-suite/icons/Logo.svg" alt="Logo" width={150} height={60} />
            <h2 className=" text-base md:text-2xl  md:max-w-[440px] mt-6 md:mt-12 mb-6 md:mb-14 font- text-white leading-tight">
              Start Refilling Your Pipeline The Smart Way, <span className="font-bold">Activate Lead Acquisition Suite</span> And Let Your Agents Do The Rest.
            </h2>
            <Link href="#"  className="font-bold text-base md:text-xl bg-[#35E834] rounded-full px-4 md:px-8 py-1 md:py-2 border-[3px] border-white hover:scale-105 transition-all ease-in-out">Get Started →
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
            src="/images/lead-acquisition-suite/get_started.png"
            alt="Control Safeguard Image"
            
            className="w-[441px] h-auto object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}