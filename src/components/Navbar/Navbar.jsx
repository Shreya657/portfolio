import React, { useState,useEffect } from 'react'
import './Navbar.css'
import About from '../About/About'


const Navbar = ({ darkMode, setDarkMode }) => {
  const [menu,setMenu]=useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  function navigate(){
    window.location.href="#contact";
  }
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menu]);
  

  return (
    <>
      <nav className="navbar">

        <div className="items">
        
        <img  className='icon' src="https://tse2.mm.bing.net/th?id=OIP.fxNrC3V2IhHyU1db85icvgHaFL&pid=Api&P=0&h=220" alt="Bubbles fonts"/>
        
        
        <div className={`nav-links ${menu ? 'active' : ''}`}>

            <ul>
                <li><a className='item' href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a className='item' href="#about" onClick={handleLinkClick}> About</a></li>
                <li><a  className='item'href="#skill" onClick={handleLinkClick}>Skills</a></li>
                <li><a className='item' href="#project" onClick={handleLinkClick}>Projects</a></li>
                <button className='contact' onClick={()=>{navigate();setMenu(false);}} >Contact me</button>
                <button className={`toggle-btn ${darkMode ? 'dark-btn' : 'light-btn'}`} onClick={()=>{toggleTheme();setMenu(false);}}>
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>

            <div className="close-icon" onClick={handleMenuClick}>✖</div>
              
              
               
            </ul>
           
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>☰</div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
