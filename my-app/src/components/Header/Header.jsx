import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Welcome from '../Welcome/Welcome'

const Header = () => {
  return (
    <>
    <section id='header'>
        <Link to="/"><img className='logo' src="images/logo.png" alt="Home" /></Link>
        <nav className='header-nav'>
            <Link to='about'>About</Link>
            <Link to='foodtour'>Foodtour</Link>
            <Link to='contacts'>Contacts</Link>
            <button>Login</button>
            <p>Or</p>
            <button>Signup</button>
        </nav>
    </section>
    <Welcome/>
    </>
  )
}

export default Header