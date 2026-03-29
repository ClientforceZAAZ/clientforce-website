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

export default function PostCard({ post }) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(800).height(450).auto("format").url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlForImage(post.author.image).width(40).height(40).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
    >
      {/* Cover image */}
      {/* Cover image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src="/images/og-image.png"
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Category badge */}
        {post.categories?.[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
            {post.categories[0].title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 text-base font-bold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
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

        {/* Author + date */}
        <div className="flex items-center gap-2.5 border-t border-gray-100 pt-4">
          {authorImageUrl ? (
            <Image
              src={authorImageUrl}
              alt={post.author?.name || "Author"}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
              {post.author?.name?.[0] ?? "A"}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-gray-800">
              {post.author?.name ?? "Unknown"}
            </p>
            <p className="text-[11px] text-gray-400">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}