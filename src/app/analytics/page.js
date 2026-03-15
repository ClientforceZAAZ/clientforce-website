
import AnalyticsHero from "@/components/sections/analytics/AnalyticsHero";
import DashboardsModules from "@/components/sections/analytics/DashboardModules";
import WhatYouGet from "@/components/sections/analytics/WhatYouGet";
import NextBestActions from "@/components/sections/analytics/NextBestActions";
import AnalyticsCards from "@/components/sections/analytics/AnalyticsCards";
import KpisTracked from "@/components/sections/analytics/KpisTracked";
import Integrations from "@/components/sections/analytics/Integrations";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";
import WhatsWorking from "@/components/sections/analytics/WhatsWorking";

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
            { id: 1, question: "Will this show revenue per campaign?", answer: "Yes—meetings and revenue are attributed to steps, channels, and playbooks." },
            { id: 2, question: "Can it optimize automatically?", answer: "..." },
            { id: 3, question: "Does it help with deliverability?", answer: "..." },
            ]} 
        />
        <WhatsWorking />
    </main>
  )
}
