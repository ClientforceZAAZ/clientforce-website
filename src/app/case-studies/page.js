import CaseStudyHero from "@/components/sections/case-studies/CaseStudyHero";
import FeaturedCaseStudies from "@/components/sections/case-studies/FeaturedCaseStudies";


export const metadata = {
  title: "Case Studies | Clientforce AI",
  description: "Real results from real Clientforce customers. See how agencies, SaaS companies and B2B teams are closing more deals with AI.",
  openGraph: {
    title: "Case Studies | Clientforce AI",
    description: "Real results from real Clientforce customers.",
    url: "https://clientforceai.com/case-studies",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Clientforce AI",
    description: "Real results from real Clientforce customers.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function CaseStudy() {
  return (
    <main>
        <CaseStudyHero />
        <FeaturedCaseStudies />
    </main>
  )
}
