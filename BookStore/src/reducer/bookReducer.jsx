const initialState = {
  books: [],
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.data,
      };
    case "ADD_USER_BOOK":
      return {
        books: [...state.books, action.data],
      };
    default:
      return state;
  }
}

export default bookReducer;
