

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-lg font-sourceSerif leading-7 text-gray-700 text-justify">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="mb-6 mt-12 text-4xl font-extrabold font-degular leading-tight text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-5 mt-10 text-3xl font-bold font-degular leading-tight text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-8 text-2xl font-bold font-degular text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-6 text-xl font-semibold font-degular text-gray-900">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-green-500 pl-5 italic text-gray-600 text-justify">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="text-base leading-7 text-justify">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-base leading-7 text-justify">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through text-gray-400">{children}</span>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-green-700">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        
         <a href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-green-600 underline underline-offset-2 hover:text-green-800 transition-colors"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlForImage(value).width(800).auto("format").url();
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    codeBlock: ({ value }) => {
      if (!value?.code) return null;
      return (
        <div className="my-6 overflow-hidden rounded-xl bg-gray-900">
          {value.language && (
            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
              <span className="text-xs font-medium text-gray-400">
                {value.language}
              </span>
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </span>
            </div>
          )}
          <pre className="overflow-x-auto p-4">
            <code className="font-mono text-sm text-gray-100">
              {value.code}
            </code>
          </pre>
        </div>
      );
    },
  },
};

export default function PostBody({ body }) {
  if (!body) return null;

  return (
    <div className="w-full max-w-3xl mx-auto font-sourceSerif ">
      <PortableText value={body} components={portableTextComponents} />
    </div>
  );
}