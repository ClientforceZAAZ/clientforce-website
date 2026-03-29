import GuardrailsHero from "@/components/sections/guardrails/GuardrailsHero";
import WhatYouSee from "@/components/sections/guardrails/WhatYouSee";
import MessageConsent from "@/components/sections/guardrails/MessageConsent";
import VoiceAndGlobalCards from "@/components/sections/guardrails/VoiceAndGlobalCards";
import GetStarted from "@/components/sections/guardrails/GetStarted";
import TabbedFeatureSection from "@/components/sections/shared/TabbedFeatureSection";

export const metadata = {
  title: "Guardrails & Compliance | Clientforce AI",
  description: "GDPR-friendly capture, TCPA consent, DNC lists, domain verification and audit logs. ClientForce ensures compliance for seamless 24/7 operations.",
  openGraph: {
    title: "Guardrails & Compliance | Clientforce AI",
    description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.",
    url: "https://clientforceai.com/guardrails",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardrails & Compliance | Clientforce AI",
    description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function Guardrails() {
  return (
    <main>
        <GuardrailsHero />
        <WhatYouSee />
        <MessageConsent />
        <VoiceAndGlobalCards />
        <TabbedFeatureSection
          background="#F4F9FA"
          tabs={[
            {
              label: "Policy Engine & Real-Time Alerts",
              title: "Policy Engine & Real-Time Alerts",
              image: "/images/guardrails/policy_engine.png",
              imageAlt: "Policy Engine Dashboard",
              bullets: [
                { bold: "Automatic Safeguards:", text: " If Bounces/Complaints Spike, Campaigns Auto-Pause." },
                { bold: "Health Dashboard:", text: " Deliverability, Number Health, And Compliance Warnings." },
              ],
            },
            {
              label: "Data Security & Access Controls",
              title: "Data Security & Access Controls",
              image: "/images/compliance/security.png",
              imageAlt: "Security Controls",
              bullets: [
                { bold: "Role-Based Permissions:", text: " Control who can view, edit, or launch campaigns." },
                { bold: "Audit Logs:", text: " Every action tracked with timestamps." },
              ],
            },
              {
              label: "Safe Defaults, Fast Launch",
              title: "Safe Defaults, Fast Launch",
              image: "/images/compliance/security.png",
              imageAlt: "Security Controls",
              bullets: [
                { bold: "Role-Based Permissions:", text: " Control who can view, edit, or launch campaigns." },
                { bold: "Audit Logs:", text: " Every action tracked with timestamps." },
              ],
            },
          ]}
        />
        <GetStarted />
    </main>
  )
}





