import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner";
import Footer from "./Components/Footer"
import AddProduct from "./Components/AddProduct";
import SignUp from "./Components/SignUp"
import Login from "./Components/Login"
import PrivateComponent from "./Components/PrivateComponent"
import "./App.css"

function App() {
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Banner defbook={defbook} />} />
            <Route path="/add" element={<AddProduct defbook={defbook} setdefbook={setdefbook} />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
