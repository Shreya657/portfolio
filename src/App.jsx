import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Connect from './components/Connect/Connect';

import './App.css';
import Project from './components/Project/Project';


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply theme class to the body element
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
  return (
    < div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="home">
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="about">
        <About  darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <div id="skill">
        <Skills darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id="project">
       <Project darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <div id="contact" >
        <Contact  darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <Connect />
      
    </div>
  );
};

export default App;
