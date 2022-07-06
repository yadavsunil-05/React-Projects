import React from 'react'
import "./Coins.css"

function CoinItem({ sinCoin }) {
  return (
    <div className='coin-row'>
      <p>{sinCoin.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={sinCoin.image} alt="crypto" />
        <p>{sinCoin.symbol}</p>
      </div>
      <p>{sinCoin.current_price}</p>
      <p>{sinCoin.price_change_24h}</p>
      <p className='hide-mobile'>{sinCoin.total_volume}</p>
      <p className='hide-mobile'>{sinCoin.market_cap}</p>
    </div>
  )
}

export default CoinItem