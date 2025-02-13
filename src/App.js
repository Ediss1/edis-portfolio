import './App.css';
import React from 'react';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
  <div className='container'>
    <Heading  />
    <hr></hr>
    <AboutMe />
    <Projects />
    <Contact />
  </div>
  );

}

export default App;
