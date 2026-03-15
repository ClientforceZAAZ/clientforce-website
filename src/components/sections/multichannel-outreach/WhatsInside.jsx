

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
    heading: "Whatsapp/SMS",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    heading: "LinkedIn",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "ai voice calls",
    label: "AI Voice Calls",
    heading: "AI Voice Calls",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "proposal",
    label: "Proposal",
    heading: "Proposal",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
   {
    id: "orchestration",
    label: "Orchestration & Guardrails",
    heading: "Orchestration & Guardrails",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "diliverability",
    label: "Deliverability",
    heading: "Deliverability",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
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