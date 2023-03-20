import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './projectsData.json';

function Project() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    
    return (
        <div className="container my-5">
            <h2 className="text-center">{project.title}</h2>
            <div className="row my-5">
                <div className="col-md-8 mx-auto">
                    <a href={project.deployedUrl}><img className="img-fluid mb-4" src={project.image} alt={project.title} /></a>
                    <p>{project.description}</p>
                    <p><a href={project.deployedUrl}>View deployed app</a></p>
                    <p><a href={project.githubUrl}>View code on GitHub</a></p>
                </div>
            </div>
        </div>
        );
}

export default Project;








// import React from 'react';
// // import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// import projectsData from './projectsData.json';

// function Project() {
//     const { id } = useParams('id');
//     const project = projectsData.find(p => p.id === id);
    
//     return (
//         <div className="container my-5">
//             <h2 className="text-center">{project.title}</h2>
//             <div className="row my-5">
//                 <div className="col-md-8 mx-auto">
//                     <a href={project.deployedUrl}><img className="img-fluid mb-4" src={project.image} alt={project.title} /></a>
//                     <p>{project.description}</p>
//                     <p><a href={project.deployedUrl}>View deployed app</a></p>
//                     <p><a href={project.githubUrl}>View code on GitHub</a></p>
//                 </div>
//             </div>
//         </div>
//         );
// }

// export default Project;
    
    
    
    
    
    

// function Project({ match }) {
//     const project = projectsData.find(p => p.id === match.params.id);
//     return (
//     <div className="container my-5">
//         <h2 className="text-center">{project.title}</h2>
//         <div className="row my-5">
//             <div className="col-md-8 mx-auto">
//                 <a href={project.deployedUrl}><img className="img-fluid mb-4" src={project.image} alt={project.title} /></a>
//                 <p>{project.description}</p>
//                 <p><a href={project.deployedUrl}>View deployed app</a></p>
//                 <p><a href={project.githubUrl}>View code on GitHub</a></p>
//                 <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Project;
