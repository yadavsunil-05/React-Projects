import "./App.css"
import Row from "./Row";
import requests from "./Request"
import Footer from "./Footer";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Popular on Netflix" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Hereos" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Hungama" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Stories" fetchUrl={requests.fetchHorrorMovies} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
