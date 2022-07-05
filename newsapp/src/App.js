import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Component/NavBar";
import NewsList from "./Component/NewsList/NewsList";



function App() {
  return (
    <div className="App">
      <NavBar />
      <NewsList />
    </div>
  );
}

export default App;
