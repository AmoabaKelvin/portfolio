import fs from 'fs';
import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getDocumentBySlug } from 'outstatic/server';
import Markdown from 'react-markdown';

import CodeSection from '@/app/blog/[slug]/code-section';

import BackButton from './back-button';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const blogSlug = params.slug;

  const blogPost = getDocumentBySlug('posts', blogSlug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'cover',
    'tags',
  ]);

  // if (!blogPost) {
  //   return notFound();
  // }

  return {
    title: blogPost?.title,
    openGraph: {
      images: [blogPost?.cover as string],
    },
    authors: [
      {
        name: 'Kelvin Amoaba',
        url: 'https://kelvinamoaba.com',
      },
    ],
    keywords: [...((blogPost?.tags as string[]) || [])],
    creator: 'Kelvin Amoaba',
    description: blogPost?.content
      .replace(/<[^>]*>/g, '')
      // remove #, ##, ###, etc
      .replace(/#+\s/g, '')
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .substring(0, 200),
  };
}

const getPostContent = async (slug: string) => {
  const singlePost = fs.readFileSync(
    process.cwd() + `/src/posts/${slug}.md`,
    'utf-8'
  );
  const parsedSinglePost = matter(singlePost);

  return {
    content: parsedSinglePost.content,
    title: parsedSinglePost.data.title,
    date: parsedSinglePost.data.datePublished,
    cover: parsedSinglePost.data.cover,
    tags: parsedSinglePost.data.tags,
  };
};

const BlogDetailPage = async (props0: Props) => {
  const params = await props0.params;
  // const postContent = await getPostContent(params.slug);

  const post = getDocumentBySlug('posts', params.slug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'cover',
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <div className="px-5 mx-auto max-w-3xl">
      <BackButton className="mt-10" />
      <div className="mt-10 text-xl font-bold md:text-3xl">{post.title}</div>
      <div className="mt-2 text-sm text-gray-500">
        Kelvin Amoaba • {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      {(post.cover as string) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover as string}
          className="mt-10 rounded-md"
          alt={post.title}
        />
      )}
      <div className="mt-10 space-y-10 max-w-3xl font-light leading-6 prose text-black/90 dark:prose-invert">
        <Markdown
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <div className="overflow-hidden w-full rounded-md">
                  <CodeSection
                    code={String(children).replace(/\n$/, '')}
                    language={match[1]}
                  />
                </div>
              ) : (
                <code className={className + ' text-black'} {...props}>
                  {children}
                </code>
              );
            },
            // change color of headings
            h1({ node, ...props }) {
              return <h1 className="text-black/90" {...props} />;
            },
            h2({ node, ...props }) {
              return <h2 className="text-black/90" {...props} />;
            },
            h3({ node, ...props }) {
              return <h3 className="mb-0 text-black/90" {...props} />;
            },
            h4({ node, ...props }) {
              return <h4 className="text-black/90" {...props} />;
            },
            h5({ node, ...props }) {
              return <h5 className="text-black/90" {...props} />;
            },
            // change color of bold text
            strong({ node, ...props }) {
              return <strong className="font-bold text-black" {...props} />;
            },
            // change color of italic text
            em({ node, ...props }) {
              return <em className="text-black/90" {...props} />;
            },

            blockquote({ node, ...props }) {
              return <blockquote className="text-black/90" {...props} />;
            },
            // change color of links
            a({ node, ...props }) {
              return <a className="text-black/90" {...props} />;
            },

            // remove background color in pre tags
            pre({ node, ...props }) {
              return <pre className="p-0 bg-transparent" {...props} />;
            },
          }}
        >
          {post.content}
        </Markdown>

        <Script
          src="https://giscus.app/client.js"
          data-repo="AmoabaKelvin/blog"
          data-repo-id="R_kgDOK9FHvA"
          data-category="Announcements"
          data-category-id="DIC_kwDOK9FHvM4Cb-MF"
          data-mapping="url"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark"
          data-lang="en"
          crossOrigin="anonymous"
          data-loading="lazy"
          async
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
