import ControlSafeguard from "@/components/sections/lead-acquisition-suite/ControlSafeguard";
import GetStarted from "@/components/sections/lead-acquisition-suite/GetStarted";
import HowItWorks from "@/components/sections/lead-acquisition-suite/HowItWorks";
import LeadAcquisitionHero from "@/components/sections/lead-acquisition-suite/LeadAcquisitionHero";
import WhatsInside from "@/components/sections/lead-acquisition-suite/WhatsInside";
import WhyItWins from "@/components/sections/lead-acquisition-suite/WhyItWins";


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
