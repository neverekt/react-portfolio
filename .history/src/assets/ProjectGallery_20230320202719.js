import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './x-ProjectCard';
import projectsData from './projectsData.json';



function ProjectGallery() {
    return (
        <div className="container my-5">
            
            <h2 className="text-center my-5">Projects</h2>
            <div className="row">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectGallery;
