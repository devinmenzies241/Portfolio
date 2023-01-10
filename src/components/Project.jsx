import React from 'react';

const Project = (props) => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
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