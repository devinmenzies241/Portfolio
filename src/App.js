import React from 'react'; 
import './App.css';
import Hero from './components/Hero.jsx'; 
import BasicNavbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe';
import ProjectsGroup from './components/ProjectsGroup';
import Contact from './components/Contact';
import Footer from './components/Footer'; 



function App() {
  return (
    <div id='app' className="App" data-spy='scroll' data-target='navbar' data-offset='50'>
      <BasicNavbar />
      <Footer />
      <Hero />
      <AboutMe />
      <ProjectsGroup /> 
      <Contact />
    </div>
  );
}

export default App;
