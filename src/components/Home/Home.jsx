import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>Home</div>
        <Link to='/about'>About</Link>
        <Link to='/more'>More</Link>
        <Outlet/>
    </>
  )
}

export default Home