
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
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-14 mt-20 mx-26 px-10 py-6 bg-cover bg-center  border border-gray-300`} style={{
  background: "linear-gradient(to bottom left, #0000000D 30%, #6BE8FD33)"
}}>
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
            <h2 className="text-3xl lg:text-[35px] font-bold text-black leading-tight">
              Controls & Safety <span className="text-[#787878] block"> (Built In)</span>
            </h2>
            <div className=" mt-8">
               <p className="text-sm">GDPR/TCPA consent tools, WhatsApp template status, DNC handling, domain warm-up, and number reputation checks— <span className="font-bold">so scaling never risks your accounts.</span></p>
            </div>
            
          </div>

          
        </div>

        {/* Image Side */}
        <div
          className={`flex-1 flex items-center justify-center`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <Image
            src="/images/multichannel-outreach/compliance_safety.png"
            alt="Control Safeguard Image"
            width={800}
            height={598}
            quality={100}
            className="w-full h-full object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}