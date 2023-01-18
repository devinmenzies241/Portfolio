import React from 'react'; 
import Avatar from './avatar';
import pfp from '../images/pfp.jpg';


const Hero = () => {
  return (
    <div id='hero' className='container-fluid hero'>
      <h2>Hi! I'm</h2>
      <h1>Devin Menzies</h1>
      <Avatar img={pfp}/> 
      <h2>I'm a web developer seeking opportunities for growth.</h2>
    </div>
  )
}

export default Hero; 