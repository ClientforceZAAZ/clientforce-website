
import AnalyticsHero from "@/components/sections/analytics/AnalyticsHero";
import DashboardsModules from "@/components/sections/analytics/DashboardModules";
import WhatYouGet from "@/components/sections/analytics/WhatYouGet";
import NextBestActions from "@/components/sections/analytics/NextBestActions";
import AnalyticsCards from "@/components/sections/analytics/AnalyticsCards";
import KpisTracked from "@/components/sections/analytics/KpisTracked";
import Integrations from "@/components/sections/analytics/Integrations";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";
import WhatsWorking from "@/components/sections/analytics/WhatsWorking";

export const metadata = {
  title: "Analytics & Reporting | Clientforce AI",
  description: "Transform interactions into insights and optimize with a click. Full-funnel visibility from first touch to closed-won.",
  openGraph: {
    title: "Analytics & Reporting | Clientforce AI",
    description: "Full-funnel visibility from first touch to closed-won.",
    url: "https://clientforceai.com/analytics",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Reporting | Clientforce AI",
    description: "Full-funnel visibility from first touch to closed-won.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function Analytics() {
  return (
    <main>
        <AnalyticsHero />
        <WhatYouGet />
        <DashboardsModules />
        <NextBestActions />
        <AnalyticsCards />
        <KpisTracked />
        <Integrations />
        <FAQ faqs={[
  { 
    id: 1, 
    question: "Will this show revenue per campaign?", 
    answer: "Yes. Meetings and revenue are attributed to specific steps, channels, and playbooks so you can clearly see what is driving results." 
  },
  { 
    id: 2, 
    question: "Can it optimize automatically?", 
    answer: "Yes. The system continuously analyzes performance and can adjust timing, channels, and messaging to improve results over time." 
  },
  { 
    id: 3, 
    question: "Does it help with deliverability?", 
    answer: "Yes. Built-in systems like domain warming, sending limits, and monitoring help maintain strong deliverability and protect your sender reputation." 
  },
]} 
/>
        <WhatsWorking />
    </main>
  )
}
