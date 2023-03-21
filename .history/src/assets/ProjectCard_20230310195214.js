import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Link to={`/projects/${project.id}`}>
          <img className="card-img-top" src={project.image} alt={project.title} />
        </Link>
        <div className="card-body">
          <h4 className="card-title">{project.title}</h4>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer">
          <a href={project.deployedUrl} className="btn btn-primary mr-3">View Deployed App</a>
          <a href={project.githubUrl} className="btn btn-secondary">View Code on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

