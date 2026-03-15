
// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

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

// export default function TabbedFeatureSection() {
//   const [ref, visible] = useVisible();


//   return (
//     <section
//       ref={ref}
//       className="pt-8 pb-14 px-6 lg:px-16 relative"
//     >
      
//       <h1 className="text-[55px] text-black font-bold font-degular text-center mb-8">Book More Demos <span className="text-[#787878]">(B2B & SaaS)</span> </h1>

//       {/* Content card */}
//       <div
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(24px)",
//           transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
//           boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
//         }}
//         className={`bg-white border border-gray-300 rounded-3xl overflow-hidden `}
//       >
//         <div
//           style={{ animation: "tabFadeIn 0.35s ease" }}
//           className={`flex flex-col md:flex-row`}
//         >
//           {/* Left — image */}
//           <div className="md:w-[50%] p-6 pl-0 flex items-center justify-center">
//               <img
//                 src=""
//                 alt=""
//                 className="w-full h-full object-cover rounded-2xl bg-[#0000001A]"
//               />
//           </div>

//           {/* Right — text */}
//           <div className="md:w-[50%] p-8 flex flex-col justify-center">
//             <h2 className="text-2xl font-bold text-black leading-10 mb-6">
//               Turn Cold Prospects Into Booked <br /> Meetings On Autopilot.
//             </h2>
//             <p className=" text-sm mb-4">Turn cold prospects into booked meetings on autopilot.</p>
//             <p className="text-sm mb-4"><span className="font-bold">How it works:</span> Finder v2 discovers net-new leads → multichannel outreach (Email + LinkedIn + WhatsApp) → voice assist closes the booking → dynamic proposals confirm value → everything lands in your Unified Inbox.</p>
//             <p className="font-bold text-sm mb-3">Why it wins</p>
            
//             <div className="space-y-4">

//                 <div className="flex items-start gap-3">
//                   <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Image src="/icons/Done.svg" width={18} height={18} />
//                   </div>
//                   <p className="text-sm text-black leading-relaxed">
//                    <span className="font-bold">Always-on lead flow: </span> keyword/industry/geo rules feed your pipeline daily.</p>
//                 </div>

//                <div className="flex items-start gap-3">
//                   <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Image src="/icons/Done.svg" width={18} height={18} />
//                   </div>
//                   <p className="text-sm text-black leading-relaxed">
//                    <span className="font-bold"> Right touch, right time: </span> emails warm, WA nudges, one well-timed AI call seals the slot.</p>
//                 </div>
                
//                <div className="flex items-start gap-3">
//                   <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Image src="/icons/Done.svg" width={18} height={18} />
//                   </div>
//                   <p className="text-sm text-black leading-relaxed">
//                    <span className="font-bold">Frictionless booking: </span> one-click calendar links, timezone aware</p>
//                 </div>

//                 <p className="text-sm"><span className="font-bold">Playbooks included: </span>SaaS Demo Booking, B2B Discovery, Partner Outreach.</p>

//             </div>
    
//           </div>
//         </div>
//       </div>



//       <style>{`
//         @keyframes tabFadeIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
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

// Reusable Card
function UseCaseCard({ image, imageAlt = "", imageLeft = true, title, intro, howItWorks, whyItWins = [], playbooks }) {
  const [ref, visible] = useVisible();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
      }}
      className="bg-white border border-gray-300 rounded-3xl overflow-hidden"
    >
      <div className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

        {/* Image */}
        <div className={`md:w-[50%] p-6 flex items-center justify-center bg-[#0000000A] ${ imageLeft ? "pl-0" : "pr-0"}`}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-2xl min-h-[260px]"
          />
        </div>

        {/* Text */}
        <div className="md:w-[50%] p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-black leading-snug mb-3">{title}</h2>
          {intro && <p className="text-sm text-gray-600 mb-3">{intro}</p>}
          {howItWorks && (
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-bold text-black">How it works: </span>{howItWorks}
            </p>
          )}
          {whyItWins.length > 0 && (
            <>
              <p className="font-bold text-sm text-black mb-3">Why it wins</p>
              <div className="space-y-3">
                {whyItWins.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Image src="/icons/Done.svg" width={18} height={18} />
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      <span className="font-bold">{item.bold} </span>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          {playbooks && (
            <p className="text-sm mt-4">
              <span className="font-bold text-black">Playbooks included: </span>{playbooks}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

//  Page 
export default function BookMoreDemos() {
  return (
    <section className=" pb-14 bg-[#F6F6F6] py-8 px-6 lg:px-16 relative">

      <h1 className="text-[55px] text-black font-bold font-degular text-center mb-4">
        Book More Demos <span className="text-[#787878]">(B2B & SaaS)</span>
      </h1>

      <div className="flex flex-col gap-6">

        <UseCaseCard
          image="/images/use-cases/cold_prospects.png"
          imageLeft={true}
          title="Turn Cold Prospects Into Booked Meetings On Autopilot."
          intro="Turn cold prospects into booked meetings on autopilot."
          howItWorks="Finder v2 discovers net-new leads → multichannel outreach (Email + LinkedIn + WhatsApp) → voice assist closes the booking → dynamic proposals confirm value → everything lands in your Unified Inbox."
          whyItWins={[
            { bold: "Always-on lead flow:", text: "keyword/industry/geo rules feed your pipeline daily." },
            { bold: "Right touch, right time:", text: "emails warm, WA nudges, one well-timed AI call seals the slot." },
            { bold: "Frictionless booking:", text: "one-click calendar links, timezone aware." },
          ]}
          playbooks="SaaS Demo Booking, B2B Discovery, Partner Outreach."
        />

        <UseCaseCard
          image="/images/use-cases/card2.png"
          imageLeft={false}
          title="Convert Free Trials To Paid"
          intro="Stop trial decay with timely nudges that feel human."
          howItWorks="How it works: Agent tracks trial age & key actions → sends targeted value emails → WA reminder with “quick win” snippet → short consultative AI call to overcome hesitation → instant payment/upgrade link."
          whyItWins={[
            { bold: "Behavior-based steps:", text: " angles map to what they have / haven’t tried." },
            { bold: "Objection handling:", text: " pricing, setup time, ROI — addressed with proof." },
            { bold: "Fast path to paid: ", text: "proposal + checkout CTA in one flow." },
          ]}
          playbooks=" Trial→Paid 14-Day Push, PQL Activation."
        />

        <UseCaseCard
          image="/images/use-cases/card3.png"
          imageLeft={true}
          title="Close High-Ticket Services & Agencies"
          intro="Let your top closer clone themselves."
          howItWorks="How it works: Agent pre-qualifies with email + case proof → sends dynamic proposal personalized to industry & pain → AI voice handles objections live → books consult or collects deposit."
          whyItWins={[
            { bold: "Authority positioning:", text: " differentiators + outcomes, not features." },
            { bold: "Live objection handling: ", text: "call script mirrors your best closer" },
            { bold: "Proposal at scale: ", text: "thousands sent, each feels handcrafted." },
          ]}
          playbooks="High-Ticket Consults, Retainer Closer, Upgrades/Cross-sell."
        />

        <UseCaseCard
          image="/images/use-cases/card4.png"
          imageLeft={false}
          title="Capture & Convert Local Leads (Phone-First)"
          intro="Turn website visits and inbound calls into jobs booked."
          howItWorks="How it works: Embeddable Agent Widget (chat + call-back) captures interest → missed-call text-back + WA confirmation → AI call qualifies and books → reminders reduce no-shows."
          whyItWins={[
            { bold: "Instant response:", text: " under 90 seconds, 24/7." },
            { bold: "No wasted calls:", text: " qualify by service, zip, budget." },
            { bold: "Real bookings:", text: " calendar + payments in-flow." },
          ]}
          playbooks="Home Services, Healthcare Clinics, Real Estate Teams."
        />

        <UseCaseCard
          image="/images/use-cases/card5.png"
          imageLeft={true}
          title="DFY Playbooks & Templates Library (by Industry & Goal)"
          intro="Launch winning campaigns in minutes — not weeks."
          howItWorks="Spin up Agents preloaded with best-practice sequences, dynamic proposals, and voice scripts tailored to your market and objective."
          whyItWins={[
            { bold: "Pick a Playbook → ", text: "Choose by industry (Dental, Real Estate, SaaS, Home Services, Legal, Coaching) or goal(Book Demos" },
            { bold: "Plug in your brand & offer →", text: " Upload PDFs/URLs; the Agent auto-personalizes emails, WhatsApp, LinkedIn outreach, and voice scripts." },
            { bold: "One-click launch → ", text: "Dynamic proposals, compliant templates, and guardrails are wired in; A/B subjects and step timing pre-tuned" },
            { bold: "Iterate fast →", text: " Optimize with built-in analytics; duplicate across niches and clients." },
          ]}
          playbooks="High-Ticket Consults, Retainer Closer, Upgrades/Cross-sell."
        />

      </div>
    </section>
  );
}



