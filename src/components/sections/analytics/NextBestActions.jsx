"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

//  Card Wrapper
function ActionCard({ children, title, description, delay, visible, className = "", cardImage }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.10)" : "0 2px 16px rgba(0,0,0,0.05)",
      }}
      className={`rounded-[40px] border border-gray-300 overflow-hidden ${className} w-fit`}
    >
      {/* Animation Area */}
      <div className="flex-1">
         {cardImage}
      </div>
      {/* Text */}
      <div className=" p-4 mt-6">
        <p className="text-lg text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );
}


// Main Export 
export default function NextBestActions() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="pt-16 pb-8 px-6 lg:px-30 bg-white">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="mb-10 "
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-black font-degular text-center">
          <span className="">"Next Best Actions"</span>{" "}
          <span className="font-normal">(1-Click Optimizations)</span>
        </h2>
      </div>

      {/* Top row — 3 equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 place-items-center">
        <ActionCard
          delay="0.1s"
          visible={visible}
          description={<p className="text-center"><span className="font-bold">Promote</span> Winning <br /> Subject Lines To 100% <br /> Of Sends</p>}
          cardImage={<Image src="/images/analytics/analytics_promote.png" width={516} height={132} />}
        >
          
          {/* <PromoteAnimation visible={visible} /> */}
        </ActionCard>

        <ActionCard
          delay="0.2s"
          visible={visible}
          description={<p className="text-center"><span className="font-bold">Pause/Replace</span> <br /> Underperforming Steps <br /> Or Angles</p>}
          cardImage={<Image src="/images/analytics/pause_replace.png" width={516} height={369} />}
        >
          {/* <PauseAnimation visible={visible} /> */}
        </ActionCard>

        <ActionCard
          delay="0.3s"
          visible={visible}
          description={<p className="text-center"><span className="font-bold">Rebalance Channels</span> <br /> (Increase Voice After Warm- <br /> Up, Add WhatsApp Nudge)</p>}
          cardImage={<Image src="/images/analytics/rebalance.png" width={516} height={143} />}

        >
          {/* <RebalanceAnimation visible={visible} /> */}
        </ActionCard>
      </div>

      {/* Bottom row — left narrower, right wider */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-center">
        <ActionCard
          delay="0.4s"
          visible={visible}
          className="md:col-span-2 bg-[#CBE7E9] p-8"
          description={<p className="text-center"><span className="font-bold">Repair Deliverability</span> (Rotate <br /> Domains, Throttle, Verify)</p>}
          cardImage={<Image src="/images/analytics/repair.png" width={491} height={297} />}
        >
          {/* <RepairAnimation visible={visible} /> */}
        </ActionCard>

        <ActionCard
          delay="0.5s"
          visible={visible}
          className="md:col-span-3 flex-col sm:flex sm:flex-row p-8 sm:p-0 bg-[#CBE7E9] h-full items-center"
          description={<p className="px-10 "><span className="font-bold ">Clone</span> Top-Performing <br /> Campaigns To New <br /> Segments</p>}
          cardImage={<Image src="/images/analytics/clone.png" width={542} height={459} className="" />}
        >
          {/* <CloneAnimation visible={visible} /> */}
        </ActionCard>
      </div>

    </section>
  );
}