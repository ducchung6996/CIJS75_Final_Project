import React from 'react';
import { useState } from 'react';
import './Hw2.css';
import { v4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hw2() {
  const [todo, setToDo] = useState("");
  const [num, setNum] = useState([]);
  function addToDo(event) {
    event.preventDefault();
    if (!todo) {
      toast.error("Can't empty", {autoClose: 2000})
      return;
    }
    for (let item of num) {
      if (item.name === todo) {
        toast.error("Can't duplicate", {autoClose: 2000})
        return;
      }
    }
    const item = {
      id: v4(),
      name: todo,
      status: false,
    }
    toast.success("Created", {autoClose: 2000})
    setNum([...num, item])
    setToDo("")
  }

  function removeToDo(id) {
    // const arr = []
    // for (let index = 0; index < num.length; index++) {
    //   const element = [...num][index];
    //   if (element.id !== event.target.value) {
    //     arr.push(element)
    //   }
    // }
    // setNum(arr)
    setNum(num.filter(a => a.id !== id))
    toast.warn('Removed', {autoClose: 2000})
  }

  function todoStatus(event) {
    setNum(num.map((item) => item.id === event.target.value ? {...item, status: !item.status} : item))
    if (event.target.checked) {
      toast.success('Finished', {autoClose: 2000})
    } else {
      toast.warn('Unfinished', {autoClose: 2000})
    }
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addToDo} className='hw2'>
        <input type="text" onChange={(e) => setToDo(e.target.value)} value={todo} placeholder='Add todo' />
        <button type='submit'>Add</button>
      </form>
      <div className='list'>
        {
          num.map((item, index) => (
            <div key={item.id} className={`list-items ${item.status && "finish"}`}>
              <div>
                <input type="checkbox" value={item.id} onChange={todoStatus}/>
                <div className="todo">{item.name}</div>
              </div>
              <button onClick={() => removeToDo(item.id)}>Delete</button>
            </div>
          ))}
      </div>
      <ToastContainer theme='dark'/>
    </>
  )
}

export default Hw2