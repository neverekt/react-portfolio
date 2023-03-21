import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData.json';



function ProjectGallery() {
    return (
        <div className="relative isolate bg-gray-900">
            <div className="mx-auto grid max-w-7xl">
            <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Project Gallery</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
export default ProjectGallery;
