import React from 'react'; 
import './App.css';
import projects from './projects.js'; 
import Project from './components/Project.jsx';



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
      <div className='container projects-container'>
        <div className='row'>
          {projects.map(createProjectCard)}
        </div>
      </div>
    </div>
  );
}

export default App;
