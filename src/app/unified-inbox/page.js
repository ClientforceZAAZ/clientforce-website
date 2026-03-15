import UnifiedInboxHero from "@/components/sections/unified-inbox/UnifiedInboxHero";
import WhatYouSee from "@/components/sections/unified-inbox/WhatYouSee";
import WhyItMatters from "@/components/sections/unified-inbox/WhyItMatters";
import KeyCapabilities from "@/components/sections/unified-inbox/KeyCapabilities";
import StreamLineCommunication from "@/components/sections/unified-inbox/StreamLineCommunication";


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
