import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import AnalyticsHeroCard from "@/components/sections/analytics/components/AnalyticsHeroCard";
import PageHero from "@/components/sections/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      badge="Solutions"
      badgeIcon=""
      headline={
        <>
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom, #F039AA 60%, #2CA44A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Deploy AI
          </span>
          <br />
          <span className="" style={{ color: "#2CA44A" }}>
            Agents
          </span>{" "}
          For Every Revenue Goal
        </>
      }
      headlineStyle="text-5xl lg:text-[76px] leading-16"
      description={
        <>
          Launch Purpose-Built AI Sales Agents That{" "}
          <span className="font-bold">
            Prospect, Follow Up, Call, And Close
          </span>{" "}
          For The Specific Outcome You Care About. Pick <br /> Your Goal Below —
          ClientForceAI Orchestrates The Entire Campaign <br /> End-To-End,
          24/7.
        </>
      }
      descriptionStyle="text-[#676767] text-lg"
      primaryCTA={<PrimaryCTA variant="dark">Launch And Agent</PrimaryCTA>}
      secondaryCTA={
        <PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>
      }
      rightBg="bg-[#FFFFFF]"
      leftBg="bg-[#FFFFFF]"
      metrics=""
      rightImage={
        <>
          <div className="relative pt-10 pl-10">
            <Image
              src="/images/solutions/solutions_rightBg.png"
              alt="Dashboard Preview"
              height={1198}
              width={950}
              className="w-full h-auto"
              priority
            />
          </div>
        </>
      }
      floatingCards=""
    />
  );
}
