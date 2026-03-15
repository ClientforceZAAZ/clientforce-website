import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import AnalyticsHeroCard from "@/components/sections/analytics/components/AnalyticsHeroCard";
import PageHero from "@/components/sections/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge=" Analytics & Optimization"
      badgeIcon=""
      headline={<>Know Exactly What <br /> Books Calls, & What <br /> Closes Revenue.</>}
      headlineStyle="text-5xl lg:text-[66px] leading-16"
      description={<>ClientForce Turns Every Send, Click, Call, Proposal View, And <br /> Booking Into Actionable Insight. See Which Steps, Channels, <br /> Playbooks, Industries, And Messages Move The Needle— <br />Then Optimize With One Click.</>}
      descriptionStyle="text-black"
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg="bg-linear-to-b from-[#FFFFFF] to-[#D9FFD9]"
      leftBg="bg-linear-to-b from-[#FFFFFF] to-[#D9FFD9]"
      metrics={<>
        <span>★★★★★ 2,000+ USERS</span>
      </>}
      rightImage={
          <>
            <div className="relative pt-10 pb-10 pl-10">
              <Image src="/images/analytics/analytics_rightBg1.png" alt="Dashboard Preview" height={1198} width={950} className="w-full h-auto" priority />
            </div>
          </>
          }
      floatingCards={<>
        <div className="absolute top-[55%] left-[0%] w-[53%] z-30"><AnalyticsHeroCard /></div>
      </>}
    />
  );
}
