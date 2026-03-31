import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_BY_SLUG_QUERY, RECENT_POSTS_QUERY, ALL_POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/sections/blog/PostBody";
import AuthorCard from "@/components/sections/blog/AuthorCard";
import PostCard from "@/components/sections/blog/PostCard";
import { client } from "@/sanity/lib/client";


export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: ALL_POST_SLUGS_QUERY,
  });

  if (!slugs) return []; // fallback

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}
// This allows dynamic generation for posts not fetched at build time
export const dynamicParams = true;

// Format date helper
function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate metadata dynamically per post
export async function generateMetadata({ params }) {
  try {
      const post = await sanityFetch({
      query: POST_BY_SLUG_QUERY,
      params: { slug: (await params).slug },
    });

    if (!post) return [];

    const coverImageUrl = post.coverImage
      ? urlForImage(post.coverImage).width(1200).height(630).url()
      : "https://clientforceai.com/images/og-image.png";

    return {
      title: post.seo?.metaTitle || `${post.title} | Clientforce AI Blog`,
      description: post.seo?.metaDescription || post.excerpt,
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        url: `https://clientforceai.com/blog/${post.slug.current}`,
        siteName: "Clientforce AI",
        images: [
          {
            url: coverImageUrl,
            width: 1200,
            height: 630,
            alt: post.coverImage?.alt || post.title,
          },
        ],
        type: "article",
        publishedTime: post.publishedAt,
        authors: post.author?.name ? [post.author.name] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        images: [coverImageUrl],
      },
    };
  } catch (error) {
    console.error('Failed to generate metadata:', error);
    return {
      title: 'Blog | Clientforce AI',
    };
  }
}

export default async function BlogPostPage({ params }) {
  const slug = (await params).slug;

   // Fetch post and recent posts in parallel with error handling
  let post = null;
  let recentPosts = [];

  try {
    const [postResult, recentResult] = await Promise.all([
      sanityFetch({ query: POST_BY_SLUG_QUERY, params: { slug } }),
      sanityFetch({ query: RECENT_POSTS_QUERY }),
    ]);
    
    post = postResult;
    recentPosts = recentResult || [];
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    // post remains null, recentPosts remains empty
  }

  // Show 404 if post not found
  if (!post) notFound();

  const coverImageUrl = post?.coverImage
  ? urlForImage(post.coverImage).width(1200).height(600).auto("format").url()
  : "/images/og-image.png";

  // Filter out current post from recent posts
  const relatedPosts = recentPosts?.filter((p) => p.slug.current !== slug) ?? [];

  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-6 pt-28 pb-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-green-600 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Categories */}
        {post.categories?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat.slug.current}
                className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold font-degular leading-tight text-gray-900">
          {post?.title || "Untitled Post"}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mb-5 text-lg leading-7 text-gray-500 text-justify">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + date */}
        <div className="flex items-center gap-3 border-t border-b border-gray-100 py-4">
          {post.author?.image ? (
            <Image
              src={urlForImage(post.author.image).width(44).height(44).url()}
              alt={post.author.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 font-bold text-white">
              {post.author?.name?.[0] ?? "A"}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {post.author?.name ?? "Unknown"}
            </p>
            <p className="text-xs text-gray-400">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </section>

      {/* ── Cover image */}
      <div className="mx-auto mb-10 max-w-3xl px-6">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={coverImageUrl || "/images/og-image.png"}
            alt={post.coverImage?.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── Post body ── */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <PostBody body={post?.body || []} />
      </section>

      {/* ── Author card ── */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Written by
        </h3>
        <AuthorCard author={post?.author || {}} />
      </section>

      {/* ── Related posts ── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-8 text-2xl font-extrabold text-gray-900">
              You might also like
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts?.length > 0 &&
                relatedPosts.map((p) => <PostCard key={p._id} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
