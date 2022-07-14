import React, { useState } from "react"
import "./ToDoApp.css"
import { FaRegEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"

const ToDoApp = () => {

  const [value, setValue] = useState("Hello")
  const arr = []

  function addToDo(event) {
    event.preventDefault()
    let todo = event.target.value
    setValue(todo)
  }

  return <div className="todoapp-container">
    <div className="container">
      <h1>Todo List App</h1>
      <form >
        <h2> {value}</h2>
        <input type="text" value={value} onChange={addToDo} />
        <button>Add</button>
      </form>
      <ul>
        <li> <span>Learn react</span>
          <button><FaRegEdit /></button>
          <button><AiFillDelete /></button>
        </li>
      </ul>
    </div>
  </div >
}

export default ToDoApp