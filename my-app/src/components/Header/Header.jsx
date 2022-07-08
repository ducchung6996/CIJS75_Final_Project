import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Welcome from '../Welcome/Welcome'
import {RiLoginBoxLine} from 'react-icons/ri'
import {HiOutlinePencil} from 'react-icons/hi'

const Header = () => {
  return (
    <>
    <section id='header'>
        <Link to="/"><img className='logo' src="images/logo.png" alt="Home" /></Link>
        <nav className='header-nav'>
            <Link to='about'>About</Link>
            <Link to='foodtour'>Foodtour</Link>
            <Link to='contacts'>Contacts</Link>
            <button>Login <RiLoginBoxLine/></button>
            <p>Or</p>
            <button>Signup <HiOutlinePencil/></button>
        </nav>
    </section>
    </>
  )
}

export default Header