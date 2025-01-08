import React from 'react'
import './Navbar.css'
import About from '../About/About'


const Navbar = () => {
  function navigate(){
    window.location.href="#contact";
  }
  return (
    <>
      <nav className="navbar">

        <div className="items">
        
        <img  className='icon' src="https://see.fontimg.com/api/rf5/2v7Oe/OWQxMTAzZTlmMjgwNGI0NTg3Mzg4ZGY4ZDBhZWMxNTkudHRm/UG9ydGZvbGlv/love-days.png?r=fs&h=98&w=1500&fg=000000&bg=E7ED20&tb=1&s=65" alt="Bubbles fonts"/>
        
        

            <ul>
                <li><a className='item' href="#home">Home</a></li>
                <li><a className='item' href="#about"> About</a></li>
                <li><a  className='item'href="#skill">Skills</a></li>
                <button className='contact' onClick={navigate} >Contact me</button>
               
            </ul>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar
