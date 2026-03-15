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
        <h1 className="text-black text-[55px] px-6 py-2 rounded-full font-bold text-center font-degular">
         Library coverage
        </h1>
        <div className="text-[#787878] text-[27px] font-bold text-center border border-[#787878] w-fit px-4 py-1 rounded-full">
         (By Industry And Goal)
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-8 mt-8">
            <div 
            style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
          }}
             className="col-span-1 bg-white rounded-lg border border-[#00000024] px-6 py-4">
                <h1 className="text-[27px] font-bold ">Industries</h1>
                <p className="pl-4 leading-10 mt-2 text-xl">Agencies & Services <br /> Local (Dental, HVAC, Legal, <br /> Real Estate, Home Services) <br /> SaaS <br /> B2B Tech & Manufacturing <br /> Coaching/Consulting <br />Healthcare & Wellness <br />Education/Training <br /> Automotive <br />Fitness <br />Finance/Insurance <br /> eCommerce B2B</p>
            </div>

            <div

            style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
            
            className="col-span-1 bg-white rounded-lg border border-[#00000024] px-6 py-4">
                <h1 className="text-[27px] font-bold ">Goals</h1>
                <p className="pl-4 leading-10 mt-2 text-xl">Book Demos <br />Convert Free Trials <br />Close High-Ticket <br />Local Lead Capture <br /> Reactivate Cold Leads <br /> Upsell/Cross-sell <br />Webinar/Demo Registration <br /> Post-Event Follow-Up  <br />Abandoned Lead Revive</p>
            </div>
      </div>

      
    </div>
  );
}

    



export default function LibraryCoverage() {
  return (
    <section
      className="w-full px-50  py-10"
        style={{
        background: "#E1F1F2",
      }}
    >
      <LibraryCoverageSection />
    </section>
  );
}

