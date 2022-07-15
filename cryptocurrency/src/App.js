import { useState, useEffect } from "react"
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import Coins from "./Component/Coins"
import Navbar from "./Component/Navbar"
import Coin from "./Routes/Coin"

function App() {
  const [coins, setCoins] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCoins(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(coins)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
