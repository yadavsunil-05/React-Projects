import NavBar from "./Component/NavBar"
import Shorts from "./Component/Shorts";
import "./App.css"
import { useEffect, useState } from "react";

function App() {

  const [category, setCategory] = useState("")
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
        const data = await res.json()
        setNews(data.articles)
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }, [])

  console.log(news);

  return (
    <div className="App">
      <NavBar />
      <Shorts news={news} />
    </div>
  );
}

export default App;
