import React from 'react';

const Project = (props) => {
  return (
    <div className='col-6'>
      <a href={props.href} target='blank'>
        <h2>{props.name}</h2>  
      </a> 
      <p>{props.description}</p>
      <a href={props.href} target='blank'>
        <img src={props.imgSrc} alt='portfolio project thumbnail'></img>
      </a>
    </div>
  )
}

export default Project; 