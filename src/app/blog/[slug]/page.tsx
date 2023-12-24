import fs from 'fs';
import Markdown from 'react-markdown';
import BackButton from './back-button';

import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  };
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
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
        <img src={postContent.cover} className="mt-10 rounded-md" />
      )}

      <div className="max-w-3xl mt-10 leading-7 prose dark:prose-invert">
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
      </div>
    </div>
  );
};

export default BlogDetailPage;
