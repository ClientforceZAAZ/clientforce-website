"use client";

import LegalLayout from "@/components/sections/shared/LegalLayout";

export default function DisclaimerPage() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full overflow-y-auto">
        <LegalLayout>
          {/* TITLE */}
          <h1 className="text-center text-3xl sm:text-4xl font-bold font-degular mb-10">
            DISCLAIMER
          </h1>

          {/* CONTENT */}
          <div className="max-w-4xl mx-auto space-y-6 text-justify font-dmsans text-gray-700 leading-relaxed">
            
            <p>
              Please note that this product does not provide any guarantee of income or success. The results achieved by the product owner or any other individuals mentioned are not indicative of future success or earnings. This website is not affiliated with Facebook or any of its associated entities. Once you navigate away from Facebook, the responsibility for the content and its usage lies solely with the user. All content on this website, including but not limited to text, images, and multimedia, is protected by copyright law and the Digital Millennium Copyright Act. Unauthorized copying, duplication, modification, or theft, whether intentional or unintentional, is strictly prohibited. Violators will be prosecuted to the fullest extent of the law. We want to clarify that JVZoo serves as the retailer for the products featured on this site. JVZoo is a registered trademark of BBC Systems Inc., a Florida corporation located in 18021, Broadway Street, Suite 126, Oviedo, FL 32765, USA, and is used with permission. The role of JVZoo as a retailer does not constitute an endorsement, approval, or review of these products or any claims, statements, or opinions used in their promotion.
            </p>

            <p>
              This website is not affiliated with Facebook or Meta Platforms, Inc. Any references to Facebook are for informational and educational purposes only. All results and earnings mentioned are examples and are not guarantees of performance. Your results may vary based on your effort, experience, and market conditions. We do not promise or guarantee any specific outcomes. By using this site or purchasing any products/services, you agree to take full responsibility for your own business decisions and outcomes.
            </p>

          </div>
        </LegalLayout>
      </div>
    </div>
  );
}