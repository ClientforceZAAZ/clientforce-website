// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { FaArrowDown } from "react-icons/fa";

// function FAQItem({ faq, isOpen, onToggle, }) {
//   return (
//     <div className={`overflow-hidden rounded-2xl shadow-sm bg-white`}>
//       <button
//         onClick={onToggle}
//         className="flex w-full items-center justify-between cursor-pointer px-6 py-5 text-left"
//       >
//         <span className="text-xl font-bold text-black font-degular">{faq.question}</span>
//         <span
//           style={{ transition: "transform 0.3s ease" }}
//           className={`ml-4 shrink-0 text-gray-900 ${isOpen ? "rotate-180" : ""}`}
//         >
//           <FaArrowDown />
//         </span>
//       </button>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateRows: isOpen ? "1fr" : "0fr",
//           transition: "grid-template-rows 0.35s ease",
//         }}
//       >
//         <div className="overflow-hidden">
//           <p className="px-6 pb-5 text-base leading-6 text-gray-500">
//             {faq.answer}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function FAQ({ faqs = [], bgColor }) {
//   const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

//   function handleToggle(id) {
//     setOpenId((prev) => (prev === id ? null : id));
//   }

//   return (
//     <section className={`w-full bg-[#EEF9FA] ${bgColor} px-6 py-20`}>
//       <h2 className="mb-10 text-center text-5xl font-extrabold leading-tight text-black font-degular">
//         Frequently Asked <br /> Questions
//       </h2>

//       <div className="mx-auto flex max-w-xl flex-col gap-3">
//         {faqs.map((faq) => (
//           <FAQItem
//             key={faq.id}
//             faq={faq}
//             isOpen={openId === faq.id}
//             onToggle={() => handleToggle(faq.id)}
//           />
//         ))}
//       </div>

//       <div className="mt-12 flex items-center justify-center">
//         <div className="flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 shadow-lg">
//           <span className="text-3xl">🔥</span>
//           <Image
//             src="/icons/clientForceAi_logo.svg"
//             alt="Clientforce AI"
//             width={148}
//             height={28}
//             className="rounded-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
      <button onClick={onToggle} className="flex w-full items-center justify-between cursor-pointer px-6 py-5 text-left">
        <span className="text-lg lg:text-xl font-bold text-black font-degular">{faq.question}</span>
        <span style={{ transition: "transform 0.3s ease" }} className={`ml-4 shrink-0 text-gray-900 ${isOpen ? "rotate-180" : ""}`}>
          <FaArrowDown />
        </span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.35s ease" }}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-base leading-6 text-gray-500">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ faqs = [], bgColor }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className={`w-full bg-[#EEF9FA] ${bgColor} px-6 py-16 lg:py-20`}>
      <h2 className="mb-8 lg:mb-10 text-center text-4xl lg:text-5xl font-extrabold leading-tight text-black font-degular">
        Frequently Asked <br /> Questions
      </h2>
      <div className="mx-auto flex max-w-xl flex-col gap-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} isOpen={openId === faq.id} onToggle={() => handleToggle(faq.id)} />
        ))}
      </div>
      <div className="mt-10 lg:mt-12 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 shadow-lg">
          <span className="text-3xl">🔥</span>
          <Image src="/icons/clientForceAi_logo.svg" alt="Clientforce AI" width={148} height={28} className="rounded-full" />
        </div>
      </div>
    </section>
  );
}