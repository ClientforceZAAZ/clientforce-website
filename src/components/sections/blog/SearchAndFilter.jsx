"use client";

import { useState, useMemo } from "react";
import PostGrid from "./PostGrid";
import { MdOutlineSearch } from "react-icons/md";

const POSTS_PER_PAGE = 6;

export default function SearchAndFilter({ posts, categories }) {
  const [search, setSearch]           = useState("");
  const [activeCategory, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Reset visible count when search or category changes
  function handleSearch(value) {
    setSearch(value);
    setVisibleCount(POSTS_PER_PAGE);
  }

  function handleCategory(value) {
    setCategory(value);
    setVisibleCount(POSTS_PER_PAGE);
  }

  // Filter posts in memory on every keystroke / category change
  const filteredPosts = useMemo(() => {
    let result = posts ?? [];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((post) =>
        post.categories?.some((cat) => cat.slug.current === activeCategory)
      );
    }

    // Filter by search query — matches title, excerpt and tags
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (post) =>
          post.title?.toLowerCase().includes(q) ||
          post.excerpt?.toLowerCase().includes(q) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, search, activeCategory]);

  // Slice filtered posts to only show visibleCount
  const visiblePosts    = filteredPosts.slice(0, visibleCount);
  const hasMore         = visibleCount < filteredPosts.length;
  const remainingCount  = filteredPosts.length - visibleCount;

  function loadMore() {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  }

  return (
    <div>
      {/* ── Search + filter bar ── */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          {/* Search input */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
             <MdOutlineSearch size={25} />
            </span>
            <input
              type="text"
              placeholder="Search Posts..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-base text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
            />
            {search && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category filter pills — horizontally scrollable */}
          <div className="relative">
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => handleCategory("all")}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === "all"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => handleCategory(cat.slug.current)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === cat.slug.current
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mt-4 text-sm text-gray-400">
          {filteredPosts.length === 0
            ? "No posts found"
            : `Showing ${visiblePosts.length} of ${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {/* ── Post grid with paginated results ── */}
      <PostGrid posts={visiblePosts} />

      {/* ── Load more button ── */}
      {hasMore && (
        <div className="flex flex-col items-center gap-2 pb-24 pt-10">
          <button
            onClick={loadMore}
            className="flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            Load More
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
              +{Math.min(remainingCount, POSTS_PER_PAGE)}
            </span>
          </button>
          <p className="text-xs text-gray-400">
            {remainingCount} more post{remainingCount === 1 ? "" : "s"} remaining
          </p>
        </div>
      )}
    </div>
  );
}