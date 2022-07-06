import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./Component/Coins"
import Navbar from "./Component/Navbar"

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
      <Coins coins={coins} />
    </>
  );
}

export default App;
