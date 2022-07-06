/*
state =  {
    items: items,
    cart: [],
  }
*/
function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, cart: [...state.cart, { ...action.payload, qty: 1 }]
        // adding new object product with key as quantity also
        //{id,title,image,price,qty}
      }
    case "REMOVE_FROM_CART":
      return {
        ...state, cart: state.cart.filter(c => c.id !== action.payload.id)
      }
    case "CHANGE_CART_QTY":
      return {
        ...state, cart: state.cart.filter(c => {
          if (c.id === action.payload.id)
            c.qty = action.payload.qty
          return c
        })
      }
    default:
      return state
  }
}

/*
  State = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: ""
}
*/

function filterReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload }
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock }
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload }
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload }
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
      }
    default:
      return state
  }
}


export default Reducer
export { filterReducer }