import AlwaysOnSalesLoop from "@/components/sections/how-it-works/AlwaysOnSale";
import HowItWorksHero from "@/components/sections/how-it-works/HowItWorksHero";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import ScaleManageOptimize from "@/components/sections/how-it-works/ScaleManageOptimize";
import AutomatedVsControl from "@/components/sections/how-it-works/AutomatedVsControl";
import WhyItWins from "@/components/sections/how-it-works/WhyItWins";
import LaunchDemo from "@/components/sections/how-it-works/LaunchDemo";

export const metadata = {
  title: "How It Works | Clientforce AI",
  description: "See how Clientforce AI works in 3 simple steps. Create your agent, connect lead sources, and launch a perpetual campaign.",
  openGraph: {
    title: "How It Works | Clientforce AI",
    description: "See how Clientforce AI works in 3 simple steps.",
    url: "https://clientforceai.com/how-it-works",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Clientforce AI",
    description: "See how Clientforce AI works in 3 simple steps.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function HowItWorksSection() {
  return (
    <main>
        <HowItWorksHero />
        <AlwaysOnSalesLoop />
        <HowItWorks />
        <ScaleManageOptimize />
        <AutomatedVsControl />
        <WhyItWins />
        <LaunchDemo />
    </main>
  )
}
