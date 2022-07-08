import React from 'react'
import { useState, useEffect } from 'react'
<<<<<<< Updated upstream
import { GrLinkTop } from 'react-icons/gr'
=======
>>>>>>> Stashed changes
import './Hw.css'

function Hw() {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollBarPosition, setScrollBarPosition] = useState(0)
  useEffect(() => {
    document.addEventListener('scroll', () => setScrollBarPosition(document.documentElement.scrollTop))
    return () => {
      document.removeEventListener('scroll', () => setScrollBarPosition(document.documentElement.scrollTop))
    }
  })
  return (
    <div className='hw'>
      <button  onClick={() => setShowScrollbar(!showScrollbar)}>{showScrollbar ? "Hide scrollbar" : "Show scrollbar"}</button>
      <a style={{opacity: scrollBarPosition > 100 ? 1 : 0}} href="#">▲</a>
      {showScrollbar && <div style={{height: 4000}}></div>}
    </div>
  )
}

export default Hw