import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <img src='src/assets/logo.jpg' alt='Apni Chhat'></img>

      <ul className='link'>
        <li>
          <Link to="/"> Home </Link>
        </li>

        <li>
          <Link to="/about"> About </Link>
        </li>

        <li>
          <Link to="/property"> Property </Link>
        </li>

        <li>
          <Link to="/calculator"> Mortgage Calculater </Link>
        </li>
      </ul>

      <div className="btn">
        <button className='login'> Login </button>
        <button className='sign'> Signup </button>
      </div>

    </nav>
  )
}

export default Navbar