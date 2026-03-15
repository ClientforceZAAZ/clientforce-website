"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";
import dynamic from "next/dynamic";


const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function HowItWorksHero() {
  return (
    <section
      className="mt-21 pt-12 bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/how-it-works/howItWorks_hero.png')",
      }}
    >
      <div>
        <div className="flex items-center justify-center mb-2">
          <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
            <div className="bg-white text-black rounded-full px-3 py-1 flex items-center justify-center">
              <span className="text-sm font-bold">How It Works</span>
            </div>
          </div>
        </div>
        <h1 className=" text-7xl font-bold font-degular text-black text-center">
          Launch Once. Sell Forever.
        </h1>
        <p className=" font-medium text-lg text-[#00000099] text-center mt-4">
          Set A Goal, Spin Up An AI Sales Agent, Feed It Your Offer, And Hit Go.
          ClientForceAI <br /> Then{" "}
          <span className="font-bold text-black">
            Prospects, Engages, Proposes, Calls, And Closes
          </span>
          —Across Channels—While <br />
          You Track Everything In One Inbox And Optimize With Real Analytics
        </p>
        <div className="flex items-center justify-center gap-3 py-10 relative">
          <PrimaryCTA variant="dark" className="z-20">
            Launch An Agent
          </PrimaryCTA>
          <PrimaryCTA variant="light" className="z-20">
            Watch 2-minutes Demo
          </PrimaryCTA>


          {/* Curved Line */}
          <Image
            src="/icons/feauturesBenefit.svg"
            width={1280}
            height={160}
            className="absolute top-16 -z-20"
          />


          {/* Avatars */}
          <Image
            src="/icons/feauturesBenefit_rect.svg"
            width={51}
            height={51}
            style={{
              position: "absolute",
              top: "12rem",
              right: "4rem",
            }}
          />
          <Image
            src="/icons/feauturesBenefit_rect1.svg"
            width={51}
            height={51}
             style={{
              position: "absolute",
              top: "5.5rem",
              right: "16rem",
            }}
          />
          <Image
            src="/icons/feauturesBenefit_rect2.svg"
            width={51}
            height={51}
             style={{
              position: "absolute",
              top: "5.5rem",
              left: "16rem",
            }}
          />
          <Image
            src="/icons/feauturesBenefit_rect3.svg"
            width={51}
            height={51}
            style={{
              position: "absolute",
              top: "12rem",
              left: "4rem",
            }}
          />
        </div>
        
        <div>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block">
              <Image
                src="/images/face notifications.png"
                alt="Logo"
                width={140}
                height={55}
              />
            </span>
            <span className=" text-[#676767]">★★★★★ 2,000+ USERS</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-6">
          <div className="flex items-center justify-center">
            <div className="p-4  rounded-2xl ">
              <Image
                src="/images/how-it-works/howItWorks_hero_dashboard.png"
                width={849}
                height={427}
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


