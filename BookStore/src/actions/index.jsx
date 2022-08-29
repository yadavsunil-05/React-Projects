function setBooks(books = null) {
  if (books)
    return {
      type: "SET_BOOKS",
      data: books,
    };
}

function addUserBook(book) {
  return {
    type: "ADD_USER_BOOK",
    data: book,
  };
}

//Redux Thunk
function fetchBooks() {
  return async function (dispatch) {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=IXBbNiIjysJqSzN25AcCsO9udG9W0wze"
    );
    const data = await response.json();
    dispatch(setBooks(data.results.books));
  };
}



//CART ACTION CREATORS
function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    data: product,
  };
}

function removeFromCart(product) {
  return {
    type: "REMOVE_FROM_CART",
    data: product,
  };
}

function incrementQty(product) {
  return {
    type: "INCREMENT_QTY",
    data: product,
  };
}

function decrementQty(product) {
  return {
    type: "DECREMENT_QTY",
    data: product,
  };
}

export {
  setBooks,
  addUserBook,
  fetchBooks,
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
};
