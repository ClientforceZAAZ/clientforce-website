

import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge="Guardrails & Compliance"
      badgeIcon=""
      badgeBg="bg-[#E9FFAC]"
      headline={<>Scale Outreach Safely. <br className="hidden sm:block" /> Protect Reputation. Stay <br className="hidden sm:block" /> Compliant, By Default.</>}
      headlineStyle="text-4xl sm:text-5xl lg:text-[55px] leading-8 sm:leading-12 lg:leading-14 text-center lg:text-left"
      description={<>ClientForce bakes deliverability, consent, and policy controls into every step so your Agents can run 24/7 without risking spam flags, fines, or brand damage.</>}
      descriptionStyle="text-black text-sm sm:text-lg text-center lg:text-left leading-4 sm:leading-5 sm:leading-6"
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg="bg-linear-to-b from-[#E9FFAC] to-[#F4F9FA]"
      leftBg="bg-linear-to-b from-[#E9FFAC] to-[#F4F9FA]"
      metrics={<>
        <span>★★★★★ 2,000+ USERS</span>
      </>}
      rightImage={
          <>
            <div className="relative pt-10 pb-10 pl-10">
              <Image src="/images/guardrails/guardrails_rightBg.png" alt="Dashboard Preview" height={1198} width={950} className="w-full h-auto" priority />
            </div>
          </>
          }
    />
  );
}
