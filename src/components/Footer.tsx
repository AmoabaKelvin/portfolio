'use client';

import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const getFormattedDate = () => {
  return new Date().toLocaleString('en-US', {
    hour12: true,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  // Since we are only showing the minutes, we can update the time every minute
  // using the useEffect hook
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(getFormattedDate()), 1000 * 60;
    }),
      [currentDate];
  });

  return (
    <div className="sticky bottom-0 flex items-center justify-between w-full h-10 border-t border-gray-600 bg-gray-950">
      {/* Social Media Links */}
      <div className="flex items-center h-full">
        <p className="items-center justify-center hidden h-full px-2 border-r border-gray-600 md:flex">
          Find me on:
        </p>
        <FooterTab
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/kelvin-amoaba/"
        />
        <FooterTab Icon={FaTwitter} href="https://twitter.com/kelamoaba" />
        <FooterTab Icon={FaGithub} href="https://github.com/AmoabaKelvin" />
      </div>

      {/* Current Date */}
      <div className="mr-4">
        <p className="text-gray-500">{currentDate}</p>
      </div>
    </div>
  );
}

interface FooterTabProps {
  Icon: IconType;
  href: string;
}

const FooterTab = ({ Icon, href }: FooterTabProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="h-full">
      <div className="text-center border-r border-gray-600 h-full flex justify-center items-center hover:cursor-pointer transition-all duration-300 w-10 hover:bg-[#d6aa52] hover:text-white">
        <Icon />
      </div>
    </a>
  );
};
