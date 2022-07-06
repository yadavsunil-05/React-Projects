import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"

function Coins({ coins }) {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>
        {
          coins.map(sinCoin => {
            return (<CoinItem sinCoin={sinCoin} key={sinCoin.id} />)
          })
        }
      </div>
    </div>
  )
}

export default Coins