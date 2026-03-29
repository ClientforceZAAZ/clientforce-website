import { defineQuery } from "next-sanity";

// Fetch all published posts for the blog index page
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage {
      asset->,
      alt
    },
    author-> {
      name,
      image {
        asset->
      },
      role
    },
    categories[]-> {
      title,
      slug
    },
    tags
  }
`);

// Fetch a single post by slug for the individual post page
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage {
      asset->,
      alt
    },
    body,
    author-> {
      name,
      bio,
      image {
        asset->
      },
      role
    },
    categories[]-> {
      title,
      slug
    },
    tags,
    seo
  }
`);

// Fetch 3 recent posts for "related posts" section
export const RECENT_POSTS_QUERY = defineQuery(`
  *[_type == "post" && status == "published"] | order(publishedAt desc) [0..2] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage {
      asset->,
      alt
    },
    author-> {
      name,
      image {
        asset->
      }
    },
    categories[]-> {
      title,
      slug
    }
  }
`);

// Fetch all slugs for static generation
export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && status == "published"] {
    "slug": slug.current
  }
`);


// Fetch all categories
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`);