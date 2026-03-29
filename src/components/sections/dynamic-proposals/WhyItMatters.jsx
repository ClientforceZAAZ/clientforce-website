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

function BenefitCard({ image, imageAlt, title, description, delay, visible, className = "" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.12)"
          : "0 2px 16px rgba(0,0,0,0.06)",
      }}
      className={`bg-white rounded-3xl overflow-hidden flex flex-col border border-[#D9D9D9] ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={300}
          quality={100}
          style={{
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-black font-bold text-xl leading-snug">{title}</h3>
        <p className="text-sm text-[#00000099] mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function WhyItMatters() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className="py-8 sm:py-16 px-6 lg:px-40 bg-[#EEF9FA]">

      {/* Heading */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
        }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl lg:text-[55px] font-degular font-bold text-black">
          Why It Matters
        </h2>
        <p className="text-3xl lg:text-[55px] font-degular font-bold text-[#787878]">
          (Benefits At A Glance)
        </p>
      </div>

      {/* Grid — 2x2 equal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 md:gap-8">
        <BenefitCard
          image="/images/dynamic-proposals/personalization_at-scale.png"
          imageAlt="Personalization At Scale"
          title="Personalization At Scale"
          description={
            <>
                Every Proposal Auto-Pulls Details From Your <br /> PDFs/URLs And Lead Data First_name, Company, Industry,Pain_point, Pricing_tier.
            </>
          }
          delay="0.1s"
          visible={visible}
          className="col-span-5"
        />
        <BenefitCard
          image="/images/dynamic-proposals/benefit_faster_closes.png"
          imageAlt="Faster Closes"
          title="Faster Closes"
          description={
            <>
                Embed Booking And Payment/Deposit Links (Or E-Sign Accept) <br /> Right Inside The Proposal.
            </>
          }
          delay="0.2s"
          visible={visible}
          className="col-span-6"
        />
      </div>

       {/* Grid — 2x2 equal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 md:gap-8 mt-4 md:mt-8">
        <BenefitCard
          image="/images/dynamic-proposals/benefit_live_intent.png"
          imageAlt="Live Intent Signals"
          title="Live Intent Signals"
          description="See Opens, Time On Pricing, CTA Clicks, Forwards—Your Agent Instantly Follows Up With The Next Best Step."
          delay="0.3s"
          visible={visible}
          className="col-span-6"
        />
        <BenefitCard
          image="/images/dynamic-proposals/benefit_on_brand.png"
          imageAlt="Always On-Brand"
          title="Always On-Brand"
          description="Locked Templates, Approvals, And Style Guardrails Keep Design And Claims Consistent."
          delay="0.4s"
          visible={visible}
          className="col-span-5"
        />
      </div>

    </section>
  );
}