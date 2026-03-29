import B2BHero from "@/components/sections/B2B/B2BHero";
import WhatChanges from "@/components/sections/B2B/WhatChanges";
import BuiltForLocalWins from "@/components/sections/B2B/BuiltForLocalWins";
import HowItWorks from "@/components/sections/B2B/HowItWorks";

export const metadata = {
  title: "For B2B | Clientforce AI",
  description: "Streamlined B2B solutions for outreach, qualification, and proposal management. Close more enterprise deals on autopilot.",
  openGraph: {
    title: "For B2B | Clientforce AI",
    description: "Streamlined B2B solutions for outreach, qualification, and proposal management.",
    url: "https://clientforceai.com/B2B",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For B2B | Clientforce AI",
    description: "Streamlined B2B solutions for outreach, qualification, and proposal management.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function B2B() {
  return (
    <main>
        <B2BHero />
        <WhatChanges />
        <BuiltForLocalWins />
        <HowItWorks />
    </main>
  )
}
