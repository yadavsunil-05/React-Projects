import React, { useState } from "react"
import "./ToDoApp.css"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { addToDo, deleteToDO, removeAll } from "../actions/index"


const ToDoApp = () => {

  const [inputVal, setInputVal] = useState("")
  const { todo } = useSelector((state) => state.reducer)
  const dispatch = useDispatch()


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
          <i className="fa fa-plus add-btn" onClick={() => dispatch(addToDo(inputVal), setInputVal(""))}></i>
        </div>
        <div className="showItems">
          {
            todo.map(item => (
              <div className="eachItem" key={item.id}>
                <h3>{item.list}</h3>
                <i className="far fa-trash-alt add-btn" title="Delete Item"
                  onClick={() => dispatch(deleteToDO(item.id))}
                ></i>
              </div>
            ))
          }
        </div>
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeAll())}><span> CHECK LIST </span> </button>
        </div>
      </div>
    </div>
  </React.Fragment >
}

export default ToDoApp