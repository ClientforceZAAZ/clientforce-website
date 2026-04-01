// import { sanityFetch as originalSanityFetch } from './live'

// export async function sanityFetch({ query, params = {} }) {
//   try {
//     return await originalSanityFetch({ query, params })
//   } catch (error) {
//     console.error('Sanity fetch failed:', error)
//     return null;
//   }
// }

import { client } from './client'

export async function sanityFetch({ query, params = {} }) {
  try {
    const data = await client.fetch(query, params)
    return { data } // Return object with data property
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    return { data: null } // Consistent return shape
  }
}