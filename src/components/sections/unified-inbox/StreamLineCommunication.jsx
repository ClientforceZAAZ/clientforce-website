
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
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-14 mt-16 mx-8 md:mx-26 px-14 pt-8 md:pr-0 bg-cover bg-center`} style={{  backgroundImage: "url('/images/lead-acquisition-suite/get_started_bg.png')" }}>
      <div className={`flex flex-row items-center justify-between gap-8`}>

        {/* Text Side */}
        <div className={`flex flex-col md:w-[50%] pb-8`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px]  font-degular text-white leading-8 sm:leading-10 lg:leading-12 xl:leading-14 mb-6 xl:mb-12 mt-4">
              Streamline Your <br className="hidden xl:block" /> Communication With <br className="hidden xl:block" /> Our <span className="font-bold">Unified Inbox & <br className="hidden xl:block" /> Lead Timeline!</span>
            </h2>
            <Link href="#"  className="font-bold text-lg md:text-xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white transition-all duration-300 hover:scale-110 hover:brightness-150"     style={{
                    boxShadow: "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                    }}>Get Started →
            </Link>
            
          </div>

          
        </div>

        {/* Image Side */}
        <div
          className={` items-center justify-center md:w-[45%]  hidden md:flex`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <img
            src="/images/unified-inbox/streamline.png"
            alt="Control Safeguard Image"
            
            className="w-[500px] h-auto object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}