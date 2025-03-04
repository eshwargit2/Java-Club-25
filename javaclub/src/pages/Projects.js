import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: '1', title: 'Flappy Bird Game', description: 'A brief description about project one.' },
  { id: '2', title: 'Hotel Management', description: 'A brief description about project two.' },
  { id: '3', title: 'Project Three', description: 'A brief description about project three.' },
  { id: '4', title: 'Project Four', description: 'A brief description about project three.' },
  { id: '5', title: 'Project Five', description: 'A brief description about project three.' },
  { id: '6', title: 'Project Six', description: 'A brief description about project three.' },
  { id: '7', title: 'Project Seven', description: 'A brief description about project three.' },
  { id: '8', title: 'Project Eight', description: 'A brief description about project three.' },
  { id: '9', title: 'Project Nine', description: 'A brief description about project three.' },
  { id: '10', title: 'Project Ten', description: 'A brief description about project three.' },
];

const Projects = () => {
  return (
    <div className="projects-page ">
      <h1 className='ms-2'>All Projects</h1>
      <div className="projects-container container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
