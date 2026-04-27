import LegaHero from "@/components/sections/legal/LegalHero";
import LegalDetails from "@/components/sections/legal/LegalDetails";
import BuildConfidence from "@/components/sections/legal/BuildConfidence";



export const metadata = {
  title: "Legal | Clientforce AI",
  description: "",
  openGraph: {
    title: "Legal | Clientforce AI",
    description: "",
    url: "https://clientforceai.com/legal",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | Clientforce AI",
    description: "",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function Legal() {
  return (
    <main>
        <LegaHero />
        <LegalDetails />
        <BuildConfidence />
    </main>
  )
}
