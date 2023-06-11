import React from 'react';
import { FaGithub, FaPython, FaNodeJs } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = () => {
  return (
    <div className="border rounded glare glow">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span>Project Name</span>
          <div className="space-x-2 flex">
            <FaGithub className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
            <TbWorldWww className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
        <div className="bg-gray-800 rounded p-4 mt-2 glare">
          <p className="text-white">
            <p className="text-sm text-slate-400 mb-1">$ description.sh</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            consequatur voluptate voluptas voluptatem quod doloribus. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
          </p>
          <div className="glare"></div>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <FaPython className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
          <FaNodeJs className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
