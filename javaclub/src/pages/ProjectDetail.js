import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css'


const projectDetails = {
  '1': {
    id: '1',
    title: 'Flappy Bird Game',
    description: 'Detailed information about Project One. This project was created to solve X problem and had Y impact.',
  },
  '2': {
    id: '2',
    title: 'Project Two',
    description: 'Detailed information about Project Two. It incorporates innovative solutions for Z challenges.',
  },
  '3': {
    id: '3',
    title: 'Project Three',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '4': {
    id: '4',
    title: 'Project Four',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '5': {
    id: '5',
    title: 'Project Five',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '6': {
    id: '6',
    title: 'Project Six',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '7': {
    id: '7',
    title: 'Project Seven',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '8': {
    id: '8',
    title: 'Project Eight',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '9': {
    id: '9',
    title: 'Project Nine',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
  '10': {
    id: '10',
    title: 'Project Ten',
    description: 'Detailed information about Project Three. This project illustrates the process of turning ideas into reality.',
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="container">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate(-1)} className="btn">Back</button>
      </div>
    );
  }

  return (
    <div className='project-details'>
    <div className="project-detail container">
      <button onClick={() => navigate(-1)} className="btn back-btn">Back</button>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
    </div>
  );
};

export default ProjectDetail;
