import React from 'react';

const Project = (props) => {
  return (
    <>
      
      <div className='col-sm-12 col-md-6 col-lg-4 col-xl-6 project-card'>
        <a href={props.href} target='blank'>
          <h2>{props.name}</h2>  
        </a>
        <div className='photoContainer'>
          <a href={props.href} target='blank'>
            <img src={props.imgSrc} alt='portfolio project thumbnail'></img>
          </a>
        </div> 
        <h4>Built On:</h4>
        <p className='builtOn'>{props.builtOn}</p>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default Project; 