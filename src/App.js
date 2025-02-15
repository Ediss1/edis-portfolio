import './App.css';
import React from 'react';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact';
import Technologies from './components/Technologies';


function App() {
  return (
  <div className='container'>
    <Heading  />
    <hr></hr>
    <AboutMe />
    <hr></hr>
    <Technologies />
    <hr></hr>
    <Projects />

    <Contact />
  </div>
  );

}

export default App;
