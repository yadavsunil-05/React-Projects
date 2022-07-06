import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header"
import Home from "./Component/Home";
import Cart from "./Component/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
