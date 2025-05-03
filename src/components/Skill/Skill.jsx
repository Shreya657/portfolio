import React from 'react'
import './Skill.css'

const Skill = ({darkMode}) => {
 

  return (
      <div className="skill-contains">
        <div className="info">
       <div className={`title ${darkMode? 'dark' : 'light'}`}>
        <h1> Technical Skills</h1>

        
        </div>
        <div className="logo">
          
        <div className="logos">
        <div>
        <img className='sIcon' src="https://tse2.mm.bing.net/th?id=OIP.744mxzC5wmuJwSAv6Ej3XwHaHa&pid=Api&P=0&h=220" alt=""  />
        <img className='sIcon' src="https://tse1.mm.bing.net/th?id=OIP.GQNP3q3y11NkTM9zXDrkJwHaKY&pid=Api&P=0&h=220" alt="" />
        <img className='sIcon' src="https://tse1.mm.bing.net/th?id=OIP.YPYdVAg5ieRspLI6HIpmDQHaIB&pid=Api&P=0&h=220" alt=""  />
        <img className='sIcon' src="https://tse3.mm.bing.net/th?id=OIP.boBVlxoxhHiuFvn7MipwIQHaHW&pid=Api&P=0&h=220" alt="" />
        </div>
        <div>
        <img className='sIcon' src="https://tse3.mm.bing.net/th?id=OIP.bkbn2-K7c9rMBV5dvYXDrQHaIh&pid=Api&P=0&h=220"  />
        <img className='sIcon' src="https://tse3.mm.bing.net/th?id=OIP.hED79iPpQEcVg4R7BJs3SAHaDt&pid=Api&P=0&h=220"  />
        <img className='sIcon' src="https://tse3.mm.bing.net/th?id=OIP.gtfHQt5ixgnP-xzJHMesRAHaHa&pid=Api&P=0&h=220"  />
        <img src="https://tse4.mm.bing.net/th?id=OIP.lqKY2Ft1FXTXTivr9vSCAAHaDj&pid=Api&P=0&h=220" alt="" />
        </div>
        </div>
        
      </div> 
      </div>
    </div>
    
  )
}

export default Skill
