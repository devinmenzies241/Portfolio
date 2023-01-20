import React from 'react'; 

const AboutMe = () => {
  return (
    <div id='aboutMe-pg' className='aboutMe'>
      <h1>About Me</h1>
      <div className='container aboutMe-con'>
        <div className='row gy-4 gx-4'>
          <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <p>
                I am Denver based web developer specializing in front-end technologies. I am currently looking
                for a junior level position that would provide guidance and profesional experience.
                <br/>
                <br/>
                In my free time I like to write music, ride my bike, play video games, and design costumes. 
              </p>
            </div>
          <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <h3> Stack:</h3>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>React</li>
                    </ul>
                  </div>
                  <div className='col'>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Bootstrap</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h3>Goals:</h3>
            <ul>
              <li>Grow my skills as a developer</li>
              <li>Learn more about web security</li>
              <li>Volunteer my time to non-profits that benefit my local communities</li>
              <li>Continue to learn audio for game development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe; 