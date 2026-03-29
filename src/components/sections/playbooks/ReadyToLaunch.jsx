

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ImPhoneHangUp } from "react-icons/im";

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



export default function ReadyToLaunch() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section
      ref={ref}
      className={`rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-14 mt-8 sm:mt-16 mx-8 lg:mx-26 px-6 lg:pl-14 pt-8 pr-0 bg-cover bg-center`}
      style={{
        backgroundImage:
          "url('/images/lead-acquisition-suite/get_started_bg.png')",
      }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-8 px-0 sm:px-8 lg:px-0 py-6 sm:py-8 lg:py-0`}
      >
        {/* Text Side */}
        <div className={`flex flex-col w-full  lg:w-[50%] lg:pb-8`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
            className=" flex flex-col items-start justify-between"
          >
            <h2 className=" text-3xl sm:text-5xl  xl:text-[58px] font-degular font-bold text-white leading-8 sm:leading-12 xl:leading-14 lg:mb-12 lg:mt-4">
              Ready To Launch <br className="hidden sm:block" /> Like A Closer On <br className="hidden sm:block" /> Day One?
            </h2>
            <div className="mt-4 lg:mt-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                href="#"
                className="font-bold text-sm  xl:text-lg bg-[#35E834] mr-2 rounded-full px-4 py-2 border-[2.5px] border-white transition-all duration-300 hover:scale-110 hover:brightness-150"
                style={{
                  boxShadow:
                    "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                }}
              >
                Deploy A Playbook →
              </Link>
              <Link
                href="#"
                className="font-bold text-sm  xl:text-lg bg-[#D0F56B] rounded-full px-4 py-2 border-[2.5px] border-white transition-all duration-300 hover:scale-110 hover:brightness-150"
                style={{
                  boxShadow:
                    "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                }}
              >
                Preview Templates →
              </Link>
              </div>
              <div className="mt-8 w-fit">
                <Link
                  href="#"
                  className="font-bold text-xl text-gray-400  rounded-full transition-all duration-300 hover:scale-105 hover:brightness-150 flex items-center gap-2"
                >
                  <ImPhoneHangUp className="inline" /> Talk To Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div
          className={`hidden lg:flex items-center justify-center  lg:w-[45%] `}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <img
            src="/images/dfy/ready_to_launch.png"
            alt="Control Safeguard Image"
            className="w-[500px] h-auto object-contain drop-shadow "
          />
        </div>
      </div>
    </section>
  );
}