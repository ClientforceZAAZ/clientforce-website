
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
    <section className="pb-8 lg:pb-14 pt-8 lg:pt-16 px-8 md:px-12 lg:px-26 bg-[#F4F9FA]">
             <div ref={ref} className={`rounded-3xl overflow-hidden shadow-xl px-6 md:px-14 pt-8 lg:pr-0 bg-cover bg-center border border-[#EADEDE]`} style={{  backgroundImage: "url('/images/guardrails/guardrails_getStarted.png')" }}>
      <div className={`flex flex-row justify-between gap-8`}>

        {/* Text Side */}
        <div className={`flex flex-col lg:w-[50%] pb-8`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="text-2xl sm:text-3xl xl:text-[37px] font-degular bg-gradient-to-b from-[#000000] to-[#D0F56B] bg-clip-text text-transparent font-light leading-8 xl:leading-10 mb-6 xl:mb-12 mt-4">
              Your Agents Move Fast, But <br className="hidden lg:block" /> Never Recklessly. <span className=" font-bold">ClientForce <br className="hidden lg:block" /> Keeps Your Outreach Compliant, <br className="hidden lg:block" /> Your Reputation Clean, And Your <br /> Pipeline Growing.</span>
            </h2>
            <Link href="#"  className="font-bold text-base md:text-xl bg-white rounded-full px-8 py-2 border-[2px] border-black transition-all duration-300 hover:scale-110 hover:brightness-150">Get Started →
            </Link>
            
          </div>

          
        </div>

        {/* Image Side */}
        <div
          className={`items-center justify-center   hidden lg:flex`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <img
            src="/images/guardrails/getStarted_rightBg.png"
            alt=""
            
            className="w-[500px] h-auto object-contain drop-shadow"
          />
        </div>

      </div>
    </div>
    </section>
   
  );
}



