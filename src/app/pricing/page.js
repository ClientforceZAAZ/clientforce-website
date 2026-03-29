import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingExtras from "@/components/sections/pricing/PricingExtras";
import PricingComparison from "@/components/sections/pricing/PricingComparison";
import Trust from "@/components/sections/pricing/Trust";
import ROICalculator from "@/components/sections/pricing/RoiCalculator";
import Launch from "@/components/sections/pricing/Launch";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";


export const metadata = {
  title: "Pricing | Clientforce AI",
  description: "Simple, honest plans for teams that want momentum. Start with the plan that fits today and upgrade as you scale.",
  openGraph: {
    title: "Pricing | Clientforce AI",
    description: "Simple, honest plans for teams that want momentum.",
    url: "https://clientforceai.com/pricing",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Clientforce AI",
    description: "Simple, honest plans for teams that want momentum.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function page() {
  return (
    <main>
        <PricingHero />
        <PricingExtras />
        <PricingComparison />
        <ROICalculator />
        <Trust />
        <Launch />
         <FAQ faqs={[
            { id: 1, question: "What counts as an “AI Sales Agent”?", answer: "A goal-based campaign entity (prospecting → outreach → voice close) with its own settings, playbook, and inbox." },
            { id: 2, question: "Do I need WhatsApp or voice to start?", answer: "..." },
            { id: 3, question: "How do credits work?", answer: "..." },
            { id: 4, question: "Can I manage multiple brands or clients?", answer: "..." },
            { id: 5, question: "Do you handle compliance?", answer: "..." },
            ]} 
        />
    </main>
  )
}
