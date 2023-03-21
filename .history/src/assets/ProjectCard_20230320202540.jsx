import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './projectsData.json';
import { CodeBracketIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'

function ProjectCard({ project }) {


  return (
    <div className="col-md-4 mb-4">
    <div className="card h-100">
        <li
          key={project.id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={project.image} alt={project.title} />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{project.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{project.title}</dd>
              <dt className="sr-only">Description</dt>
              <dd className="mt-3">
                <span className="rounded-full px-2 py-1 text-xs font-medium">
                  {project.description}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={project.githubUrl}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CodeBracketIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Code
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={project.deployedUrl}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PaperAirplaneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Deployment
                </a>
              </div>
            </div>
          </div>
        </li>
        </div>
    </div>
    );
}
export default ProjectCard;

// const { id } = useParams();
// const project = projectsData.find(p => p.id === id);
