"use client";

import { FeatureSection } from "@/components/sections/products/components/FeautureSectionCard";
import Image from "next/image";





// Icons 
const AgentBuilderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const BusinessKnowledgeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const SequenceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const GuardrailsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const FinderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const ChromeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" />
  </svg>
);

const WidgetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const CsvIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const VoiceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PdfIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const BookingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A541" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Section Data 
// Pattern: odd sections (0, 2) → text on left with white bg, image on right with colored bg
//          even sections (1, 3) → text on right with colored bg, image on left with white bg
const SECTIONS = [
  {
    title: "AI Agent Engine",
    subtitle: "Build Agents That Sell Like Your Best Rep, Without The Rep.",
    textBg: "bg-white",
    imageBg: "bg-[#EEF9F3]",
    image: "/images/products/Ai_agent_rightBg.png",
    FeatureSectionBg: "url('/images/products/Ai_agentBg.png')",
    reverse: false,
    features: [
      { icon: <Image src="/images/products/icons/agentBuilder_icon1.svg" width={18} height={18} />, title: "Agent Builder:", description: "Start With AI, Playbooks, Or From Scratch." },
      { icon: <Image src="/images/products/icons/businessKnowledge.svg" width={18} height={18} />, title: "Business Knowledge:", description: "Upload PDFs/URLs. Agents Learn Your Offer And Talk Like You." },
      { icon: <Image src="/images/products/icons/sequenceIcon.svg" width={18} height={18} />, title: "Sequence Orchestrator:", description: "Email, WhatsApp, LinkedIn, AI Voice—Timed, Branched, Goal-Driven." },
      { icon: <Image src="/images/products/icons/guardRails.svg" width={18} height={18} />, title: "Guardrails & Schedules:", description: "Daily Caps, Time Windows, Compliance Baked In." },
    ],
  },
  {
    title: "Lead Acquisition Suite",
    subtitle: "Never Run Out Of Leads Again, Your Pipeline Refills Itself.",
    textBg: "bg-[#EEF9F3]",
    imageBg: "bg-white",
    image: "/images/products/lead_acquisition_dashboard.png",
    FeatureSectionBg: "bg-white",
    borderSetting: " border border-[#00000033]",
    reverse: true,
    features: [
      { icon: <Image src="/images/products/icons/Find User Male.svg" width={25} height={25} />, title: "Finder V2 (Auto-Prospecting):", description: "Define Keywords, Geo, Industry, Frequency; Fresh Leads Flow In On Schedule." },
      { icon: <Image src="/images/products/icons/Chrome.svg" width={25} height={25} />, title: "Chrome Capture (1-Click):", description: "Grab Leads From LinkedIn, Google Business, Any Site—Instantly Routed To The Right Agent." },
      { icon: <Image src="/images/products/icons/Popup.svg" width={25} height={25} />, title: "Embeddable Widgets:", description: "Chat + Callback + Forms That Convert Visitors And Send Them Straight Into Campaigns." },
      { icon: <Image src="/images/products/icons/CSV.svg" width={25} height={25} />, title: "Smart CSV Import:", description: "Map Fields, De-Dupe, And Verify Emails Automatically." },
    ],
  },
  {
    title: "Multichannel Outreach",
    subtitle: "Reach Every Prospect On The Channel They'll Answer.",
    textBg: "bg-white",
    imageBg: "bg-[#FDF0F5]",
    image: "/images/products/multi_channel_bgRight.png",
    FeatureSectionBg: "url('/images/products/multi_channel_bg.png')",
    reverse: false,
    features: [
      { icon: <Image src="/images/products/icons/Email.svg" width={25} height={25} />, title: "Email Personalization:", description: "Dynamic Fields + Variable Angles That Feel Handcrafted At Scale." },
      { icon: <Image src="/images/products/icons/Whatsapp.svg" width={25} height={25} />, title: "WhatsApp / SMS:", description: "Approved Templates With Email Fallbacks If Needed." },
      { icon: <Image src="/images/products/icons/LinkedIn.svg" width={25} height={25} />, title: "LinkedIn Touches:", description: "Light, Context-Aware Nudges That Warm Conversations." },
      { icon: <Image src="/images/products/icons/Ai_voice.svg" width={25} height={25} />, title: "AI Voice Calls:", description: "Natural Discovery + Objection Handling + Booking Links—Used Sparingly To Close." },
    ],
  },
  {
    title: "Dynamic Proposals (At Scale)",
    subtitle: "Send Customized Proposals To Thousands—Each On-Brand And Tailored.",
    textBg: "bg-[#F5F5F5]",
    imageBg: "bg-white",
    image: "/images/products/dynamic_proposal_rightBg.png",
    FeatureSectionBg: "bg-white",
    borderSetting: " border border-[#00000033]",
    reverse: true,
    features: [
      { icon: <Image src="/images/products/icons/PDF.svg" width={23} height={23} />, title: "Pulls From Your PDFs:", description: "Offer Data To Populate Pricing, Benefits, And Proof." },
      { icon: <Image src="/images/products/icons/Message Link.svg" width={23} height={23} />, title: "Insert Booking/Payment Links:", description: "Track Opens, Time-On-Page, And Next Actions." },
    ],
  },
  {
    title: "Unified Inbox & Lead Timeline",
    subtitle: "Every Conversation, One Place—Total Clarity.",
    image: "/images/products/unified_inbox_rightBg.png",
    FeatureSectionBg: "url('/images/products/unified_inbox_bg.png')",
    borderSetting: "",
    reverse: false,
    features: [
      { icon: <Image src="/images/products/icons/Email Open.svg" width={23} height={23} />, title: "Email, WhatsApp, Call Notes, And Proposal", description: "Views In A Single Thread." },
      { icon: <Image src="/images/products/icons/Search Account.svg" width={23} height={23} />, title: "Activity Timeline:", description: "Opens, Clicks, Replies, Calls, Bookings—See The Journey At A Glance." },
      { icon: <Image src="/images/products/icons/Project Management.svg" width={23} height={23} />, title: "Next Best Action:", description: "Agents Suggest (Or Auto-Take) The Smartest Follow-Up.", fullWidth: true },
    ],
  },
  {
    title: "Analytics & Optimization",
    subtitle: "Know What Books Calls And What Closes Revenue.",
    FeatureSectionBg: "bg-white",
    borderSetting: "border border-[#00000033]",
    image: "/images/products/analytics_rightBg.png",
    reverse: true,
    features: [
      { icon: <Image src="/images/products/icons/Personal Growth.svg" width={25} height={25} />, title: "Step-Level Performance,", description: "Reply Types, Meeting Rates, Revenue Influence." },
      { icon: <Image src="/images/products/icons/A_B.svg" width={25} height={25} />, title: "A/B Subjects", description: "And Message Variants." },
      { icon: <Image src="/images/products/icons/Financial Growth Analysis.svg" width={25} height={25} />, title: "Deliverability", description: "& Number Reputation Monitoring.", fullWidth: true },
    ],
  },
  {
    title: "DFY Playbooks + Compliance Guardrails",
    subtitle: "Launch Fast—And Stay Safe.",
    FeatureSectionBg: "url('/images/products/DFY_bg.png')",
    image: "/images/products/DFY_rightBg.png",
    borderSetting: "",
    reverse: false,
    features: [
      { icon: <Image src="/images/products/icons/Goal.svg" width={25} height={25} />, title: "Proven Sequences", description: "By Industry And Goal." },
      { icon: <Image src="/images/products/icons/email_verification.svg" width={25} height={25} />, title: "Email Verification, Warm-Up Status,", description: "Consent Handling (GDPR/TCPA), DNC Lists, WhatsApp Approvals." },
    ],
  },
];



export default function WhatsInside() {
  return (
    <section className="pt-10 sm:pt-20 px-8 md:px-16 pb-6 md:pb-16">
        <div className="flex items-center justify-center px-4">
  <h1 className="font-bold font-degular text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[640px] text-center leading-tight">
    
    <span className="bg-[#D0F56B] rounded-lg px-2 py-1 inline-block">
      What’s Inside
    </span>{" "}
    
    <span className="block sm:inline">
      (Everything You Need To Sell On Autopilot)
    </span>

  </h1>
</div>
        <div className="space-y-4 py-5 md:py-8">
            {SECTIONS.map((section) => (
                <FeatureSection key={section.title} {...section} />
            ))}
        </div>  
    </section>
  );
}
