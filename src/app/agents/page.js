import AgentsHero from "@/components/sections/agents/AgentsHero";
import StatsMarquee from "@/components/sections/agents/StatsMarquee";
import WhyAgents from "@/components/sections/agents/WhyAgents";
import AllSimpleSteps from "@/components/sections/shared/AllSimpleSteps";
import AgentDeepDive from "@/components/sections/agents/AgentsDeepDive";
import UseCases from "@/components/sections/shared/UseCases";
import Integrations from "@/components/sections/agents/Integrations";
import DeployAgent from "@/components/sections/agents/DeployAgent";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";


export const metadata = {
  title: "AI Sales Agents | Clientforce AI",
  description: "Build AI Sales Agents that prospect, engage, call and close end to end. One setup, a self-running sales machine.",
  openGraph: {
    title: "AI Sales Agents | Clientforce AI",
    description: "Build AI Sales Agents that prospect, engage, call and close end to end.",
    url: "https://clientforceai.com/agents",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Agents | Clientforce AI",
    description: "Build AI Sales Agents that prospect, engage, call and close end to end.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};




export default function Agentspage() {
  return (
    <main>
        <AgentsHero />
        <StatsMarquee  />
        <WhyAgents />
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
              title: "Create Your AI Sales Agent",
              description1: "Pick a DFY playbook or use chat-style setup.",
              description2: (
                <>
                  Your Agent learns from your PDFs/links And{" "}
                  <span className="font-bold">adopts your positioning, pricing, and proof.</span>
                </>
              ),
            },
            {
              image: "/images/all_simple_steps_card2.png",
              badgeIcon: "/icons/all_simple_step2.svg",
              title: "Connect Lead Sources",
              description1: (
                <>
                  Enable the Finder for auto-prospecting, add{" "}
                  <span className="font-bold">widgets</span> to your site, or capture from
                  LinkedIn/GMB via <span className="font-bold">Chrome Extension</span> or
                  upload your CSV
                </>
              ),
            },
            {
              image: "/images/all_simple_steps_card3.png",
              badgeIcon: "/icons/all_simple_steps3.svg",
              title: "Launch a Perpetual Campaign",
              description1: (
                <>
                  Your Agent runs a goal-aligned sequence (email → WhatsApp → voice), sends{" "}
                  <span className="font-bold">dynamic proposals</span>, and books calls and
                  close sales—<span className="font-bold">24/7</span> with compliance guardrails.
                </>
              ),
            },
          ]}
        />
       <AgentDeepDive />
       <UseCases
               heading="Use Cases"
               highlightText=""
               cards={[
                {
                   id: "agencies",
                   title: "Agencies",
                   description: "Productize Prospecting & Bookings For Every Client.",
                   image: "/images/usecase_agencies.png",
                 },
                 {
                   id: "saas",
                   title: "SaaS",
                   description: "Convert Trials And Fill AE Calendars On Autopilot.",
                   image: "/images/usecase_saas.png",
                 },
                 {
                   id: "local-services",
                   title: "Local Services",
                   description: "Turn Eebsite Visits And GMB Traffic Into Booked Jobs.",
                   image: "/images/usecase_local.png",
                 },
                 {
                   id: "consultants",
                   title: "Consultants/Coaches",
                   description: "Keep Proposals Flowing And Pipelines Warm.",
                   image: "/images/usecase_consultant.png",
                 },
               ]}
             /> 
       <Integrations />
       <DeployAgent />
        <FAQ faqs={[
            { id: 1, question: "Will the Agent sound like us?", answer: "Yes—upload your PDFs/URLs; the Agent learns your offer, proof, and tone." },
            { id: 2, question: "Is voice required?", answer: "..." },
            { id: 3, question: "Can I run multiple goals?", answer: "..." },
            { id: 4, question: "How safe is sending?", answer: "..." },
            ]} 
        />
    </main>
  )
}
