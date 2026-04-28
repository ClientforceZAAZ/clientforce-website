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
           <span className="text-gray-900"> All in</span>{" "}
            <span className="bg-gradient-to-r from-[#13D111] to-[#0FC6D8] text-transparent bg-clip-text">
              4 Simple Steps
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
  { 
    id: 1, 
    question: "Does this replace my CRM?", 
    answer: "ClientForceAI can run standalone or alongside your existing CRM. You can manage conversations, pipelines, and follow-ups directly inside our platform, or integrate seamlessly with tools you already use." 
  },
  { 
    id: 2, 
    question: "Can it make real phone calls?", 
    answer: "Yes. Our AI voice agents can make and receive real phone calls, qualify leads, book appointments, and follow scripts naturally just like a human sales rep, but available 24/7." 
  },
  { 
    id: 3, 
    question: "What if I don't have lists?", 
    answer: "No problem. Our built-in prospecting engine helps you find and build highly targeted lead lists based on your niche, location, and ideal customer profile so you can start outreach immediately." 
  },
  { 
    id: 4, 
    question: "Can I use this for my clients?", 
    answer: "Absolutely. ClientForceAI is built for agencies. You can create and manage multiple client workspaces, deploy AI agents per client, and scale your services without increasing your workload." 
  },
  { 
    id: 5, 
    question: "Will emails land in inbox?", 
    answer: "We use advanced deliverability systems including domain warming, inbox rotation, and real-time monitoring to maximize inbox placement and reduce the risk of spam filtering." 
  },
  { 
    id: 6, 
    question: "How quickly can I get started?", 
    answer: "You can be up and running in minutes. With our ready-made templates, playbooks, and onboarding flows, most users launch their first campaign the same day." 
  },
  { 
    id: 7, 
    question: "Do I need technical skills to use this?", 
    answer: "Not at all. ClientForceAI is designed to be beginner-friendly with a simple interface, step-by-step setup, and prebuilt workflows. No coding or technical experience is required." 
  },
  { 
    id: 8, 
    question: "What channels does it support?", 
    answer: "ClientForceAI supports multi-channel outreach including email, SMS, WhatsApp, and AI voice calls so you can reach leads wherever they are." 
  },
  { 
    id: 9, 
    question: "Can I customize the AI agents?", 
    answer: "Yes. You can fully customize your AI agents with your scripts, tone, offers, and workflows to match your brand and sales process." 
  },
  { 
    id: 10, 
    question: "Is there support if I get stuck?", 
    answer: "Yes. We provide onboarding support, documentation, and access to our team to help you get results as quickly as possible." 
  },
]} />
      <LaunchOnce />
    </main>
  );
}


