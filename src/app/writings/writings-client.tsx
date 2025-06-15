'use client';

import { Link } from 'next-view-transitions';
import { useMemo, useState } from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';

interface Post {
  title: string;
  datePublished: string;
  slug: string;
  tags?: string;
}

interface WritingsClientProps {
  posts: any[];
}

export default function WritingsClient({ posts }: WritingsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      if (post.tags) {
        const postTags = post.tags.split(',').map((tag: string) => tag.trim());
        postTags.forEach((tag: string) => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts based on search query and selected tags
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Handle search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      // Check if query contains #tag syntax
      const hashTags = query.match(/#(\w+)/g);
      const searchTerms = query.replace(/#\w+/g, '').trim();

      filtered = filtered.filter((post) => {
        // Check title match
        const titleMatch = searchTerms
          ? post.title.toLowerCase().includes(searchTerms)
          : true;

        // Check hashtag match
        let hashTagMatch = true;
        if (hashTags && hashTags.length > 0) {
          const postTags = post.tags
            ? post.tags
                .split(',')
                .map((tag: string) => tag.trim().toLowerCase())
            : [];
          hashTagMatch = hashTags.every((hashTag) => {
            const tag = hashTag.substring(1).toLowerCase(); // Remove # prefix
            return postTags.includes(tag);
          });
        }

        return titleMatch && hashTagMatch;
      });
    }

    // Filter by selected tags (from tag buttons)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => {
        if (!post.tags) return false;
        const postTags = post.tags.split(',').map((tag: string) => tag.trim());
        return selectedTags.every((selectedTag) =>
          postTags.includes(selectedTag)
        );
      });
    }

    return filtered;
  }, [posts, searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <main className="flex flex-col px-5 py-2 md:px-10">
        {/* Header */}
        <div className="flex gap-4 items-center mt-10">
          <Link
            href="/"
            className="text-gray-600 transition-colors hover:text-black"
          >
            <FiArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold">writings</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mt-8">
          <FiSearch
            className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2"
            size={18}
          />
          <input
            type="text"
            placeholder="Search writings... (use #tag to filter by tags)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-3 pr-4 pl-10 w-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-1px] focus:translate-y-[-1px] transition-all"
          />
        </div>

        {/* Clear filters button */}
        {(selectedTags.length > 0 || searchQuery) && (
          <div className="mt-6">
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-6 mb-4">
          <p className="text-sm text-gray-600">
            {filteredPosts.length}{' '}
            {filteredPosts.length === 1 ? 'writing' : 'writings'} found
          </p>
        </div>

        {/* Posts List */}
        <div className="flex flex-col gap-6">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-500">
                No writings found matching your criteria.
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col gap-2 p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-medium text-black cursor-pointer hover:underline underline-offset-4">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="mt-1 ml-4 text-xs text-gray-500 whitespace-nowrap">
                      {new Date(
                        post.datePublished as string
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  {post.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.split(',').map((tag: string) => (
                        <button
                          key={tag.trim()}
                          onClick={() => toggleTag(tag.trim())}
                          className={`px-2 py-1 text-xs border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all ${
                            selectedTags.includes(tag.trim())
                              ? 'bg-black text-white'
                              : 'bg-white text-black hover:bg-gray-100'
                          }`}
                        >
                          {tag.trim()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
