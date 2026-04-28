

import WatchDemo from "@/components/sections/products/WatchDemo";
import ConnectIntegrations from "@/components/sections/products/ConnectIntegrations";
import ProductsHero from "@/components/sections/products/ProductHero";
import WhatsInside from "@/components/sections/products/WhatsInside";
import UseCases from "@/components/sections/shared/UseCases";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";


export const metadata = {
  title: "Products | Clientforce AI",
  description: "AI Sales Agents, Playbooks, Lead Finder, Multichannel Outreach, Unified Inbox, Dynamic Proposals, Analytics and Guardrails — all in one platform.",
  openGraph: {
    title: "Products | Clientforce AI",
    description: "Everything you need to run a self-operating sales machine.",
    url: "https://clientforceai.com/products",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Clientforce AI",
    description: "Everything you need to run a self-operating sales machine.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

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
  { 
    id: 1, 
    question: "Is this a CRM or an AI agent platform?", 
    answer: "ClientForceAI is both. It combines a lightweight CRM with powerful AI agents, so you can manage conversations, pipelines, and automate outreach all in one place or integrate it with your existing CRM if needed." 
  },
  { 
    id: 2, 
    question: "Can I run multiple agents for different goals?", 
    answer: "Yes. You can deploy multiple AI agents for different use cases—lead generation, follow-ups, appointment setting, reactivation campaigns, and more. Each agent can be customized to a specific goal or workflow." 
  },
  { 
    id: 3, 
    question: "Do I need content or scripts?", 
    answer: "No. We provide ready-to-use templates, playbooks, and proven scripts you can launch with instantly. You can also customize everything to match your brand, offer, and tone if you prefer." 
  },
  { 
    id: 4, 
    question: "Can I use this for my clients?", 
    answer: "Absolutely. ClientForceAI is built with agencies in mind. You can create separate workspaces for each client, deploy dedicated AI agents, and manage everything from a single dashboard." 
  },
  { 
    id: 5, 
    question: "What about compliance and deliverability?", 
    answer: "We follow best practices for compliance and deliverability, including domain warming, inbox rotation, and adherence to standards like GDPR, TCPA, and CAN-SPAM. This helps protect your domains and maximize inbox placement." 
  },
]} />
    </main>
  );
}

