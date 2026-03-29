"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}




const CARD_DATA =[
    {
        title: (<>End-to-End, Not “Tool <br /> Soup”:</>),
        description: (<>One Agent Runs The Entire Motion—Prospect To Close.</>),
        image: "/images/how-it-works/why-it-wins1.png"
    },
    {
        title: "True Multichannel:",
        description: (<>Email + WhatsApp/SMS + LinkedIn + Voice — Coordinated, Not Siloed.</>),
         image: "/images/how-it-works/why-it-wins2.png"
    },
    {
        title: "Perpetual:",
        description: (<>Agents Never Sleep; Your Pipeline Never Stalls.</>),
        image: "/images/how-it-works/why-it-wins3.png"
    },
    {
        title: "Human-Level Selling: ",
        description: (<>Objections Handled, Proposals Personalized, Calls That Actually Close.</>),
         image: "/images/how-it-works/why-it-wins4.png"
    },
]




// Main 
export default function WhyItWins() {
  const [ref, visible] = useVisible();

  return (
    <section ref={ref} className=" py-8 md:py-16 px-6 lg:px-30 bg-[#EEF9FA]">

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-14px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        className="text-center mb-5 md:mb-10"
      >
        <h2 className="text-4xl lg:text-6xl font-extrabold text-black font-degular">
          Why It Wins
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto sm:px-30 md:px-0">
            { CARD_DATA.map( ( card, i ) => (
                <div key={i} className="flex items-center p-4 border border-gray-300 bg-white shadow-md rounded-2xl gap-8">
                    <div className="w-[50%]">
                        <Image src={card.image} width={203} height={203} />
                    </div>
                    <div className=" w-[50%]">
                        <h2 className="text-black font-bold text-sm sm:text-base mb-3">{card.title}</h2>
                        <p className="text-black font-normal text-sm sm:text-base">{card.description}</p>
                    </div>
                </div>
            ))}
      </div>

    </section>
  );
}