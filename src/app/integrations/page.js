import AllIntegrations from "@/components/sections/integrations/AllIntegrations";
import IntegrationsCards from "@/components/sections/integrations/IntegrationsCards";
import IntegrationsDetails from "@/components/sections/integrations/IntegrationsDetails";
import IntegrationsHero from "@/components/sections/integrations/IntegrationsHero";




export const metadata = {
  title: "Integration | Clientforce AI",
  description: "",
  openGraph: {
    title: "Integrations | Clientforce AI",
    description: "",
    url: "https://clientforceai.com/integrations",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations | Clientforce AI",
    description: "",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};


export default function Resources() {
  return (
    <main>
       <IntegrationsHero />
       <IntegrationsCards />
       <AllIntegrations />
       <IntegrationsDetails />
    </main>
  )
}
