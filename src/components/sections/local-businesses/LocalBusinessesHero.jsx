import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import AnalyticsHeroCard from "@/components/sections/analytics/components/AnalyticsHeroCard";
import PageHero from "@/components/sections/shared/PageHero";

export default function LocalBusinessesHero() {
  return (
    <PageHero
      badge="Local Businesses"
      badgeIcon=""
      headline={<>
       Get More Calls, More Bookings, More Local Customers, <span className="inline-block"><Image src="/images/face notifications.png" alt="Logo" width={140} height={55} /></span>  Automatically
    </>
    }
      headlineStyle="text-5xl lg:text-6xl leading-12"
      description={<><span className="font-bold">ClientForceAI Turns Your Website Visitors And Local Searches Into Booked Jobs</span> With Instant Replies, Smart Follow-Ups, And AI Voice Callbacks—So You Never Miss Another Opportunity.</>}
      descriptionStyle="text-[#676767] text-lg mb-12"
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
