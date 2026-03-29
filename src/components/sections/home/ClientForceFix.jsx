import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientForceFix() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div
          className="bg-cover bg-center pt-10 font-degular"
          style={{ backgroundImage: "url('/images/the_fix_bg.png')" }}
        >
          <div className=" flex items-center justify-center">
            <h1 className=" font-bold text-xl lg:text-2xl bg-[#C4FAFF] px-4 lg:px-8 py-0.5 lg:py-2 rounded-[73px] w-fit text-center">
              The Fix
            </h1>
          </div>
          <h1 className="text-center font-bold text-5xl lg:text-7xl mt-2">Perpetual</h1>
          <h1 className="text-center font-bold text-5xl lg:text-7xl mt-0 lg:mt-2 text-white">
            Ai Sales Agents
          </h1>
          <div className="flex items-center justify-center mt-[-30px]">
             <Image
            src="/images/the_fix_image.png"
            alt=""
            width={407}
            height={513}
            className="w-3/5 h-auto "
            />
          </div>
           
        </div>
        <div className="   bg-[linear-gradient(180deg,#000015_0%,#000015_25%,#000015_50%,#000015_60%,#102338_85%,#28586d_100%)] flex flex-col gap-8 justify-center px-8 py-4 lg:pl-18">
        <p className=" text-lg md:text-xl text-white lg:max-w-[470px]">
            ClientForceAI runs <span className=" font-bold">complete, goal-based campaigns</span>—from discovery to booked call—without you micromanaging. 
        </p>
        <p className=" text-lg md:text-xl text-white lg:max-w-[470px]">
            Deploy one or many Agents for different targets and outcomes, then watch them <span className="font-bold">prospect, engage, call, propose</span>, and close on their own.
        </p>
        <Link href="#" className="font-bold text-[#FFFFFF99] border-[0.5px] w-fit flex items-center justify-center px-4 py-3 gap-2 rounded-md mt-2">
            See How It Works
            <img src="/icons/forward.svg" alt="forwardIcon" />
        </Link>
        </div>
      </div>
    </section>
  );
}
