import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import PrivateComponent from "./Components/PrivateComponent";
import "./App.css";
import Cart from "./Components/Cart";
import { useDispatch } from "react-redux/es/exports";
import { fetchBooks } from "./actions/index"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="App">
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
              element={<AddProduct />}
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
    </div>
  );
}

export default App;
