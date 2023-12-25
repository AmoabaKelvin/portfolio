import { projects } from '@/projects';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { IoMailOpen } from 'react-icons/io5';

const readBlogPostsFromFolder = async (): Promise<
  { title: string; date: Date; slug: string }[]
> => {
  const blogPosts = fs.readdirSync('./src/posts');
  const mdFiles = blogPosts.filter((post) => post.endsWith('.md'));
  const parsedMdFiles = mdFiles.map((post) => {
    return matter(fs.readFileSync(`./src/posts/${post}`, 'utf-8'));
  });

  const sortedBlogPosts = parsedMdFiles.sort((a, b) => {
    if (a.data.datePublished < b.data.datePublished) {
      return 1;
    } else {
      return -1;
    }
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
    <div className="max-w-3xl mx-auto">
      <main className="flex flex-col px-5 py-2 md:px-10">
        <div className="flex flex-col justify-center gap-2 mt-20">
          <p className="text-4xl font-extrabold">Kelvin Amoaba</p>
          <p className="mt-1">
            <span className="mr-2">🇬🇭</span>• software engineer • writer
          </p>
          <div>
            <p className="text-sm text-gray-400">
              understanding low level stuff • system architecture
            </p>
            <p className="text-sm text-gray-400">
              web architecture • compilers
            </p>
          </div>
          {/* social media icons, next to each other, gh, twitter, linkedin, hashnode, devto */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/AmoabaKelvin" target="_blank">
              <FaGithub size={21} />
            </a>
            <a href="https://twitter.com/kelamoaba" target="_blank">
              <FaTwitter size={21} />
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
          <div className="w-20 h-1 mx-auto my-10 border-t border-gray-400"></div>
        </div>

        {/* writings */}
        <div className="flex flex-col gap-2 mt-10">
          <p className="text-3xl font-bold">writings</p>
          <div className="flex flex-col gap-4 mt-2">
            {blogPosts.map((post) => (
              <div className="flex flex-col gap-1" key={post.title}>
                <p className="text-sm">
                  <span className="text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US')}:{' '}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="text-white hover:underline underline-offset-4 hover:cursor-pointer">
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
              <div className="flex flex-col gap-1" key={project.name}>
                <p className="text-sm text-gray-400">
                  <Link href={project.link} target="_blank">
                    <span className="text-white underline underline-offset-4">
                      {project.name}
                    </span>
                  </Link>
                  :
                  <span className="ml-2 text-sm text-gray-400">
                    {project.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
