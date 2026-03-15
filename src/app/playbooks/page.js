import DfyHero from "@/components/sections/playbooks/DfyHero";
import WhyThisMatters from "@/components/sections/playbooks/WhyThisMatters";
import LibraryCoverage from "@/components/sections/playbooks/LibraryCoverage";
import HowItWorks from "@/components/sections/playbooks/HowItWorks";
import WhatsInside from "@/components/sections/playbooks/WhatsInside";
import WhatYouGet from "@/components/sections/playbooks/WhatYouGet";
import Proofs from "@/components/sections/playbooks/Proofs";
import WhatsIncluded from "@/components/sections/playbooks/WhatsIncluded";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";
import ReadyToLaunch from "@/components/sections/playbooks/ReadyToLaunch";

export default function DfyPlaybook() {
  return (
    <main>
        <DfyHero />
        <WhyThisMatters />
        <LibraryCoverage />
        <HowItWorks />
        <WhatsInside />
        <WhatYouGet />
        <Proofs />
        <WhatsIncluded />
         <FAQ faqs={[
            { id: 1, question: "Can I edit a playbook?", answer: "Yes—every step, script, rule, and template is editable." },
            { id: 2, question: "Does it work outside my region", answer: "..." },
            { id: 3, question: "What if I have my own proposal?", answer: "..." },
            { id: 4, question: "Will Voice overcall prospects?", answer: "..." },
            { id: 5, question: "How often are playbooks updated?", answer: "..." },
            { id: 6, question: "Can I mix industry + goal?", answer: "..." },
            { id: 7, question: "Do I need my own copy?", answer: "..." },
            ]} 
        />
        <ReadyToLaunch />
    </main>
  )
}
