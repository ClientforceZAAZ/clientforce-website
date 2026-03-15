import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingExtras from "@/components/sections/pricing/PricingExtras";
import PricingComparison from "@/components/sections/pricing/PricingComparison";
import Trust from "@/components/sections/pricing/Trust";
import ROICalculator from "@/components/sections/pricing/RoiCalculator";
import Launch from "@/components/sections/pricing/Launch";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";



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
