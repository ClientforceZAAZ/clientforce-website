import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import AnalyticsHeroCard from "@/components/sections/analytics/components/AnalyticsHeroCard";
import PageHero from "@/components/sections/shared/PageHero";

export default function LocalBusinessesHero() {
  return (
    <PageHero
      badge="SaaS Companies"
      badgeIcon=""
      headline={<>
       Fill Calendars, Convert Trials, And Accelerate Revenue—Without Adding Headcount
    </>
    }
      headlineStyle="text-5xl lg:text-6xl leading-12 mt-4"
      description={<><span className="font-bold">ClientForceAI Runs End-To-End SaaS Motions:</span> ICP Prospecting, Demo Booking, Trial Activation, Expansion Nudges, And Churn Win-Backs—Coordinated Across Email, LinkedIn, WhatsApp, And AI voice.</>}
      descriptionStyle="text-[#676767] text-lg mt-4 mb-8"
      primaryCTA={<PrimaryCTA variant="dark">Launch And Agent</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg="bg-[#FFFFFF]"
      leftBg="bg-[#FFFFFF]"
      metrics=""
      rightImage={
          <>
            <div className="relative pt-10 pl-10">
              <Image src="/images/solutions/solutions_rightBg.png" alt="Dashboard Preview" height={1198} width={950} className="w-full h-auto" priority />
            </div>
          </>
          }
      floatingCards=""
    />
  );
}
