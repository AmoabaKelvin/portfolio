import { MetadataRoute } from 'next';
import { getDocuments } from 'outstatic/server';

// fetch all posts from the file system and return as array
function getPosts(): string[] {
  const posts = getDocuments('posts', ['slug']);

  return posts.map((post) => post.slug as string);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  return [
    {
      url: 'https://kelvinamoaba.com',
      lastModified: new Date().toISOString(),
    },
    ...posts.map((slug) => ({
      url: `https://kelvinamoaba.com/blog/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
