

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
    more_description: (<>Finder v2 surfaces net-new prospects on schedule, enriches with contact data, and either queues them for review or <span className="font-bold">auto-ingests</span> them directly into the mapped Agent/playbook.</>),
    bullets: [],
    tags: [],
    image: "/images/lead-acquisition-suite/finder_lead.png",
  },
  {
    id: "chrome_capture",
    label: "Chrome Capture",
    heading: "Chrome Capture—",
    headingMuted: (<><br /> 1-Click Prospecting</>),
    description: (<>Grab leads from LinkedIn, Google Business, or  almost any site in a click. <br className="hidden lg:block" /> We capture name, role, company, email, phone (when available),  <br className="hidden lg:block" /> and  source URL—then <span className="font-bold">route to the correct Agent</span> automatically.</>),
    bullets: [],
    tags: [],
    image: "/images/lead-acquisition-suite/chrome_capture.png",
  },
  {
    id: "embedded_widget",
    label: "Embedded Widget",
    heading: "Embeddable Widgets — ",
    headingMuted: (<><br /> Chat, Callback & Forms</>),
    description: "Deploy branded widgets on your site/landing pages to convert visitors in the moment. Collect email/phone, trigger AI callback requests, and stream submissions to the right campaign with tags and consent logs (GDPR/TCPA).",
    bullets: [],
    tags: [],
    image: "/images/lead-acquisition-suite/embedded_widget.png",
  },
  {
    id: "smart_csv",
    label: "Smart CSV Imports",
    heading: "Smart CSV Imports",
    headingMuted: "",
    description: (<>Upload lists in seconds. Auto-map fields, <span className="font-bold">de-dupe, and verify emails</span> <br className="hidden lg:block" /> in real time. Risky or invalid addresses are suppressed to protect deliverability and number reputation.</>),
    bullets: [],
    tags: [],
    image: "/images/lead-acquisition-suite/smart_csv.png",

  },
  
];


export default function FeauturesBenefits() {
  return (
    <section className=" pt-10 lg:pt-16 relative">
        <div className=" flex flex-col items-center">
            <h1 className=" font-bold text-4xl md:text-5xl font-degular">What's Inside</h1>
            <FeatureTabs TABS={LEAD_TABS} />
        </div>
        <div className="">
          <Image src="/images/lead-acquisition-suite/whats-inside-blur1.png" width={1280} height={160} className="absolute top-[-450px] z-[-50]" />
          <Image src="/images/lead-acquisition-suite/Ellipse whats-inside-blur.png" width={640} height={160} className="absolute top-100 left-80 z-[-50]" />
        </div>
    </section>
  )
}