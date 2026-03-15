

import FeatureTabs from "../shared/FeauturesTab";
import Image from "next/image";




const LEAD_TABS = [
  {
    id: "finder",
    label: "Finder V2",
    heading: "Finder v2 — Automated Lead Discovery",
    headingMuted: "",
    headingStyle: "max-w-[420px]",
    description: "Define keywords, industry, geography, radius, and frequency.",
    more_description: "Finder v2 surfaces net-new prospects on schedule, enriches with contact data, and either queues them for review or auto-ingests them directly into the mapped Agent/playbook.",
    bullets: [],
    tags: [],
    image: "/images/lead-acquisition-suite/finder_lead.png",
  },
  {
    id: "chrome_capture",
    label: "Chrome Capture",
    heading: "Chrome Capture",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "embedded_widget",
    label: "Embedded Widget",
    heading: "Embedded Widget",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  {
    id: "smart_csv",
    label: "Smart CSV Imports",
    heading: "Smart CSV Imports",
    headingMuted: "",
    description: "",
    bullets: [],
    tags: [],
  },
  
];


export default function FeauturesBenefits() {
  return (
    <section className="pt-20 relative">
        <div className=" flex flex-col items-center">
            <h1 className=" font-bold text-5xl font-degular">What's Inside</h1>
            <FeatureTabs TABS={LEAD_TABS} />
        </div>
        <div className="">
          <Image src="/images/lead-acquisition-suite/whats-inside-blur1.png" width={1280} height={160} className="absolute top-[-450px] z-[-50]" />
          <Image src="/images/lead-acquisition-suite/Ellipse whats-inside-blur.png" width={640} height={160} className="absolute top-100 left-80 z-[-50]" />
        </div>
    </section>
  )
}