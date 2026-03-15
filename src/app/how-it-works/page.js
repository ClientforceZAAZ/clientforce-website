import AlwaysOnSalesLoop from "@/components/sections/how-it-works/AlwaysOnSale";
import HowItWorksHero from "@/components/sections/how-it-works/HowItWorksHero";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import ScaleManageOptimize from "@/components/sections/how-it-works/ScaleManageOptimize";
import AutomatedVsControl from "@/components/sections/how-it-works/AutomatedVsControl";
import WhyItWins from "@/components/sections/how-it-works/WhyItWins";
import LaunchDemo from "@/components/sections/how-it-works/LaunchDemo";

export default function HowItWorksSection() {
  return (
    <main>
        <HowItWorksHero />
        <AlwaysOnSalesLoop />
        <HowItWorks />
        <ScaleManageOptimize />
        <AutomatedVsControl />
        <WhyItWins />
        <LaunchDemo />
    </main>
  )
}
