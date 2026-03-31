// import { sanityFetch } from "@/sanity/lib/live";
// import { ALL_POSTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
// import BlogHero from "@/components/sections/blog/BlogHero";
// import SearchAndFilter from "@/components/sections/blog/SearchAndFilter";

// export const metadata = {
//   title: "Blog | Clientforce AI",
//   description:
//     "Practical guides, product updates and sales frameworks from the Clientforce team — built for teams that want to grow faster.",
//   openGraph: {
//     title: "Blog | Clientforce AI",
//     description:
//       "Practical guides, product updates and sales frameworks from the Clientforce team — built for teams that want to grow faster.",
//     url: "https://clientforceai.com/blog",
//     siteName: "Clientforce AI",
//     images: [
//       {
//         url: "https://clientforceai.com/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Clientforce AI Blog",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Blog | Clientforce AI",
//     description:
//       "Practical guides, product updates and sales frameworks from the Clientforce team.",
//     images: ["https://clientforceai.com/images/og-image.png"],
//   },
// };

// export default async function BlogPage() {
//   const [{ data: posts }, { data: categories }] = await Promise.all([
//     sanityFetch({ query: ALL_POSTS_QUERY }),
//     sanityFetch({ query: ALL_CATEGORIES_QUERY }),
//   ]);

//   return (
//     <main>
//       <BlogHero />
//       <SearchAndFilter posts={posts} categories={categories} />
//     </main>
//   );
// }


import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_POSTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogHero from "@/components/sections/blog/BlogHero";
import SearchAndFilter from "@/components/sections/blog/SearchAndFilter";

export const metadata = {
  title: "Blog | Clientforce AI",
  description:
    "Practical guides, product updates and sales frameworks from the Clientforce team — built for teams that want to grow faster.",
  openGraph: {
    title: "Blog | Clientforce AI",
    description:
      "Practical guides, product updates and sales frameworks from the Clientforce team — built for teams that want to grow faster.",
    url: "https://clientforceai.com/blog",
    siteName: "Clientforce AI",
    images: [
      {
        url: "https://clientforceai.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clientforce AI Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Clientforce AI",
    description:
      "Practical guides, product updates and sales frameworks from the Clientforce team.",
    images: ["https://clientforceai.com/images/og-image.png"],
  },
};

export default async function BlogPage() {
  let posts = [];
  let categories = [];

  try {
    const [postsResult, categoriesResult] = await Promise.all([
      sanityFetch({ query: ALL_POSTS_QUERY }),
      sanityFetch({ query: ALL_CATEGORIES_QUERY }),
    ]);
    
    posts = postsResult?.data || [];
    categories = categoriesResult?.data || [];
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    // posts and categories remain empty arrays
  }

  return (
    <main>
      <BlogHero />
      <SearchAndFilter posts={posts} categories={categories} />
    </main>
  );
}

