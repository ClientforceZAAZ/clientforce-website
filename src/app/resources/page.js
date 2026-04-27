import FeaturedResources from "@/components/sections/resources/FeaturedResources";
import LearningPath from "@/components/sections/resources/LearningPath";
import LiveOnDemandWebinar from "@/components/sections/resources/LiveOnDemandWebinar";
import ResourcesHero from "@/components/sections/resources/ResourcesHero";
import TemplatesAndDownloads from "@/components/sections/resources/TemplatesAndDownloads";



export const metadata = {
  title: "Resources | Clientforce AI",
  description: "",
  openGraph: {
    title: "Resources | Clientforce AI",
    description: "",
    url: "https://clientforceai.com/resources",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Clientforce AI",
    description: "",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function Resources() {
  return (
    <main>
        <ResourcesHero />
        <FeaturedResources />
        <LearningPath />
        <TemplatesAndDownloads />
        <LiveOnDemandWebinar />
    </main>
  )
}
