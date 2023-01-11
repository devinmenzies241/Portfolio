import React from 'react'; 

const AboutMe = () => {
  return (
    <div id='aboutMe-pg' className='aboutMe'>
      <h1>About Me</h1>
      <div className='container aboutMe-con'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <p>
                This is some brief filler text for the about me section, I will fill it in later on.
              </p>
            </div>
          <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <h3> Stack:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h3> Goals:</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe; 