import { getDocuments } from 'outstatic/server';

import WritingsClient from './writings-client';

export default async function WritingsPage() {
  // Get all posts with tags and sort by datePublished (most recent first)
  const posts = getDocuments('posts', [
    'title',
    'datePublished',
    'slug',
    'tags',
  ]).sort((a, b) => {
    const dateA = new Date(a.datePublished as string);
    const dateB = new Date(b.datePublished as string);
    return dateB.getTime() - dateA.getTime();
  });

  return <WritingsClient posts={posts} />;
}
