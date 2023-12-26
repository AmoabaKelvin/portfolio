import { Analytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Kelvin Amoaba',
  description:
    'Portfolio of Kelvin Amoaba, a software engineer based with amazing intellect for building amazing apps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        <div className="flex justify-between">
          <div className="flex items-center justify-center w-10 h-10 m-4 border-2 border-white ">
            <p>KA</p>
          </div>

          <div className="flex items-center justify-center h-10 px-3 m-4 border-2 border-white ">
            <Link href="https://drive.google.com/file/d/1YPp-Dc4izII1kKv0PbwoDk30pINhKKVT/view?usp=sharing">
              Resume
            </Link>
          </div>
        </div>

        <main className="h-full min-h-screen">
          {children}
          <Analytics />
        </main>
      </body>
      <footer className="flex items-center justify-center w-full h-10 mt-20 text-sm text-gray-400 ">
        <p>
          © {new Date().getFullYear()} {'  '}
          Kelvin Amoaba
        </p>
      </footer>
    </html>
  );
}
