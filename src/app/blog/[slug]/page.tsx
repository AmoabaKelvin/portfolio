import fs from "fs";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import BackButton from "./back-button";

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

const BlogDetailPage = async (props0: Props) => {
  const params = await props0.params;
  const postContent = await getPostContent(params.slug);

  return (
    <div className="px-5 mx-auto max-w-3xl">
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
      <div className="mt-10 space-y-10 max-w-3xl font-light leading-8 prose text-white/90 dark:prose-invert">
        <Markdown
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <div className="overflow-hidden w-full rounded-md">
                  <SyntaxHighlighter
                    style={atomOneDarkReasonable}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className + ' text-white'} {...props}>
                  {children}
                </code>
              );
            },
            // change color of headings
            h1({ node, ...props }) {
              return <h1 className="text-yellow-500" {...props} />;
            },
            h2({ node, ...props }) {
              return <h2 className="text-yellow-500" {...props} />;
            },
            h3({ node, ...props }) {
              return <h3 className="mb-0 text-yellow-500" {...props} />;
            },
            h4({ node, ...props }) {
              return <h4 className="text-yellow-500" {...props} />;
            },
            h5({ node, ...props }) {
              return <h5 className="text-yellow-500" {...props} />;
            },
            // change color of bold text
            strong({ node, ...props }) {
              return <strong className="font-bold text-white" {...props} />;
            },
            // change color of italic text
            em({ node, ...props }) {
              return <em className="text-yellow-500" {...props} />;
            },

            blockquote({ node, ...props }) {
              return <blockquote className="text-yellow-500" {...props} />;
            },
            // change color of links
            a({ node, ...props }) {
              return <a className="text-yellow-500" {...props} />;
            },

            // remove background color in pre tags
            pre({ node, ...props }) {
              return <pre className="p-0 bg-transparent" {...props} />;
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
