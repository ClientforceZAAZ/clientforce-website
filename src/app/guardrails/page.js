import GuardrailsHero from "@/components/sections/guardrails/GuardrailsHero";
import WhatYouSee from "@/components/sections/guardrails/WhatYouSee";
import MessageConsent from "@/components/sections/guardrails/MessageConsent";
import VoiceAndGlobalCards from "@/components/sections/guardrails/VoiceAndGlobalCards";
import GetStarted from "@/components/sections/guardrails/GetStarted";
import TabbedSection from "@/components/sections/guardrails/TabbedSection";

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
        <TabbedSection />
        <GetStarted />
    </main>
  )
}





