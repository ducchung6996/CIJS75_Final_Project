import React from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'

const More1 = () => {
    const {moreID} = useParams()
    console.log(moreID);
  return (
    <>
        <div>More1</div>
        <Link to='test'>Test</Link>
        <Outlet/>
    </>
  )
}

export default More1