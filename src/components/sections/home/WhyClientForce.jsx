"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";


const feautures = [
    {
        image: "/images/alwaysOnCard.png",
        title: "Always-On Pipeline",
        description: "Fresh leads added daily, automatically.",
    },

     {
        image: "/images/human_level.png",
        title: "Human-Level Follow-Up ",
        description: "AI calls + dynamic proposals that feel personal.",
    },

     {
        image: "/images/human_follow_up.png",
        title: "Single Smart Inbox",
        description: "Every email, call, and chat in one thread.",
    },

     {
        image: "/images/revenue_impact.png",
        title: "Real Revenue Impact",
        description: "Teams report 3–5× more conversations.",
    }
];


function FeautureCard ({ image, title, description, index, isVisible }) {

    return(
        <div 
          style={ {
            transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
          }}
         className="font-degular flex flex-col items-center text-center gap-3 transition ease-in-out border border-gray-200 rounded-3xl pb-4 shadow-md">
            <div className="w-full overflow-hidden">
                <Image src={image} alt={title} width={660} height={480} className="w-full h-auto"/>
            </div>
            <div className="px-2">
                <p className=" font-bold text-black text-lg">{title}</p>
                <p className=" text-lg text-black px-2">{description}</p>
            </div>
        </div>
    )
};



export default function WhyClientForce() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect( () => {
     const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setIsVisible(true);
            observer.disconnect;
          }
        },
        { threshold: 0.1 }
     );
     if(sectionRef.current) observer.observe(sectionRef.current);
     return() => observer.disconnect();

  },[]);


  return (
    <section ref={sectionRef} className=" w-full py-8 sm:py-16 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {feautures.map((feauture, i) => (
          <FeautureCard key={feauture.title} index={i} isVisible={isVisible} {...feauture} />
        ))}
      </div>
      <h1 className="text-center font-bold font-degular leading-8 text-4xl lg:text-[50px] mt-24">
        Why Clientforce & <span className=" text-[#787878]">Ai Sales Agents</span>
      </h1>
      <div className="max-w-[850px] mt-14 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 font-dm">
        <div className=" flex flex-col items-center text-center gap-3 border-gray-200 border-[0.5px] rounded-[18.53px]">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/manual_prospecting.png"
              alt="Manual Prospecting Is Breaking Your Pipeline"
              width={660}
              height={480}
              className="w-full h-auto"
            />
          </div>
          <div className=" px-6 text-left mt-3 mb-8">
            <p className=" font-bold text-black text-xl max-w-[315px]">Manual Prospecting Is Breaking Your Pipeline</p>
            <p className=" text-base text-[#00000099] pr-4 mt-2">Spending hours scraping lists and chasing cold leads kills momentum. ClientForce <span className=" font-bold">auto-discovers</span> and ingests new prospects daily—so your pipeline <span className=" font-bold">refills itself.</span></p>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 border-gray-200 border-[0.5px] rounded-[18.53px]">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/missed_leads.png"
              alt= "Missed Leads & Inconsistent Follow-up Cost You Sales"
              width={660}
              height={480}
              className="w-full h-auto"
            />
          </div>
          <div  className=" px-6 text-left mt-3 mb-8">
            <p className=" font-bold text-black text-xl max-w-[315px]">Missed Leads & Inconsistent Follow-up Cost You Sales</p>
            <p className=" text-base text-[#00000099] pr-4 mt-2">Slow replies, forgotten threads, and one-channel outreach leave money on the table. ClientForce <span className="font-bold">follows up across every channel and never misses a step.</span></p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-26 -z-10">
        <img src="images/blur_169.png" alt="" />
      </div>
      <div className="absolute right-0 top-26 -z-10">
        <img src="images/blur_170.png" alt="" />
      </div>



       <Image
            src="/icons/why_left.svg"
            width={40}
            height={40}
             style={{
              position: "absolute",
              top: "25rem",
              left: "0.5rem",
            }}
        />
         <Image
            src="/icons/why_right.svg"
            width={40}
            height={40}
             style={{
              position: "absolute",
              top: "25rem",
              right: "0.5rem",
            }}
        />
    </section>
  );
}




