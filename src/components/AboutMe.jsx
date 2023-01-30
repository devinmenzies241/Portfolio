import React from 'react';
import Avatar from './avatar';
import pfp from '../images/pfp.jpg';

const AboutMe = () => {
  return (
    <div id='aboutMe-pg' className='aboutMe'>
      <h1>About Me</h1>
      <div className='container aboutMe-con'>
        <div className='row gy-4 gx-4'>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 avatar-div'>
            <Avatar img={pfp}/>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 justify-content-center align-items-center'>
            <p>
              I am a junior web developer seeking opportunities for entry level work. I am primarily focused on 
              front end technologies, however I am interested in growing into a full stack developer as I continue
              to take on new projects, work, and professional experience. Check out my websites below to see what I 
              have been creating.   
            </p>
          </div>

          {/* <div className='col-6'>
            <h3> Stack</h3>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-6 gx-0 stack-list'>
                    <ul>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>Javascript</p>
                      <p>React</p>
                    </ul>
                  </div>
                  <div className='col-6 gx-0 stack-list'>
                    <ul>
                      <p>Node.js</p>
                      <p>Express.js</p>
                      <p>Bootstrap</p>
                      <p>MongoDB</p>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-6'>
            <h3>Goals</h3>
            <ul>
              <p>Grow my skills as a developer</p>
              <p>Learn more about web security</p>
              <p>Volunteer my time to non-profits that benefit my local community</p>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe; 