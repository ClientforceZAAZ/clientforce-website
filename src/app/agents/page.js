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
              <span className="text-gray-900">How It Works</span>{" "}
              <span className="text-[#787878]">
                (4 Steps)
              </span>
            </>
          }
           bgColor="bg-[#EEF9FA]"
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
  { 
    id: 1, 
    question: "Will the Agent sound like us?", 
    answer: "Yes. Upload your PDFs or URLs and the Agent learns your offer, proof, and tone so it communicates in a way that feels aligned with your brand." 
  },
  { 
    id: 2, 
    question: "Is voice required?", 
    answer: "No. Voice is optional. You can run campaigns using email, SMS, or WhatsApp, and add voice only if it fits your strategy." 
  },
  { 
    id: 3, 
    question: "Can I run multiple goals?", 
    answer: "Yes. You can set up different agents for different objectives such as lead generation, follow ups, appointment booking, and reactivation campaigns." 
  },
  { 
    id: 4, 
    question: "How safe is sending?", 
    answer: "We follow best practices to protect your sending reputation, including domain warming, inbox rotation, and continuous monitoring to help maintain strong deliverability." 
  },
]} />
    </main>
  )
}
