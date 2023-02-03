import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='card project-card'>
      <a href={props.href} target='_blank'>
        <div>
          <img src={props.imgSrc} className='car-img-top' alt='portfolio project thumbnail'></img>
          <div className='card-body'>
            <a href={props.href} target='_blank'>
              <h2>{props.name}</h2>  
            </a> 
            <p>{props.description}</p>
          </div>
        </div>
      </a>  
    </div>
  )
}

export default ProjectCard; 