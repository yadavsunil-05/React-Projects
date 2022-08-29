const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, { ...action.data }]
      }
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(book => book.id !== action.data.id)
      }
    case "INCREMENT_QTY":
      return {
        cart: state.cart.map(book => {
          if (book.id === action.data.id)
            book.qty = book.qty + 1
          return book
        })
      }
    case "DECREMENT_QTY":
      return {
        cart: state.cart.map(book => {
          if (book.id === action.data.id && book.qty > 1)
            book.qty = book.qty - 1;
          return book
        })
      }
    default:
      return state
  }
}

export default cartReducer