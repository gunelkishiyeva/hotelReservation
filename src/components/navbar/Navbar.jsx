import { useContext } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          
        <p className='logo'><FontAwesomeIcon icon={faMartiniGlassCitrus}></FontAwesomeIcon> stayzilla.com</p>
        </Link>
      
      
  { user ? user.username: (<div className="navItems">
  <button className="navButton">Register</button>
  <button className="navButton">Login</button>
  </div>)}


      </div>
    </div>
  )
}

export default Navbar