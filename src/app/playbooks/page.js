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

export const metadata = {
  title: "Playbooks | Clientforce AI",
  description: "Done-For-You AI sales playbooks. Automate campaigns with tailored playbooks built for your industry and goals.",
  openGraph: {
    title: "Playbooks | Clientforce AI",
    description: "Done-For-You AI sales playbooks built for your goals.",
    url: "https://clientforceai.com/playbooks",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playbooks | Clientforce AI",
    description: "Done-For-You AI sales playbooks built for your goals.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

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
