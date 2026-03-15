

import WatchDemo from "@/components/sections/products/WatchDemo";
import ConnectIntegrations from "@/components/sections/products/ConnectIntegrations";
import ProductsHero from "@/components/sections/products/ProductHero";
import WhatsInside from "@/components/sections/products/WhatsInside";
import UseCases from "@/components/sections/shared/UseCases";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";

export default function ProductsPage() {
  return (
    <main>
        <ProductsHero />
        <WhatsInside />
        <ConnectIntegrations />
        <UseCases
                heading="Who Uses"
                highlightText="ClientForceAi"
                cards={[
                {
                    id: "agencies",
                    title: "Agencies",
                    description: "Offer DFY Outreach + Closing As A Service Across Clients.",
                    image: "/images/usecase_agencies.png",
                    },
                    {
                    id: "saas",
                    title: "SaaS & B2B",
                    description: "Book Qualified Demos And Move Trials To Paid Faster.",
                    image: "/images/usecase_saas.png",
                    },
                    {
                    id: "local-services",
                    title: "Local Services",
                    description: "Turn Site visitors And Map Searches Into Booked Calls.",
                    image: "/images/usecase_local.png",
                    },
                    {
                    id: "consultants",
                    title: "Consultants/Coaches",
                    description: "Send Proposals At Scale And Fill The Calendar.",
                    image: "/images/usecase_consultant.png",
                    },
                ]}
            />
        <WatchDemo />  
        <FAQ faqs={[
            { id: 1, question: "Is this a CRM or an AI agent platform?", answer: "ClientForceAI can run standalone or alongside your CRM. Use our unified inbox + pipelines, or sync via integrations." },
            { id: 2, question: "Can I run multiple agents for different goals?", answer: "..." },
            { id: 3, question: "Do I need content or scripts?", answer: "..." },
            { id: 4, question: "Can I use this for my clients?", answer: "..." },
            { id: 5, question: "What about compliance and deliverability?", answer: "..." },
            ]} 
        />
    </main>
  );
}

