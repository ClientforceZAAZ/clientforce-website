"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Automation from "@/components/sections/dynamic-proposals/Automation";
import { BsPatchCheckFill } from "react-icons/bs";


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





function HowItWorksCard() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
        <div className="flex items-center justify-center">
             <h1 className="text-black bg-[#D0F56B] px-6 rounded-full text-5xl font-bold text-center font-degular mb-10">
                Why It Wins
            </h1>
        </div>

      <div className="grid grid-cols-9 gap-6">
        {/* Card Takes 2 cols, full height */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div className="">
            <h3 className="text-white font-bold text-xl leading-snug">
             End-To-End Out Of The Box
            </h3>
            <p className="text-sm text-[#FFFFFF99]">Not Just Templates; Full Prospect → Engage → Proposal → Call → Close Flows.</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/"
              alt=""
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-t-xl h-[400px] w-full bg-[#FFFFFF1A]"
            />
          </div>
        </div>

        {/* RIGHT — Container: takes 3 cols */}
        <div className="col-span-6 flex flex-col gap-6">
          {/* Top Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
            }}
            className=" bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl leading-snug">
                Positioning That Converts 
              </h3>
              <p className="text-sm text-[#FFFFFF99]">Benefits, Differentiators, Objections, And Proof Already Mapped PRRer Industry.</p>
            </div>
            <div className="">
              <img
                src="/images/"
                alt=""
                //   width={323}
                //   height={179}
                //   quality={100}
                className=" object-contain rounded-lg w-[330px] h-[200px] bg-[#FFFFFF1A]"
              />
            </div>
          </div>

            {/* Pricing Tables AND Built-In CTAs  */}
          <div className="flex gap-6">
            {/* Pricing Tables */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0"
            >
              <div className=" flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                 Compliance Handled
                </h3>
                <p className="text-sm text-[#FFFFFF99]">Email Verification, Domain Warm-Up, WhatsApp Templates, DNC Logic Included.</p>
              </div>
              <div className=" flex-shrink-0 mt-4">
                <img
                  src="/images/"
                  alt=""
                  //   width={274}
                  //   height={143}
                  //   quality={100}
                  className=" object-contain rounded-lg "
                />
              </div>
            </div>

            {/*  Built-In CTAs */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/"
                  alt="Embeddable Widgets"
                  //   width={200}
                  //   height={134}
                  //   quality={100}
                  className=" object-contain rounded-lg w-[315px] h-[220px]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Scales Like An Agency
                </h3>
                 <p className="text-sm text-[#FFFFFF99]">Duplicate Playbooks, Tweak Variables, Deploy To Unlimited Campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* What’s Inside Each Playbook */}
       <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
            }}
            className={`rounded-2xl overflow-hidden flex flex-row-reverse items-center bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8 gap-8 mt-8`}
          >
              <div className="w-[45%] overflow-hidden h-[640px] w-[480px] bg-[#FFFFFF1A]">
                <img
                  src="/images/"
                  alt=""
                //   width={944}
                //   height={696}
                //   quality={100}
                  className=" object-cover "
                />
              </div>
            <div className=" flex-1">
              <h3 className={`font-bold text-white text-[30px] leading-12 mb-8`}>What’s Inside Each Playbook</h3>
              <div className="mt-2 flex flex-col gap-6 justify-between items-start w-full">
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                         <Image src="/images/agents/icons/compliance_email.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">Email sequences</span>   (5–7 steps) with A/B subjects</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                       <Image src="/images/agents/icons/compliance_whatsapp.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">WhatsApp nudges</span>   WhatsApp nudges + fallbacks</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">AI Voice call scripts</span>    (opener, discovery, objection handling, close)</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold"> Dynamic proposal templates</span> (auto-personalized by company/industry/pain)</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold"> Widget & form presets</span> (lead capture + booking)</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold"> Objection banks & proof inserts</span>  (case angles, stats, testimonials)</p>
                    </div>

                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold"> Scheduling & guardrails</span>  tuned per goal</p>
                    </div>
                </div>
            </div>
          </div>



    </div>
  );
}






export default function HowItWorks() {
  return (
    <section
      className="w-full  py-20"
        style={{
        background: "linear-gradient(to bottom, #000000, #0F2212)",
      }}
    >
      <HowItWorksCard />
    </section>
  );
}

