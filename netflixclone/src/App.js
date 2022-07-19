import "./App.css"
import Row from "./Row";
import requests from "./Request"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Netflix Clone</h1>
        <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Popular on Netflix" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Hereos" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Hungama" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Stories" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
