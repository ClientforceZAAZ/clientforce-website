import Image from "next/image"

export default function Trust() {
  return (
    <section className="py-10">
        <div className="flex items-center justify-center gap-6">
            <div>
                <Image src="/images/pricing/money_back_garantee.png" alt="" width={200} height={200} />
            </div>
            <div>
                <h1 className="text-[40px] font-bold font-degular mb-3">Trust & Risk-Reversal</h1>
                <p className="text-lg text-gray-500 mb-3"><span className="font-bold">14-Day No-Risk Start.</span> Upgrade/Downgrade <br /> Anytime. No Long-Term Contracts.</p>
                <p className="text-lg text-gray-500"><span className="font-bold">Data-Safe By Design:</span> Consent Controls, DNC <br /> Handling, Audit Trails.</p>
            </div>
        </div>
    </section>
  )
}
