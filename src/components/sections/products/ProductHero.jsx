import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/shared/PageHero";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import StartBuildingCard from "@/components/sections/products/components/StartBuildingCard";
import LeadMagnetCard from "./components/LeadMagnetCard";
import HeroTag from "./components/HeroTag";
import { PiChatsLight } from "react-icons/pi";
import { BiSearchAlt2 } from "react-icons/bi";
import { LiaPhoneAltSolid } from "react-icons/lia";







export default function ProductHero() {
  return (
    <PageHero
      headline={
        <>
          Meet The <br className="hidden lg:block" /> ClientForceAI{" "}
          <br className="hidden md:block" /> Product Suite
        </>
      }
      headlineStyle="text-4xl sm:text-6xl lg:text-[80px] leading-8 sm:leading-12 lg:leading-18 text-center lg:text-left"
      descriptionStyle=" text-sm sm:text-lg text-center lg:text-left"
      description={
        <>
          Launch Self-Running AI Sales Agents That Prospect, Engage,{" "}
          <br className="block md:hidden" /> And Close — End To End.
        </>
      }
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={
        <Link
          href="#"
          className="flex items-center justify-center font-bold text-base text-gray-400 hover:text-gray-500 gap-2 ml-2"
        >
          <LuCircleDollarSign />
          See Pricing
          <FaArrowRightLong />
        </Link>
      }
      metrics={
        <>
          <div className="flex items-center justify-center gap-2 mb-10 lg:mb-30">
            <span className="relative inline-block w-[100px] sm:w-[120px] md:w-[140px] aspect-[140/55]">
              <Image
                src="/images/face notifications.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </span>
            <span>★★★★★ 2,000+ USERS</span>
          </div>
        </>
      }
      rightImage={
        <div className="relative pt-16 pl-26">
          <Image
            src="/images/products/hero_rightBg.png"
            alt="Dashboard Preview"
            height={1174}
            width={846}
            className="w-full h-auto"
            priority
          />
        </div>
      }
      rightBg="bg-[#242E26]"
      leftBg="bg-linear-to-b from-[#EFFFF5] to-[#DAF4FF]"
      rightBgImage="url('/images/products/hero_bg_overlay.png')"
      floatingCards={
        <>
          <div className="absolute bottom-[12%] left-[8%] w-[45%] z-30">
            <StartBuildingCard />
          </div>
          <div className="absolute bottom-[12%] right-[-8%] w-[45%] z-30">
            <LeadMagnetCard />
          </div>
          <div className="absolute top-[4%] right-[20%] w-fit z-30">
            <HeroTag
              icon={<PiChatsLight size={26} strokeWidth={10} />}
              text="Follow Ups"
              bgColor="bg-[#CE6ABA]"
            />
          </div>
          <div className="absolute flex gap-2 top-[50%] left-[7%] w-fit z-30">
            <HeroTag
              icon={<BiSearchAlt2 size={20} />}
              text="Finds Prospects"
              bgColor="bg-[#0FB6C7]"
            />

            <HeroTag
              icon={<LiaPhoneAltSolid size={20} />}
              text="Calls"
              bgColor="bg-[#B18DD7]"
            />
          </div>
        </>
      }
    />
  );
}

