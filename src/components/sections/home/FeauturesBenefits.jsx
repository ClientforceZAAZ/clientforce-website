
import FeatureTabs from "../shared/FeauturesTab";
import Image from "next/image";




const HOME_TABS = [
  {
    id: "ai-agents",
    label: "AI Sales Agents",
    heading: "Build AI Sales Agents",
    headingMuted: "(End To End)",
    headingStyle: "max-w-[380px]",
    description: "Agents That Prospect, Engage, Call, And Close—Not Just Automate Tasks. One Setup → A Self‑Running Sales Machine.",
    bullets: [
      { bold: "Launch Once;", text: "The Agent Keeps Campaigns Moving Without Daily Babysitting." },
      { bold: "Messaging, Calls, Proposals, And Bookings", text: "All Work In Sync Toward Your Goal." },
      { bold: "Spin Up Multiple Agents", text: "For Different Markets Without Extra Headcount." },
    ],
    more_description: "",
    tags: [
      { label: "Time-to-first-booking", color: "green"  },
      { label: "Meetings/week ",    color: "blue"   },
      { label: "Operator time saved",  color: "yellow" },
    ],
    image: "/images/agentMockUp.png",
    btn: true,
  },
  
  {
    id: "prospecting",
    label: "Auto-Prospecting",
    heading: "Auto-Prospecting",
    headingMuted: "(Finder v2)",
    headingStyle: "max-w-[380px]",
    description: "Define keywords, industry, geo, and frequency; ClientForce surfaces net-new leads and auto-ingests them into the right campaign.",
    bullets:  [
      { bold: "Pipeline Refills Itself", text: "—No More Idle Weeks Or List Droughts." },
      { bold: "Cleaner Leads In;", text: " Fewer Bounces And Dead Ends." },
      { bold: "You Choose:", text: " Review First Or Let It Flow Hands-Free." },
    ],
     tags: [
      { label: "5–25 leads/run", color: "green"  },
      { label: "Verified emails 90% ",    color: "blue"   },
      { label: "New leads/day 180↑",  color: "yellow" },
    ],
    image: "/images/prospectingMockUp.png",
    btn: true,
  },


  {
    id: "outreach",
    label: "Multichannel Outreach",
    heading: "Multichannel Outreach",
    headingMuted: "",
    description: "Email, WhatsApp, LinkedIn, AI voice calls, SMS—orchestrated from one flow so every contact gets the right touch at the right time",
     bullets:  [
      { bold: " Meet Prospects Where They Answer, Not Where It’s Convenient.", text: "" },
      { bold: " Smart Pacing + Branching Turns Interest Into Conversations.", text: "" },
      { bold: "Voice Steps Appear Only When It Helps Qualify Or Close", text: "" },
    ],
    tags: [
      { label: "Reply rate ↑", color: "green"  },
      { label: "Positive replies % ",    color: "blue"   },
      { label: "No-show rate ↓",  color: "yellow" },
    ],
    image: "/images/outreachMockUp.png",
    btn: true,
  },




  {
    id: "proposals",
    label: "Dynamic Proposals",
    heading: "Dynamic Proposals at Scale",
    headingMuted: "",
    description: "Send personalized, on-brand proposals to thousands—each tailored to the lead’s company, industry, and pain points.",
    bullets:  [
      { bold: " Proposals Feel 1:1 Without Burning Your Team’s Time. ", text: "" },
      { bold: " Decision Friction Drops With Embedded Book/Pay Links.", text: "" },
      { bold: "Instant Follow-ups Based On How The Proposal Is Viewed.", text: "" },
    ],

    tags: [
      { label: "Opens/lead ↑", color: "green"  },
      { label: "Time on Pricing",    color: "blue"   },
      { label: "Accept rate ↑",  color: "yellow" },
    ],
    image: "/images/proposalsMockUp.png",
    btn: true,
  },




  {
    id: "inbox",
    label: "Unified Inbox",
    heading: "Unified Inbox (Every Conversation, One Place)",
    headingStyle: "max-w-[380px]",
    headingMuted: "",
    description: "Emails, WhatsApp replies, call notes, and bookings appear in a single thread with suggested next actions.",

   bullets:  [
      { bold: " Zero tab-hopping;", text: "full context in one view." },
      { bold: " Faster replies with AI “next best action” prompts.", text: "" },
      { bold: "Hand-offs become seamless across team members.", text: "" },
    ],

    tags: [
      { label: "Response time", color: "green"  },
      { label: "Follow-up completion ↑",    color: "blue"   },
      { label: "Win rate ↑",  color: "yellow" },
    ],
    image: "/images/inboxMockUp.png",
    btn: true,
  },


  {
    id: "analytics",
    label: "Analytics",
    heading: "Analytics & Optimization",
    headingMuted: "",
    description: "See what books calls and closes revenue. A/B subjects, step performance, deliverability health, number reputation.",
   bullets:  [
      { bold: " Double Down On Steps That Produce Bookings.", text: "" },
      { bold: " Spot Deliverability Or Number Issues Before They Cost Revenue.", text: "" },
      { bold: "Iterate Fast With Evidence, Not Guesses.", text: "" },
    ],

    tags: [
      { label: "Response time", color: "green"  },
      { label: "Follow-up completion ↑",    color: "blue"   },
      { label: "Win rate ↑",  color: "yellow" },
    ],
    image: "/images/analyticsMockUp.png",
    btn: true,
  },
];



export default function FeauturesBenefits() {
  return (
    <section className=" pt-10 xl:pt-40 relative">
        <div className=" flex flex-col items-center">
            <p className=" text-xl sm:text-[28px] font-degular">The Value</p>
            <h1 className=" font-bold text-4xl sm:text-6xl font-degular">Feature → Benefit</h1>
            <FeatureTabs TABS={HOME_TABS} />
        </div>

        <div className="hidden xl:block">
          <Image src="/icons/feauturesBenefit.svg" width={1280} height={160} className="absolute top-20" />

          <Image src="/icons/feauturesBenefit_rect.svg" width={51} height={51} className="absolute top-54 right-10" />
          <Image src="/icons/feauturesBenefit_rect1.svg" width={51} height={51} className="absolute top-20 right-100" />
          <Image src="/icons/feauturesBenefit_rect2.svg" width={51} height={51} className="absolute top-18 left-100" />
          <Image src="/icons/feauturesBenefit_rect3.svg" width={51} height={51} className="" style={{
              position: "absolute",
              top: "12rem",
              left: "1rem",
            }} />
        </div>
    </section>
  )
}
