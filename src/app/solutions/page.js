import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import BookMoreDemos from "@/components/sections/solutions/BookMoreDemos";
import WhyItWins from "@/components/sections/solutions/WhyItWins";
import PlaybookIncluded from "@/components/sections/solutions/PlaybookIncluded";
import BrowseTheLibrary from "@/components/sections/solutions/BrowseTheLibrary";
import ClientForceDifferent from "@/components/sections/solutions/ClientForceDifferent";
import Proofs from "@/components/sections/solutions/Proofs";
import HowToGetStarted from "@/components/sections/solutions/HowToGetStarted";
import DeployInMinutes from "@/components/sections/solutions/DeployInMinutes";


export const metadata = {
  title: "Solutions | Clientforce AI",
  description: "AI sales solutions for Agencies, SaaS companies, Local Businesses and B2B teams. One platform, every use case.",
  openGraph: {
    title: "Solutions | Clientforce AI",
    description: "AI sales solutions built for every industry and team size.",
    url: "https://clientforceai.com/solutions",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Clientforce AI",
    description: "AI sales solutions built for every industry and team size.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


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
