'use client';

import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

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
    <div className="flex justify-between items-center border-t border-gray-600 h-10 sticky bottom-0 w-full">
      {/* Social Media Links */}
      <div className="flex items-center h-full">
        <p className="hidden border-r border-gray-600 h-full md:flex justify-center items-center px-2">
          Find me on:
        </p>
        <FooterTab Icon={FaLinkedinIn} href="https://github.com" />
        <FooterTab Icon={FaTwitter} href="https://github.com" />
        <FooterTab Icon={FaGithub} href="https://github.com" />
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
    <div className="text-center border-r border-gray-600 h-full flex justify-center items-center hover:cursor-pointer transition-all duration-300 w-10 hover:bg-[#d6aa52] hover:text-white">
      <Icon />
    </div>
  );
};
