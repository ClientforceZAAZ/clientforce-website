import MultichannellHero from "@/components/sections/multichannel-outreach/MultichannelHero";
import WhyItMatters from "@/components/sections/multichannel-outreach/WhyItMatters";
import WhatsInside from "@/components/sections/multichannel-outreach/WhatsInside";
import HowItWorks from "@/components/sections/multichannel-outreach/HowItWorks";
import Proofs from "@/components/sections/multichannel-outreach/Proofs";
import ComplianceSafety from "@/components/sections/multichannel-outreach/ComplianceSafety";
import RunMultichannel from "@/components/sections/multichannel-outreach/RunMultichannel";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";

export default function MultichannelOutreach() {
  return (
    <main>
        <MultichannellHero />
        <WhyItMatters />
        <WhatsInside />
        <HowItWorks />
        <Proofs />
        <ComplianceSafety />
        <RunMultichannel />
         <FAQ faqs={[
            { id: 1, question: "Will it spam prospects?", answer: "No. Steps respect caps, business hours, and approved templates—plus human-like timing." },
            { id: 2, question: "What if a channel isn’t available?", answer: "..." },
            { id: 3, question: "Can I customize the sequence by goal?", answer: "..." },
            ]} 
        />
    </main>
  )
}
