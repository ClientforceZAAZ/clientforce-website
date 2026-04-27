import CompanyGoals from "@/components/sections/company/CompanyGoals";
import CompanyHero from "@/components/sections/company/CompanyHero";
import CompanyStats from "@/components/sections/company/CompanyStats";
import CompanyValues from "@/components/sections/company/CompanyValues";
import Leadership from "@/components/sections/company/Leadership";
import OurJourney from "@/components/sections/company/OurJourney";
import TrustAndImpact from "@/components/sections/company/TrustAndImpact";



export const metadata = {
  title: "Company | Clientforce AI",
  description: "",
  openGraph: {
    title: "Company | Clientforce AI",
    description: "",
    url: "https://clientforceai.com/company",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | Clientforce AI",
    description: "",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function Resources() {
  return (
    <main>
       <CompanyHero />
       <CompanyStats />
       <CompanyGoals />
       <CompanyValues />
       <Leadership />
       <OurJourney />
       <TrustAndImpact />
    </main>
  )
}
