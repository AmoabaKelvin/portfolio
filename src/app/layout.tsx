import { JetBrains_Mono } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({ weight: '400', subsets: ['latin'] });

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
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Header />
        <Navigation />
        <main className="h-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
