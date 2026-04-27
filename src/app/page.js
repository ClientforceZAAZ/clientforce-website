import Hero from "@/components/sections/home/Hero";
import WhyClientForce from "@/components/sections/home/WhyClientForce";
import ClientForceFix from "@/components/sections/home/ClientForceFix";
import AllSimpleSteps from "@/components/sections/shared/AllSimpleSteps";
import FeauturesBenefits from "@/components/sections/home/FeauturesBenefits";
import WatchDemo from "@/components/sections/home/WatchDemo";
import UseCases from "@/components/sections/shared/UseCases";
import Proof from "@/components/sections/home/Proof";
import AgentRoi from "@/components/sections/home/AgentRoi";
import SecurityCompliance from "@/components/sections/home/SecurityCompliance";
import LaunchOnce from "@/components/sections/home/LaunchOnce";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";


export const metadata = {
  title: "Clientforce AI — Launch Once. Sell 24/7.",
  description: "Deploy AI Agents that refill your pipeline, personalize outreach, and close deals on autopilot. Multichannel, 24/7.",
  openGraph: {
    title: "Clientforce AI — Launch Once. Sell 24/7.",
    description: "Deploy AI Agents that refill your pipeline, personalize outreach, and close deals on autopilot.",
    url: "https://clientforceai.com",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientforce AI — Launch Once. Sell 24/7.",
    description: "Deploy AI Agents that refill your pipeline, personalize outreach, and close deals on autopilot.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};



export default function Home() {
  return (
    <main>
      <Hero />
      <WhyClientForce />
      <ClientForceFix />
      <AllSimpleSteps
        heading={
          <>
           <span className="text-white"> All in</span>{" "}
            <span className="bg-gradient-to-r from-[#52be2f] to-[#da7d3d] text-transparent bg-clip-text">
              4 Simple Steps
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
      <FeauturesBenefits />
      <WatchDemo />
      <UseCases
        heading="Use Cases"
        highlightText=""
        cards={[
         {
            id: "agencies",
            title: "Agencies",
            description: "Offer Done-For-You AI Prospecting & Booking.",
            image: "/images/usecase_agencies.png",
          },
          {
            id: "saas",
            title: "SaaS",
            description: "Convert Trials And Book Product Demos Automatically.",
            image: "/images/usecase_saas.png",
          },
          {
            id: "local-services",
            title: "Local Services",
            description: "Capture Inbound + Outbound Leads And Call Back Instantly.",
            image: "/images/usecase_local.png",
          },
          {
            id: "consultants",
            title: "Consultants/Coaches",
            description: "High-Ticket Pipelines With Voice-Assisted Closing.",
            image: "/images/usecase_consultant.png",
          },
        ]}
      />  
      <Proof />
      <AgentRoi />
      <SecurityCompliance />
      <FAQ faqs={[
          { id: 1, question: "Does this replace my CRM?", answer: "ClientForceAI can run standalone or alongside your CRM. Use our unified inbox + pipelines, or sync via integrations." },
          { id: 2, question: "Can it make real phone calls?", answer: "Yes. Our AI voice agents can make and receive real calls..." },
          { id: 3, question: "What if I don't have lists?", answer: "No problem. Our auto-prospecting engine builds targeted lead lists..." },
          { id: 4, question: "Can I use this for my clients?", answer: "Absolutely. Our agency plan lets you spin up separate AI agents..." },
          { id: 5, question: "Will emails land in inbox?", answer: "We use domain warming, inbox rotation, and deliverability monitoring..." },
        ]} />
      <LaunchOnce />
    </main>
  );
}


