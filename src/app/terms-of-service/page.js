"use client";

import { useEffect, useState } from "react";
import LegalLayout from "@/components/sections/shared/LegalLayout";

const sections = [
  { id: "user-accounts", title: "User Accounts" },
  { id: "payments", title: "Payments" },
  {
    id: "cancellations-refunds",
    title: "Cancellations & Refunds",
  },
  { id: "intellectual-property", title: "Intellectual Property" },
  {
    id: "Third-Party Data Sharing and Disclosure",
    title: "Third-Party Data Sharing and Disclosure",
  },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
];

export default function TermsPage() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full overflow-y-auto">
        <LegalLayout>
          {/* TITLE */}
          <h1 className="text-center text-3xl sm:text-4xl font-bold font-degular mb-10">
            TERMS & CONDITIONS
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* SIDEBAR */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className=" sticky top-24">
                <nav className="bg-white border rounded-xl p-4 shadow-sm space-y-2">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all cursor-pointer
                    ${
                      active === sec.id
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    >
                      {sec.title}
                    </a>
                  ))}

                  <button
                    onClick={() => window.print()}
                    className="mt-4 w-full text-sm px-3 py-2 rounded-lg border hover:bg-gray-100 transition cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Print / Save as PDF
                  </button>
                </nav>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="space-y-6 text-justify font-dmsans text-gray-700 leading-relaxed">
              <p>
                These Terms and Conditions govern your use of Clientforce’s
                website, mobile applications, and other digital platforms, as
                well as any products or services provided by Clientforce.io.
                Please read these terms carefully and ensure that you understand
                them fully before using our services.
              </p>

              <p>
                By using Clientforce services, you agree to be bound by and
                comply with these Terms and Conditions. If you do not agree with
                any part of these terms, please do not use our services. Your
                use of our services constitutes your acceptance of these Terms
                and Conditions, and you agree to abide by them in all your
                interactions with Clientforce.io.
              </p>

              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at support@clientforce.io before
                using our services.
              </p>

              {/* USER ACCOUNTS */}
              <Section id="user-accounts" title="User Accounts">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    {" "}
                    <span className="font-bold">Account Creation:</span> To
                    access and utilize specific services offered by
                    Clientforce.io, you may be required to create a user
                    account. When creating your account, you agree to provide
                    accurate, complete, and up-to-date information. You are
                    responsible for maintaining the accuracy of your account
                    information and promptly updating it if there are any
                    changes.
                  </li>

                  <li>
                    {" "}
                    <span className="font-bold">Confidentiality:</span> You are
                    responsible for maintaining the confidentiality of your
                    account login credentials, including your username and
                    password. You must not share your account credentials with
                    others or allow anyone else to access your account. You are
                    solely responsible for any actions or activities that occur
                    under your account, whether or not you have authorized them.
                    If you suspect any unauthorized access to your account,
                    please notify us immediately at support@clientforce.io
                  </li>

                  <li>
                    {" "}
                    <span className="font-bold">Security:</span> You agree to
                    take appropriate security measures to protect your account
                    and to prevent unauthorized access. Clientforce.io will not
                    be liable for any losses or damages arising from
                    unauthorized access to your account due to your failure to
                    maintain the security of your account information.
                  </li>

                  <li>
                    {" "}
                    <span className="font-bold">Account Termination:</span>{" "}
                    Clientforce reserves the right to suspend or terminate your
                    account, at its discretion, if it believes that you have
                    violated these Terms and Conditions or engaged in any
                    unauthorized or fraudulent activities. You may also request
                    the termination of your account at any time by contacting
                    us.
                  </li>

                  <li>
                    {" "}
                    <span className="font-bold">Age Restriction:</span> You must
                    be at least 18 years of age or the age of legal majority in
                    your jurisdiction to create an account with Clientforce. If
                    you are creating an account on behalf of a legal entity, you
                    represent that you have the necessary authority to do so.
                  </li>
                </ol>
              </Section>

              {/* PAYMENTS */}
              <Section id="payments" title="User Accounts(Payments)">
                <ol className="list-decimal pl-6 space-y-4 text-justify">
                  <li>
                    <strong>Payment Obligation:</strong> By using Clientforce
                    services and making purchases through our platform, you
                    agree to pay all fees and charges associated with the
                    services or products you select and purchase. These fees may
                    include subscription fees, product costs, transaction fees,
                    and any applicable taxes.
                  </li>

                  <li>
                    <strong>Payment Methods:</strong> Clientforce.io accepts
                    payments through various payment methods, which may include
                    credit cards, debit cards, electronic wallets, or other
                    secure payment methods. You agree to provide accurate and
                    complete payment information and authorize us to charge the
                    specified payment method for the total amount of your
                    purchase, including any applicable fees and taxes.
                  </li>

                  <li>
                    <strong>Billing and Invoices:</strong> Depending on the
                    nature of the services or products you purchase, you may
                    receive billing statements or invoices. These documents will
                    detail the charges associated with your purchases. It is
                    your responsibility to review these documents and report any
                    discrepancies or issues promptly.
                  </li>

                  <li>
                    <strong>Subscription Services:</strong> If you are
                    subscribing to a service with recurring payments, you
                    authorize Clientforce.io to automatically charge the payment
                    method on file for the recurring fees at the specified
                    intervals, unless you cancel your subscription in accordance
                    with our cancellation policy.
                  </li>

                  <li>
                    <strong>Refunds:</strong> Refund policies for specific
                    products or services may be provided separately. Please
                    review the applicable refund policy to understand the
                    conditions under which refunds may be issued. Clientforce.io
                    reserves the right to issue refunds or credits at its
                    discretion.
                  </li>

                  <li>
                    <strong>Payment Disputes:</strong> If you believe there is
                    an error or unauthorized transaction related to your
                    payment, please contact our customer support team at
                    support@clientforce.io to address the issue. We will
                    investigate and resolve payment disputes in accordance with
                    our policies.
                  </li>

                  <li>
                    <strong>Currency:</strong> All payments and transactions are
                    processed in the currency specified on our platform. You are
                    responsible for any currency conversion fees or charges that
                    may apply if you make payments in a different currency.
                  </li>
                </ol>
              </Section>

              {/* CANCELLATIONS & REFUNDS */}
              <Section
                id="cancellations-refunds"
                title="Cancellations & Refunds"
              >
                <p className="text-sm text-gray-400 -mt-2">
                  Last Updated: June 7, 2025
                </p>
                <p>
                  At Clientforce, we are committed to providing our customers
                  with a reliable platform and excellent customer support. We
                  encourage customers to work closely with our Customer Success
                  team to resolve any issues and get the most value from the
                  platform.
                </p>

                {/* Refund Policy */}
                <h3 className="text-base font-semibold font-degular text-gray-900 mt-4">
                  Refund Policy
                </h3>

                <p className="font-semibold">14-Day Refund Eligibility</p>
                <p>
                  New subscriptions may be eligible for a refund request within
                  fourteen (14) days of the original purchase date, subject to
                  the terms below. Refund requests are intended to address
                  genuine technical or service-related issues that materially
                  prevent the customer from using the platform as intended and
                  which cannot be reasonably resolved by our Customer Success
                  team.
                </p>

                <p className="font-semibold">Resolution Before Refund</p>
                <p>
                  Before a refund can be approved, customers agree to give
                  Clientforce a reasonable opportunity to investigate and
                  resolve the issue. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Technical troubleshooting</li>
                  <li>Configuration assistance</li>
                  <li>Customer Success guidance</li>
                  <li>Training or onboarding support</li>
                  <li>Feature clarification</li>
                </ul>
                <p>
                  Where an issue can reasonably be resolved, Clientforce
                  reserves the right to provide a solution in lieu of issuing a
                  refund.
                </p>

                <p className="font-semibold">Non-Refundable Situations</p>
                <p>Refunds will generally not be granted for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Change of mind.</li>
                  <li>Lack of time to use the platform.</li>
                  <li>Failure to complete onboarding.</li>
                  <li>Failure to attend training sessions.</li>
                  <li>Failure to implement recommended setup steps.</li>
                  <li>Business conditions or lack of results.</li>
                  <li>Personal preference.</li>
                  <li>Purchasing by mistake.</li>
                  <li>Failure to cancel before the next billing cycle.</li>
                  <li>Requests made after the refund period has expired.</li>
                  <li>
                    Dissatisfaction arising from features or limitations that
                    were clearly disclosed prior to purchase.
                  </li>
                  <li>Services already substantially delivered.</li>
                  <li>
                    Custom implementation, consulting, done-for-you services, or
                    strategy work already performed.
                  </li>
                </ul>

                <p className="font-semibold">Done-For-You Services</p>
                <p>
                  Because DFY services involve significant time, strategy,
                  content creation, technical setup, and labor by multiple team
                  members, payments for custom services are generally
                  non-refundable once work has commenced. However, our team
                  remains committed to working with customers to address
                  concerns and complete the agreed deliverables.
                </p>

                <p className="font-semibold">Abuse of Refund Policy</p>
                <p>
                  Clientforce reserves the right to deny refund requests where
                  there is evidence of:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Abuse of the refund policy.</li>
                  <li>Repeated purchase-and-refund behavior.</li>
                  <li>Fraudulent activity.</li>
                  <li>Chargeback abuse.</li>
                  <li>
                    Unreasonable refusal to cooperate with Customer Success
                    efforts.
                  </li>
                </ul>
                <p>
                  All refund decisions are made at the sole discretion of
                  Clientforce.
                </p>

                {/* Cancellation Policy */}
                <h3 className="text-base font-semibold font-degular text-gray-900 mt-4">
                  Cancellation Policy
                </h3>

                <p>
                  Customers may cancel their subscription at any time.
                  Cancellation prevents future renewals but does not
                  automatically generate refunds for payments already processed.
                </p>

                <p className="font-semibold">Recurring Billing</p>
                <p>
                  Subscriptions renew automatically according to the selected
                  billing period unless cancelled before the renewal date.
                  Customers are responsible for managing their subscriptions and
                  submitting cancellation requests prior to the next billing
                  cycle.
                </p>

                <p className="font-semibold">Renewal Charges</p>
                <p>
                  Once a renewal payment has been successfully processed, it is
                  considered earned and is generally non-refundable. Requests
                  submitted after a successful rebill or renewal charge will not
                  normally qualify for a refund.
                </p>

                <p className="font-semibold">Cancellation Effective Date</p>
                <p>
                  Cancellation becomes effective at the end of the current
                  billing period. Customers will continue to have access to the
                  platform until the end of that paid term.
                </p>

                <p className="font-semibold">How to Cancel</p>
                <p>Customers may cancel by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Using the account billing settings; or</li>
                  <li>Contacting Clientforce Support.</li>
                </ul>
                <p>
                  We recommend submitting cancellation requests at least three
                  (3) business days before the next renewal date to allow
                  adequate processing time.
                </p>

                <p className="font-semibold">Our Commitment</p>
                <p>
                  Our goal is not simply to process transactions, but to help
                  our customers succeed. If you experience any issues, we
                  encourage you to contact our Customer Success team first. In
                  most cases, problems can be resolved quickly, allowing you to
                  continue benefiting from the Clientforce platform and
                  services.
                </p>
              </Section>

              {/* INTELLECTUAL PROPERTY */}
              <Section id="intellectual-property" title="Intellectual Property">
                <ol className="list-decimal pl-6 space-y-4 text-justify">
                  <li>
                    <strong>Ownership:</strong> All content available on
                    Clientforce.io platform, including but not limited to text,
                    graphics, images, logos, videos, software, and any other
                    materials, is protected by intellectual property laws and is
                    owned or licensed by Clientforce.io. You acknowledge and
                    agree that all intellectual property rights, including
                    copyrights, trademarks, and patents, associated with our
                    content belong to Clientforce.io or its licensors.
                  </li>

                  <li>
                    <strong>Use Restrictions:</strong> You may only use the
                    content and materials provided on our platform for your
                    personal, non-commercial use or as expressly permitted by
                    Clientforce.io in writing. You may not:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        a. Reproduce, modify, distribute, or publicly display
                        any of our content without prior written consent from
                        Clientforce.io.
                      </li>
                      <li>
                        b. Use our content for any unauthorized commercial
                        purposes, including but not limited to advertising,
                        marketing, or resale.
                      </li>
                      <li>
                        c. Reverse engineer, decompile, or disassemble any
                        software or code used on our platform.
                      </li>
                      <li>
                        d. Remove or modify any copyright notices, trademarks,
                        or other proprietary notices from our content.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>User-Generated Content:</strong> If you submit or
                    post user-generated content on our platform (such as
                    reviews, comments, or other contributions), you grant
                    Clientforce.io a non-exclusive, royalty-free, worldwide, and
                    perpetual license to use, reproduce, modify, adapt, publish,
                    translate, and distribute that content in any media, solely
                    for the purpose of providing and promoting our services.
                  </li>

                  <li>
                    <strong>Copyright Infringement:</strong> Clientforce.io
                    respects the intellectual property rights of others. If you
                    believe that any content on our platform infringes upon your
                    copyright, please contact us at support@clientforce.io with
                    the following information:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        a. A description of the copyrighted work you believe has
                        been infringed.
                      </li>
                      <li>
                        b. Identification of the specific content on our
                        platform that you claim infringes your copyright.
                      </li>
                      <li>
                        c. Your contact information, including your name,
                        address, telephone number, and email address.
                      </li>
                      <li>
                        d. A statement that you have a good-faith belief that
                        the use of the content is not authorized by the
                        copyright owner, its agent, or the law.
                      </li>
                      <li>
                        e. A statement, made under penalty of perjury, that the
                        information provided in your notice is accurate and that
                        you are the copyright owner or authorized to act on
                        their behalf.
                      </li>
                    </ul>
                  </li>
                </ol>
              </Section>

              {/* THIRD-PARTY DATA SHARING AND DISCLOSURE */}
              <Section
                id="Third-Party Data Sharing and Disclosure"
                title="Third-Party Data Sharing and Disclosure"
              >
                {" "}
                <p>
                  Clientforce does not sell, rent, or share Google user data
                  with third parties for advertising or marketing purposes.
                </p>
                <p>
                  Google user data is only used to provide the core
                  functionality of the platform, specifically to enable users to
                  send emails on their own behalf. We do not access, read, or
                  store Gmail inbox content. We may process and transmit limited
                  data necessary to deliver the service, such as sending email
                  requests through Google’s API. This data is not stored beyond
                  what is required for service functionality. We do not use
                  Google user data for profiling, analytics unrelated to the
                  service, or any unauthorized purposes.
                </p>{" "}
              </Section>

              {/* LIABILITY */}
              <Section id="liability" title="Limitation of Liability">
                <ol className="list-decimal pl-6 space-y-4 text-justify">
                  <li>
                    <strong>No Warranty:</strong> You acknowledge and agree that
                    your use of Clientforce.io services is at your own risk. We
                    provide our services “as-is” and “as available” without any
                    warranties, representations, or guarantees of any kind,
                    either expressed or implied. Clientforce.io disclaims all
                    warranties, including but not limited to warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement.
                  </li>

                  <li>
                    <strong>No Liability for Damages:</strong> To the fullest
                    extent permitted by applicable law, Clientforce.io, its
                    affiliates, directors, officers, employees, agents, and
                    partners shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, or any loss of
                    profits or revenues, whether incurred directly or
                    indirectly, or any loss of data, use, goodwill, or other
                    intangible losses, arising out of or in connection with your
                    use of our services.
                  </li>

                  <li>
                    <strong>No Liability for Third-Party Actions:</strong>{" "}
                    Clientforce.io is not responsible for any content, actions,
                    or conduct of third parties, including other users,
                    advertisers, or external links. You acknowledge and agree
                    that Clientforce.io shall not be liable for any such content
                    or actions.
                  </li>

                  <li>
                    <strong>Total Liability:</strong> In no event shall
                    Clientforce.io’s total liability to you for all claims,
                    whether in contract, tort (including negligence), or
                    otherwise, exceed the amount paid by you, if any, for
                    accessing or using our services during the twelve (12)
                    months preceding the event giving rise to the liability.
                  </li>

                  <li>
                    <strong>Applicable Law:</strong> Some jurisdictions do not
                    allow the exclusion or limitation of certain warranties or
                    liability for incidental or consequential damages.
                    Accordingly, some of the limitations set forth in this
                    section may not apply to you. In such cases, our liability
                    will be limited to the fullest extent permitted by
                    applicable law.
                  </li>

                  <li>
                    <strong>No Liability for Interruptions:</strong>{" "}
                    Clientforce.io shall not be liable for any interruptions,
                    delays, or technical issues that may affect the availability
                    or accessibility of our services, including but not limited
                    to server downtime, maintenance, or unforeseen circumstances
                    beyond our control.
                  </li>
                </ol>
              </Section>

              {/* TERMINATION */}
              <Section id="termination" title="Termination">
                <ol className="list-decimal pl-6 space-y-4 text-justify">
                  <li>
                    <strong>Termination by Clientforce.io:</strong>{" "}
                    Clientforce.io reserves the right, at its sole discretion,
                    to terminate or suspend your user account and access to our
                    services at any time and for any reason, including but not
                    limited to violations of these Terms and Conditions,
                    misconduct, fraudulent activities, or any other actions that
                    may harm Clientforce.io, its users, or third parties. Such
                    termination may be immediate and without prior notice.
                  </li>

                  <li>
                    <strong>Effect of Termination:</strong> Upon termination of
                    your account, you will no longer have access to our
                    services, and any data associated with your account may be
                    deleted or retained at Clientforce.io’s discretion.
                    Clientforce.io shall not be liable to you or any third party
                    for any consequences resulting from the termination of your
                    account.
                  </li>

                  <li>
                    <strong>Survival:</strong> Sections of these Terms and
                    Conditions that, by their nature, should survive termination
                    (including, but not limited to, the “Intellectual Property,”
                    “Limitation of Liability,” “Indemnification,” and “Governing
                    Law and Jurisdiction” sections) shall continue to apply even
                    after termination.
                  </li>

                  <li>
                    <strong>Your Termination Rights:</strong> You have the right
                    to terminate your account at any time by following the
                    account closure process provided by Clientforce.io. Please
                    note that certain information may be retained as required by
                    applicable laws or for legitimate business purposes.
                  </li>
                </ol>
              </Section>

              {/* GOVERNING LAW */}
              <Section id="governing-law" title="Governing Law">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    These Terms and Conditions, as well as your use of
                    Clientforce.io’s services, shall be governed by and
                    construed in accordance with the laws of Nigeria.
                  </li>
                  <li>
                    Any disputes or claims arising out of or relating to these
                    terms or your use of our services shall be subject to the
                    exclusive jurisdiction of the courts located within Nigeria.
                  </li>
                </ol>
              </Section>
            </div>
          </div>
        </LegalLayout>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-xl font-semibold font-degular text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
