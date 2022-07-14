import NavBar from "./Component/NavBar";
import Photo from "./Component/Photos/PhotoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnlargePhoto from "./Component/Photos/EnlargedPhoto";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/photos/:id" element={<EnlargePhoto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
