import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Kelvin Amoaba',
  description:
    'I am Kelvin Amoaba, a software engineer obsessed with building products that solve real-world problems and understanding low-level systems.',
  openGraph: {
    images: ['https://i.imgur.com/mkixaLE.png'],
  },
};

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <body>
        <div className="flex justify-between">
          <div className="flex justify-center items-center m-4 w-10 h-10 border-2 border-white">
            <p>KA</p>
          </div>

          {/*           <div className="flex justify-center items-center px-3 m-4 h-10 border-2 border-white">
            <Link href="https://drive.google.com/file/d/1YPp-Dc4izII1kKv0PbwoDk30pINhKKVT/view?usp=sharing">
              Resume
            </Link>
          </div> */}
        </div>

        <main className="h-full min-h-screen">
          {children}
          <Analytics />
        </main>
        <footer
          className="flex justify-center items-center mt-20 w-full h-10 text-sm text-gray-400"
          suppressHydrationWarning
        >
          <p>
            © {new Date().getFullYear()} {'  '}
            Kelvin Amoaba
          </p>
        </footer>
      </body>
    </html>
  );
}
