"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FeatureGrid() {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} className="px-6 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl px-6 py-2 rounded-full font-bold text-center leading-8 sm:leading-10 font-degular mb-8">
          Built For Local Wins
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        {/* LEFT — Large card (ONLY visible on lg+) */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="col-span-3 rounded-2xl overflow-hidden hidden lg:flex flex-col justify-center px-8 py-6 bg-white border border-[#00000024]"
        >
          <div>
            <h3 className="text-black font-bold text-xl leading-snug">
              Missed-Call Text-Back
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Missed-Call Text-Back: If You Can’t Answer, Your Agent Replies And
              Books Anyway.
            </p>
          </div>
          <div className="overflow-hidden mt-auto flex items-center justify-center">
            <img
              src="/images/local-businesses/missed_call.png"
              alt="missed call"
              className="object-cover rounded-xl h-[430px] w-full"
            />
          </div>
        </div>

        {/* RIGHT Side */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-6">
          {/* SAME CARD for mobile/tablet (hidden on lg) */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
            }}
            className="col-span-1 rounded-2xl overflow-hidden lg:hidden flex flex-col items-center justify-center px-8 py-6 bg-white border border-[#00000024]"
          >
            <div className="mb-4 w-full md:w-fit">
              <h3 className="text-black font-bold text-xl leading-snug">
                Missed-Call Text-Back
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Missed-Call Text-Back: If You Can’t Answer, Your Agent Replies
                And Books Anyway.
              </p>
            </div>
            <div className="overflow-hidden mt-auto flex items-center justify-center">
              <img
                 src="/images/local-businesses/missed_call.png"
                alt="domain_auth"
                className="object-cover rounded-xl w-full"
              />
            </div>
          </div>

          {/* Top Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(24px)",
              transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
            }}
            className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex lg:flex-row flex-col lg:items-start items-center justify-center gap-4 p-6"
          >
            <div className="flex-1">
              <h3 className="text-black font-bold text-xl leading-snug">
                Embeddable Widgets
              </h3>
              <p className="text-[15px] text-[#00000099]">
                Demo Booking, Trial → Paid, Reactivation, Local <br /> Quotes,
                Event Blitz.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                 src="/images/local-businesses/embeddable.png"
                alt="Verification & Hygiene"
                className="object-contain rounded-lg w-[330px] h-[200px] bg-[#bfc5ff] p-2"
              />
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="sm:flex sm:flex-row flex-col gap-3 md:gap-6 col-span-1 sm:col-span-2">
            {/* Finder V2 */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col items-center p-6 mb-3 sm:mb-0"
            >
              <div className="flex-1">
                <h3 className="text-black font-bold text-xl leading-snug">
                  Finder V2
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  Discover Nearby Prospects By Service, Zip, And
                  Radius—Auto-Ingested Daily.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4">
                <img
                   src="/images/local-businesses/finder_v22.png"
                  alt=""
                  className="object-contain rounded-lg w-full h-full bg-[#bfc5ff] p-2"
                />
              </div>
            </div>

            {/* WhatsApp + SMS Nudges */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
              }}
              className="bg-white border border-[#00000024] rounded-2xl overflow-hidden flex flex-col p-8 items-center"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src="/images/local-businesses/whatsapp_sms_nudges.png"
                  alt=""
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-black font-bold text-xl leading-snug">
                  WhatsApp + SMS Nudges
                </h3>
                <p className="text-[15px] text-[#00000099]">
                  WhatsApp + SMS Nudges: Friendly Reminders That Get Replies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-14 gap-6 mt-6">
        {/* AI Voice calls */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              AI Voice Calls
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Drop Chat/Callback/Proposal Widgets On Client Sites To Convert
              Traffic.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/local-businesses/ai_voice_callss.png"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Reputation-safe sending */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-4 flex flex-col items-center p-6"
        >
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Reputation-Safe Sending
            </h3>
            <p className="text-[15px] text-[#00000099]">
              Chrome Capture: One-click prospecting from LinkedIn/GMB →
              auto-routes into campaigns.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/local-businesses/reputation_safe_sending.png"
              alt=""
              className=" object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Simple proof */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s",
          }}
          className="bg-white border border-[#00000024] rounded-2xl overflow-hidden col-span-1 md:col-span-5 flex flex-col-reverse items-center p-6"
        >
          <div className="mt-4">
            <h3 className="text-black font-bold text-xl leading-snug">
              Simple Proof
            </h3>
            <p className="text-[15px] text-[#00000099] ">
              See Calls Booked, Proposals Sent, And Jobs Won—One Dashboard.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/local-businesses/simple_proof.png"
              alt=""
              //   width={200}
              //   height={134}
              //   quality={100}
              className=" object-contain rounded-lg bg-[#bfc5ff] p-2"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default function WhyThisMatters() {
  return (
    <section
      className="w-full  py-10"
      style={{
        background: "#E1F1F2",
      }}
    >
      <FeatureGrid />
    </section>
  );
}
