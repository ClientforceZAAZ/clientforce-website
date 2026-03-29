import LocalBusinessesHero from "@/components/sections/local-businesses/LocalBusinessesHero";
import RevenueOutcomes from "@/components/sections/local-businesses/RevenueOutcomes";
import BuiltForLocalWins from "@/components/sections/local-businesses/BuiltForLocalWins";
import HowItWorks from "@/components/sections/local-businesses/HowItWorks";


export const metadata = {
  title: "For Local Services | Clientforce AI",
  description: "Capture inbound and outbound leads and call back instantly. Transform visitors into booked jobs with instant AI responses.",
  openGraph: {
    title: "For Local Services | Clientforce AI",
    description: "Transform visitors into booked jobs with instant AI responses.",
    url: "https://clientforceai.com/local-businesses",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Local Services | Clientforce AI",
    description: "Transform visitors into booked jobs with instant AI responses.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function LocalBusinesses() {
  return (
    <main>
        <LocalBusinessesHero />
        <RevenueOutcomes />
        <BuiltForLocalWins />
        <HowItWorks />
    </main>
  )
}
