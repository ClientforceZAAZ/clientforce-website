
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


function LongHorizontalCard({ image, imageAlt = "", title, description, className = "", delay = "0s", visible, imageLeft = true, titleTextStyle, descriptionTextTyle, moreDescription }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
      className={`rounded-2xl overflow-hidden flex ${imageLeft ? "flex-row" : "flex-row-reverse"} items-center ${className}`}
    >
      {image && (
        <div className="w-[40%] overflow-hidden hidden md:block">
          <Image
            src={image}
            alt={imageAlt}
            width={980}
            height={737}
            quality={100}
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className={`font-bold ${titleTextStyle}`}>{title}</h3>
        <p className={` mt-2 leading-relaxed ${descriptionTextTyle}`}>{description}</p>
        <div>{moreDescription}</div>
      </div>
    </div>
  );
}




function Cards() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="">

      {/* Voice Compliance & Number Health */}
<LongHorizontalCard
  image="/images/agents/voice_compliance.png"
  title="Voice Compliance & Number Health"
  titleTextStyle="text-2xl sm:text-[30px] text-black leading-6 sm:leading-8 md:leading-10 mb-4"
  description=""
  descriptionTextTyle=""
  delay="0.2s"
  className="bg-white border border-[#00000024] p-6 sm:p-8 gap-8 sm:gap-12 mb-10"
  visible={visible}
  imageLeft={true}
  moreDescription={
    <>
      <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">

        <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
          <Image 
            src="/images/agents/icons/compliance_email.svg" 
            width={45} 
            height={45}
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
          <p className="text-black text-xs sm:text-base font-light w-full">
            <span className="font-bold">Reputation Monitoring:</span> Ongoing voice number reputation monitoring with auto-cooling, pool rotation, and local-presence options.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
          <Image 
            src="/images/agents/icons/compliance_whatsapp.svg" 
            width={45} 
            height={45} 
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
          <p className="text-black text-xs sm:text-base font-light w-full">
            <span className="font-bold">DNC & Quiet Hours:</span> Time-of-day rules by lead timezone, redial limits, and maximum retries.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
          <Image 
            src="/images/agents/icons/compliance_voice.svg" 
            width={45} 
            height={45} 
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
          <p className="text-black text-xs sm:text-base font-light w-full">
            <span className="font-bold">Consent Prompts:</span> Optional pre-call consent/recording notices and script guidance.
          </p>
        </div>

      </div>
    </>
  }
/>
{/* Global Schedules & Quiet Hours */}
<LongHorizontalCard
  image="/images/agents/global_schedules.png"
  title="Global Schedules & Quiet Hours"
  titleTextStyle="text-2xl sm:text-[30px] text-black leading-6 sm:leading-8 md:leading-10 mb-4"
  description=""
  descriptionTextTyle=""
  delay="0.2s"
  className="bg-white border border-[#00000024] p-6 sm:p-8 gap-8 sm:gap-12 mb-10"
  visible={visible}
  imageLeft={false}
  moreDescription={
    <>
      <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">

        <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
          <Image 
            src="/images/agents/icons/compliance_email.svg" 
            width={45} 
            height={45} 
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
          <p className="text-black text-xs sm:text-base font-light w-full">
            <span className="font-bold">Timezone-Aware Sending:</span> Respect recipient local time with business-day calendars and holiday holds.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
          <Image 
            src="/images/agents/icons/compliance_whatsapp.svg" 
            width={45} 
            height={45} 
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
          <p className="text-black text-xs sm:text-base font-light w-full">
            <span className="font-bold">Frequency Caps:</span> Per-lead contact limits across channels to prevent fatigue.
          </p>
        </div>

      </div>
    </>
  }
/>

    </div>
  );
}


export default function VoiceAndGlobalCards() {
  return (
    <section
      className="w-full px-6 lg:px-20 "
      style={{ background: "#F4F9FA" }}
    >
      <Cards />
    </section>
  );
}

