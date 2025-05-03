import React, { useState,useEffect } from 'react'
import './Navbar.css'
import About from '../About/About'


const Navbar = ({ darkMode, setDarkMode }) => {

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  function navigate(){
    window.location.href="#contact";
  }
  return (
    <>
      <nav className="navbar">

        <div className="items">
        
        <img  className='icon' src="https://tse2.mm.bing.net/th?id=OIP.fxNrC3V2IhHyU1db85icvgHaFL&pid=Api&P=0&h=220" alt="Bubbles fonts"/>
        
        

            <ul>
                <li><a className='item' href="#home">Home</a></li>
                <li><a className='item' href="#about"> About</a></li>
                <li><a  className='item'href="#skill">Skills</a></li>
                <li><a className='item' href="#project">Projects</a></li>
                <button className='contact' onClick={navigate} >Contact me</button>
                <button className={`toggle-btn ${darkMode ? 'dark-btn' : 'light-btn'}`} onClick={toggleTheme}>
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
              
              
               
            </ul>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar
