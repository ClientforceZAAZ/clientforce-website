import Link from "next/link";
import Image from "next/image";

export default function PostNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <span className="mb-4 text-6xl"><Image src="/images/no-results.png" width={120} height={120} alt="Page not found" /></span>
      <h1 className="mb-3 text-3xl font-extrabold text-gray-900">
        Post Not Found
      </h1>
      <p className="mb-8 text-gray-500">
        This post may have been removed or the URL is incorrect.
      </p>
      <Link
        href="/blog"
        className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600 transition"
      >
        Back to Blog
      </Link>
    </main>
  );
}