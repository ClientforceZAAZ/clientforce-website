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

function StepCard({ image, imageAlt, title, description, delay, visible, dark = false, className = "" }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
      }}
      className={`rounded-3xl overflow-hidden flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={320}
          quality={100}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-5">
        <h3 className={`font-bold leading-snug ${dark ? "text-white text-xl" : "text-black text-2xl"}`}>
          {title}
        </h3>
        <p className={`text-sm mt-2 pr-8 leading-relaxed ${dark ? "text-[#FFFFFF99]" : "text-[#00000099]"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-6 md:py-16">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-degular text-center text-gray-900 mb-5 md:mb-10">
          How It Works{" "}
          <span className="text-[#787878]">(Fast)</span>
        </h2>
      </div>

      {/* Top Row — 2 large cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4 px-6 lg:px-35">
        <StepCard
          image="/images/lead-acquisition-suite/how_set_rules.png"
          imageAlt="Set Your Rules"
          title="Set Your Rules"
          description="Set Your Rules — Keywords, Industry, Geo, Radius, Leads Per Run (5–25), And Cadence (Daily/Weekly/Monthly)."
          delay="0.1s"
          visible={visible}
          dark={true}
          className="bg-linear-to-bl from-[#000000] from-60% to-[#087082] border border-[#FFFFFF0D] p-6"
        />
        <StepCard
          image="/images/lead-acquisition-suite/how_capture.png"
          imageAlt="Capture Everywhere"
          title="Capture Everywhere"
          description="Auto-Prospecting, Chrome Capture, Widgets, And CSV."
          delay="0.2s"
          visible={visible}
          dark={true}
          className="bg-linear-to-bl from-[#000000] from-60% to-[#087082] border border-[#FFFFFF0D] p-6"
        />
      </div>

      {/* Bottom Row — 3 smaller light cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-6 lg:px-16">
        <StepCard
          image="/images/lead-acquisition-suite/how_enrich.png"
          imageAlt="Clean & Enrich"
          title="Clean & Enrich"
          description="Emails, WhatsApp, LinkedIn Touches, SMS—Timed For Replies."
          delay="0.3s"
          visible={visible}
          dark={false}
          className="p-6"
        />
        <StepCard
          image="/images/lead-acquisition-suite/how_route.png"
          imageAlt="Route To Action"
          title="Route To Action"
          description="Assign To The Right AI Agent + Playbook; Apply Tags, Lists, Guardrails."
          delay="0.4s"
          visible={visible}
          dark={false}
          className="p-6"
        />
        <StepCard
          image="/images/lead-acquisition-suite/how_golive.png"
          imageAlt="Go Live"
          title="Go Live"
          description="Leads Enter Sequences Immediately With Time-Zone Aware Scheduling."
          delay="0.5s"
          visible={visible}
          dark={false}
          className="p-6"
        />
      </div>

    </section>
  );
}