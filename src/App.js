import React from 'react'; 
import './App.css';
import Hero from './components/Hero.jsx'; 
import Navbar2 from './components/Navbar2';
import AboutMe from './components/AboutMe';
import ProjectsGroup from './components/ProjectsGroup';
import Contact from './components/Contact';
import Footer from './components/Footer'; 



function App() {
  return (
    <div id='app' className="App">
      <Navbar2 />
      <Footer />
      <Hero />
      <AboutMe />
      <ProjectsGroup /> 
      <Contact />
    </div>
  );
}

export default App;
