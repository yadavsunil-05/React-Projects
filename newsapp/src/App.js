import NavBar from "./Component/NavBar"
import Shorts from "./Component/Shorts";
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("general")
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
    </div>
  );
}

export default App;
