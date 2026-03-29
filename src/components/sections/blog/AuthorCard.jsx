import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ROLE_STYLES = {
  administrator: "bg-purple-100 text-purple-700",
  editor:        "bg-blue-100 text-blue-700",
  viewer:        "bg-gray-100 text-gray-600",
};

const ROLE_LABELS = {
  administrator: "Administrator",
  editor:        "Editor",
  viewer:        "Viewer",
};

export default function AuthorCard({ author }) {
  if (!author) return null;

  const authorImageUrl = author.image
    ? urlForImage(author.image).width(80).height(80).url()
    : null;

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-300 bg-gray-50 p-5">
      {/* Avatar */}
      {authorImageUrl ? (
        <Image
          src={authorImageUrl}
          alt={author.name}
          width={56}
          height={56}
          className="rounded-full object-cover shrink-0"
        />
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
          {author.name?.[0] ?? "A"}
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <p className="text-sm font-bold text-gray-900">{author.name}</p>
          {author.role && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                ROLE_STYLES[author.role] ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {ROLE_LABELS[author.role] ?? author.role}
            </span>
          )}
        </div>
        {author.bio && (
          <p className="text-sm leading-relaxed text-gray-500">{author.bio}</p>
        )}
      </div>
    </div>
  );
}