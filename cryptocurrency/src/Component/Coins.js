import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
import Coin from "../Routes/Coin"
import { Link } from "react-router-dom"
import Pagination from "./Pagination"
import { useState } from "react"

function Coins({ coins }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(20)

  let indexOfLastPost = currentPage * postPerPage
  let indexOfFirstPost = indexOfLastPost - postPerPage
  const currentCoins = coins.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

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
          currentCoins.map(sinCoin => {
            return (
              <Link to={`/Coin/${sinCoin.id}`} element={<Coin />} key={sinCoin.id}>
                <CoinItem sinCoin={sinCoin} />
              </Link>
            )
          })
        }
      </div>
      <Pagination postPerPage={postPerPage} totalPost={coins.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Coins