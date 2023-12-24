'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <span
      className={`flex items-center ${className}`}
      onClick={() => router.back()}
    >
      <FaArrowLeft />
      <span className="ml-2 text-white hover:underline underline-offset-4 hover:cursor-pointer">
        back
      </span>
    </span>
  );
};

export default BackButton;
