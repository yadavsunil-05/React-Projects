import React, { useState } from "react"
import "./ToDoApp.css"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { addToDo, deleteToDO, removeAll } from "../actions/index"


const ToDoApp = () => {

  const [inputVal, setInputVal] = useState("")
  const { todo } = useSelector((state) => state.reducer)
  const dispatch = useDispatch()

  const details = {
    list: inputVal,
    id: new Date().getTime()
  }

  console.log(todo);

  return <React.Fragment>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption>
            Add your list here..
          </figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder='Add todo..' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <i className="fa fa-plus add-btn" onClick={() => dispatch(addToDo(details))}></i>
        </div>
        <div>
          {
            todo.map((txt) => (
              <div style={{ display: "flex" }} key={txt.id}>
                <p style={{ color: "white" }} >{txt.list}</p>
                <button onClick={() => dispatch(deleteToDO(txt.id))}>Delete</button>
              </div>
            ))
          }
          <button>Remove All</button>
        </div>
      </div>
    </div>
  </React.Fragment >
}

export default ToDoApp