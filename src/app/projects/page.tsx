import ProjectCard from '@/components/ProjectCard';
import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
      {/* Projects card, 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
