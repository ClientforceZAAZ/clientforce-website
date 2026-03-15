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
      <h1 className="text-[#6BE8FD] text-6xl font-bold text-center font-degular mb-10">
        How It Works <span className="text-[#787878]">(Fast)</span>
      </h1>``

      <div className="grid grid-cols-9 gap-6">
        {/* Card Takes 2 cols, full height */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 bg-[#0d1f0d] rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div className="">
            <h3 className="text-white font-bold text-xl leading-snug">
              AI Proposal Composer
            </h3>
            <p className="text-sm text-[#FFFFFF99]">Turns Your Offer Docs Into A Structured, <br /> Persuasive Proposal: Intro → Outcomes → <br /> Proof → Pricing → Next Step.</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/dynamic-proposals/ai_proposal.png"
              alt="Finder V2"
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-t-xl h-[400px]"
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
            className=" bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl leading-snug">
                Variables & Conditional <br /> Sections
              </h3>
              <p className="text-sm text-[#FFFFFF99]">Auto-Swap Case Studies By Industry, <br /> Show/Hide Addons By Persona, Localize Currency/Tax <br /> Per Geo</p>
            </div>
            <div className=" flex-shrink-0">
              <img
                src="/images/dynamic-proposals/variable_conditional.png"
                alt="Chrome Capture"
                //   width={323}
                //   height={179}
                //   quality={100}
                className=" object-contain rounded-lg w-[330px]"
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
              className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0"
            >
              <div className=" flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                 Pricing Tables & Bundles
                </h3>
                <p className="text-sm text-[#FFFFFF99]">Package Options, Upsells, Discounts, Deposit Links, And Acceptance Terms—All Editable.</p>
              </div>
              <div className=" flex-shrink-0 mt-4">
                <img
                  src="/images/dynamic-proposals/pricing_tables.png"
                  alt="Pricing Tables"
                  //   width={274}
                  //   height={143}
                  //   quality={100}
                  className=" object-contain rounded-lg"
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
              className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/dynamic-proposals/built_in_cta.png"
                  alt="Embeddable Widgets"
                  //   width={200}
                  //   height={134}
                  //   quality={100}
                  className=" object-contain rounded-lg w-[315px]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Built-In CTAs
                </h3>
                 <p className="text-sm text-[#FFFFFF99]">Book a call, Accept & Pay, Sign to Start—your choice of next step.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


     {/* Bottom Three cols Grid */}
      <div className="grid grid-cols-18 gap-6 my-8">
        {/* Versioning & Approvals */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
          className="col-span-5 bg-[#0d1f0d] rounded-2xl overflow-hidden flex flex-col justify-center px-6 py-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div className="mb-4">
            <h3 className="text-white font-bold text-xl leading-snug">
              Versioning & Approvals{" "}
            </h3>
            <p className="text-[#FFFFFF99] text-sm">Drafts, Internal Notes, Edit Locks, And Manager Sign-Off Before Going Live.</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/dynamic-proposals/versioning.png"
              alt="Finder V2"
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-t-xl"
            />
          </div>
        </div>

        {/* Multichannel Sending */}
         <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.6s, transform 0.55s ease 0.6s",
          }}
          className="col-span-7 bg-[#0d1f0d] rounded-2xl overflow-hidden flex flex-col-reverse justify-center px-8 py-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div className="mt-4">
            <h3 className="text-white font-bold text-xl leading-snug">
              Multichannel Sending
            </h3>
            <p className="text-[#FFFFFF99] text-sm">Email with proposal link, WhatsApp/SMS short-link, or shareable URL; fallback rules if templates aren’t <br /> approved.</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/dynamic-proposals/multichannel_sending.png"
              alt="Finder V2"
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-t-xl h-[200px]"
            />
          </div>
        </div>

        {/* Asset Embed */}
         <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.7s, transform 0.55s ease 0.7s",
          }}
          className="col-span-6 bg-[#0d1f0d] rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D]"
        >
          <div className="mb-4">
            <h3 className="text-white font-bold text-xl leading-snug">
              Asset Embed
            </h3>
            <p className="text-[#FFFFFF99] text-sm">Drop In Mini Case studies, testimonials, logo strips, explainer videos, and compliance notes</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/dynamic-proposals/asset_embed.png"
              alt="Finder V2"
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-t-xl"
            />
          </div>
        </div>


      </div>

      {/* Personalization Done Right Card */}
       <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
            }}
            className={`rounded-2xl overflow-hidden flex flex-row-reverse items-center bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8 gap-8`}
          >
              <div className="w-[43%] overflow-hidden">
                <img
                  src="/images/dynamic-proposals/personalization_done_right.png"
                  alt=""
                  width={944}
                  height={696}
                  quality={100}
                  className=" object-cover"
                />
              </div>
            <div className=" flex-1">
              <h3 className={`font-bold text-white text-[35px] leading-12 mb-8`}>Personalization, Done Right</h3>
              <div className="mt-2 flex flex-col gap-6 justify-between items-start w-full">
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/dynamic-proposals/icons/personalization_token.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">Tokens:</span>  first_name, company, industry, pain_point, proof_snippet, pricing_tier, booking_link.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/dynamic-proposals/icons/personalization_sources.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">Sources:</span>   Uploaded PDFs/URLs, CRM fields, enrichment, and Agent Q&A.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/dynamic-proposals/icons/personalization_tone.svg" width={45} height={45} />
                        <p className="text-white text-lg font-light w-full"><span className="font-bold">Tone:</span>   Direct, friendly, or consultative—matched to your buyer persona.</p>
                    </div>
                </div>
            </div>
          </div>



    </div>
  );
}



function Template(){
     const [ref, visible] = useVisible();

     return (
       <div ref={ref} className="px-6 lg:px-20 mt-20">
         {/* Templates  */}
         <div
           style={{
             opacity: visible ? 1 : 0,
             transform: visible ? "translateY(0px)" : "translateY(24px)",
             transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
           }}
           className={`rounded-2xl overflow-hidden flex flex-row items-center bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8 gap-8`}
         >
           <div className="w-[43%] overflow-hidden">
             <img
               src="/images/dynamic-proposals/template_playbook.png"
               alt=""
               width={796}
               height={692}
               quality={100}
               className=" object-cover"
             />
           </div>
           <div className=" flex-1">
             <h3 className={`font-bold text-white text-[35px] leading-12 mb-8`}>
               Templates & Playbooks (By Industry/Goal)
             </h3>
             <div className="mt-2 flex flex-col gap-6 justify-between items-start w-full">
               <p className=" text-white font-bold text-lg">
                 High-Ticket Consults, Retainer Closer, Local Service Quote,
                 Trial→Paid Upgrade, B2B Pilot → Annual.
               </p>
               <p className="text-white font-normal text-lg">
                 Each includes benefit framing, objection handling, proof
                 blocks, and compliant terms.
               </p>
             </div>
           </div>
         </div>

         {/* Tracking & Trust */}
         <div className="grid grid-cols-9 gap-8 mt-12">
            {/* Tracking */}
           <div
             style={{
               opacity: visible ? 1 : 0,
               transform: visible ? "translateY(0px)" : "translateY(24px)",
               transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
             }}
             className={`rounded-2xl overflow-hidden flex flex-col bg-[#FFFFFF1A] border border-[#FFFFFF66] col-span-4`}
           >
             <div className=" overflow-hidden">
               <img
                 src="/images/dynamic-proposals/tracking_analytics.png"
                 alt=""
                 width={796}
                 height={692}
                 quality={100}
                 className=" object-cover"
               />
             </div>
             <div className=" flex-1 px-8 py-8">
               <h3
                 className={`font-bold text-white text-[21px] leading-12`}
               >
                Tracking & Analytics
               </h3>
               <div className="mt-2 flex flex-col gap-6 justify-between items-start w-full">
                 <p className=" text-[#FFFFFF99] font-normal text-[15px]  flex gap-2">
                    <BsPatchCheckFill size={25} className="text-white" />
                  Per-proposal: opens, section heatmap, link clicks, acceptance, revenue attribution.
                 </p>
               <p className=" text-[#FFFFFF99] font-normal text-[15px]  flex gap-2">
                    <BsPatchCheckFill size={25} className="text-white" />
                 Roll-up: win rate by template, industry, rep/agent, and average time-to-close
                 </p>
                 <p className=" text-[#FFFFFF99] font-normal text-[15px]  flex gap-2">
                    <BsPatchCheckFill size={22} className="text-white" />
                     A/B: subject lines, intros, pricing layout, and CTAs.
                 </p>
               </div>
             </div>
           </div>

           {/* Trust */}
           <div
             style={{
               opacity: visible ? 1 : 0,
               transform: visible ? "translateY(0px)" : "translateY(24px)",
               transition: `opacity 0.55s ease 1s, transform 0.55s ease 1s`,
             }}
             className={`rounded-2xl overflow-hidden flex flex-col bg-[#FFFFFF1A] border border-[#FFFFFF66] col-span-5`}
           >
             <div className=" overflow-hidden">
               <img
                 src="/images/dynamic-proposals/trust_compliance.png"
                 alt=""
                 width={796}
                 height={692}
                 quality={100}
                 className=" object-cover"
               />
             </div>
             <div className="flex-1 p-8">
               <h3
                 className={`font-bold text-white text-[21px] leading-12`}
               >
                 Trust & compliance
               </h3>
               <div className="mt-2">
                 <p className=" text-[#FFFFFF99] font-normal text-[15px]">
                   Branded domain links, PDF export with stamping, audit logs, consent language, <br /> and role-based permissions.
                 </p>
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
      <Automation />
      <Template />
    </section>
  );
}

