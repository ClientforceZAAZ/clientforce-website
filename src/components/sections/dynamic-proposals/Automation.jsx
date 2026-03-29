"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Data 

const AUTOMATION_CARDS = [
  {
    id: 1,
    text: 'If "Time On Pricing > 60s" → Agent Sends Value/ROI Follow-Up.',
    position: "top-left",
  },
  {
    id: 2,
    text: 'If "Opened ≥ 3 Times/No Reply" → Agent Places A Courteous AI Call.',
    position: "top-right",
  },
  {
    id: 3,
    text: 'If "Accepted" → Send Onboarding Sequence + Invoice/Contract.',
    position: "bottom-left",
  },
  {
    id: 4,
    text: 'If "No View In 48h" → Nudge With A Shorter Summary.',
    position: "bottom-right",
  },
];

const AVATARS = [
  { src: "/images/dynamic-proposals/icons/automation-avatar1.svg", style: "top-[-10%] left-[24%]",  delay: 0,    duration: 3.2 },
  { src: "/images/dynamic-proposals/icons/automation-avatar2.svg", style: "top-[-10%] right-[30%]", delay: 0.6,  duration: 2.8 },
  { src: "/images/dynamic-proposals/icons/automation-avatar3.svg", style: "top-[5%] right-[3%]", delay: 1.1,  duration: 3.5 },
  { src: "/images/dynamic-proposals/icons/automation-avatar4.svg", style: "top-[5%] left-[2%]", delay: 0.4, duration: 3.0 },
];

// Card position mapping to Tailwind classes
const CARD_POSITIONS = {
  "top-left":     "top-0 sm:top-[12%] left-[25%] sm:left-[4%]  lg:left-[22%] ",
  "top-right":    "top-[25%] sm:top-[12%] right-[25%] sm:right-[4%] lg:right-[24%] ",
  "bottom-left":  "top-[50%] sm:top-[43%] left-[25%] sm:left-[4%]  lg:left-[22%] ",
  "bottom-right": "top-[75%] sm:top-[43%] right-[25%] sm:right-[4%] lg:right-[24%]",
};

// Slide-in direction per card
const CARD_ENTRY = {
  "top-left":     { x: -40, y: -20 },
  "top-right":    { x:  40, y: -20 },
  "bottom-left":  { x: -40, y:  20 },
  "bottom-right": { x:  40, y:  20 },
};

// Float animation offsets per card (so they don't all move in sync)
const FLOAT_DELAYS = {
  "top-left":     0,
  "top-right":    0.8,
  "bottom-left":  1.4,
  "bottom-right": 2.1,
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
      <div className="rounded-2xl bg-[#FFFFFF1A] backdrop-blur-sm border border-white/10 p-3 shadow-xl">
        {/* Green thumb icon */}
        <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs">
          <Image src="/images/dynamic-proposals/icons/Thumbs Up.svg" width={29} height={29} />
        </div>
        <p className="text-sm leading-relaxed text-gray-200">{card.text}</p>
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
      className="relative w-full overflow-hidden"
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
        <h2 className=" text-white font-bold text-center mt-10 sm:mt-20 text-3xl sm:text-4xl md:text-5xl font-degular">
          Automations Tied To <br /> Buyer Intent
        </h2>
      </div>

      {/* Main visual area */}
      <div className="relative h-[520px] md:h-[480px]">

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
          className=" hidden sm:block sm:absolute left-[65%] top-0 z-10 h-full -translate-x-1/2"
          style={{
            opacity:    isVisible ? 1 : 0,
            transform:  isVisible
              ? "translateX(-50%) translateY(0)"
              : "translateX(-50%) translateY(30px)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        >
          <Image
            src="/images/dynamic-proposals/automations-person.png"
            alt="Automations person"
            width={928}
            height={874}
            className="h-full w-auto object-contain object-bottom"
            priority
          />
        </div>

      </div>

      <div className="absolute bottom-0 left-0">
          <Image src="/images/dynamic-proposals/automation_left_bg.png" width={694} height={439} />
      </div>
       <div className="absolute bottom-0 right-0">
          <Image src="/images/dynamic-proposals/automation_right_bg.png" width={694} height={439} />
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