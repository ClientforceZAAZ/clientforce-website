"use client";

import { useEffect, useState } from "react";
import LegalLayout from "@/components/sections/shared/LegalLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Your Information" },
  { id: "sharing", title: "Information Sharing" },
  { id: "security", title: "Security Measures" },
  { id: "choices", title: "Your Choices" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
];

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
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
              {/* OVERVIEW */}
              <Section id="overview" title="Overview">
                <p>
                  ClientForce (“we”, “our”, or “us”) is a SaaS platform that
                  helps businesses automate sales communication and lead
                  engagement across channels including email, WhatsApp, SMS, and
                  AI-powered calls.
                </p>

                <p>
                  This Privacy Policy explains how we collect, use, and protect
                  your information when you use our website, app, and
                  integrations (including Gmail and other connected accounts).
                </p>

                <p>
                  By using ClientForce, you agree to the terms of this Privacy
                  Policy.
                </p>

                <p>
                  This Privacy Policy is designed to help you understand how we
                  collect, use, disclose, and protect your personal information
                  when you use our services or interact with our website, mobile
                  applications, and other digital platforms. At Clientforce.io,
                  we are committed to safeguarding your privacy and ensuring the
                  security of your personal information.
                </p>

                <p>This Privacy Policy covers:</p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>What information we collect from you.</li>
                  <li>How we use the information we collect.</li>
                  <li>When and with whom we may share your information.</li>
                  <li>Your choices regarding your personal information.</li>
                  <li>
                    Security measures we have in place to protect your
                    information.
                  </li>
                  <li>
                    How you can contact us with questions or concerns about your
                    privacy.
                  </li>
                </ul>

                <p>
                  Please note that this Privacy Policy may be updated from time
                  to time to reflect changes in our practices or applicable
                  laws. We encourage you to review this policy periodically to
                  stay informed about how we are protecting your privacy.
                </p>

                <p>
                  If you do not agree with the terms of this Privacy Policy,
                  please do not use our services.
                </p>

                <p>Thank you for choosing Clientforce.io.</p>
              </Section>

              {/* INFORMATION */}
              <Section
                id="information-collection"
                title="Information We Collect"
              >
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Personal Information:</strong> We may collect
                    personal information that you provide to us voluntarily when
                    you interact with our services, such as when you:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Sign up for our services or create an account.</li>
                      <li>
                        Make a purchase or engage in a transaction with us.
                      </li>
                      <li>Contact our customer support team.</li>
                      <li>Participate in surveys, contests, or promotions.</li>
                    </ul>
                    <p className="mt-2">
                      This personal information may include, but is not limited
                      to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Your name.</li>
                      <li>Email address.</li>
                      <li>Phone number.</li>
                      <li>Billing information.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Usage Information:</strong> We automatically collect
                    data related to your use of our website, mobile
                    applications, and services. This information is collected
                    through various technologies and may include:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>IP Address:</strong> We may collect your IP
                        address, which helps us identify your location and
                        diagnose technical issues.
                      </li>
                      <li>
                        <strong>Device Information:</strong> We may gather
                        information about the device you use to access our
                        services, including device type, operating system, and
                        browser type.
                      </li>
                      <li>
                        <strong>Browsing History:</strong> We collect data about
                        your interactions with our website and services, such as
                        the pages you visit, the links you click, and the
                        duration of your visits.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Cookies and Tracking Technologies:</strong> To
                    enhance your experience and improve our services, we use
                    cookies and similar tracking technologies. These
                    technologies help us gather information about your online
                    behavior and preferences. Cookies are small text files that
                    are stored on your device. They allow us to recognize your
                    device and provide you with a more personalized experience.
                  </li>

                  <li>
                    You can control how cookies are used and stored on your
                    device through your browser settings. For more information
                    on how we use cookies, please refer to our Cookie Policy.
                  </li>

                  <li>
                    By using our services, you consent to the collection of this
                    information as described in this Privacy Policy.
                  </li>
                </ol>
              </Section>

              {/* USAGE */}
              <Section id="usage" title="How We Use Your Information">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Provide Services:</strong> We use your information
                    to deliver the services you request from us, which may
                    include:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Processing payments for purchases or transactions.
                      </li>
                      <li>
                        Fulfilling orders and delivering products or services.
                      </li>
                      <li>
                        Managing your account and providing customer support.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Improve Services:</strong> We analyze data to
                    continually enhance and optimize our services. This
                    includes:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Identifying areas for improvement.</li>
                      <li>Personalizing your experience.</li>
                      <li>Developing new features.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Communication:</strong> We may use your information
                    to communicate with you, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Sending updates about our services.</li>
                      <li>Providing promotional materials.</li>
                      <li>Sending important notices.</li>
                    </ul>
                  </li>

                  <li>
                    We will not use your personal information for purposes other
                    than those outlined without your consent or as required by
                    law.
                  </li>
                </ol>
              </Section>

              {/* SHARING */}
              <Section id="sharing" title="Information Sharing">
                <p>
                  At Clientforce.io, we take your privacy seriously and are
                  committed to using your information responsibly. We use the
                  information we collect for the following purposes:
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>Provide Services</li>
                  <li>Improve Services</li>
                  <li>Communication</li>
                </ol>
              </Section>

              {/* SECURITY */}
              <Section id="security" title="Security Measures">
                <p>
                  At Clientforce.io, we are committed to safeguarding your
                  personal information and maintaining the security of our
                  services. We implement the following security measures to
                  protect your data:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Data Encryption:</strong> We use industry-standard
                    encryption protocols to secure the transmission of your
                    personal information between your device and our servers.
                    This helps ensure that your data remains confidential during
                    transit.
                  </li>
                  <li>
                    <strong>Secure Storage:</strong>Your personal information is
                    stored in secure data centers with access controls to
                    prevent unauthorized access. We regularly assess and update
                    our storage security to protect against potential threats.
                  </li>
                  <li>
                    <strong>Access Control:</strong>We limit access to your
                    personal information to authorized personnel who require it
                    for legitimate business purposes. Access is granted based on
                    roles and responsibilities, and strict access controls are
                    enforced.
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> We conduct regular security
                    assessments and audits of our systems and services to
                    identify vulnerabilities and address potential threats
                    promptly.
                  </li>
                  <li>
                    <strong>Employee Training:</strong> Our employees are
                    trained on best practices for data security and privacy.
                    They are required to adhere to strict confidentiality
                    obligations.
                  </li>
                  <li>
                    <strong>Incident Response:</strong> In the event of a data
                    breach or security incident, we have established protocols
                    in place to detect, report, and respond to such incidents
                    promptly. We will notify you and relevant authorities as
                    required by applicable laws and regulations. While we take
                    these security measures seriously, it is essential to note
                    that no method of data transmission or storage is entirely
                    secure. However, we continually strive to update and improve
                    our security practices to protect your personal information
                    to the best of our ability. If you have any concerns about
                    the security of your data or suspect any unauthorized
                    activity, please contact us immediately at
                    support@clientforce.io
                  </li>
                </ol>
              </Section>

              {/* CHOICES */}
              <Section id="choices" title="Your Choices">
                <p>
                  We believe in providing you with control over your personal
                  information. Here are some of the choices you have regarding
                  your data:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Access, Update, and Delete:</strong> You have the
                    right to access, update, or request the deletion of your
                    personal information held by Clientforce.io. To do so,
                    please contact us at{" "}
                    <span className="text-blue-700">
                      support@clientforce.io
                    </span>{" "}
                    We will respond to your request in accordance with
                    applicable legal requirements.
                  </li>
                  <li>
                    <strong>Opt-Out of Marketing Communications:</strong> If you
                    no longer wish to receive promotional materials, updates, or
                    marketing communications from Clientforce.io, you can
                    opt-out at any time. You can typically do this by following
                    the “unsubscribe” link provided in our emails or by
                    adjusting your communication preferences in your account
                    settings. Please note that even if you opt-out of marketing
                    communications, you may still receive essential
                    service-related messages.
                  </li>
                  <li>
                    <strong>Cookie Settings:</strong> You can manage your cookie
                    preferences through your browser settings. Most web browsers
                    allow you to accept, reject, or delete cookies. Please refer
                    to your browser’s help section or documentation for
                    instructions on how to control cookies. However, disabling
                    cookies may affect your experience on our website, as
                    certain features may not function correctly.
                  </li>
                  <li>
                    <strong>Location:</strong> You can usually control the
                    collection of location information through your device
                    settings. If you have granted us permission to access your
                    device’s location, you can disable this access at any time.
                    Please be aware that exercising these choices may impact
                    your ability to fully utilize our services. We will not
                    discriminate against you for exercising your privacy rights.
                    If you have any questions or need assistance with exercising
                    your choices, please reach out to us at
                    support@clientforce.io. We are here to assist you and ensure
                    that your preferences are respected.
                  </li>
                </ol>
              </Section>

              {/* CHILDREN */}
              <Section id="children" title="Children's Privacy">
                <p>
                  Clientforce.io is committed to protecting the privacy of all
                  individuals, including children. However, our services are not
                  intended for or directed towards children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13 years of age. If you are under 13, please do not use
                  our services or provide us with any personal information. If
                  you believe that we may have inadvertently collected personal
                  information from a child under 13, please contact us
                  immediately at{" "}
                  <span className="text-blue-700">support@clientforce.io</span>{" "}
                  We will take appropriate steps to delete such information from
                  our records as soon as possible. Parents or legal guardians
                  who believe that their child may have provided personal
                  information to us without their consent should also contact us
                  at the provided email address to request the removal of that
                  information. We encourage parents and guardians to actively
                  monitor and supervise their children’s online activities to
                  ensure a safe and privacy-conscious experience.
                </p>
              </Section>

              {/* CHANGES */}
              <Section id="changes" title="Changes to This Policy">
                <p>
                  Clientforce.io may update and make changes to this Privacy
                  Policy from time to time to reflect changes in our practices
                  or to comply with legal requirements. When we make changes to
                  this Privacy Policy, we will post the updated version on our
                  website, and the revised date will be indicated at the top of
                  the policy. We encourage you to review this Privacy Policy
                  periodically to stay informed about how we are handling and
                  protecting your personal information. By continuing to use our
                  services after changes to this Privacy Policy have been
                  posted, you agree to be bound by the updated terms and
                  practices. If you do not agree with any modifications to this
                  Privacy Policy, please discontinue using our services and
                  contact us if you have any concerns. We will also make
                  reasonable efforts to notify you of significant changes to
                  this Privacy Policy through email or other means before the
                  changes take effect, where required by applicable law.
                </p>
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
