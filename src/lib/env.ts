export const dev = process.env.NODE_ENV === 'development'
export const projectId = process.env.SANITY_STUDIO_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.SANITY_STUDIO_SANITY_API_VERSION || '2024-11-08'
