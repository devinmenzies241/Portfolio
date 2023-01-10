import React from 'react'; 
import './App.css';
import Hero from './components/Hero.jsx'; 
import projects from './projects.js'; 
import Project from './components/Project.jsx';
import OffcanvasNavigation from './components/Navbar.jsx';


const createProjectCard = projects => 
  <Project
    key={projects.id}
    name ={projects.name}
    description={projects.description}
    imgSrc={projects.imgSrc}
    href={projects.href}
  />



function App() {
  return (
    <div className="App">
      <div className='main'>
      <OffcanvasNavigation />
      <Hero />
      <div id='pg-2' className='projects-pg'>
        <h1>projects</h1>
        <div className='container-fluid projects-container'>
          <div className='row'>
            {projects.map(createProjectCard)}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
