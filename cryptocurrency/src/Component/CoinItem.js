import React from 'react'
import "./Coins.css"

function CoinItem({ sinCoin }) {
  return (
    <div className='coin-row'>
      <p>{sinCoin.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={sinCoin.image} alt="crypto" />
        <p>{sinCoin.symbol.toUpperCase()}</p>
      </div>
      <p>${sinCoin.current_price.toLocaleString()}</p>
      <p>{sinCoin.market_cap_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${sinCoin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${sinCoin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem