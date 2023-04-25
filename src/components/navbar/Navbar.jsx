import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
      <p className='logo'>StayZilla</p>
      
     <div className="navItems">
      <button className="navButton">Register</button>
      <button className="navButton">Login</button>
     </div>


      </div>
    </div>
  )
}

export default Navbar