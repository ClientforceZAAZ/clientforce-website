import SaasCompaniesHero from "@/components/sections/saas-companies/SaasCompaniesHero";
import Outcomes from "@/components/sections/saas-companies/Outcomes";
import WhyClientForceAi from "@/components/sections/saas-companies/WhyClientForceAi";
import HowItWorks from "@/components/sections/saas-companies/HowItWorks";

export const metadata = {
  title: "For SaaS | Clientforce AI",
  description: "Convert trials and book product demos automatically. Streamlined SaaS solutions for prospecting, demos, trials and retention.",
  openGraph: {
    title: "For SaaS | Clientforce AI",
    description: "Convert trials and book product demos automatically.",
    url: "https://clientforceai.com/saas-companies",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For SaaS | Clientforce AI",
    description: "Convert trials and book product demos automatically.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function SaasCompanies() {
  return (
    <main>
        <SaasCompaniesHero />
        <Outcomes />
        <WhyClientForceAi />
        <HowItWorks />
    </main>
  )
}
