import React, { useState,useEffect } from 'react'
import './Navbar.css'
import About from '../About/About'


const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  function navigate(){
    window.location.href="#contact";
  }

  
  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when any link is clicked
  };

 
  

  return (
    <>
      <nav className="navbar">

        <div className="items">
        
        <img  className='icon' src="https://tse2.mm.bing.net/th?id=OIP.fxNrC3V2IhHyU1db85icvgHaFL&pid=Api&P=0&h=220" alt="Bubbles fonts"/>
        <div className="right-controls">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <button
    className={`toggle-btn mobile-toggle ${darkMode ? 'dark-btn' : 'light-btn'}`}
    onClick={toggleTheme}
  >
    {darkMode ? '🌞' : '🌙'}
  </button>
  </div>
          <div className='show'>
            <ul className="desktop-only">
                <li><a className='item' href="#home" >Home</a></li>
                <li><a className='item' href="#about" > About</a></li>
                <li><a  className='item'href="#skill" >Skills</a></li>
                <li><a className='item' href="#project" >Projects</a></li>
               <li> <button className='contact' onClick={navigate} >Contact me</button></li>
               

              
              
               
            </ul>
            </div>
           
        </div>
        
      </nav>


       {/* Fullscreen Mobile Menu */}
       {menuOpen && (
        
        <div className={`mobile-menu ${darkMode ? 'mobile-dark' : 'mobile-light'}`}>
          <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>
          <ul className="mobile-only">
            <li><a className="item" href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a className="item" href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a className="item" href="#skill" onClick={handleLinkClick}>Skills</a></li>
            <li><a className="item" href="#project" onClick={handleLinkClick}>Projects</a></li>
            <li><button className="contact" onClick={navigate}>Contact me</button></li>
            
          </ul>
          
          
         
          </div>
        
         
        
        
      )}
      
    </>
  )
}

export default Navbar
