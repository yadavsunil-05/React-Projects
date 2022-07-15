import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
import Coin from "../Routes/Coin"
import { Link } from "react-router-dom"

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
            return (
              <Link to={`/Coin/${sinCoin.id}`} element={<Coin />} key={sinCoin.id}>
                <CoinItem sinCoin={sinCoin} />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Coins