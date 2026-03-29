

import Image from "next/image";

export default function AllSimpleSteps({ heading, steps, bgColor }) {
  return (
    <section className={` py-8 sm:py-16 relative ${bgColor} px-8`}>
      <h1 className="font-degular font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        {heading}
      </h1> 

      <div className="flex flex-col items-center mt-6 md:mt-12 gap-6 md:gap-14">

        {steps.map((step, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <div
              key={i}
              className="flex items-center justify-center border-[0.8px] border-gray-300 rounded-[26px] p-6 max-w-[955px] gap-8"
            >
              {/* Image first if not reversed, text first if reversed */}
              {!isReversed && (
                <div className="hidden md:block">
                  <Image src={step.image} alt={`step ${i + 1}`} width={460} height={300} />
                </div>
              )}

              <div>
                <div>
                  <Image src={step.badgeIcon} alt={`step badge ${i + 1}`} width={130} height={50} />
                </div>
                <div className="mt-6 max-w-[360px]">
                  <h1 className="font-bold text-2xl">{step.title}</h1>
                  <p className="text-base my-3">{step.description1}</p>
                  {step.description2 && (
                    <p className="text-base">{step.description2}</p>
                  )}
                </div>
              </div>

              {/* Image last if reversed */}
              {isReversed && (
                <div className="hidden md:block">
                  <Image src={step.image} alt={`step ${i + 1}`} width={460} height={300} />
                </div>
              )}
            </div>
          );
        })}

        {/* Only show connect arrows if there are at least 2 steps */}
        {steps.length >= 2 && (
          <div className="hidden xl:block xl:absolute right-[12%] top-96">
            <Image src="/icons/step1_to2.svg" width={30} height={200} />
          </div>
        )}
        {steps.length >= 3 && (
          <div className="hidden xl:block xl:absolute left-[12%] top-186">
            <Image src="/icons/step2_to3.svg" width={30} height={160} />
          </div>
        )}

        

      </div>
    </section>
  );
}





// import Image from "next/image";



// export default function AllSimpleSteps() {
//   return (
//     <section className=" py-16 relative bg-[#EEF9FA]">
//         <h1 className=' font-degular font-bold text-6xl text-center'>
//             All  in <span className=" text-transparent bg-linear-to-r from-[#13D111] to-[#0FC6D8] bg-clip-text">3 Simple Steps</span> 
//         </h1>
        
//         <div className="flex flex-col items-center mt-12 gap-14">
          
//             <div className=" flex items-center justify-center border-[0.8px] border-gray-300 rounded-[26px] p-6 max-w-[955px] gap-8">
//                 <div>
//                     <Image src="/images/all_simple_steps_card1.png" alt="card" width={460} height={300} />
//                 </div>
//                 <div>
//                     <div><Image src="/icons/all_simple_step1.svg" alt="step one" width={130} height={50}/></div>
//                     <div className="mt-6 max-w-[360px]">
//                         <h1 className="font-bold text-2xl">Create Your AI Sales Agent</h1>
//                         <p className=" text-base my-3">Pick a DFY playbook or use chat-style setup.</p>
//                         <p className=" text-base">Your Agent learns from your PDFs/links And <span className="font-bold">adopts your positioning, pricing, and proof.</span></p>
//                     </div>
//                 </div>
//             </div>
            
//             <div className=" flex items-center justify-center border-[0.8px] border-gray-300 rounded-[26px] p-6 max-w-[955px] gap-8">
//                 <div>
//                     <div><Image src="/icons/all_simple_step2.svg" alt="step two" width={130} height={50}/></div>
//                     <div className="mt-6 max-w-[360px]">
//                         <h1 className="font-bold text-2xl">Connect Lead Sources</h1>
//                         <p className=" text-base my-3">Enable the Finder for auto-prospecting, add <span className="font-bold">widgets</span> to your site, or capture from LinkedIn/GMB via <span className="font-bold">Chrome Extension</span> or upload your CSV</p>
//                     </div>
//                 </div>
//                 <div>
//                     <Image src="/images/all_simple_steps_card2.png" alt="card" width={460} height={300} />
//                 </div>
//             </div>
            
//             <div className=" flex items-center justify-center border-[0.8px] border-gray-300 rounded-[26px] p-6 max-w-[955px] gap-8">
//                 <div>
//                     <Image src="/images/all_simple_steps_card3.png" alt="card" width={460} height={300} />
//                 </div>
//                 <div>
//                     <div><Image src="/icons/all_simple_steps3.svg" alt="step three" width={130} height={50}/></div>
//                     <div className="mt-6 max-w-[360px]">
//                         <h1 className="font-bold text-2xl">Launch a Perpetual Campaign</h1>
//                         <p className=" text-base my-3">Your Agent runs a goal-aligned sequence (email → WhatsApp → voice), sends <span className="font-bold">dynamic proposals</span>, and books calls and close sales—<span className="font-bold">24/7</span> with compliance guardrails.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute right-40 top-96">
//                 <Image src="/icons/step1_to2.svg" width={66} height={395} />
//             </div>
//             <div className="absolute left-40 top-186">
//                 <Image src="/icons/step2_to3.svg" width={66} height={395} />
//             </div>
//         </div>
//     </section>
//   )
// }
