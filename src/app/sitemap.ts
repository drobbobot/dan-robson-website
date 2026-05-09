import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://robson.studio',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://robson.studio/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://robson.studio/terms-of-service',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
