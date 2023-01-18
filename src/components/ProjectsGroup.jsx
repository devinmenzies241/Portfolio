import React from 'react'; 
import projects from "../projects";
import Project from "./Project";

const createProjectCard = projects => 
  <Project
    key={projects.id}
    name ={projects.name}
    description={projects.description}
    imgSrc={projects.imgSrc}
    href={projects.href}
  />


const ProjectsGroup = () => {
  return (
    <div id='projects-pg' className='projects-pg'>
      <h1>projects</h1>
      <div className='container projects-container'>
        <div className='row gy-4'>
          {projects.map(createProjectCard)}
        </div>
      </div>
    </div>
  )
}

export default ProjectsGroup; 