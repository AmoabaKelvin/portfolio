'use client';
import ProjectCard from '@/components/ProjectCard';
import { portolioProjects } from '@/data';

const ProjectsPage = () => {
  return (
    <div className="px-4 mx-auto mt-8 mb-14 max-w-7xl sm:px-6 lg:px-8">
      {/* Projects card, 3 cards per row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portolioProjects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
