import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import PrivateComponent from "./Components/PrivateComponent";
import cartReducer from "./reducer/cartReducer";
import "./App.css";
import Cart from "./Components/Cart";
import { createContext } from "react";

const Store = createContext()

function App() {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [defbook, setdefbook] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=IXBbNiIjysJqSzN25AcCsO9udG9W0wze"
      );
      const data = await response.json();
      setdefbook(data.results.books);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Store.Provider value={{ state, dispatch, defbook }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route
                path="/"
                element={
                  <Banner />
                }
              />
              <Route
                path="/add"
                element={<AddProduct setdefbook={setdefbook} />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/signup" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Store.Provider>
    </div>
  );
}

export default App;
export { Store }
