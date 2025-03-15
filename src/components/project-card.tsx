'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Props {
  project: {
    name: string;
    description: string;
    link: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-400">
          <Link href={project.link} target="_blank">
            <span className="text-white underline underline-offset-4">
              {project.name}
            </span>
          </Link>
          :
          <span className="ml-2 leading-6 text-gray-400">
            {project.description}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
