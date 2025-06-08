import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaHashnode, FaXTwitter } from 'react-icons/fa6';
import { IoMailOpen } from 'react-icons/io5';

import { cn } from '@/lib/utils';
import { projects } from '@/projects';

const readBlogPostsFromFolder = async (): Promise<
  { title: string; date: Date; slug: string }[]
> => {
  const blogPosts = fs.readdirSync('./src/posts');
  const mdFiles = blogPosts.filter((post) => post.endsWith('.md'));
  const parsedMdFiles = mdFiles.map((post) => {
    return matter(fs.readFileSync(`./src/posts/${post}`, 'utf-8'));
  });

  const sortedBlogPosts = parsedMdFiles.sort((a, b) => {
    const dateA = new Date(a.data.datePublished);
    const dateB = new Date(b.data.datePublished);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedBlogPosts.map((post) => {
    return {
      title: post.data.title,
      date: post.data.datePublished,
      slug: post.data.slug,
    };
  });
};

export default async function Home() {
  const blogPosts = await readBlogPostsFromFolder();
  return (
    <div className="mx-auto max-w-3xl">
      <main className="flex flex-col px-5 py-2 md:px-10">
        <div className="flex flex-col gap-2 justify-center mt-20">
          <p className="text-4xl font-extrabold">Kelvin Amoaba</p>
          <p className="mt-1">software engineer</p>
          <div>
            <p className="text-sm text-gray-500">
              system design • cloud • networking • backend • databases
            </p>
            <p className="text-sm text-gray-500">golang • compilers</p>
          </div>
          {/* social media icons, next to each other, gh, twitter, linkedin, hashnode, devto */}
          <div className="flex gap-4 items-center mt-2">
            <a href="https://github.com/AmoabaKelvin" target="_blank">
              <FaGithub size={21} />
            </a>
            <a href="https://twitter.com/kelamoaba" target="_blank">
              <FaXTwitter size={21} />
            </a>
            <a href="https://linkedin.com/in/kelvin-amoaba" target="_blank">
              <FaLinkedin size={21} />
            </a>
            <a href="https://hashnode.com/@AmoabaKelvin" target="_blank">
              <FaHashnode size={21} />
            </a>
            <a href="https://dev.to/amoabakelvin" target="_blank">
              <FaDev size={21} />
            </a>
            <a href="mailto:kel.amoaba@gmail.com" target="_blank">
              <IoMailOpen size={21} />
            </a>
          </div>
          <div className="mx-auto my-10 w-20 h-1 border-t border-gray-400"></div>
        </div>

        {/* writings */}
        <div className="flex flex-col gap-2 mt-10">
          <p className="text-3xl font-bold">writings</p>
          <div className="flex flex-col gap-4 mt-2">
            {blogPosts.map((post) => (
              <div className="flex flex-col gap-1" key={post.title}>
                <p className="text-sm">
                  <span className="font-light text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    : {'  '}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="text-black hover:underline underline-offset-4 hover:cursor-pointer text-md">
                      {post.title}
                    </span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* projects */}
        <div className="flex flex-col gap-2 mt-20">
          <p className="text-3xl font-bold">projects</p>
          <div className="flex flex-col gap-5 mt-2">
            {projects.map((project) => (
              // <ProjectCard project={project} key={project.name} />
              <div className="flex flex-col gap-1" key={project.name}>
                <p className="text-sm">
                  <Link
                    href={project.link}
                    className={cn(
                      'font-light text-gray-600 hover:underline underline-offset-4 hover:cursor-pointer',
                      {
                        'pointer-events-none': !project.link,
                      }
                    )}
                  >
                    {project.name}
                  </Link>
                  :<span className="ml-2 leading-6">{project.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
