import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const More = () => {
  return (
    <>
        <div>More</div>
        <Link to='/more/1'>More1</Link>
        <Link to='/more/2'>More2</Link>
        <Outlet/>
    </>
  )
}

export default More