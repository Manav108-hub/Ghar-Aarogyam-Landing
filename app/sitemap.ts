import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gharaarogyam.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // You can add more pages here as your site grows!
    // {
    //   url: 'https://gharaarogyam.in/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
