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





export default function Home() {
  return (
    <main>
      <Hero />
      <WhyClientForce />
      <ClientForceFix />
      <AllSimpleSteps
        heading={
          <>
            All in{" "}
            <span className="text-transparent bg-linear-to-r from-[#13D111] to-[#0FC6D8] bg-clip-text">
              3 Simple Steps
            </span>
          </>
        }
        bgColor="bg-[#EEF9FA]"
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


