import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge="Multichannel Outreach"
      badgeBg="#ECECEC"
      headline={<>Reach Every <br className="hidden lg:block" /> Prospect Where <br className="hidden md:block" /> They Actually Reply.</>}
      headlineStyle="text-4xl sm:text-[50px] lg:text-[66px] leading-10 sm:leading-12  lg:leading-16 text-center lg:text-left"
      description={<>Email, WhatsApp, LinkedIn, SMS, and AI Voice, Orchestrated In One Flow To Book Meetings And Close Deals, With Smart Timing, Fallbacks, And Compliance Built-In.</>}
      descriptionStyle="text-sm sm:text-lg text-center lg:text-left"
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>}
      metrics={<>
        <span>★★★★★ 2,000+ USERS</span>
      </>}
      rightImage={
          <>
            <div className="relative px-10 mt-26 mb-34 z-20">
              <img src="/images/multichannel-outreach/multichannel_hero_bg.png" alt="Dashboard Preview"  className="w-full h-auto" priority />
            </div>
          </>
          }
      rightBg=""
      rightBgImage="url('/images/multichannel-outreach/multichannel_rightBgImage.png')"
      floatingCards={<>
        <div className="absolute top-[4%] left-[58%] w-[34%] z-30"> <Image src="/images/multichannel-outreach/linkedin_hero.svg" alt="Dashboard Preview" height={282} width={306} className="w-full h-auto" priority /></div>
        <div className="absolute top-[60%] left-[12%] w-[34%] z-30"> <Image src="/images/multichannel-outreach/multichannel_hero_face.png" alt="Dashboard Preview" height={282} width={306} className="w-full h-auto" priority /></div>


        <div className="absolute bottom-[10%] left-[48%] w-[30%] z-30"><Image src="/images/multichannel-outreach/ai_voice.png" alt="Dashboard Preview" height={88} width={374} className="w-full h-auto" priority /></div>
        <div className="border border-[#FFFFFF66] rounded-2xl w-[78%] h-[80%] bg-[#00000026] z-0 absolute top-[8%] left-[11%]"></div>
      </>}
    />
  );
}
