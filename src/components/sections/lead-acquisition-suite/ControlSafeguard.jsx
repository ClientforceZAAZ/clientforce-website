
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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



export default function ControlSafeguard() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-8 md:mb-14 mt-8 md:mt-28 mx-8 md:mx-26 px-6 md:px-10 py-6 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/control_safeguard_bg.png')" }}>
      <div className={`flex flex-col lg:flex-row-reverse items-stretch gap-8`}>

        {/* Text Side */}
        <div className={`flex-1  flex flex-col justify-center`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-black leading-tight">
              Controls & Safeguards <span className="text-[#787878] block"> (Built In)</span>
            </h2>
            <div className="border border-[#00000033] p-4 rounded-lg mt-8">
                <p className="flex items-center text-xs sm:text-sm gap-2"><Image src="/icons/Done.svg" width={18} height={18} /><span className="font-bold">Leads per run (5–25) •</span> Daily/weekly/monthly scheduling</p>
                <p className="flex items-center text-xs sm:text-sm gap-2">
                    <Image src="/icons/Done.svg" width={18} height={18} /><span className="font-bold">Preview vs auto-ingest •</span> Tagging & list assignment
                </p>
                <p className="flex items-center text-xs sm:text-sm gap-2"><Image src="/icons/Done.svg" width={18} height={18} /><span className="font-bold">Consent checkboxes •</span> DNC handling • Suppression lists</p>
                <p className="font-bold text-xs sm:text-sm flex items-center gap-2" ><Image src="/icons/Done.svg" width={18} height={18} /><span>Domain health, email warm-up, and number reputation awareness</span></p>
            </div>
            
          </div>

          
        </div>

        {/* Image Side */}
        <div
          className={`hidden md:flex-1 md:flex items-center justify-center`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <Image
            src="/images/lead-acquisition-suite/control_safeguard_left.png"
            alt="Control Safeguard Image"
            width={1200}
            height={800}
            quality={100}
            className="w-full h-full object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}