import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import "./Coin.css"
import DOMPurify from "dompurify"

function Coin() {

  const param = useParams()
  const [coin, setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${param.coinId}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
    }).catch(err =>
      console.log(err));
  }, [])

  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank #{coin.market_cap_rank}
            </span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {coin.image ? <img src={coin.image.small} /> : null}
              <p>{coin.name} </p> /
              <p>{coin.symbol}</p>
            </div>
            <div className='coin-price'>
              {coin.market_data?.current_price ? <h1> ${coin.market_data.current_price.usd}</h1> : null}
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data_24h?.low_24h ? <p>{coin.market_data.low_24h.usd}</p> : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data_24h?.high_24h ? <p> {coin.market_data.high_24h.usd}</p> : null}
              </div>
            </div>
            <div className='right'>
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>{coin.market_data.market_cap.usd}</p> : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : `Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod modi voluptatibus quo animi blanditiis! Tempora libero rerum, omnis molestiae illum perspiciatis rem consequuntur ? Mollitia praesentium sunt voluptatum eaque ? Eius, voluptate!`)
            }} className="desc"></p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Coin
