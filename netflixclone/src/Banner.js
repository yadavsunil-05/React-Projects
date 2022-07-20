import axios from './axios'
import React, { useEffect, useState } from 'react'
import requests from './Request'
import { FaPlay } from "react-icons/fa"

function Banner() {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(requests.fetchActionMovies)
        setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
      }
      catch (err) {
        console.log(err);
      }
    }
    getData()
  }, [])

  console.log("Banner", movie);

  return (
    <header className='banner'
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.7)
        ),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className='banner-title'>
        <h5>{movie?.name || movie?.title || movie?.original_name}</h5>
      </div>
      <div className="banner-desc">
        {`${movie?.overview ? movie.overview.slice(0, 150) : ""}..`}
      </div>
      <div className='btn-container'>
        <button className='btn-1'><FaPlay className='play' />Play Now</button>
        <button className='btn-2'>More Info</button>
      </div>
    </header >
  )
}

export default Banner