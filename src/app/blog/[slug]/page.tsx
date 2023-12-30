import fs from 'fs';
import Markdown from 'react-markdown';
import BackButton from './back-button';

import matter from 'gray-matter';
import { Metadata, ResolvingMetadata } from 'next';
import Script from 'next/script';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blogSlug = params.slug;

  const blogPost = await getPostContent(blogSlug);

  return {
    title: blogPost.title,
    openGraph: {
      images: [blogPost.cover],
    },
    authors: [
      {
        name: 'Kelvin Amoaba',
        url: 'https://kelvinamoaba.live',
      },
    ],
    keywords: [...blogPost.tags],
    creator: 'Kelvin Amoaba',
    description: blogPost.content
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

const BlogDetailPage = async ({ params }: Props) => {
  const postContent = await getPostContent(params.slug);

  return (
    <div className="max-w-3xl px-5 mx-auto">
      <BackButton className="mt-10" />

      <div className="mt-10 text-xl font-bold md:text-3xl">
        {postContent.title}
      </div>
      <div className="mt-2 text-sm text-gray-400">
        Kelvin Amoaba • {new Date(postContent.date).toLocaleDateString()}
      </div>

      {postContent.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={postContent.cover}
          className="mt-10 rounded-md"
          alt={postContent.title}
        />
      )}

      <div className="max-w-3xl mt-10 font-light leading-8 prose text-white/90 dark:prose-invert">
        <Markdown
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <div className="w-full overflow-hidden rounded-md">
                  <SyntaxHighlighter
                    style={atomOneDarkReasonable}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {postContent.content}
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
