import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puicsh.paruluniversity.ac.in';

  const routes = [
    '/',
    '/committee',
    '/crc-info',
    '/privacy-policy',
    '/register',
    '/submission-info',
    '/terms-of-service',
    '/travel/accommodation',
    '/travel/how-to-reach',
    '/travel/near-by-attractions',
    '/travel/visa',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
