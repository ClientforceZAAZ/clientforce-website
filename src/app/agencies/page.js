import AgenciesHero from "@/components/sections/agencies/AgenciesHero";
import Outcomes from "@/components/sections/agencies/Outcomes";
import WhyChooseClientForce from "@/components/sections/agencies/WhyChooseClientForce";
import HowItWorksAndDeploy from "@/components/sections/agencies/HowItWorksAndDeploy";


export const metadata = {
  title: "For Agencies | Clientforce AI",
  description: "Offer Done-For-You AI Prospecting and Booking. Run self-operating sales agents for every client without extra headcount.",
  openGraph: {
    title: "For Agencies | Clientforce AI",
    description: "Offer Done-For-You AI Prospecting and Booking.",
    url: "https://clientforceai.com/agencies",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Agencies | Clientforce AI",
    description: "Offer Done-For-You AI Prospecting and Booking.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

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
