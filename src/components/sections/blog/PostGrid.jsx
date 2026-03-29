import PostCard from "./PostCard";

export default function PostGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <span className="mb-4 text-5xl">📝</span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          No posts yet
        </h3>
        <p className="text-gray-500">
          Check back soon — new content is on the way.
        </p>
      </div>
    );
  }

  // Separate featured post (first one) from the rest
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">

      {/* Featured post — full width */}
      <div className="mb-8">
        <FeaturedPostCard post={featuredPost} />
      </div>

      {/* Rest of the posts — 3 column grid */}
      {remainingPosts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

    </div>
  );
}

//  Featured post card 

import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function FeaturedPostCard({ post }) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(600).auto("format").url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlForImage(post.author.image).width(40).height(40).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 md:flex-row"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 md:h-auto md:w-1/2">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        ) : (
          <Image
            src="/images/og-image.png"
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Featured badge */}
        <span className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
          Featured
        </span>

        {/* Category badge */}
        {post.categories?.[0] && (
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
            {post.categories[0].title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="mb-3 text-2xl font-extrabold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-200 md:text-3xl">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mb-6 text-base leading-relaxed text-gray-500 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Author + date */}
        <div className="flex items-center gap-3">
          {authorImageUrl ? (
            <Image
              src={authorImageUrl}
              alt={post.author?.name || "Author"}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
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
      </div>
    </Link>
  );
}