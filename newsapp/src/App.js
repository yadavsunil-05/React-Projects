import NavBar from "./Component/NavBar"
import Shorts from "./Component/Shorts";
import "./App.css"
import { useEffect, useState } from "react";
import Footer from "./Component/Footer";

function App() {
  const [category, setCategory] = useState("science")
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
        const data = await res.json()
        setNews(data.articles)
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }, [category])

  console.log(news);

  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <Shorts news={news} />
      <Footer />
    </div>
  );
}

export default App;
