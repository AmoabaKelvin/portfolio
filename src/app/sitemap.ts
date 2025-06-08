import fs from 'fs';
import { MetadataRoute } from 'next';

// fetch all posts from the file system and return as array
function getPosts(): string[] {
  const files = fs.readdirSync(process.cwd() + '/src/posts');
  // get only md files and remove .md from file name
  return files.filter((fn) => fn.endsWith('.md')).map((fn) => fn.slice(0, -3));
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
