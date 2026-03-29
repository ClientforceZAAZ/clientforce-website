"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

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

// Shared Components
function SectionHead({ children, headBgColor }) {
  return (
    <div className="flex justify-center mb-6 md:mb-14">
      <div className={`${headBgColor} rounded-full px-5 py-2 font-degular  text-white text-lg sm:text-2xl md:text-4xl font-semibold`}>
        {children}
      </div>
    </div>
  );
}

function DarkCard({ image, imageAlt = "", title, description, className = "", delay = "0s", visible, darkCardBgColor, }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
      className={`${darkCardBgColor} rounded-2xl overflow-hidden flex ${className}`}
    >
      {image && (
        <div className="w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            width={698} 
            height={448}
            quality={100}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      <div className="p-5 flex-1">
        <h3 className="text-white font-bold text-xl leading-snug">{title}</h3>
        <p className="text-[#FFFFFF99] text-base mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
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
            className=" object-cover"
          />
        </div>
      )}
      <div className=" flex-1">
        <h3 className={`font-bold text-white ${titleTextStyle}`}>{title}</h3>
        <p className={`text-[#FFFFFF99] mt-2 leading-relaxed ${descriptionTextTyle}`}>{description}</p>
        <div>{moreDescription}</div>
      </div>
    </div>
  );
}




// Section 1: What An Agent Does All Day 
function WhatAgentDoes() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="mb-8 md:mb-18">
      <SectionHead headBgColor="bg-[#6BE8FD36]">What An Agent Does All Day</SectionHead>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            image: "/images/agents/auto_prospecting.png",
            title: "Auto-Prospects",
            description: "Finder V2 Discovers Net-New Leads; Chrome Capture And Widgets Feed Inbound.",
            delay: "0.1s",
          },
          {
            image: "/images/agents/agent_multichannel.png",
            title: "Engages Multichannel",
            description: "Emails, WhatsApp, LinkedIn Touches, SMS—Timed For Replies.",
            delay: "0.2s",
          },
          {
            image: "/images/agents/agent_calls.png",
            title: "Calls (AI Or Human)",
            description: "One Strategic Voice Touch To Qualify/Close.",
            delay: "0.3s",
          },
          {
            image: "/images/agents/agent_proposals.png",
            title: "Sends Dynamic Proposals",
            description: "Personalized At Scale With Company/Industry Pain Points.",
            delay: "0.4s",
          },
          {
            image: "/images/agents/agent_books.png",
            title: "Books & Closes",
            description: "Routes To Calendar/Checkout; Nudges Stalled Deals.",
            delay: "0.5s",
          },
          {
            image: "/images/agents/agent_learns.png",
            title: "Learns & Improves",
            description: "Analytics Tune Timing, Angles, And Templates.",
            delay: "0.6s",
          },
        ].map((card) => (
          <DarkCard key={card.title} {...card} visible={visible} className="flex-col" />
        ))}
      </div>
    </div>
  );
}

// Section 2: Start An Agent 
function StartAnAgent() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="mb-8 md:mb-18">
      <SectionHead headBgColor="bg-[#6BE8FD36]">
        <span className="text-white font-bold">Start An Agent</span>{" "}
        <span className="text-[#FFFFFF99] font-normal">(3 Build Paths)</span>
      </SectionHead>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            image: "/images/agents/start_ai.png",
            title: "Start With AI",
            description: "Answer A Few Questions; Get A Goal-Ready Campaign In Minutes.",
            delay: "0.1s",
          },
          {
            image: "/images/agents/start_playbook.png",
            title: "From Playbook",
            description: "Proven Templates By Industry/Role, Editable And Ready To Ship.",
            delay: "0.2s",
          },
          {
            image: "/images/agents/start_scratch.png",
            title: "From Scratch",
            description: "Full Control Over Steps, Timing, And Logic.",
            delay: "0.3s",
          },
        ].map((card) => (
          <DarkCard key={card.title} {...card} visible={visible} className="flex-col" />
        ))}
      </div>
    </div>
  );
}

// Teach your Agent
function TeachYourAgent(){
    const [ref, visible] = useVisible();
    return(
        <div ref={ref} className="mb-18">
            <LongHorizontalCard
            image="/images/agents/teach_your_agent.png"
            title="Teach Your Agent (Knowledge & Positioning)"
            titleTextStyle="text-2xl md:text-[40px] max-w-[530px] leading-8 md:leading-12 mb-4"
            description="Upload PDFs, URLs, Docs and your Agent will extract product, pricing, proof, objections, and differentiators—so every email, WA, call script, and proposal sounds like your best closer."
            descriptionTextTyle="text-[#FFFFFF99] text-[14px] md:text-base max-w-[520px] font-normal"
            delay="0.2s"
            className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#6BE8FD33] border border-[#FFFFFF0D] p-6"
            visible={visible}
            imageLeft={false}
            moreDescription={<>
                <div className="mt-8 md:mt-12 flex flex-col gap-2 justify-between items-start">
                    <p className="text-white text-xs font-light flex items-center gap-1"><IoIosCheckmarkCircle size={16} className="inline-block" /><span className="font-bold">ICP & Tone:</span> industry, roles, geo, voice.</p>
                    <p  className="text-white text-xs font-light flex items-center gap-1"><IoIosCheckmarkCircle size={16} className="inline-block" /><span className="font-bold">Variables:</span> first_name, company, industry, pain_point, proof_snippet, booking_link.
                    </p>
                    <p  className="text-white text-xs font-light flex items-center gap-1"><IoIosCheckmarkCircle size={16} className="inline-block" /><span className="font-bold">Guardrails:</span> consent flags, DNC lists, unsub language</p>
                </div>
              </>}
            />
        </div>
    )
}



//  Section 3: Campaign Designer 
function CampaignDesigner() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="mb-18">
      <SectionHead headBgColor="bg-[#D0F56B36]">
        <span className="text-white font-bold">Campaign Designer</span>{" "}
        <span className="text-[#FFFFFF99] font-normal">
          (Multichannel + Logic)
        </span>
      </SectionHead>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            image: "/images/agents/campaign_blocks.png",
            title: "Blocks",
            description: "Email, WhatsApp, Voice Call, Proposal, Wait, Branch.",
            delay: "0.1s",
          },
          {
            image: "/images/agents/campaign_distribution.png",
            title: "Distribution",
            description:
              "Email (3–5 Steps), WhatsApp (1 Short Nudge), Voice (1 High–Value Call).",
            delay: "0.2s",
          },
          {
            image: "/images/agents/campaign_logic.png",
            title: "Smart Logic",
            description:
              "If Positive → Stop & Confirm; No Answer → Next Step; Neutral → Value Angle.",
            delay: "0.3s",
          },
          {
            image: "/images/agents/campaign_schedules.png",
            title: "Schedules & Caps",
            description:
              "Time-Zone Windows, Sender Rotation, Deliverability-Safe Pacing.",
            delay: "0.4s",
          },
        ].map((card) => (
          <div
            key={card.title}
            {...card}
            visible={visible}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: `opacity 0.55s ease ${card.delay}, transform 0.55s ease ${card.delay}`,
            }}
            className={`rounded-2xl overflow-hidden flex flex-row  items-center gap-2 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] px-4 py-4`}
          >
            <div className="w-[40%] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={ 506} 
                height={ 370}
                quality={100}
                className=" object-cover"
              />
            </div>

            <div className="p-5 flex-1">
              <h3 className={`font-bold text-xl text-white`}>{card.title}</h3>
              <p
                className={`text-[#FFFFFF99] text-base font-light mt-2 leading-relaxed`}
              >
                {card.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}






// Section 4: Lead Sources
function LeadSources() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="mb-18">
      <SectionHead headBgColor="bg-[#D0F56B36]">
        <span className="text-white font-bold">Lead Sources</span>{" "}
        <span className="text-[#FFFFFF99] font-normal">
          (Always-On Pipeline)
        </span>
      </SectionHead>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        {/*  Finder V2: takes 2 cols, full height visible from lg: above */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 bg-[#0d1f0d] rounded-2xl overflow-hidden hidden lg:flex flex-col justify-center p-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] "
        >
          <div className="">
            <h3 className="text-white font-bold text-xl leading-snug">
              Finder V2 — <br />
              Automated Discovery
            </h3>
            <p className="text-[#FFFFFF99] text-sm mt-2 leading-relaxed">
              Define Keywords, Geo, Industry, Frequency: Auto-Ingest Verified
              Leads Daily Or Route For Review.
            </p>
          </div>
          <div className="mt-auto overflow-hidden">
            <Image
              src="/images/agents/leads_finder.png"
              alt="Finder V2"
              width={323}
              height={342}
              quality={100}
              className="object-cover rounded-t-xl"
            />
          </div>
        </div>

        {/* RIGHT — Container: takes 3 cols */}
        <div className=" lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6">
          {/*  Finder V2: visible at lg and below */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
            }}
            className=" col-span-1 bg-[#0d1f0d] rounded-2xl overflow-hidden lg:hidden flex flex-col items-center justify-center p-6 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] "
          >
            <div className="mb-4">
              <h3 className="text-white font-bold text-xl leading-snug">
                Finder V2 — <br />
                Automated Discovery
              </h3>
              <p className="text-[#FFFFFF99] text-sm mt-2 leading-relaxed">
                Define Keywords, Geo, Industry, Frequency: Auto-Ingest Verified
                Leads Daily Or Route For Review.
              </p>
            </div>
            <div className=" overflow-hidden">
              <Image
                src="/images/agents/leads_finder.png"
                alt="Finder V2"
                width={200}
                height={210}
                quality={100}
                className="object-cover rounded-t-xl"
              />
            </div>
          </div>

          {/* Top Left — Chrome Capture: text left, image right */}

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
            }}
            className=" col-span-1 bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex lg:flex-row flex-col items-center justify-center gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl leading-snug">
                Chrome Capture — One-Click Prospecting
              </h3>
              <p className="text-[#FFFFFF99] text-sm mt-2 leading-relaxed">
                Grab Contact Data From LinkedIn/GMB/ Any Site And Drop Leads
                Straight Into The Right Agent Playbook.
              </p>
            </div>
            <div className=" flex-shrink-0">
              <Image
                src="/images/agents/leads_chrome.png"
                alt="Chrome Capture"
                width={323}
                height={179}
                quality={100}
                className=" object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="sm:flex sm:flex-row flex-col gap-6 col-span-1 sm:col-span-2">
            {/* CSV: text left, image right */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-linear-to-b from-[#FFFFFF0D] from-60% to-[#D0F56B21] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col items-center p-6 mb-6 sm:mb-0"
            >
              <div className=" flex-1">
                <h3 className="text-white font-bold text-xl leading-snug">
                  CSV Import & Validation
                </h3>
                <p className="text-[#FFFFFF99] text-sm mt-2 leading-relaxed">
                  Drag-And-Drop Lists; We Map Fields, Dedupe, And Verify Emails
                  To Protect Reputation.
                </p>
              </div>
              <div className=" flex-shrink-0 mt-4 sm:mt-0">
                <Image
                  src="/images/agents/leads_csv.png"
                  alt="CSV Import"
                  width={274}
                  height={143}
                  quality={100}
                  className=" object-contain rounded-lg"
                />
              </div>
            </div>

            {/*  Embeddable Widgets: image top, text bottom */}
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
                <Image
                  src="/images/agents/leads_widgets.png"
                  alt="Embeddable Widgets"
                  width={200}
                  height={134}
                  quality={100}
                  className=" object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-white font-bold text-xl leading-snug">
                  Embeddable Widgets — Chat & Callback
                </h3>
                <p className="text-[#FFFFFF99] text-sm mt-1 leading-relaxed">
                  Add Branded Widgets To Your Site For Live Chat, Email Capture,
                  Or "Call Me Back"—Every Submission Goes To The Correct
                  Campaign, Tagged And Ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// Unified Inbox
function UnifiedInbox(){
    const [ref, visible] = useVisible();
    return(
        <div ref={ref} className="">
            <LongHorizontalCard
            image="/images/agents/unified_inbox.png"
            title="Unified Inbox(Every Conversation, One Place)"
            titleTextStyle="text-2xl md:text-[30px] max-w-[480px] leading-8 md:leading-12 mb-4"
            description="Auto-Generate Personalized, On-Brand Proposals With Company, Industry, And Pain-Point Context—Send Thousands With One Click, Tracked To Close."
            descriptionTextTyle="text-[#FFFFFF99] text-[14px] md:text-base max-w-[520px] font-normal"
            delay="0.2s"
            className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-6"
            visible={visible}
            imageLeft={false}
           
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-8 md:my-18">
              {/* Dynamic Proposals */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(24px)",
                  transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
                }}
                className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-8 pb-16"
              >
                <div className=" flex-1 overflow-hidden">
                  <Image
                    src="/images/agents/dynamic_proposals.png"
                    alt="Dynamic Proposals"
                    width={600}
                    height={340}
                    quality={100}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-white font-bold text-2xl sm:text-4xl leading-8 sm:leading-10">
                    Dynamic Proposals <br /> At Scale
                  </h3>
                  <p className="text-[#FFFFFF99] text-sm sm:text-base mt-3 leading-relaxed">
                    Auto-Generate Personalized, On-Brand Proposals With Company, Industry,
                    And Pain-Point Context—Send Thousands With One Click, Tracked To Close.
                  </p>
                </div>
              </div>

              {/* Analytics & Optimization */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(24px)",
                  transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
                }}
                className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] rounded-2xl overflow-hidden flex flex-col p-8 pb-16"
              >
                <div className="flex-1 overflow-hidden">
                  <Image
                    src="/images/agents/analytics_optimization.png"
                    alt="Analytics and Optimization"
                    width={600}
                    height={340}
                    quality={100}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-white font-bold text-2xl sm:text-4xl leading-8 sm:leading-10">
                    Analytics & <br /> Optimization
                  </h3>
                  <p className="text-[#FFFFFF99] text-sm sm:text-base mt-3 leading-relaxed">
                    See What Books Calls And Closes Revenue: Subject A/Bs, Step Performance,
                    Reply/Booking Rates, Deliverability Health, And Number Reputation.
                    Double-Down On What Works.
                  </p>
                </div>
              </div>
          </div>

          {/* Compliance and Deliverability */}
          <LongHorizontalCard
            image="/images/agents/compliance.png"
            title="Compliance & Deliverability"
            titleTextStyle="text-2xl  sm:text-[35px] leading-8 sm:leading-12 mb-4"
            description=""
            descriptionTextTyle=""
            delay="0.2s"
            className="bg-linear-to-b from-[#FFFFFF0D] from-70% to-[#6BE8FD33] border border-[#FFFFFF0D] p-6 gap-8"
            visible={visible}
            imageLeft={true}
            moreDescription={<>
                <div className="mt-2 flex flex-col gap-4 justify-between items-start w-full">
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                       <Image
                          src="/images/agents/icons/compliance_email.svg"
                          alt="Compliance Email"
                          width={45}
                          height={45}
                          className="w-8 h-8  sm:w-[45px] sm:h-[45px]"
                        />
                        <p className="text-white text-xs sm:text-lg font-light w-full"><span className="font-bold">Email:</span> domain verification, warm-up, send caps, automatic unsub.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_whatsapp.svg" 
                        width={45}
                          height={45}
                          className="w-8 h-8  sm:w-[45px] sm:h-[45px]" />
                        <p className="text-white text-xs sm:text-lg font-light w-full"><span className="font-bold">WhatsApp:</span>  template approvals + email fallback.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full bg-[#FFFFFF1C] border border-[#0AD85533] p-3 rounded-lg">
                        <Image src="/images/agents/icons/compliance_voice.svg" 
                          width={45}
                          height={45}
                          className="w-8 h-8  sm:w-[45px] sm:h-[45px]"/>
                        <p className="text-white text-xs sm:text-lg font-light w-full"><span className="font-bold">Voice:</span>  reputation monitoring, DNC honoring, polite retry policy.</p>
                    </div>
                </div>
              </>}
           
            />
        </div>
    )
}






export default function AgentDeepDive() {
  return (
    <section
      className="w-full px-6 lg:px-20 py-10 md:py-20"
      style={{
        background: "linear-gradient(to bottom, #000000, #0F2212)",
      }}
    >
      <WhatAgentDoes />
      <StartAnAgent />
      <TeachYourAgent />
      <CampaignDesigner />
      <LeadSources />
      <UnifiedInbox />
    </section>
  );
}







