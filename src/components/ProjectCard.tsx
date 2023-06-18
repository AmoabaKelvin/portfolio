import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

interface portfolioProjectType {
  id: number;
  image?: string;
  title: string;
  description: string;
  link?: string;
  github: string;
  stack: any[];
}

const ProjectCard = (props: portfolioProjectType) => {
  return (
    <div className="flex flex-col border rounded glare glow">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span>{props.title}</span>
          <div className="flex space-x-2">
            {/* Use an anchor tag and place the icon in them, because they will lead somewhere */}
            <a href={props.github} target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
            </a>
            {props.link && (
              <a href={props.link} target="_blank" rel="noreferrer">
                <TbWorldWww className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
              </a>
            )}
          </div>
        </div>
        <div className="p-4 mt-2 bg-gray-800 rounded glare">
          <p className="text-white">
            <p className="mb-1 text-sm text-slate-400">$ description.sh</p>
            {props.description}
          </p>
          <div className="glare"></div>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          {props.stack.map((Item, index) => (
            // <FaPython className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
            // <FaNodeJs className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600" />
            <Item
              className="text-2xl text-gray-500 cursor-pointer hover:text-gray-600"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
