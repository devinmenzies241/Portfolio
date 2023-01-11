import React from 'react';

const Project = (props) => {
  return (
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 project-card'>
      <a href={props.href} target='blank'>
        <h2>{props.name}</h2>  
      </a> 
      <a href={props.href} target='blank'>
        <img src={props.imgSrc} alt='portfolio project thumbnail'></img>
      </a>
      <p>{props.description}</p>
    </div>
  )
}

export default Project; 