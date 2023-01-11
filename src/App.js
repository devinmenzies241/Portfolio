import React from 'react'; 
import './App.css';
import Hero from './components/Hero.jsx'; 
import OffcanvasNavigation from './components/Navbar.jsx';
import AboutMe from './components/AboutMe';
import ProjectsGroup from './components/ProjectsGroup';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <OffcanvasNavigation />
      <Hero />
      <AboutMe />
      <ProjectsGroup /> 
      <Contact />
    </div>
  );
}

export default App;
