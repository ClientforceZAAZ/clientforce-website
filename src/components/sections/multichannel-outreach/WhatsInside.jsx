

import FeatureTabs from "../shared/FeauturesTab";
import Image from "next/image";




const LEAD_TABS = [
  {
    id: "email",
    label: "Email",
    heading: "Email Personalization Engine",
    headingMuted: "",
    headingStyle: "max-w-[420px] font-extrabold mb-10",
    bullets: [
      { bold: "Dynamic fields", text: " ({{first_name}}, {{company}}, {{industry}}, {{pain_point}}, {{proof_snippet}})" },
      { bold: "Multiple angles", text: " (value/objection/case proof) + A/B subject variants" },
      { bold: "", text: "Time-window sending, sender rotation, and light jitter for human-like delivery" },
    ],
    tags: [],
    image: "/images/multichannel-outreach/email_personalization.png",
  },


  {
    id: "whatsapp/sms",
    label: "Whatsapp/SMS",
    heading: "WhatsApp / SMS Templates + Smart Fallbacks",
    headingMuted: "",
    headingStyle: "max-w-[420px] font-extrabold mb-10",
    description: "",
    bullets: [
      { bold: "Pre-approved, compliant templates for fast nudges", text: "" },
      { bold: "If unapproved or no phone → auto-fallback to email (no broken steps) ", text: "" },
      { bold: "Short, CTA-first messages that lift reply rates", text: "" },
    ],
    tags: [],
    image: "/images/multichannel-outreach/whatsapp_sms.png",
  },

  

  {
    id: "linkedin",
    label: "LinkedIn",
    heading: "LinkedIn Touches (Context-Aware)",
    headingStyle: "max-w-[420px] font-extrabold mb-10",
    headingMuted: "",
    description: "",
    bullets: [
      { bold: "Light connection notes and follow-ups mapped to your playbook", text: "" },
      { bold: "Throttled actions and daily caps to keep accounts healthy ", text: "" },
      
    ],
    tags: [],
    image: "/images/multichannel-outreach/linkedinn.png",
  },

  {
    id: "ai voice calls",
    label: "AI Voice Calls",
    heading: "AI Voice Calls (The Closer—Used Sparingly)",
    headingStyle: "max-w-[460px] font-extrabold mb-10",
    headingMuted: "",
    description: "",
    bullets: [
      { bold: "Natural opener, 3 discovery questions, objection handling, and a clear close", text: "" },
      { bold: "Never step 1; scheduled after warm-up email(s) for best conversion ", text: "" },
      { bold: "Respects DNC, reputation checks, and retry limits", text: "" }, 
    ],
    tags: [],
    image: "/images/multichannel-outreach/ai_voice_calls.png",
  },


  {
    id: "proposal",
    label: "Proposal",
    heading: "Proposal Handoffs (When It’s Time to Wow)",
    headingStyle: "max-w-[430px] font-extrabold mb-10",
    headingMuted: "",
    description: "",
   bullets: [
      { bold: "Drop a Dynamic Proposal link at the right step—on brand, pre-filled from your PDFs", text: "" },
      { bold: "Track opens, time-on-page, and next actions in your timeline", text: "" },
    ],
    tags: [],
    image: "/images/multichannel-outreach/proposal_handoffs.png",
  },

   {
    id: "orchestration",
    label: "Orchestration & Guardrails",
    heading: "Orchestration & Guardrails",
    headingMuted: "",
    description: "",
   bullets: [
      { bold: "Per-goal sequences (Book Demo, Convert Trial, Reactivate, High-Ticket Close)", text: "" },
      { bold: "Daily caps, business-hours windows, timezone awareness", text: "" },
       { bold: "Auto-skip invalid steps and keep the campaign moving", text: "" },
    ],
    tags: [],
    image: "/images/multichannel-outreach/orchestration_guardrails.png",
  },
  {
    id: "diliverability",
    label: "Deliverability",
    heading: "Deliverability & Reputation",
    headingMuted: "",
    description: "",
    bullets: [
      { bold: "Domain verification, warm-up status, and inbox health signals", text: "" },
      { bold: "Daily caps, business-hours windows, timezone awarenessPhone number reputation monitoring + safe retry policies", text: "" },
       { bold: "Auto-skip invalid steps and keep the campaign moving", text: "" },
    ],
    tags: [],
    image: "/images/multichannel-outreach/deliverability_reputation.png",
  },
  
];


export default function WhatsInside() {
  return (
    <section className="pt-20 relative">
        <div className=" flex flex-col items-center">
            <h1 className=" font-bold text-[41px] bg-[#D0F56B] px-5 rounded-lg font-degular">What's Inside</h1>
            <FeatureTabs TABS={LEAD_TABS} />
        </div>
    </section>
  )
}