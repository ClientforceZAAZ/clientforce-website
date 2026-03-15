import AgenciesHero from "@/components/sections/agencies/AgenciesHero";
import Outcomes from "@/components/sections/agencies/Outcomes";
import WhyChooseClientForce from "@/components/sections/agencies/WhyChooseClientForce";
import HowItWorksAndDeploy from "@/components/sections/agencies/HowItWorksAndDeploy";

export default function Agencies() {
  return (
    <main>
        <AgenciesHero />
        <Outcomes />
        <WhyChooseClientForce />
        <HowItWorksAndDeploy />
    </main>
  )
}
