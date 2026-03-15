
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
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "outreach",
    label: "Multichannel Outreach",
    heading: "Multichannel Outreach",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "proposals",
    label: "Dynamic Proposals",
    heading: "Dynamic Proposals",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "inbox",
    label: "Unified Inbox",
    heading: "Unified Inbox",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "analytics",
    label: "Analytics",
    heading: "Analytics",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
];


export default function FeauturesBenefits() {
  return (
    <section className="pt-50 relative">
        <div className=" flex flex-col items-center">
            <p className=" text-[28px] font-degular">The Value</p>
            <h1 className=" font-bold text-6xl font-degular">Feature → Benefit</h1>
            <FeatureTabs TABS={HOME_TABS} />
        </div>
        <div className="">
          <Image src="/icons/feauturesBenefit.svg" width={1280} height={160} className="absolute top-20" />

          <Image src="/icons/feauturesBenefit_rect.svg" width={51} height={51} className="absolute top-48 right-18" />
          <Image src="/icons/feauturesBenefit_rect1.svg" width={51} height={51} className="absolute top-20 right-100" />
          <Image src="/icons/feauturesBenefit_rect2.svg" width={51} height={51} className="absolute top-16 left-100" />
          <Image src="/icons/feauturesBenefit_rect3.svg" width={51} height={51} className="" style={{
              position: "absolute",
              top: "12rem",
              left: "1rem",
            }} />
        </div>
    </section>
  )
}
