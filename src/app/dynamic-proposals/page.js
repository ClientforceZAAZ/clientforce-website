import DynamicProposalsHero from "@/components/sections/dynamic-proposals/DynamicProposalsHero";
import WhyItMatters from "@/components/sections/dynamic-proposals/WhyItMatters";
import HowItWorks from "@/components/sections/dynamic-proposals/HowItWorks";
import AllSimpleSteps from "@/components/sections/shared/AllSimpleSteps";
import UseCases from "@/components/sections/shared/UseCases";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";
import Generate from "@/components/sections/dynamic-proposals/Generate";

export default function DynamicProposals() {
  return (
    <main>
        <DynamicProposalsHero />
        <WhyItMatters />
         <AllSimpleSteps
          heading={
            <>
              How It Works{" "}
              <span className="text-[#787878]">
                (3 Steps)
              </span>
            </>
          }
          steps={[
            {
              image: "/images/all_simple_steps_card1.png",
              badgeIcon: "/icons/all_simple_step1.svg",
              title: "Connect knowledge",
              description1: "Upload Pricing Sheets, Pitch Decks, FAQs—ClientForce Learns Your Offer, Benefits, Proof, And Objections.",
            },
            {
              image: "/images/all_simple_steps_card2.png",
              badgeIcon: "/icons/all_simple_step2.svg",
              title: "Choose A Template & Rules",
              description1: "Pick A Playbook (e.g., “High-Ticket Consult,” “Local Service Quote,” “Trial→Paid”), Set Variables And Conditional Sections."
            },
            {
              image: "/images/all_simple_steps_card3.png",
              badgeIcon: "/icons/all_simple_steps3.svg",
              title: "Launch At Scale",
              description1: "Your Agent Sends Proposals Via Multichannel Sequences; Tracking And Automations Handle The Rest."
            },
          ]}
        />
        <HowItWorks />
        <UseCases
               heading="Use Cases"
               highlightText=""
               cards={[
                {
                   id: "agencies",
                   title: "Agencies & Consultants",
                   description: "Close Retainers With Proof-Led Proposals.",
                   image: "/images/usecase_agencies.png",
                 },
                 {
                   id: "local-services",
                   title: "Local Services",
                   description: "Quotes That Book Calls Or Take Deposits Fast.",
                   image: "/images/usecase_local.png",
                 },
                {
                   id: "saas",
                   title: "SaaS & B2B",
                   description: "Convert Trials And Pilots Into Paid Annuals—At Scale.",
                   image: "/images/usecase_saas.png",
                 },
               ]}
               bgColor="bg-white"
             /> 
         <FAQ faqs={[
            { id: 1, question: "Will proposals really feel custom?", answer: "Yes—content, proof, and pricing blocks adapt by persona/industry using your knowledge sources" },
            { id: 2, question: "Can we collect payment or signatures inside the proposal?", answer: "..." },
            { id: 3, question: "How do we keep brand consistency?", answer: "..." },
            { id: 4, question: "What if a lead doesn’t open?", answer: "..." },
             { id: 5, question: "Do we get performance insights?", answer: "..." },
            ]} 
            bgColor="bg-[#E1F1F2]"
        />
        <Generate />
    </main>
  )
}
