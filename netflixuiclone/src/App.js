import "./App.css";
import requests from "./Request";
import React, { Suspense, lazy } from "react"
import Footer from "./Footer";
import Accordian from "./Accordian";

const Nav = lazy(() => import("./Nav"))
const Banner = lazy(() => import("./Banner"))
const Row = lazy(() => import("./Row"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div>Page Loading...</div>
      }>
        <Nav />
        <div className="App-header">
          <Banner />
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Accordian />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;