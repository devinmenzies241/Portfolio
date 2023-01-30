import React from 'react'; 
import projects from "../projects";
import Project from "./Project";

const createProjectCard = projects => 
  <Project
    key={projects.id}
    name ={projects.name}
    builtOn = {projects.builtOn}
    description={projects.description}
    imgSrc={projects.imgSrc}
    href={projects.href}
  />


const ProjectsGroup = () => {
  return (
    <div id='projects-pg' className='projects-pg'>
      <h1>Projects</h1>
      <div className='container projects-container'>
        <div className='row justify-content-around'>
          {projects.map(createProjectCard)}
        </div>
      </div>
    </div>
  )
}

export default ProjectsGroup; 