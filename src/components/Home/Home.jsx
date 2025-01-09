import React from 'react'
import './Home.css'
import Men from './th-removebg-preview.png'
import About from '../About/About'
const Home = () => {
  // function scroll(){
  //   const aboutSection=document.getElementById('about');
  //   aboutSection.scrollIntoView({behavior:'smooth'});
  // }
  function navigate(){
    window.location.href="#about";
  }
  return (
    <section id='intro'>


        <div className="introduction">
            <span className='hello'>hello,</span>
            <span className='im'>I'm <span className='name'> 
            Shreya Bera</span> <br />Frontend Developer</span>
  
            <p className='para'>I am a passionate web dev and problem solver.Currently fresher in BTech CSE. <br /> I love to build interactive,creative and user-friendly websites.</p>
            <button className='btn' onClick={navigate} >more about me</button>
            <div className="cls"><a href="https://www.linkedin.com/in/shreya-bera-978878307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0&h=220" alt="" /></a>
    <a href="https://x.com/Shreyaaa2049?t=TQmhmjWRqxToZlgn5oIRzw&s=08"><img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.8aNlzkh1KyDMb3mOEbs9BgHaHa&pid=Api&P=0&h=220"  alt="" /></a>
    <a href="https://github.com/Shreya657"><img src="https://tse1.mm.bing.net/th?id=OIP.CFuLkytnVAFEdRjrKlwl_QHaHa&pid=Api&P=0&h=220" className='socialIcon' alt="" /></a>
    
    </div>   
        </div>
        <div className='dp'>
             <img  className='picture'src={Men} alt=""  /> </div>
             

    </section>
    

  )
}

export default Home
