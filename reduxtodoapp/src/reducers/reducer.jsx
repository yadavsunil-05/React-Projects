const initialState = {
  todo: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.payload]
      }
    case "DELETE_TODO":
      return {
        todo: state.todo.filter(ele => ele.id != action.data)
      }
    case "REMOVE_ALLTODO":
      return {
        todo: []
      }
    default:
      return state;
  }
}

export default reducer