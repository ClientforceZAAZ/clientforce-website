import DynamicProposalsHero from "@/components/sections/dynamic-proposals/DynamicProposalsHero";
import WhyItMatters from "@/components/sections/dynamic-proposals/WhyItMatters";
import HowItWorks from "@/components/sections/dynamic-proposals/HowItWorks";
import AllSimpleSteps from "@/components/sections/shared/AllSimpleSteps";
import UseCases from "@/components/sections/shared/UseCases";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";
import Generate from "@/components/sections/dynamic-proposals/Generate";


export const metadata = {
  title: "Dynamic Proposals | Clientforce AI",
  description: "Create tailored proposals automatically for every lead, effortlessly. AI-generated proposals that close deals faster.",
  openGraph: {
    title: "Dynamic Proposals | Clientforce AI",
    description: "AI-generated proposals tailored to every lead automatically.",
    url: "https://clientforceai.com/dynamic-proposals",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Proposals | Clientforce AI",
    description: "AI-generated proposals tailored to every lead automatically.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function DynamicProposals() {
  return (
    <main>
        <DynamicProposalsHero />
        <WhyItMatters />
         <AllSimpleSteps
          heading={
            <>
              <span className="text-white">How It Works</span>{" "}
              <span className="bg-gradient-to-r from-[#52be2f] to-[#da7d3d] text-transparent bg-clip-text">
                (4 Steps)
              </span>
            </>
          }
           bgColor="bg-[#041308]"
        steps={[
          {
            image: "/images/all_simple_steps_card1.png",
            badgeIcon: "/icons/all_simple_step1.svg",
            title: "Launch Your AI Sales Agent",
            description1: "Choose a DFY playbook or start from scratch.",
            description2: (
              <>
                Tell your Agent the outcome you want — like booking demos, reviving cold leads, or closing more deals.
              </>
            ),
          },
          {
            image: "/images/all_simple_steps_card2.png",
            badgeIcon: "/icons/all_simple_step2.svg",
            title: "Teach It Your Offer",
            description1: (
              <>
               Upload your pricing pages, PDFs, case studies, links, and business details so your Agent understands what you sell, how to position it, and how to respond.
              </>
            ),
          },
          {
            image: "/images/all_simple_steps_card3.png",
            badgeIcon: "/icons/all_simple_steps3.svg",
            title: "Turn On Automated Pipeline Filling",
            description1: (
              <>
               Your Agent starts auto-prospecting on schedule,
                continuously bringing in new leads based on
                your targeting rules.
              </>
            ),
            description2: (
              <>You can also feed it more opportunities through
Chrome Capture, your embedded website agent
widget, and imported lists — so the pipeline never stops moving.</>
            )
          },
           {
            image: "/images/all_simple_steps_card4.png",
            badgeIcon: "/icons/all_simple_steps4.svg",
            title: "Watch the Campaign Turn Leads Into Sales",
            description1: (
              <>
                Your Agent follows up, makes AI voice calls, sends
                proposals, books meetings, collects payments, and keeps every conversation moving toward revenue. Meetings As It Runs. You Just Monitor Results.
              </>
            ),
            description2: (
              <>That means more replies, more booked calls, more proposals sent, and more sales coming in — without you having to manually push every step.</>
            )
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
