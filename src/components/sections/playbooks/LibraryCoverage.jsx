"use client";

import { useEffect, useRef, useState } from "react";


function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}




function LibraryCoverageSection() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-4xl md:text-5xl lg:text-[55px] px-6 py-2 rounded-full font-bold text-center font-degular">
          Library coverage
        </h1>
        <div className="text-[#787878] text-lg md:text-xl lg:text-[27px] font-bold text-center border border-[#787878] w-fit px-4 py-1 rounded-full">
          (By Industry And Goal)
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
          }}
          className="col-span-1 bg-white rounded-lg border border-[#00000024] px-6 py-4"
        >
          <h1 className=" text-xl md:text-[27px] font-bold ">Industries</h1>
          <p className=" pl-0 sm:pl-4 leading-7 sm:leading-10 mt-2 text-base sm:text-lg md:text-xl ">
            Agencies & Services <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> Local (Dental, HVAC, Legal,{" "}
            <br className="hidden sm:block" /> Real Estate, Home Services){" "}
            <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> SaaS{" "}
            <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> B2B Tech & Manufacturing{" "}
            <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> Coaching/Consulting{" "}
            <br className="hidden sm:block" />
            Healthcare & Wellness <span className="inline sm:hidden">
              ,
            </span>{" "}
            <br className="hidden sm:block" />
            Education/Training <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> Automotive{" "}
            <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Fitness <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Finance/Insurance <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" /> eCommerce B2B
          </p>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="col-span-1 bg-white rounded-lg border border-[#00000024] px-6 py-4"
        >
          <h1 className=" text-xl md:text-[27px] font-bold ">Goals</h1>
          <p className="pl-0 sm:pl-4 leading-7 sm:leading-10 mt-2 text-base sm:text-lg md:text-xl">
            Book Demos <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Convert Free Trials <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Close High-Ticket <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Local Lead Capture <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Reactivate Cold Leads <span className="inline sm:hidden">
              ,
            </span>{" "}
            <br className="hidden sm:block" />
            Upsell/Cross-sell <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Webinar/Demo Registration{" "}
            <span className="inline sm:hidden">,</span>{" "}
            <br className="hidden sm:block" />
            Post-Event Follow-Up <span className="inline sm:hidden">
              ,
            </span>{" "}
            <br className="hidden sm:block" />
            Abandoned Lead Revive
          </p>
        </div>
      </div>
    </div>
  );
}

    



export default function LibraryCoverage() {
  return (
    <section
      className="w-full lg:px-50 pb-10 sm:py-10"
        style={{
        background: "#E1F1F2",
      }}
    >
      <LibraryCoverageSection />
    </section>
  );
}

