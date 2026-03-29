import ControlSafeguard from "@/components/sections/lead-acquisition-suite/ControlSafeguard";
import GetStarted from "@/components/sections/lead-acquisition-suite/GetStarted";
import HowItWorks from "@/components/sections/lead-acquisition-suite/HowItWorks";
import LeadAcquisitionHero from "@/components/sections/lead-acquisition-suite/LeadAcquisitionHero";
import WhatsInside from "@/components/sections/lead-acquisition-suite/WhatsInside";
import WhyItWins from "@/components/sections/lead-acquisition-suite/WhyItWins";


export const metadata = {
  title: "Lead Finder & Capture | Clientforce AI",
  description: "Automate prospecting with ClientForce's Lead Acquisition Suite. Find, capture and engage leads across every channel automatically.",
  openGraph: {
    title: "Lead Finder & Capture | Clientforce AI",
    description: "Automate prospecting with ClientForce's Lead Acquisition Suite.",
    url: "https://clientforceai.com/lead-acquisition-suite",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Finder & Capture | Clientforce AI",
    description: "Automate prospecting with ClientForce's Lead Acquisition Suite.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function LeadAcquisitionSuite() {
  return (
    <main>
        <LeadAcquisitionHero />
        <WhatsInside />
        <HowItWorks />
        <WhyItWins />
        <ControlSafeguard />
        <GetStarted />
    </main>
  )
}
