import LocalBusinessesHero from "@/components/sections/local-businesses/LocalBusinessesHero";
import RevenueOutcomes from "@/components/sections/local-businesses/RevenueOutcomes";
import BuiltForLocalWins from "@/components/sections/local-businesses/BuiltForLocalWins";
import HowItWorks from "@/components/sections/local-businesses/HowItWorks";


export default function LocalBusinesses() {
  return (
    <main>
        <LocalBusinessesHero />
        <RevenueOutcomes />
        <BuiltForLocalWins />
        <HowItWorks />
    </main>
  )
}
