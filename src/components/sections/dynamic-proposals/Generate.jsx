
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
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-14 mt-16 mx-26 px-10 pt-12 pr-0 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
      <div className={`flex flex-col lg:flex-row items-start justify-between gap-8`}>

        {/* Text Side */}
        <div className={`flex flex-col justify-center`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="lg:text-[58px] mt-12 font-degular text-white leading-14">
              Generate Your First <br /> Dynamic Proposal →
            </h2>
            <p className=" text-[#FFFFFF] text-lg mt-1 mb-16">Import your offer docs, pick a template, and send <br /> a tailored proposal in minutes.</p>
            <Link href="#"  className="font-bold text-xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white">Get Started →
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
            src="/images/dynamic-proposals/generate_right.png"
            alt="Control Safeguard Image"
            
            className="w-[500px] h-auto object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}