import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import BookMoreDemos from "@/components/sections/solutions/BookMoreDemos";
import WhyItWins from "@/components/sections/solutions/WhyItWins";
import PlaybookIncluded from "@/components/sections/solutions/PlaybookIncluded";
import BrowseTheLibrary from "@/components/sections/solutions/BrowseTheLibrary";
import ClientForceDifferent from "@/components/sections/solutions/ClientForceDifferent";
import Proofs from "@/components/sections/solutions/Proofs";
import HowToGetStarted from "@/components/sections/solutions/HowToGetStarted";
import DeployInMinutes from "@/components/sections/solutions/DeployInMinutes";

export default function Solutions() {
  return (
    <main>
        <SolutionsHero />
        <BookMoreDemos />
        <WhyItWins />
        <PlaybookIncluded />
        <BrowseTheLibrary />
        <ClientForceDifferent />
        <Proofs />
        <HowToGetStarted />
        <DeployInMinutes />
    </main>
  )
}
