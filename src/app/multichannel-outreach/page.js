import MultichannellHero from "@/components/sections/multichannel-outreach/MultichannelHero";
import WhyItMatters from "@/components/sections/multichannel-outreach/WhyItMatters";
import WhatsInside from "@/components/sections/multichannel-outreach/WhatsInside";
import HowItWorks from "@/components/sections/multichannel-outreach/HowItWorks";
import Proofs from "@/components/sections/multichannel-outreach/Proofs";
import ComplianceSafety from "@/components/sections/multichannel-outreach/ComplianceSafety";
import RunMultichannel from "@/components/sections/multichannel-outreach/RunMultichannel";
import FAQ from "@/components/sections/shared/FrequentlyAskedQuestions";

export const metadata = {
  title: "Multichannel Outreach | Clientforce AI",
  description:
    "Integrate email, messaging and AI for seamless meeting scheduling. Reach buyers across every channel with one coordinated sequence.",
  openGraph: {
    title: "Multichannel Outreach | Clientforce AI",
    description:
      "Reach buyers across every channel with one coordinated sequence.",
    url: "https://clientforceai.com/multichannel-outreach",
    siteName: "Clientforce AI",
    images: [
      {
        url: "https://clientforceai.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multichannel Outreach | Clientforce AI",
    description:
      "Reach buyers across every channel with one coordinated sequence.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function MultichannelOutreach() {
  return (
    <main>
      <MultichannellHero />
      <WhyItMatters />
      <WhatsInside />
      <HowItWorks />
      <Proofs />
      <ComplianceSafety />
      <RunMultichannel />
      <FAQ
        faqs={[
          {
            id: 1,
            question: "Will it spam prospects?",
            answer:
              "No. All outreach follows strict limits, business hours, and approved messaging templates, with human-like timing to keep interactions natural and compliant.",
          },
          {
            id: 2,
            question: "What if a channel isn’t available?",
            answer:
              "The system automatically adapts. If a contact is not reachable on one channel, it intelligently switches to another available option such as email, SMS, or voice to maintain the flow.",
          },
          {
            id: 3,
            question: "Can I customize the sequence by goal?",
            answer:
              "Yes. You can fully customize each sequence based on your objective, whether it is lead generation, follow ups, appointment booking, or reactivation campaigns.",
          },
        ]}
      />
    </main>
  );
}
