import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge="Lead Acquisition Suite"
      headline={<>Never Run Out <br /> Of Leads <p className="text-5xl">Lead Acquisition Suite</p></>}
      headlineStyle="text-5xl lg:text-[76px] leading-16"
      description="Turn Prospecting Into A Background Process. ClientForce’s Lead Acquisition Suite Continuously Discovers, Captures, Validates, And Routes Fresh Prospects Straight Into The Right AI Agent Campaign—No Spreadsheets, No Copy-Paste, No Manual Chasing."
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg = "bg-[linear-gradient(320deg,#e3f5f7_0%,#e3f3f5_25%,#f6f6f6_50%,#99e9d2_60%,#88e6c6_85%,#2ddc7a_100%)]"
      rightImage={
          <>
            <div className="relative pt-10 pb-20 pl-10">
              <Image src="/images/lead-acquisition-suite/lead-acquisition-hero-dashboard.png" alt="Lead Acquisition Dashboard Preview" height={1264} width={922} className="w-full h-auto" priority />
            </div>
          </>
          }
      floatingCards={<>
        <div className="absolute top-[50%] left-[2%] w-[53%] z-30">
            <Image src="/images/lead-acquisition-suite/lead-acquisition-hero-card.png" width={490} height={456} />
        </div>
        <div className="absolute bottom-[0%] right-[5%] w-[60%] z-30"> <Image src="/images/lead-acquisition-suite/lead-acquisition-hero-woman.png" width={820} height={880} className="w-full h-auto" /></div>
      </>}
    />
  );
}
