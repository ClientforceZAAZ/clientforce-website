import Image from "next/image"

export default function Trust() {
  return (
    <section className="py-10">
        <div className="flex items-center justify-center gap-6">
            <div>
                <Image src="/images/pricing/money_back_garantee.png" alt="" width={200} height={200} className=" w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]" />
            </div>
            <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold font-degular mb-1 md:mb-3">Trust & Risk-Reversal</h1>
                <p className=" text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-1 sm:mb-3 leading-4 sm:leading-5 lg:leading-6"><span className="font-bold">14-Day No-Risk Start.</span> Upgrade/Downgrade <br /> Anytime. No Long-Term Contracts.</p>
                <p className="text-xs  sm:text-sm md:text-base lg:text-lg text-gray-500 leading-4 sm:leading-5 lg:leading-6"><span className="font-bold">Data-Safe By Design:</span> Consent Controls, DNC <br /> Handling, Audit Trails.</p>
            </div>
        </div>
    </section>
  )
}
