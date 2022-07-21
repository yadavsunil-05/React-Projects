import "./App.css"
import Row from "./Row";
import requests from "./Request"
import Footer from "./Footer";
import Nav from "./Nav";
import Banner from "./Banner";
import Accordian from "./Accordian";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Accordian />
        <Footer />
      </div>
    </div>
  );
}

export default App;
