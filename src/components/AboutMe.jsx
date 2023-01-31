import React from 'react';
import Avatar from './avatar';
import pfp from '../images/pfp.jpg';

const AboutMe = () => {
  return (
    <div id='aboutMe-pg' className='container aboutMe'>
      <h1>About Me</h1>
      <div className='row gy-4 gx-4 align-items-center justify-content-center aboutMe-row'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center'>
          <p>
            I am a junior web developer seeking opportunities for entry level work. I am primarily focused on 
            front end technologies, however I am interested in growing into a full stack developer as I continue
            to take on new projects, work, and professional experience. Check out my websites below to see what I 
            have been creating. Learn more about my professional history by viewing my 
            <a 
              class='resume-link'
              href='https://docs.google.com/document/d/e/2PACX-1vQpYfn9y0OXR81iPTQllsZqNtI6qqIZobnlNpB5bhYGw0DhHaCbAvK38HgW7OcsU8O4brJNo-NgF__k/pub' 
              target='_blank'> resume
            </a>.    
          </p>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center avatar-div'>
          <Avatar img={pfp}/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe; 