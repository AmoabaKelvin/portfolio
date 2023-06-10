'use client';

import Image from 'next/image';
import Typed from 'react-typed';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 py-24 md:mt-14 md:py-0">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col justify-center gap-5">
          <div>
            <span>Hello! I am</span>
            <h1 className={`text-5xl font-bold text-white`}>Kelvin Amoaba</h1>
          </div>
          <Typed
            strings={[
              'I am a FullStack Engineer',
              "I've built many great softwares",
              "You'll definitely love me on your team! ;^)",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
            className="text-md lg:text-xl text-[#d6aa52]"
          />
          <p className="text-md lg:text-lg leading-8">
            {'>'} As a software engineer, my passion lies in creating practical
            \ <br />
            {'>'} solutions for real-life problems. I possess a deep enthusiasm
            for \ <br />
            {'>'} innovation, utilizing my expertise to develop remarkable
            products \ <br />
            {'>'} that drive positive change.
          </p>
        </div>
        <Image
          src="/profile.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="hidden md:block"
        />
      </div>
    </main>
  );
}
