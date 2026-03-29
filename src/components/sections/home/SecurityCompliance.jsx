import Image from "next/image"


export default function SecurityCompliance() {
  return (
    <section className=""> 
        <div className="flex-col items-center justify-center md:flex md:flex-row md:justify-between px-6 sm:px-16 lg:px-28 py-16">
            <div className="flex flex-col items-center justify-center md:max-w-[430px]">
                <h1 className="font-bold text-4xl md:text-5xl  lg:text-6xl text-center md:text-left">Compliance & <span className=" text-[#00000080]">Security</span></h1>
                <p className="text-base lg:text-[18px] text-[#00000099] mt-6 text-center md:text-left">GDPR-friendly capture, TCPA consent, unsubscribe controls, DNC lists, domain verification, number reputation monitoring, and audit logs.</p>
            </div>
            <div className=" flex items-center justify-center">
                <Image src="/images/security_compliance.png" width={486} height={130} className=" w-[300px] h-[80px] sm:w-[400px] sm:h-[100px]  md:w-[486px] md:h-[130px]" />
            </div>
        </div>
    </section>
  )
}
