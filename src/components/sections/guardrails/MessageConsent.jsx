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





function FeatureGrid() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
        <div className="flex justify-center">
            <h1 className="text-black border text-5xl px-6 py-2 rounded-full font-bold text-center font-degular mb-10">
                Messaging Consent & Privacy
            </h1>
        </div>

      <div className="grid grid-cols-9 gap-6">
        {/* Card Takes 2 cols, full height */}

        {/* Left Container */}
        <div className="col-span-6 flex flex-col gap-6">
          {/* Top Right */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
            }}
            className=" bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-black font-bold text-xl leading-snug">
               GDPR/CCPA/TCPA-ready Capture
              </h3>
              <p className="text-sm text-[#00000099]">Embeddable forms/widgets with consent checkboxes, purpose notes, IP + timestamp logs.</p>
            </div>
            <div className=" flex-shrink-0">
              <img
                src="/images/guardrails/"
                alt="Verification & Hygiene"
                //   width={323}
                //   height={179}
                //   quality={100}
                className=" object-contain rounded-lg w-[330px] h-[200px] bg-[#0000001A]"
              />
            </div>
          </div>

            {/* WhatsApp Compliance AND DNC Management  */}
          <div className="flex gap-6">
            {/*WhatsApp Compliance*/}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 pb-0"
            >
              <div className=" flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                WhatsApp Compliance
                </h3>
                <p className="text-sm text-[#00000099]">Template approval tracking with automatic email fallback if pending/denied.</p>
              </div>
              <div className=" flex-shrink-0 mt-4">
                <img
                  src="/images/guardrails/.png"
                  alt=""
                  //   width={274}
                  //   height={143}
                  //   quality={100}
                  className=" object-contain rounded-lg w-full h-full bg-[#0000001A]"
                />
              </div>
            </div>

            {/*   DNC Management */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col p-6 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/guardrails/"
                  alt=""
                  //   width={200}
                  //   height={134}
                  //   quality={100}
                  className=" object-contain rounded-lg w-[315px] h-[220px] bg-[#0000001A]"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-black font-bold text-xl leading-snug">
                 DNC Management
                </h3>
                 <p className="text-sm text-[#00000099]">Global and campaign-level DNC lists with per-channel suppression.</p>
              </div>
            </div>
          </div>
        </div>


         {/* RIGHT — Container: takes 3 cols */}
         <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-white border border-[#00000024]"
        >
          <div className="">
            <h3 className="text-black font-bold text-xl leading-snug">
              Proof of Consent Ledger
            </h3>
            <p className="text-sm text-[#00000099]">Versioned records for opt-ins/opt-outs, exportable for audits.</p>
          </div>
          <div className=" overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/guardrails/"
              alt="domain_auth"
              // width={323}
              // height={342}
              // quality={100}
              className="object-cover rounded-xl h-[430px] w-full bg-[#0000001A]"
            />
          </div>
        </div>



      </div>

    </div>
  );
}




export default function WhatYouSee() {
  return (
    <section
      className="w-full  py-10"
        style={{
        background: "#F4F9FA",
      }}
    >
      <FeatureGrid />
    </section>
  );
}















// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { BsPatchCheckFill } from "react-icons/bs";

// function useVisible(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
//       },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }


// function LongHorizontalCard({ image, imageAlt = "", title, description, className = "", delay = "0s", visible, imageLeft = true, titleTextStyle, descriptionTextTyle, moreDescription }) {
//   return (
//     <div
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0px)" : "translateY(24px)",
//         transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
//       }}
//       className={`rounded-2xl overflow-hidden flex ${imageLeft ? "flex-row" : "flex-row-reverse"} items-center ${className}`}
//     >
//       {image && (
//         <div className="w-[40%] overflow-hidden">
//           <Image
//             src={image}
//             alt={imageAlt}
//             width={980}
//             height={737}
//             quality={100}
//             className="object-cover"
//           />
//         </div>
//       )}
//       <div className="flex-1">
//         <h3 className={`font-bold text-white ${titleTextStyle}`}>{title}</h3>
//         <p className={`text-[#FFFFFF99] mt-2 leading-relaxed ${descriptionTextTyle}`}>{description}</p>
//         <div>{moreDescription}</div>
//       </div>
//     </div>
//   );
// }


// // Priority Queue Animation 
// function PriorityQueueAnimation({ visible }) {
//   const contacts = [
//     { name: "Victoria Wills", time: "09:01 AM", status: "Completed call", statusColor: "#22c55e", emoji: "/images/unified-inbox/icons/vic_willz.svg", channel: "call" },
//     { name: "Sarah Mitchell", time: "10:23 AM", status: "Email opened", statusColor: "#a855f7", emoji: "/images/unified-inbox/icons/sarah_mitchell.svg", channel: "email" },
//     { name: "James Okafor", time: "11:45 AM", status: "Proposal viewed", statusColor: "#3b82f6", emoji: "/images/unified-inbox/icons/james_okafor.svg", channel: "linkedin" },
//   ];

//   return (
//     <div className="w-full bg-[#222423] rounded-xl px-10 py-6 space-y-3">
//       {contacts.map((contact, i) => (
//         <div
//           key={contact.name}
//           style={{
//             background:  "#353635",
//             border: "0.1px solid #FFFFFF69",
//             transition: "background 0.4s ease, border 0.4s ease",
//           }}
//           className="flex items-center gap-3 px-2 py-2 rounded-lg"
//         >
//           {/* Avatar */}
//           <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
//                 <Image
//                     src={contact.emoji}
//                     alt={contact.name}
//                     width={32}
//                     height={32}
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//           {/* Info */}
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center gap-1.5">
//               <span className="text-[11px] font-semibold text-white truncate">{contact.name}</span>
//                 <BsPatchCheckFill className=" text-blue-400" size={10} />
//             </div>
//             <div className="flex items-center gap-1">
//               <span style={{ color: contact.statusColor }} className="text-[9px] font-medium">{contact.status}</span>
//               <span className="text-[9px] text-gray-500">{contact.time}</span>
//             </div>
//           </div>

//           {/* Channel icon */}
//           <div className="w-6 h-6 rounded-md bg-[#454745] flex items-center justify-center flex-shrink-0">
//             {contact.channel === "call" && (
//               <Image src="/images/unified-inbox/icons/call.svg" width={13} height={13} />
//             )}
//             {contact.channel === "email" && (
//                <Image src="/images/unified-inbox/icons/Email_priority.svg" width={14} height={14} />
//             )}
//             {contact.channel === "linkedin" && (
//                <Image src="/images/unified-inbox/icons/LinkedIn_priority.svg" width={22} height={22} />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// //  AI Assist Animation 
// function AIAssistAnimation({ visible }) {
//   const lines = [4, 3, 4, 2, ];
//   const [revealedLines, setRevealedLines] = useState(0);
//   const [generating, setGenerating] = useState(false);

//   useEffect(() => {
//     if (!visible) return;

//     function runCycle() {
//       setRevealedLines(0);
//       setGenerating(true);
//       let lineIndex = 0;
//       const lineTimer = setInterval(() => {
//         lineIndex += 1;
//         setRevealedLines(lineIndex);
//         if (lineIndex >= lines.length) {
//           clearInterval(lineTimer);
//           setGenerating(false);
//           setTimeout(runCycle, 2500);
//         }
//       }, 550);
//     }

//     const startDelay = setTimeout(runCycle, 600);
//     return () => clearTimeout(startDelay);
//   }, [visible]);

//   return (
//     <div className="w-full bg-[#222423] rounded-xl p-4 flex flex-col gap-3">
//       {/* Text lines */}
//       <div className="space-y-2">
//         {lines.map((width, i) => (
//           <div
//             key={i}
//             className="h-2 rounded-full bg-[#1e3a1e] overflow-hidden"
//             style={{ maxWidth: `${50 + width * 10}%` }}
//           >
//             <div
//               className="h-full rounded-full bg-[#545554]"
//               style={{
//                 width: revealedLines > i ? "100%" : "0%",
//                 transition: "width 0.5s ease",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//        <div className="space-y-2">
//         {lines.map((width, i) => (
//           <div
//             key={i}
//             className="h-2 rounded-full bg-[#1e3a1e] overflow-hidden"
//             style={{ maxWidth: `${50 + width * 10}%` }}
//           >
//             <div
//               className="h-full rounded-full bg-[#545554]"
//               style={{
//                 width: revealedLines > i ? "100%" : "0%",
//                 transition: "width 0.5s ease",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Generating indicator */}
     
//         <div
//           style={{
//             opacity: generating ? 1 : 0,
//             transition: "opacity 0.3s ease",
//           }}
//           className="flex items-center w-full gap-2 bg-[#353635] rounded-lg px-3 py-2 mt-1"
//         >
//           <div className="flex gap-1">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="w-1.5 h-1.5 rounded-full bg-white"
//                 style={{
//                   animation: generating
//                     ? `dotBounce 0.9s ease ${i * 0.15}s infinite`
//                     : "none",
//                 }}
//               />
              
//             ))}
//           </div>

//           <span className="text-[10px] text-white font-medium font-pjs">
//             Generating...
//           </span>
//           <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center">
//             <Image src="/images/unified-inbox/icons/generating_svg.svg" width={24} height={24} />
//           </div>
//         </div>

//       <style>{`
//         @keyframes dotBounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-4px); }
//         }
//       `}</style>
//     </div>
//   );
// }


// // One-Click Actions Animation 
// function OneClickActionsAnimation({ visible }) {

//   const [orbiting, setOrbiting] = useState(false);

//   useEffect(() => {
//     if (!visible) return;
//     const t = setTimeout(() => setOrbiting(true), 500);
//     return () => clearTimeout(t);
//   }, [visible]);

//   return (
//     <div className="relative flex items-center justify-center rounded-xl bg-[#232523]" style={{ height: "180px" }}>
//       {/* Subtle ring */}
//       <div
//         style={{ opacity: orbiting ? 0.12 : 0, transition: "opacity 0.8s ease 0.5s" }}
//         className="absolute bottom-0 w-36 h-40 rounded-lg border border-white border-b-0"
//       />

//       {/* Center avatar */}
//       <div
//         style={{
//           opacity: orbiting ? 1 : 0,
//           transform: orbiting ? "scale(1)" : "scale(0.7)",
//           transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
//         }}
//         className="w-24 h-24 rounded-full  flex items-center justify-center z-10 shadow-lg text-2xl"
//       >
//         <Image src="/images/unified-inbox/icons/one_click_action_face.svg" width={96} height={96} />
//       </div>
//     </div>
//   );
// }



// function KeyCapabilitiesCards() {
//   const [ref, visible] = useVisible();
//   return (
//     <div ref={ref} className="">

//       <h1 className="text-[#D0F56B] text-6xl font-bold text-center font-degular mb-10">
//         Key Capabilities
//       </h1>

//       {/* First Three cols Grid */}
//       <div className="grid grid-cols-11 gap-6 my-8">

//         {/* Priority Queue */}
//         <div
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0px)" : "translateY(24px)",
//             transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
//           }}
//           className="col-span-4 rounded-2xl overflow-hidden flex flex-col-reverse justify-center px-6 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//         >
//           <div className="mt-4">
//             <h3 className="text-white font-bold text-xl leading-snug">Priority Queue</h3>
//             <p className="text-[#FFFFFF99] font-extralight text-[15px]">
//               Auto-ranks leads by intent & recency (open/click heat, proposal dwell time, reply sentiment, missed call).
//             </p>
//           </div>
//           {/* ── Replaced image with animation ── */}
//           <div className="overflow-hidden mb-4">
//             <PriorityQueueAnimation visible={visible} />
//           </div>
//         </div>

//         {/* AI Assist */}
//         <div
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0px)" : "translateY(24px)",
//             transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
//           }}
//           className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//         >
//           <div className="mb-4">
//             <h3 className="text-white font-bold text-xl leading-snug">AI Assist</h3>
//             <p className="text-[#FFFFFF99] text-[15px] font-extralight">
//               1-click summary, suggested reply, objection handle, or "insert dynamic proposal".
//             </p>
//           </div>
//           {/* ── Replaced image with animation ── */}
//           <div className="mt-auto">
//             <AIAssistAnimation visible={visible} />
//           </div>
//         </div>

//         {/* One Click Action */}
//         <div
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0px)" : "translateY(24px)",
//             transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
//           }}
//           className="col-span-4 rounded-2xl overflow-hidden flex flex-col-reverse justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//         >
//           <div className="mt-8">
//             <h3 className="text-white font-bold text-xl leading-snug">One-Click Actions</h3>
//             <p className="text-[#FFFFFF99] text-[15px] font-extralight">
//               One-click actions: Email/WA reply, call now, drop proposal, book demo, qualify/disqualify, snooze, move stage.
//             </p>
//           </div>
//           {/* ── Replaced image with animation ── */}
//           <div className="relative">
//             <OneClickActionsAnimation visible={visible} />
//             {/* Action Pills */}
//             <Image src="/images/unified-inbox/icons/reply_message.svg" width={114} height={32} className="absolute top-4 left-10 z-20" />
//             <Image src="/images/unified-inbox/icons/call_now.svg" width={114} height={32} className="absolute top-28 left-10 z-20" />

//              <Image src="/images/unified-inbox/icons/info_pink.svg" width={114} height={32} className="absolute top-4 right-10 z-20" />
//               <Image src="/images/unified-inbox/icons/book_demo.svg" width={114} height={32} className="absolute top-28 right-10 z-20" />
//                <Image src="/images/unified-inbox/icons/Hand.svg" width={40} height={40} className="absolute top-30 left-34 z-20" />
//           </div>
//         </div>
//       </div>

//        {/* Second Three cols Grid */}
//         <div className="grid grid-cols-11 gap-6 my-8">
//             {/* Search Filters */}
//             <div
//                 style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0px)" : "translateY(24px)",
//                 transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
//                 }}
//                 className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-6 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//             >
//                 <div className="mb-8">
//                 <h3 className="text-white font-bold text-xl leading-snug">
//                     Search & Filters
//                 </h3>
//                 <p className="text-[#FFFFFF99] font-extralight text-[15px]">
//                     Channel, Owner, Stage, Playbook, Tag, Intent, Date—Save Views For Daily Ops.
//                 </p>
//                 </div>
//                 <div className="mt-auto overflow-hidden flex items-center">
//                 <img
//                     src="/images/unified-inbox/search_filter.png"
//                     alt="Finder V2"
//                     className="object-cover rounded-t-xl w-[522px]"
//                 />
//                 </div>
//             </div>

//             {/* Collaborations */}
//             <div
//                 style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0px)" : "translateY(24px)",
//                 transition: "opacity 0.55s ease 0.6s, transform 0.55s ease 0.6s",
//                 }}
//                 className="col-span-4 rounded-2xl overflow-hidden flex flex-col-reverse justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//             >
//                 <div className="mb-4">
//                 <h3 className="text-white font-bold text-xl leading-snug">
//                     Collaboration
//                 </h3>
//                 <p className="text-[#FFFFFF99] text-[15px] font-extralight">
//                    Collaboration: @mentions, internal notes, collision alerts, assignments, SLAs.
//                 </p>
//                 </div>
//                 <div className=" overflow-hidden mb-auto flex items-center justify-center">
//                 <img
//                     src="/images/unified-inbox/collaboration.png"
//                     alt="Finder V2"
//                     className="object-cover rounded-t-xl w-[682px]"
//                 />
//                 </div>
//             </div>

//             {/* GuardRails */}
//             <div
//                 style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0px)" : "translateY(24px)",
//                 transition: "opacity 0.55s ease 0.7s, transform 0.55s ease 0.7s",
//                 }}
//                 className="col-span-4 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 bg-linear-to-br from-[#FFFFFF0D] from-30% to-[#D0F56B21] border border-[#FFFFFF0D]"
//             >
//                 <div className="mb-4">
//                 <h3 className="text-white font-bold text-xl leading-snug">
//                     Guardrails In-Thread
//                 </h3>
//                 <p className="text-[#FFFFFF99] text-[15px] font-extralight">
//                    Unsubscribe status, consent (GDPR/TCPA), WhatsApp template approval, DNC & <span className="font-bold">number reputation badges.</span>
//                 </p>
//                 </div>
//                 <div className=" overflow-hidden mt-auto flex items-center justify-center">
//                 <img
//                      src="/images/unified-inbox/guardrails.png"
//                     alt="Finder V2"
//                     className="object-cover rounded-t-xl w-[682px]"
//                 />
//                 </div>
//             </div>
//         </div>


//     {/* Lead Timeline */}
//       <LongHorizontalCard
//         image="/images/unified-inbox/acquisition_finder.png"
//         title="Lead Timeline (Instant Truth)"
//         titleTextStyle="text-[35px] leading-12 mb-0"
//         description="A chronological, tamper-proof history of every signal"
//         descriptionTextTyle=" text-white mb-6"
//         delay="0.2s"
//         className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] 
//         p-8 gap-12 mb-10"
//         visible={visible}
//         imageLeft={false}
//         moreDescription={
//           <>
//             <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/acquisition_finder.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold"> Acquisition:</span> Finder v2, Widget, Chrome Capture, CSV (with verification status)
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/engagements.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">Engagement: </span> Sends, opens, clicks, reply types, WA templates sent/approved
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/voice_call.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">Voice:</span>  Call placed/connected, outcome, transcript snippet, retry status
//                 </p>
//               </div>
//                <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/proposals_meeting.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">Proposals & Meetings:</span>  Proposal sent/viewed (time), booking created, payment link opened
//                 </p>
//               </div>
//                <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/pipeline_event.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">Pipeline events:</span>  Stage changes, owner changes, automations fired
//                 </p>
//               </div>
//             </div>
//           </>
//         }
//       />

//       {/* For Agencies & Teams */}
//       <LongHorizontalCard
//         image="/images/unified-inbox/agencies_teams.png"
//         title="For Agencies & Teams"
//         titleTextStyle="text-[35px] leading-12 mb-0"
//         description=""
//         descriptionTextTyle=" text-white mb-6"
//         delay="0.2s"
//         className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8 gap-12 mb-10"
//         visible={visible}
//         imageLeft={true}
//         moreDescription={
//           <>
//             <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/client_workspace.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold"> Client workspaces:</span>  Switch accounts fast; keep data cleanly separated.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/permissions.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">Permissions: </span>  Roles for owners, reps, collaborators, and read-only clients.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/SLA.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold">SLA dashboards:</span>  First-response time, backlog, owner workload, hot-lead queue.
//                 </p>
//               </div>
//             </div>
//           </>
//         }
//       />

//       {/* Analyytics */}
//         <LongHorizontalCard
//         image="/images/unified-inbox/analytics_that_matter.png"
//         title="Analytics That Matter"
//         titleTextStyle="text-[35px] leading-12 mb-0"
//         description=""
//         descriptionTextTyle=" text-white mb-6"
//         delay="0.2s"
//         className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8 gap-12 mb-10"
//         visible={visible}
//         imageLeft={false}
//         moreDescription={
//           <>
//             <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/response_time.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   Response time & win rate by channel
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/lead_to_meeting.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   Lead-to-meeting velocity and meeting-to-close influence
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/two_objection.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   <span className="font-bold block">Top objection patterns and assist usage</span> (what AI suggested vs what closed)
//                 </p>
//               </div>
//             </div>
//           </>
//         }
//       />

//       {/* How it works with Agents */}

//        <LongHorizontalCard
//         image="/images/unified-inbox/how_it_works_with_agents.png"
//         title="How it works with your Agents"
//         titleTextStyle="text-[35px] leading-12 mb-0"
//         description=""
//         descriptionTextTyle=" text-white mb-6"
//         delay="0.2s"
//         className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-8
//          gap-12"
//         visible={visible}
//         imageLeft={true}
//         moreDescription={
//           <>
//             <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/pause.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   Agents pause automation when a human engages, <br /> and resume if it goes quiet.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/agents_can_auto.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   Agents can auto-reply within guardrails or escalate to <br /> human with context.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
//                 <Image src="/images/unified-inbox/icons/every_action.svg" width={45} height={45} />
//                 <p className="text-white text-lg font-light w-full">
//                   Every action is logged to the Lead Timeline for complete visibility.
//                 </p>
//               </div>
//             </div>
//           </>
//         }
//       />

//     </div>
//   );
// }


// export default function KeyCapabilities() {
//   return (
//     <section
//       className="w-full px-6 lg:px-20 py-20"
//       style={{ background: "linear-gradient(to bottom, #000000, #0F2212)" }}
//     >
//       <KeyCapabilitiesCards />
//     </section>
//   );
// }




