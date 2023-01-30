import React from 'react';
import Avatar from './avatar';
import pfp from '../images/pfp.jpg';

const AboutMe = () => {
  return (
    <div id='aboutMe-pg' className='aboutMe'>
      <h1>About Me</h1>
      <div className='container aboutMe-con'>
        <div className='row gy-4 gx-4'>
          <div className='col-6 justify-content-center align-items-center'>
            <p>
              I am a web developer with  excellent leadership, organizational, interpersonal, 
              problem-solving, and time management skills and the ability to manage multiple projects. 
              Highly motivated self-starter with an exceptional understanding of XXXXXXXXXXXXX. 
              Possesses the ability to easily establish and maintain effective relationships with 
              colleagues, customers and community partners.
            </p>
          </div>
          <div className='col-6 avatar-div'>
            {/* <Avatar img={pfp}/> */}
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