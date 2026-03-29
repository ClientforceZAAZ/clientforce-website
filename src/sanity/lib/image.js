
import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export function urlForImage(source) {
  if (!source || !source.asset) return null;
  return imageBuilder.image(source);
}







// HOW TO USE THE ABOVE IN COMPONENTS

// Get a plain URL string
// urlForImage(post.coverImage).url()

// // Get a resized version
// urlForImage(post.coverImage).width(800).height(400).url()

// // Get with auto format (webp where supported)
// urlForImage(post.coverImage).width(800).auto("format").url()