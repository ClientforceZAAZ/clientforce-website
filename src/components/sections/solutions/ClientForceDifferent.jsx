"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Data 

const AUTOMATION_CARDS = [
  {
    id: 1,
    text: ' Finder v2 rules + Chrome Capture + Widgets',
    boldText: "Auto-Prospecting:",
    icon: "/images/solutions/auto_prospecting.svg",
    position: "top-left",
  },
  {
    id: 2,
    text: ' on-brand, personalized at scale',
    boldText: "Dynamic Proposals:",
    icon: "/images/solutions/dynamic_proposal.svg",
    position: "left-middle",
  },
  {
    id: 3,
    text: ' step performance, deliverability, number reputation, outcomes',
    boldText: "Analytics:",
    icon: "/images/solutions/analytics.svg",
    position: "bottom-left",
  },
  {
    id: 4,
    text: ' Email, WhatsApp, LinkedIn, SMS, AI Voice (1x)',
    boldText: "Multichannel:",
    icon: "/images/solutions/multichannel.svg",
    position: "top-right",
  },
  {
    id: 5,
    text: ' every email, WA reply, call note, proposal, booking — one thread',
    boldText: "Unified Inbox:",
    icon: "/images/solutions/unified_inbox.svg",
    position: "right-middle",
  },
  {
    id: 6,
    text: ' by goal & industry, compliant out of the box',
    boldText: "DFY Playbooks:",
    icon: "/images/solutions/dfy.svg",
    position: "bottom-right",
  },
];

const AVATARS = [
  { src: "/images/solutions/path1.svg", style: "top-[-10%] left-[2%]",  delay: 0,    duration: 3.2 },
  { src: "/images/solutions/Vector.svg", style: "top-[-10%] right-[3%]", delay: 0.6,  duration: 2.8 },
];

// Card position mapping to Tailwind classes
const CARD_POSITIONS = {
  "top-left":     "top-[20%] left-[24%]",
  "top-right":    "top-[20%] right-[20%]",
  "left-middle":  "top-[40%] left-[24%]",
  "right-middle": "top-[40%] right-[20%]",
  "bottom-left":  "top-[60%] left-[24%]",
  "bottom-right": "top-[60%] right-[20%]",
};

// Slide-in direction per card
const CARD_ENTRY = {
  "top-left":     { x: -40, y: -20 },
  "left-middle":     { x: -40, y: -20 },
  "top-right":    { x:  40, y: -20 },
  "right-middle":    { x:  40, y: -20 },
  "bottom-left":  { x: -40, y:  20 },
  "bottom-right": { x:  40, y:  20 },
};

// Float animation offsets per card
const FLOAT_DELAYS = {
  "top-left":     0,
  "top-right":    0.8,
  "middle-left": 1.4,
  "middle-right": 2,
  "bottom-left":  2.6,
  "bottom-right": 3.2,
};

// Automation card
function AutomationCard({ card, isVisible }) {
  const entry  = CARD_ENTRY[card.position];
  const delay  = FLOAT_DELAYS[card.position];

  return (
    <div
      className={`absolute max-w-[278px] ${CARD_POSITIONS[card.position]}`}
      style={{
        // Slide-in on scroll
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible
          ? "translate(0, 0)"
          : `translate(${entry.x}px, ${entry.y}px)`,
        transition: `opacity 0.7s ease ${delay * 0.3 + 0.3}s, transform 0.7s ease ${delay * 0.3 + 0.3}s`,
        // Float after slide-in
        animation:  isVisible
          ? `floatCard 3.5s ease-in-out ${delay}s infinite`
          : "none",
      }}
    >
      <div className="rounded-2xl bg-white flex items-center justify-center border border-[#0AD855] backdrop-blur-sm p-3 shadow-xl gap-2">
        {/* Green thumb icon */}
        <div className="mb-2 flex h-20 w-20 items-center justify-center text-xs">
          <Image src={card.icon} width={45} height={45} />
        </div>
        <p className="text-sm leading-5 text-black"> <span className="font-bold">{card.boldText}</span>{card.text}</p>
      </div>
    </div>
  );
}

//  Floating avatar

function FloatingAvatar({ avatar, isVisible }) {
  return (
    <div
      className={`absolute ${avatar.style}`}
      style={{
        opacity:    isVisible ? 1 : 0,
        transition: `opacity 0.6s ease ${avatar.delay + 0.2}s`,
        animation:  isVisible
          ? `floatAvatar ${avatar.duration}s ease-in-out ${avatar.delay}s infinite`
          : "none",
      }}
    >
      <div className=" overflow-hidden rounded-2xl shadow-lg md:h-12 md:w-12">
        <Image
          src={avatar.src}
          alt="avatar"
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

//  Main section 

export default function AutomationsTiedToBuyerIntent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#EEF9FA]"
    >

      {/* Heading */}
      <div
        style={{
          opacity:    isVisible ? 1 : 0,
          transform:  isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
        className="relative z-10 mb-10 text-center"
      >
        <h2 className=" text-black font-degular font-bold text-center mt-20 mb-1 md:text-5xl">
          What Makes ClientForce Different
        </h2>
        <p className=" text-[#00000099] text-2xl mb-3">One setup → Perpetual campaigns.</p>
        <p className="text-black text-sm text-center">Agents don’t just automate tasks — they run the entire revenue cycle: find leads, engage across channels, <br /> handle objections on calls, send proposals, book meetings, and close. You oversee everything from a Unified <br /> Inbox with Lead Activity Timeline, Analytics, and DFY compliance guardrails.</p>
      </div>

      {/* Main visual area */}
      <div className="relative">

        {/* Floating avatars */}
        {AVATARS.map((avatar, i) => (
          <FloatingAvatar key={i} avatar={avatar} isVisible={isVisible} />
        ))}

        {/* Automation cards */}
        {AUTOMATION_CARDS.map((card) => (
          <AutomationCard key={card.id} card={card} isVisible={isVisible} />
        ))}

        {/* Person image — centered */}
        <div
          className="flex items-center justify-center"
          style={{
            opacity:    isVisible ? 1 : 0,  
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        >
          <img
            src="/images/solutions/clientforce_different_bg.png"
            alt=""
            width={791}
            height={551}
            className=""
            priority
          />
        </div>

      </div>

      {/* h-[520px] md:h-[480px]
      h-full w-auto object-contain */}


      <div className="absolute top-[-10%] right-0">
          <Image src="/images/solutions/left_bg.png" width={400} height={439} />
      </div>
       <div className="absolute top-[-10%] left-0">
          <Image src="/images/solutions/right_bg.png" width={400} height={439} />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translate(0,  0px);  }
          50%       { transform: translate(0, -8px);  }
        }
        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}