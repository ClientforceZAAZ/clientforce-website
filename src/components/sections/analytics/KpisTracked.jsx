
// "use client";

// import { useEffect, useRef, useState } from "react";


// function useVisible(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
//       },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }



// export default function KpisTracked() {
//      const [ref, visible] = useVisible();
//   return (
//     <section ref={ref}
//       className="w-full px-6 lg:px-26 my-8"
//     >
      
//         <div
//         style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0px)" : "translateY(24px)",
//             transition: `opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s`,
//         }}
//         className={`rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center px-6 sm:px-8 py-6 sm:py-12 gap-8 sm:gap-18 bg-linear-to-bl from-[#0000000D] from-30% to-[#6BE8FD33] border border-gray-300`}
//         >
//             <div className="overflow-hidden sm:w-[50%]">
//             <img
//                 src=""
//                 alt=""
//                 // width={980}
//                 // height={737}
//                 // quality={100}
//                 className="object-cover w-[560px] h-[300px] bg-white"
//             />
//             </div>
//             <div className="flex-1 sm:w-[50%]">
//                 <h3 className={`font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#000000] `}>KPIs Tracked</h3>
//                 <p
//                 className={`text-[#000000] text-sm sm:text-base lg:text-lg mt-2 leading-relaxed`}
//                 >
//                Open rate • Click rate • Reply rate • Positive reply rate • Meetings booked • Proposal views/time-on-page • Win rate • Revenue influenced • Time-to- first-touch • Touches-to-meeting • Bounce/spam • Sender & number reputation
//                 </p>
//             </div>
//         </div>;
//     </section>
//   );
// }



const METRICS = [
  "Open Rate", "Click Rate", "Reply Rate", "Positive Reply Rate",
  "Meetings Booked", "Touches-To-Meeting", "Proposal Views/Time-On-Page",
  "Win Rate", "Revenue Influenced", "Time-To-First-Touch",
  "Bounce/Spam", "Sender & Number Reputation"
];

export default function KPISubSection() {
  return (
    <div className="w-full mx-auto px-6 pb-12">
      {/* Main Card Container */}
      <div className="bg-white border border-gray-100 rounded-[40px] p-8 shadow-sm flex flex-col items-center">
        
        {/* Header Pill */}
        <div className="bg-[#67E8F9] flex items-center gap-2 px-6 py-2.5 rounded-full mb-10 shadow-sm">
          {/* Replace with your actual icon component or <img> */}
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className="text-black"
          >
            <path d="M3 17l6-6 4 4 8-8" />
            <circle cx="3" cy="17" r="1" fill="currentColor" />
            <circle cx="9" cy="11" r="1" fill="currentColor" />
            <circle cx="13" cy="15" r="1" fill="currentColor" />
            <circle cx="21" cy="7" r="1" fill="currentColor" />
          </svg>
          <span className="text-black font-bold text-xl tracking-tight">
            KPIs Tracked
          </span>
        </div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          {METRICS.map((metric, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:scale-105 hover:shadow-md transition-all duration-200"
            >
              <span className="text-gray-800 font-medium text-sm md:text-base whitespace-nowrap">
                {metric}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}