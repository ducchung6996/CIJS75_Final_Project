import React from 'react'
import { useState } from 'react'
import './Hw3.css'

function Hw3() {
  const [className, setClassName] = useState("squ")
  const changeClassName = () => {
    // setTrafficLights(trafficLights === 7 ? 1 : trafficLights + 1)
    setClassName((prev) => {return prev === "squ" ? "cir" : "squ"})
  }
  return (
    <div className='hw3'>
      <button onClick={changeClassName}>Next</button>
      <div>
        <div key={"nah"} className={className}></div>
      </div>
    </div>
  )
}

export default Hw3