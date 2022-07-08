import React from 'react'
import { useState } from 'react'
import './Hw1.css'

function Hw1() {
  const [arr, setArr] = useState("");
  const [text, setText] = useState("");
  function changeArr(event) {
    setArr(event.target.value);
  }
  function changeText(event) {
    event.preventDefault();
    setText(arr);
    setArr("");
  }
  return (
    <>
      <h1>HW1</h1>
      <form onSubmit={changeText} className='hw1'>
        <input onChange={changeArr} value={arr} type="text" placeholder='Input...'/>
        <button type='submit'>OK</button>
      </form>
      <div className='screen'>{text}</div>
    </>
  )
}

export default Hw1