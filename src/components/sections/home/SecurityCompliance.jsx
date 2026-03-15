import Image from "next/image"


export default function SecurityCompliance() {
  return (
    <section className="px-28 py-16"> 
        <div className="flex items-center justify-between">
            <div className="">
                <h1 className="font-bold text-6xl max-w-[310px]">Compliance & <span className=" text-[#00000080]">Security</span></h1>
                <p className="text-[18px] text-[#00000099] max-w-[400px] mt-6">GDPR-friendly capture, TCPA consent, unsubscribe controls, DNC lists, domain verification, number reputation monitoring, and audit logs.</p>
            </div>
            <div>
                <Image src="/images/security_compliance.png" width={486} height={130} />
            </div>
        </div>
    </section>
  )
}
