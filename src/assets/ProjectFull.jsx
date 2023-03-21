import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import projectsData from './projectsData.json';

const MarkdownRenderer = ({ githubUrl }) => {
  const [readme, setReadme] = useState('');
  // Extract repo owner and repo name from the provided githubUrl
  const [, , , , owner, repoName] = new URL(githubUrl).pathname.split('/');
  // Construct the URL for the raw README.md file on GitHub
  const readmeUrl = `https://raw.githubusercontent.com/${owner}/${repoName}/main/README.md`;

  useEffect(() => {
    // Fetch and set the content of the README.md file
    axios
      .get(readmeUrl)
      .then(response => {
        setReadme(response.data);
      })
      .catch(error => {
        console.error('Error fetching the README.md:', error);
      });
  }, [readmeUrl]);

  return (
    <div className="col-md-8 mx-auto">
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  );
};

export default function ProjectFull() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  return (
    <div className="container my-5">
      <h2 className="text-center">{project.title}</h2>
      <div className="row my-5">
        <div className="col-md-8 mx-auto">
          <a href={project.deployedUrl}>
            <img className="img-fluid mb-4" src={project.image} alt={project.title} />
          </a>
          <p>{project.description}</p>
          <p>
            <a href={project.deployedUrl}>View deployed app</a>
          </p>
          <p>
            <a href={project.githubUrl}>View code on GitHub</a>
          </p>
        </div>
        <MarkdownRenderer githubUrl={project.githubUrl} />
      </div>
    </div>
  );
}
