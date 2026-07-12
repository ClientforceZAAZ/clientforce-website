import ZapierDocs from "@/components/sections/docs/ZapierDocs";

const title = "Zapier Integration Guide | Clientforce AI";
const description =
  "How the Clientforce Zapier integration works: the OAuth authorization flow, the GraphQL endpoint behind it, and the 14 triggers and 7 actions available to your Zaps.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://clientforceai.com/docs/zapier",
  },
  openGraph: {
    title,
    description,
    url: "https://clientforceai.com/docs/zapier",
    siteName: "Clientforce AI",
    images: [{ url: "https://clientforceai.com/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default function ZapierDocsPage() {
  return (
    <main>
      <ZapierDocs />
    </main>
  );
}
