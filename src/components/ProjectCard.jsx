import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='card project-card'>
      <a href={props.href} target='blank'>
        <img src={props.imgSrc} className='car-img-top' alt='portfolio project thumbnail'></img>
      </a>
      <div className='card-body'>
        <a href={props.href} target='blank'>
          <h2>{props.name}</h2>  
        </a> 
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard; 