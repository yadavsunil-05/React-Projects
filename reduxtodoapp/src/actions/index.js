function addToDo(data) {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      list: data
    }
  }
}

function deleteToDO(data) {
  return {
    type: "DELETE_TODO",
    data: data
  }
}

function removeAll() {
  return {
    type: "REMOVE_ALLTODO"
  }
}

export { addToDo, deleteToDO, removeAll }