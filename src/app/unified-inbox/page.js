import UnifiedInboxHero from "@/components/sections/unified-inbox/UnifiedInboxHero";
import WhatYouSee from "@/components/sections/unified-inbox/WhatYouSee";
import WhyItMatters from "@/components/sections/unified-inbox/WhyItMatters";
import KeyCapabilities from "@/components/sections/unified-inbox/KeyCapabilities";
import StreamLineCommunication from "@/components/sections/unified-inbox/StreamLineCommunication";

export const metadata = {
  title: "Unified Inbox | Clientforce AI",
  description: "Unified communication view with AI for managing leads and actions. Every email, call and chat in one thread.",
  openGraph: {
    title: "Unified Inbox | Clientforce AI",
    description: "Every email, call and chat in one thread.",
    url: "https://clientforceai.com/unified-inbox",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified Inbox | Clientforce AI",
    description: "Every email, call and chat in one thread.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function UnifiedInbox() {
  return (
    <main>
        <UnifiedInboxHero />
        <WhatYouSee />
        <WhyItMatters />
        <KeyCapabilities />
        <StreamLineCommunication />
    </main>
  )
}
