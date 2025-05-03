import React, { useState } from 'react'

import './Contact.css'

const Contact = ({darkMode}) => {
  const[values,setValues]=useState({
user_name:'',
user_email:'',
message:'',

  })
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
     }
    
  
     
    
  
 
   

          const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
        
            formData.append("access_key", "c5a392c3-e243-4892-bf6a-3e90dabb5eca");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
              alert("submitted successfully!");
              console.log("Success", res);
            }
            handleReset();
          
          
          };
          function handleReset(){
            setValues({user_name:'',
              user_email:'',
        message:''
            })}
          
      
       
        

           
        
         
      




  return (
    <div  className='con'>
     <h1 className={`header ${darkMode ? 'dark' : 'light'}`}>Let's Connect</h1>
     <form onSubmit={onSubmit}  action="" className="contactForm">
      <input type="text" placeholder='name'  name='user_name' onChange={handleChange}  required value={values.user_name} />
      <input type="email" placeholder='email' name='user_email' onChange={handleChange}  required value={values.user_email} />
      <textarea name="message" id="" rows={5} placeholder='your message' onChange={handleChange}  required value={values.message} ></textarea>



    {/* <input type="text" className='yourName'  placeholder='enter your name' name='user_name' onChange={handleChange}  required value={values.user_name}   />
    <input type="email" className='email' placeholder='enter your email' name='user_email' onChange={handleChange}  required value={values.user_email}  />
    <textarea name="message" className='msg' rows={5} placeholder='Your Message' onChange={handleChange}  required value={values.message} ></textarea>
     */}
    <button  type='submit' value='send' className="submit">Submit</button>



     </form>
     <h2>Connect with me via Social Media:</h2>
     <a href="https://www.linkedin.com/in/shreya-bera-978878307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0&h=220" alt="" /></a>
    <a href="https://x.com/2049esbi"><img src="https://tse2.mm.bing.net/th?id=OIP.8aNlzkh1KyDMb3mOEbs9BgHaHa&pid=Api&P=0&h=220" className='socialIcon' alt="" /></a>
    <a href="https://github.com/Shreya657"><img src="https://tse1.mm.bing.net/th?id=OIP.CFuLkytnVAFEdRjrKlwl_QHaHa&pid=Api&P=0&h=220" className='socialIcon' alt="" /></a>

    </div>
  )
}

export default Contact
