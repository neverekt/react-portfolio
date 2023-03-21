import { CodeBracketIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'

function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="relative isolate bg-gray-900">
        <li className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow overflow-hidden">
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 rounded-full object-cover" src={project.image} alt={project.title} />
            <h3 className="mt-6 text-lg font-medium text-gray-900">{project.name}</h3>
            <p className="mt-2 text-gray-500 text-sm">{project.title}</p>
            <div className="mt-4 flex-1">
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3">
            <div className="flex items-center justify-between">
              <a
                href={project.githubUrl}
                className="flex items-center text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>View Code</span>
              </a>
              <a
                href={project.deployedUrl}
                className="flex items-center text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <PaperAirplaneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>View Deployment</span>
              </a>
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
