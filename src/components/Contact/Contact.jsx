import React, { useRef } from 'react'
import { useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
      const form=useRef();
      const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_zzce00u','template_deowjac',form.current,{
          publicKey:'WFcvSGR05VftbK3wy',
        })
        .then(
          (result)=>{
            console.log(result.text);
            e.target.reset();
            alert('Your Response is send successfully');
          },
          (error)=>{
            console.log(error.text);
          },
        );
      };

      const[values,setValues]=useState({
        
        your_name:'',
        your_email:'',
        message:''
        
          })
           
          const handleChange=(e)=>{
         setValues({...values,[e.target.name]:[e.target.value]})
          }
         
      




  return (
    <div  className='con'>
     <h1 className="header">Let's Connect</h1>
     <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
    <input type="text " className='yourName'  placeholder='enter your name' name='your_name'   onChange={(e)=>handleChange(e)} required value={values.your_name}/>
    <input type="email" className='email' placeholder='enter your email' name='your_email' onChange={(e)=>handleChange(e)} required value={values.gender} />
    <textarea name="message" className='msg' rows={5} placeholder='Your Message' onChange={(e)=>handleChange(e)} required value={values.gender} ></textarea>
    <button type='submit' value='send' className="submit">Submit</button>



     </form>
     <h2>Connect with me via Social Media:</h2>
     <a href="https://www.linkedin.com/in/shreya-bera-978878307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0&h=220" alt="" /></a>
    <a href="https://x.com/Shreyaaa2049?t=TQmhmjWRqxToZlgn5oIRzw&s=08"><img src="https://tse2.mm.bing.net/th?id=OIP.8aNlzkh1KyDMb3mOEbs9BgHaHa&pid=Api&P=0&h=220" className='socialIcon' alt="" /></a>
    <a href="https://github.com/Shreya657"><img src="https://tse1.mm.bing.net/th?id=OIP.CFuLkytnVAFEdRjrKlwl_QHaHa&pid=Api&P=0&h=220" className='socialIcon' alt="" /></a>
    </div>
  )
}

export default Contact
